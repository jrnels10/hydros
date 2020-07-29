import React, { Component } from 'react';
import { zoomTo, zoomToBookmark, CreateBookMark } from './ESRITools';
import { BookmarkSVG, BookmarkSVGAdd } from '../../Images/IconSvg';
import TextInputs from '../Inputs/Inputs';

export default class Bookmarks extends Component {
    state = {
        bookmarks: this.props.bookmarks
    }

    bookmarkSelected = (marker) => {
        const { view } = this.props.value;
        zoomToBookmark(view, marker.extent);
    };

    createNewBookMark = async () => {
        const { bookmarkName } = this.state;
        const { view } = this.props.value;
        const newBookmarks = await CreateBookMark(view, bookmarkName);
        this.setState({ bookmarks: [...newBookmarks] })
    };

    render() {
        const { bookmarks, bookmarkName } = this.state;
        console.log(bookmarks, bookmarkName)
        return (
            <div className='bookmark bookmark__container' >
                <div className='bookmark__input__container'>
                    <div className='bookmark_svg' onClick={() => this.createNewBookMark()}>
                        <BookmarkSVGAdd />
                    </div>
                    <TextInputs name='bookmarkName' callback={bookmarkName => this.setState({ bookmarkName })} />
                </div>
                {
                    bookmarks && bookmarks.length > 0 ? bookmarks.map((marker, idx) => {
                        return <div key={idx} onClick={() => this.bookmarkSelected(marker)}>
                            <BookmarkSVG /><label>{marker.name}</label>
                        </div>
                    }) : null
                }
            </div >
        )
    }
}
