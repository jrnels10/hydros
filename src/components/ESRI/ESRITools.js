import { loadModules } from 'esri-loader';
import './ESRI.css'

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

export async function zoomToBookmark(view, itemObj) {
    const { spatialReference, xmin, xmax, ymin, ymax } = itemObj;
    const [Extent] = await loadModules(["esri/geometry/Extent"]);
    const extent = new Extent({ spatialReference, xmin, xmax, ymin, ymax });
    view.goTo(extent);
    return null
}

export function setMapExtent(view) {
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
}
export const CreateBookMark = async (view, name) => {
    try {
        const [Bookmarks, BookmarksViewModel] = await loadModules(["esri/widgets/Bookmarks", "esri/widgets/Bookmarks/BookmarksViewModel"]);
        const bookmarks = new BookmarksViewModel({ view });
        let newList = [];
        const marker = await bookmarks.createBookmark();
        marker.name = name;
        debugger
        const existingBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (existingBookmarks) {
            newList = [...existingBookmarks, marker];
        } else {
            newList.push(marker)
        }
        localStorage.setItem("bookmarks", JSON.stringify(newList));
        return newList

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
