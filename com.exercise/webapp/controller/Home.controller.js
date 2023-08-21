sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.exercise.controller.Home", {
            onInit: function () {

            },

            onItemSelect: function (oEvent) {
                var oItem = oEvent.getParameter("item");
                console.log(oItem.getKey());
                var keyName = oItem.getKey();
                if (keyName === 'blueprint') {
                    this.byId("pageContainer1").setVisible(true);
                    this.byId("pageContainer2").setVisible(false);
                    this.byId("pageContainer3").setVisible(false);
                } else if (keyName === 'maintenance') {
                    this.byId("pageContainer1").setVisible(false);
                    this.byId("pageContainer2").setVisible(true);
                    this.byId("pageContainer3").setVisible(false);
                } else if (keyName === 'customer-service') {
                    this.byId("pageContainer1").setVisible(false);
                    this.byId("pageContainer2").setVisible(false);
                    this.byId("pageContainer3").setVisible(true);
                }
            }
        });
    });
