requirejs.config({
    baseUrl: 'src',
    paths: {
        tourbus: 'thirdparty/jquery-tourbus.min',
        googleChart: 'thirdparty/loader'
    }
});

define(['scripts/ESTWA', 'tourbus', 'googleChart'],
    function (ESTWA) {
        new ESTWA({globe: 'canvasOne'});

        $("#loading").hide();
        var tour = $('#my-tour-id').tourbus({});
        tour.trigger('depart.tourbus');

        $("#HeatmapButton").click(function () {
            var open = $("#HeatmapMenu").data("open");
            if (!open) {
                $("#HeatmapMenu").show();
                $("#HeatmapMenu").data("open", 1);

            } else {
                $("#HeatmapMenu").hide();
                $("#HeatmapMenu").data("open", 0);
            }
        });
    });



