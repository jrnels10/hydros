import React, { Component } from 'react';
import './adj.css'
import { RibbonContainer } from '../../components/Containers/Ribbons';
import { NavButton } from '../../components/Buttons/NavButtons';
import { CreateBookMark } from '../../components/ESRI/ESRITools';
import Bookmarks from '../../components/ESRI/Bookmarks';
import { BookmarksSVG, MapSVG, FormSVG } from '../../Images/IconSvg';

function getBookmarks() {
    const markerString = localStorage.getItem('bookmarks');
    const markerArray = JSON.parse(markerString);
    return markerArray;
}

export default class Adjucation extends Component {
    state = {
        bookmarks: getBookmarks(),
        showBookmarks: false
    }

    setBookMark = async () => {
        this.setState({ showBookmarks: !this.state.showBookmarks })
    }


    render() {

        const { bookmarks, showBookmarks, ribbonButton } = this.state;
        const { value } = this.props;
        return (<React.Fragment>
            <RibbonContainer>
                <div className='adj__ribbon__container'>
                    <button className={`adj__ribbon__button adj__ribbon__button--${showBookmarks ? 'active' : ''}`} onClick={() => this.setBookMark()}><BookmarksSVG /></button>
                    {showBookmarks ? <Bookmarks bookmarks={bookmarks} value={value} /> : null}
                    <NavButton to='/adjudications/pou'>
                        <button className={`adj__ribbon__button adj__ribbon__button--${ribbonButton === 'pou' ? 'active' : ''}`} onClick={() => this.setState({ ribbonButton: 'pou' })}><FormSVG /></button>
                    </NavButton>
                    <NavButton to='/adjudications/map' >
                        <button className={`adj__ribbon__button adj__ribbon__button--${ribbonButton === 'map' ? 'active' : ''}`} onClick={() => this.setState({ ribbonButton: 'map' })}><MapSVG /></button>
                    </NavButton>
                </div>
            </RibbonContainer>
            {this.props.children}
        </React.Fragment >
        )
    }
}
//Home / Adjudications / PWR Map / DOM-18-A20008010ABD-01 / Domestic