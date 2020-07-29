import React, { Component } from 'react'
import { CreateFeatureLayer, CreateMap, CreateLayer, CreateBookMark, CreatePortalMap, findLayerById } from '../../../components/ESRI/ESRITools';
import { POUTemp, PODTemp } from './AdjPopupTemplates';
import { popupAction } from './AdjActions';
import { POUData } from '../../../Utils/API';
import POU_Form from '../POU';
import { getCookie } from '../../../Utils/Tools';

export default class AdjMap extends Component {
    state = {
        center: [-112, 33.3],
        zoom: 10,
        manage: false
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
        // const { view, webmap } = await CreateMap('adjViewDiv', initialCenter, initialZoom);
        // const res = await POUData()
        // debugger
        // const POUlayer = await CreateFeatureLayer('https://dwrarcgis.azwater.gov/server/rest/services/LLC_POUS_IR_POLYS/MapServer/0', null, POUTemp);
        // const PODlayer = await CreateFeatureLayer('https://dwrarcgis.azwater.gov/server/rest/services/LLC_PODS_ALL/MapServer/0', null, PODTemp);
        // const layerTest = await CreateLayer('dc1195da0aef431183ef768d4877cde3');
        // webmap.addMany([POUlayer, PODlayer]);
        // webmap.add(layerTest);
        popupAction(view, this.managePOU);


        view.on('drag', function (event) {
            var point = view.toMap({ x: event.x, y: event.y });
            document.cookie = `mapLng=${point.longitude}`;
            document.cookie = `mapLat=${point.latitude}`;
            document.cookie = `mapZoom=${view.zoom}`;
        });
        view.on('mouse-wheel', function (event) {
            var point = view.toMap({ x: event.x, y: event.y });
            document.cookie = `mapLng=${point.longitude}`;
            document.cookie = `mapLat=${point.latitude}`;
            document.cookie = `mapZoom=${view.zoom}`;
        });
        view.ui.add("logoDiv", "bottom-right");
        // this.props.setMapView(view);
        this.props.value.adjDispatch({ type: 'MAP_VIEW', payload: { view: view } });
    }

    managePOU = (item) => {
        const { value, data } = this.props;
        const matchedData = data.find(dataItem => dataItem === item)
        this.setState({ manage: item });
    }


    render() {
        const { manage } = this.state;
        const { data, value } = this.props;
        const manageActive = manage ? 'active' : 'inactive';
        console.log(this.props)

        return (
            <div className={`adj__map__container`} >
                {manage ? <POU_Form pou={manage} value={value} /> : null}
                <div className={`adj__map adj__map--${manageActive}`}>
                    <div id='adjViewDiv'></div>
                    <div id="logoDiv" className="esri-widget">Logo</div>
                </div>
            </div >
        )
    }
}
