import React, { Component } from 'react'
import { CreateFeatureLayer, CreateMap, CreateLayer } from '../../../components/ESRI/ESRITools';
import { POUTemp, PODTemp } from './AdjPopupTemplates';
import { popupAction } from './AdjActions';
import { POUData } from '../../../Utils/API';

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
            initialCenter = JSON.parse(prevLocationAndScale.split('|')[0])
            initialZoom = JSON.parse(prevLocationAndScale.split('|')[1])
        }
        const { view, webmap } = await CreateMap('viewDiv', initialCenter, initialZoom);
        const res = await POUData()
        debugger
        const POUlayer = await CreateFeatureLayer('https://dwrarcgis.azwater.gov/server/rest/services/LLC_POUS_IR_POLYS/MapServer/0', null, POUTemp);
        const PODlayer = await CreateFeatureLayer('https://dwrarcgis.azwater.gov/server/rest/services/LLC_PODS_ALL/MapServer/0', null, PODTemp);
        // const layerTest = await CreateLayer('dc1195da0aef431183ef768d4877cde3');

        webmap.addMany([POUlayer, PODlayer]);
        // webmap.add(layerTest);
        popupAction(view, this.managePOU);


        view.on('drag', function (event) {
            var point = view.toMap({ x: event.x, y: event.y });
            document.cookie = `[${point.longitude},${point.latitude}]|${view.zoom}`;
        });
        view.on('resize', function (event) {
            var point = view.toMap({ x: event.x, y: event.y });
            document.cookie = `[${point.longitude},${point.latitude}]|${view.zoom}`;
        });
    }

    managePOU = (item) => {
        const { value } = this.props;
        this.setState({ manage: true })
        value.adjDispatch({ type: 'MANAGE_POU', payload: { managePOU: item } })
    }


    render() {
        const { manage } = this.state;
        const manageActive = manage ? 'active' : 'inactive'
        return (
            <div className={`adj__map__container adj__map__container--${manageActive}`} >
                <div id='viewDiv' style={{ height: '100%', width: '100%' }}></div>
            </div >
        )
    }
}
