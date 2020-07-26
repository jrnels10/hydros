import React, { Component } from 'react'
import { CreateFeatureLayer, CreateMap } from '../../../components/ESRI/ESRITools';
import { POUTemp } from './AdjPopupTemplates';
import { popupAction } from './AdjActions';

export default class AdjMap extends Component {
    state = {
        center: [-112, 33.3],
        zoom: 10,
        manage: false
    }
    async componentDidMount() {
        const { center, zoom } = this.state;
        const { view, webmap } = await CreateMap('viewDiv', center, zoom);
        const POUpopup = POUTemp(() => console.log('hello'))
        const POUlayer = await CreateFeatureLayer('https://gisweb3.azwater.gov/arcgis/rest/services/Wells/WellRegistry/MapServer/2', null, POUpopup)
        webmap.add(POUlayer);
        popupAction(view, this.managePOU)
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
            <div className={`adj__map__container adj__map__container--${manageActive}`}>
                <div id='viewDiv' style={{ height: '100%', width: '100%' }}></div>
            </div>
        )
    }
}
