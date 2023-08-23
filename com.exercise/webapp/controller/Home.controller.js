sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.exercise.controller.Home", {
//            onInit: function () {
//
//            },
//
//            onBeforeRendering: function () {
//
//            },
//
//            onAfterRendering: function () {
//
//            },
//
//            onExit: function () {
//
//            },

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
            },

            handleEditableForm: function (oBool) {
                this.byId("name").setEditable(oBool);
                this.byId("street").setEditable(oBool);
                this.byId("housenumber").setEditable(oBool);
                this.byId("zipcode").setEditable(oBool);
                this.byId("city").setEditable(oBool);
                this.byId("country").setEditable(oBool);
            },

            handleEditPress: function (oEvent) {
                this.byId("edit").setVisible(false);
                this.byId("save").setVisible(true);
                this.byId("cancel").setVisible(true);

                this.handleEditableForm(true);
            },

            handleCancelPress: function (oEvent) {
                this.byId("edit").setVisible(true);
                this.byId("save").setVisible(false);
                this.byId("cancel").setVisible(false);

                this.handleEditableForm(false);
            },

            handleSavePress: function (oEvent) {
                this.byId("edit").setVisible(true);
                this.byId("save").setVisible(false);
                this.byId("cancel").setVisible(false);

                this.handleEditableForm(false);
            }
        });
    });
