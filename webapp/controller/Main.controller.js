sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.Main", {
            onPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Service", {
                  servicePath: window.encodeURIComponent(
                    oItem.getBindingContext("services").getPath().substr(1)
                  ),
                });
              },
            });
    
    });
