sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException",
    "sap/ui/core/Core",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/util/Storage",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        JSONModel,
        SimpleType,
        ValidateException,
        Core,
        MessageBox,
        MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.Message", {


            onInit: function () {
            this.getView().setModel(new JSONModel({ name: "", email: "", message: "" }));
            },




            onSubmit: function () {
                var oView = this.getView(),
                    aInputs = [
                        oView.byId("_IDGenInput1"),
                        oView.byId("_IDGenInput3"),
                        oView.byId("_IDGenInput4"),
                    ];
                   

                var oFormData = {
                        name: oView.getModel().getProperty("/name"),
                        email: oView.getModel().getProperty("/email"),
                        message: oView.getModel().getProperty("/message"),
                    };
                    jQuery.sap.require("jquery.sap.storage");
                    var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
                    var aMessages = oStorage.get("Messages") || [];
                    aMessages.push(oFormData);
                    oStorage.put("Messages", aMessages);

                    MessageToast.show(
                        "Köszönjük üzenetét!"
                    );
                }
            },
)
            
        });

