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
export async function findLayerById(view, title) {
    try {
        return await view.map.allLayers.find((layer) => {
            return layer.id === title;
        });
    } catch (error) {
        console.log(error)
    }

}
export const CreateBookMark = async (view) => {
    try {
        const [Bookmarks, BookmarksViewModel] = await loadModules(["esri/widgets/Bookmarks", "esri/widgets/Bookmarks/BookmarksViewModel"]);
        const bookmarks = new BookmarksViewModel({ view });
        let newList = [];
        const marker = await bookmarks.createBookmark();
        const existingBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (existingBookmarks) {
            newList = [...existingBookmarks, marker];
        }
        newList.push(marker)
        localStorage.setItem("bookmarks", JSON.stringify(newList));
        return bookmarks

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
export const CreatePortalMap = async (elementId, center, zoom) => {
    try {
        const [MapView, esriConfig, WebMap] = await loadModules(['esri/views/MapView', "esri/config", 'esri/WebMap']);
        esriConfig.portalUrl = "https://dwrarcgis.azwater.gov/portal/sharing/rest/content/items";
        const webmap = new WebMap({
            portalItem: {
                // autocasts as new PortalItem()
                id: "c3590a75773b4b189643228b68bc051d"
            }
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
