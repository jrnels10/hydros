export const popupAction = (view, callBack) => {
    view.popup.on("trigger-action", function (event) {
        if (event.action.id === "measure-this") {
            callBack(view.popup.selectedFeature)
        }
    });
}