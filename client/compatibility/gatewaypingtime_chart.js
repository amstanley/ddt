function gatewaypingtimeChart() {    
               
       
        var gatewaypingtime_long_min_raw  = _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {long_min: 1}}).fetch(),'long_min'));
        var gatewaypingtime_long_min_ints =  _.map(gatewaypingtime_long_min_raw.map(Number), function(num){ return num; });
              
        var gatewaypingtime_long_max_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {long_max: 1}}).fetch(), 'long_max'));
        var gatewaypingtime_long_max_ints = _.map(gatewaypingtime_long_max_raw.map(Number), function(num){ return num; });
        
        var gatewaypingtime_long_avg_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {long_avg: 1}}).fetch(), 'long_avg'));
        var gatewaypingtime_long_avg_ints = _.map(gatewaypingtime_long_avg_raw.map(Number), function(num){ return num; });
        
        var gatewaypingtime_long_median_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {long_median: 1}}).fetch(), 'long_median'));
        var gatewaypingtime_long_median_ints = _.map(gatewaypingtime_long_median_raw.map(Number), function(num){ return num; });
        
        var gatewaypingtime_short_min_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {short_min: 1}}).fetch(),'short_min'));
        var gatewaypingtime_short_min_ints =  _.map(gatewaypingtime_short_min_raw.map(Number), function(num){ return num; });
              
        var gatewaypingtime_short_max_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {short_max: 1}}).fetch(), 'short_max'));
        var gatewaypingtime_short_max_ints = _.map(gatewaypingtime_short_max_raw.map(Number), function(num){ return num; });
        
        var gatewaypingtime_short_avg_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {short_avg: 1}}).fetch(), 'short_avg'));
        var gatewaypingtime_short_avg_ints = _.map(gatewaypingtime_short_avg_raw.map(Number), function(num){ return num; });
        
        var gatewaypingtime_short_median_raw  =  _.compact(_.pluck(EDC_DATA.find({session_id: Session.get("current_session_id")},{fields: {short_median: 1}}).fetch(), 'short_median'));
        var gatewaypingtime_short_median_ints = _.map(gatewaypingtime_short_median_raw.map(Number), function(num){ return num; });
        
        var  label_array_length = gatewaypingtime_short_median_ints.length; 
        var gatewaypingtime_labels_raw = Array.apply(null, {length: label_array_length}).map(Number.call, Number)
        var gatewaypingtime_labels_short = _.map(gatewaypingtime_labels_raw.map(String), function(str){ return str; });
        
        
          Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%=name%>: <%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
}
   //     Chart.defaults.global.responsive = true;
        
        var gatewaypingtime_data = {
          
          labels: gatewaypingtime_labels_short,
          
          datasets: [       
          
            {
                name:  "gatewaypingtime_long_min",
                label: "gatewaypingtime_long_min",
                data:   gatewaypingtime_long_min_ints,
                pointColor: "orange",
          //      fillColor: "orange",
                strokeColor: "orange",
                pointStrokeColor: "orange",
          //      pointHighlightFill: "orange",
          //      pointHighlightStroke: "orange"
            },
            {
                name:  "gatewaypingtime_long_max",
                label: "gatewaypingtime_long_max",
                data:   gatewaypingtime_long_max_ints,
                pointColor : "red",
         //       fillColor: "red",
                strokeColor: "red",
                pointStrokeColor: "red",
          //      pointHighlightFill: "red",
          //      pointHighlightStroke: "red"
            },
            {
                name:  "gatewaypingtime_long_avg",
                label: "gatewaypingtime_long_avg",
                data:  gatewaypingtime_long_avg_ints,
                pointColor : "blue",
           //   fillColor: "blue",
                strokeColor: "blue",
                pointStrokeColor: "blue",
           //     pointHighlightFill: "blue",
           //     pointHighlightStroke: "blue"
            },          
            {
                name:  "gatewaypingtime_long_median",
                label: "gatewaypingtime_long_median",
                data:   gatewaypingtime_long_median_ints,
                pointColor : "green",
             //   fillColor: "green",
                strokeColor: "green",
                pointStrokeColor: "green",
             //   pointHighlightFill: "green",
             //   pointHighlightStroke: "green"
            },
        {
                name:  "gatewaypingtime_short_min",
                label: "gatewaypingtime_short_min",
                data:   gatewaypingtime_short_min_ints,
                pointColor: "yellow",
          //      fillColor: "yellow",
                strokeColor: "yellow",
                pointStrokeColor: "yellow",
          //      pointHighlightFill: "yellow",
          //      pointHighlightStroke: "yellow"
            },
            {
                name:  "gatewaypingtime_short_max",
                label: "gatewaypingtime_short_max",
                data:   gatewaypingtime_short_max_ints,
                pointColor : "purple",
         //       fillColor: "purple",
                strokeColor: "purple",
                pointStrokeColor: "purple",
          //      pointHighlightFill: "purple",
          //      pointHighlightStroke: "purple"
            },
            {
                name:  "gatewaypingtime_short_avg",
                label: "gatewaypingtime_short_avg",
                data:  gatewaypingtime_short_avg_ints,
                pointColor : "cyan",
           //   fillColor: "cyan",
                strokeColor: "cyan",
                pointStrokeColor: "cyan",
           //     pointHighlightFill: "cyan",
           //     pointHighlightStroke: "cyan"
            },          
            {
                name:  "gatewaypingtime_short_median",
                label: "gatewaypingtime_short_median",
                data:   gatewaypingtime_short_median_ints,
                pointColor : "pink",
             //   fillColor: "pink",
                strokeColor: "pink",
                pointStrokeColor: "pink",
             //   pointHighlightFill: "pink",
             //   pointHighlightStroke: "pink"
            }
        ]
        };
        

          var gatewaypingtimeCtx = $("#gatewaypingtimeChart").get(0).getContext("2d");
          var gatewaypingtimeChart = new Chart(gatewaypingtimeCtx);
          
          Session.set( "gatewaypingtimeChartLegend", gatewaypingtimeChart.Line(gatewaypingtime_data, {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><span style=\"background-color:<%=datasets[i].pointColor%>\">  <%if(datasets[i].label){%><%=datasets[i].label%><%}%>  </span></li><%}%></ul>"}).generateLegend() );
          
                    gatewaypingtimeChart.Line(gatewaypingtime_data, {

                                        ///Boolean - Whether grid lines are shown across the chart
                                        scaleShowGridLines : true,
                                    
                                        //String - Colour of the grid lines
                                        scaleGridLineColor : "rgba(0,0,0,.05)",
                                    
                                        //Number - Width of the grid lines
                                        scaleGridLineWidth : 1,
                                    
                                        //Boolean - Whether to show horizontal lines (except X axis)
                                        scaleShowHorizontalLines: true,
                                    
                                        //Boolean - Whether to show vertical lines (except Y axis)
                                        scaleShowVerticalLines: true,
                                    
                                        //Boolean - Whether the line is curved between points
                                        bezierCurve : true,
                                    
                                        //Number - Tension of the bezier curve between points
                                        bezierCurveTension : 0.4,
                                    
                                        //Boolean - Whether to show a dot for each point
                                        pointDot : true,
                                    
                                        //Number - Radius of each point dot in pixels
                                        pointDotRadius : 2,
                                    
                                        //Number - Pixel width of point dot stroke
                                        pointDotStrokeWidth : 1,
                                    
                                        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                                        pointHitDetectionRadius : 20,
                                    
                                        //Boolean - Whether to show a stroke for datasets
                                        datasetStroke : true,
                                    
                                        //Number - Pixel width of dataset stroke
                                        datasetStrokeWidth : 2,
                                    
                                        //Boolean - Whether to fill the dataset with a colour
                                        datasetFill : false,

                                    }
                        );
               
              
  
   };

Template.sessionPage.helpers({
    gatewaypingtimechartLegend: function(){
      
      return Session.get("gatewaypingtimeChartLegend");
    }  
    });
        

