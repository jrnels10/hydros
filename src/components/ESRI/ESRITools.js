import { loadModules } from 'esri-loader';
import { render } from '@testing-library/react';

export const CreateFeatureLayer = async (url, id, popupTemplate, renderer) => {
    try {
        const [FeatureLayer] = await loadModules(["esri/layers/FeatureLayer"]);
        const layer = new FeatureLayer({ url });
        if (id) {
            layer.id = id
        }
        else if (popupTemplate) {
            layer.popupTemplate = popupTemplate()
        }
        else if (renderer) {
            layer.renderer = renderer
        }
        return layer;
    } catch (error) {
        console.log(error)
    }
};

export const CreateLayer = async (id) => {
    try {
        const [FeatureLayer] = await loadModules(["esri/layers/FeatureLayer"]);

        var lyr = new FeatureLayer({
            portalItem: {  // autocasts as new PortalItem()
                id: "dc1195da0aef431183ef768d4877cde3"
            },
            // loads the third item in the given feature service
            // layerId: 0// the first layer in the service is returned
        });
        return lyr;
    } catch (error) {
        console.log(error)
    }
};

export const CreateMap = async (elementId, center, zoom) => {
    try {
        const [MapView, esriConfig, Map] = await loadModules(['esri/views/MapView', "esri/config", 'esri/Map']);
        esriConfig.portalUrl = "https://dwrarcgis.azwater.gov/portal/sharing/rest/content/items";
        const webmap = new Map({
            basemap: 'satellite'
        });
        const view = new MapView({
            map: webmap,
            container: elementId,
            center: center,
            zoom: zoom
        });
        return { view, webmap }
    } catch (error) {
        console.log(error)
    }
};

