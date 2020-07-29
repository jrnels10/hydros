import React, { Component, createRef } from 'react';
import { zoomTo, zoomToBookmark, CreateBookMark } from './ESRITools';
import { BookmarkSVG, BookmarkSVGAdd, BookmarkSVGDelete } from '../../Images/IconSvg';
import TextInputs from '../Inputs/Inputs';

export default class Bookmarks extends Component {
    state = {
        bookmarks: this.props.bookmarks,
        selected: null
    }
    bookmarkRef = createRef();
    bookmarkSelected = (marker, selected) => {
        const { view } = this.props.value;
        zoomToBookmark(view, marker.extent);
        this.setState({ selected })
    };

    componentDidMount() {
        this.bookmarkRef.current.focus();
    };

    createNewBookMark = async () => {
        const { bookmarkName } = this.state;
        const { view } = this.props.value;
        const newBookmarks = await CreateBookMark(view, bookmarkName);
        this.setState({ bookmarks: [...newBookmarks] })
    };

    render() {
        const { bookmarks, bookmarkName, selected } = this.state;
        console.log(bookmarks, bookmarkName)
        return (
            <div className='bookmark bookmark__container' >
                <div className='bookmark__input__container'>
                    <div className='bookmark_svg' onClick={() => this.createNewBookMark()}>
                        <BookmarkSVGAdd />
                    </div>
                    <TextInputs name='bookmarkName' placeholder='bookmark name' propRef={this.bookmarkRef} callback={bookmarkName => this.setState({ bookmarkName })} />
                </div>
                {
                    bookmarks && bookmarks.length > 0 ? bookmarks.map((marker, idx) => {
                        const markerSelected = idx === selected ? 'active' : 'default';
                        return <div className={`bookmark_item bookmark_item--${markerSelected}`} key={idx} onClick={() => this.bookmarkSelected(marker, idx)}>
                            <div className='bookmark_svg'>
                                <BookmarkSVG /><label>{marker.name}</label>
                            </div>
                            <div className='bookmark_svg_delete'>
                                <BookmarkSVGDelete color='#f94144ff' />
                            </div>
                        </div>
                    }) : null
                }
            </div >
        )
    }
}
