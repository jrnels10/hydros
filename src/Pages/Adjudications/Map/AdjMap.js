import React, { Component } from 'react'
import { CreateFeatureLayer, CreateMap, CreateLayer, CreateBookMark, CreatePortalMap, findLayerById, setMapExtent, zoomTo } from '../../../components/ESRI/ESRITools';
import { POUTemp, PODTemp } from './AdjPopupTemplates';
import { popupAction } from './AdjActions';
import { POUData } from '../../../Utils/API';
import POU_Form from '../POU';
import { getCookie } from '../../../Utils/Tools';
import { BookmarkSVG } from '../../../Images/IconSvg';
import Bookmarks from '../../../components/ESRI/Bookmarks';


function getBookmarks() {
    const markerString = localStorage.getItem('bookmarks');
    const markerArray = JSON.parse(markerString);
    return markerArray;
}

export default class AdjMap extends Component {
    state = {
        center: [-112, 33.3],
        zoom: 10,
        manage: false,
        bookmarks: getBookmarks(),
        showBookmarks: false
    }
    async componentDidMount() {
        const prevLocationAndScale = document.cookie;
        const { center, zoom } = this.state;
        let initialCenter = center;
        let initialZoom = zoom;
        if (prevLocationAndScale) {
            initialCenter[0] = getCookie('mapLng')
            initialCenter[1] = getCookie('mapLat')
            initialZoom = getCookie('mapZoom')
        }
        const { view, webmap } = await CreatePortalMap('adjViewDiv', initialCenter, initialZoom);
        view.when(async () => {
            const layer = await findLayerById(view, 'LLC_PODS_ALL_98');
            layer.popupTemplate = PODTemp()
        })

        popupAction(view, this.managePOU);
        setMapExtent(view);

        view.ui.add("logoDiv", "bottom-right");
        // this.props.setMapView(view);
        this.setState({ view })
        this.props.value.adjDispatch({ type: 'MAP_VIEW', payload: { view: view } });
    }

    setBookMark = async () => {
        this.setState({ showBookmarks: !this.state.showBookmarks })
    }

    managePOU = async (item) => {
        const { value, data } = this.props;
        const matchedData = data.find(dataItem => dataItem === item)
        this.setState({ manage: item });
    }

    render() {
        const { bookmarks, showBookmarks, manage } = this.state;
        const { data, value } = this.props;
        const manageActive = manage ? 'active' : 'inactive';
        console.log(this.props)

        return (
            <div className={`adj__map__container`} >
                <div className='adj__map__toolbar'>
                    <button className={`adj__ribbon__button adj__ribbon__button--${showBookmarks ? 'active' : ''}`} onClick={() => this.setBookMark()}><BookmarkSVG /></button>
                    {showBookmarks ? <Bookmarks bookmarks={bookmarks} value={value} /> : null}
                </div>
                {manage ? <POU_Form pou={manage} value={value} /> : null}
                <div className={`adj__map adj__map--${manageActive}`}>
                    <div id='adjViewDiv'></div>
                    <div id="logoDiv" className="esri-widget">Logo</div>
                </div>
            </div >
        )
    }
}
