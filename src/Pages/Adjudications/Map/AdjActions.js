export const popupAction = (view, callBack) => {
    view.popup.on("trigger-action", function (event) {
        if (event.action.id === "measure-this") {
            console.log(view.popup.selectedFeature)
            callBack(view.popup.selectedFeature)
        }
    });
}