import React, { Component } from 'react';
import './adj.css'
import { RibbonContainer } from '../../components/Containers/Ribbons';
import { NavButton } from '../../components/Buttons/NavButtons';
import { CreateBookMark } from '../../components/ESRI/ESRITools';

function getBookmarks() {
    const markerString = localStorage.getItem('bookmarks');
    const markerArray = JSON.parse(markerString);
    return markerArray;
}

export default class Adjucation extends Component {
    state = {
        bookmarks: getBookmarks()
    }

    setBookMark = async () => {
        const { view } = this.props.value;
        const bookmark = await CreateBookMark(view);
        this.setState({ bookmarks: [...this.state.bookmarks, bookmark] })
    }

    render() {

        const { bookmarks } = this.state;
        console.log(bookmarks)
        return (<React.Fragment>
            <RibbonContainer>
                <div className='button__container float-right'>
                    <button onClick={() => this.setBookMark()}>Bookmark</button>
                    <NavButton to='/adjudications/pou'>
                        <button onClick={() => this.setState({ POU_Table: true })}>POU</button>
                    </NavButton>
                    <NavButton to='/adjudications/map' >
                        <button onClick={() => this.setState({ adj_Map: true })}>Map</button>
                    </NavButton>
                </div>
            </RibbonContainer>
            {this.props.children}
        </React.Fragment >
        )
    }
}
//Home / Adjudications / PWR Map / DOM-18-A20008010ABD-01 / Domestic