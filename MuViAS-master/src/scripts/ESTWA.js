var gInterface; //testing variables
var appConstructor;
var tourStarted = 0;

define([
        './GlobeInterface',
        './Globe',
        './Controls',
        './util/HeatmapPanel'
    ],

    function (
              GlobeInterface,
              Globe,
              Controls,
              HeatmapPanel) {

        var ESTWA;
        ESTWA = function (options) {

            var globe = new Globe({id: options.globe});
            var controls = new Controls(globe);
            // console.log(globe.controller);
            gInterface = new GlobeInterface(globe);
            // console.log(gInterface.globe.controller);
            console.log(gInterface.globe);
            this.HeatmapPanel = new HeatmapPanel(globe, gInterface.globe.controller, controls);
        };

        return ESTWA;

    }
);

