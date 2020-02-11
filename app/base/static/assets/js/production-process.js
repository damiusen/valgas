var valveflag = true;
var jsondata;
$.getJSON("/static/assets/production-process.json", function(json){
  jsondata = json;
})

function init() {

  
  if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this

  var colors = {
    'red': '#be4b15',
    'green': '#52ce60',
    'blue': '#6ea5f8',
    'lightred': '#fd8852',
    'lightblue': '#afd4fe',
    'lightgreen': '#b9e986',
    'pink': '#faadc1',
    'purple': '#d689ff',
    'orange': '#fdb400',
  }

  // Icons derived from SVG paths designed by freepik: http://www.freepik.com/
  var icons = {};

  icons.valve = 
    "m492 236c-10.933 0-19.803 8.776-19.983 19.667h-117.35v-58.333c0-11.046-8.954-20-20-20h-19.334v-38.667h94.073c34.882\
    0 63.261-28.378 63.261-63.26 0-41.129-38.633-71.362-78.604-61.371l-78.73\
    19.683v-13.719c0-11.046-8.954-20-20-20h-78.666c-11.046 0-20 8.954-20\
    20v13.718l-78.73-19.683c-39.902-9.977-78.604 20.175-78.604 61.372 0 34.881 28.379 63.26 63.261\
    63.26h94.073v38.667h-19.334c-11.046 0-20 8.954-20 20v58.333h-117.35c-.18-10.891-9.05-19.667-19.983-19.667-11.046\
    0-20 8.954-20 20v236c0 11.046 8.954 20 20 20 10.933 0 19.803-8.776 19.983-19.667h432.034c.18 10.891 9.05 19.667\
    19.983 19.667 11.046 0 20-8.954 20-20v-236c0-11.046-8.954-20-20-20zm-20\
    216.333h-38.667v-156.666h38.667zm-274.667-235h117.334v97.333h-117.334zm206.432-164.492c14.696-3.675 28.902\
    7.443 28.902 22.566 0 12.826-10.435 23.26-23.261 23.26h-94.073v-23.718zm-301.171\
    45.826c-12.826 0-23.261-10.435-23.261-23.26 0-15.122 14.208-26.242 28.902-22.565l88.432\
    22.108v23.718h-94.073zm134.073-58.667h38.666v137.333h-38.666zm-59.334 314.667h157.334c11.046\
    0 20-8.954 20-20v-39h38.666v156.667h-274.666v-156.667h38.666v39c0 11.045 8.954 20 20\
    20zm-137.333-59h38.667v156.667h-38.667z";

  icons.natgas =
    "F M244.414,133.231 L180.857,133.231 178.509,156.191 250.527,192.94z\
    M179.027,276.244 262.328,308.179 253.451,221.477z\
    M267.717,360.866 264.845,332.807 220.179,360.866z\
    M167.184,266.775 247.705,207.524 176.95,171.421z\
    M157.551,360.866 192.975,360.866 256.447,320.996 165.218,286.021z\
    M141.262,374.366 141.262,397.935 161.396,397.935 161.396,425.268 179.197,425.268 179.197,397.935\
    246.07,397.935 246.07,425.268 263.872,425.268 263.872,397.935 284.006,397.935 284.006,374.366z";

  icons.oil =
    "F M190.761,109.999c-3.576-9.132-8.076-22.535,7.609-37.755c0.646,13.375,14.067,13.99,11.351,36.794\
    c6.231-2.137,6.231-2.137,9.188-3.781c17.285-9.612,20.39-25.205,7.64-42.896c-7.316-10.153-11.945-20.58-10.927-33.23\
    c-4.207,4.269-5.394,9.444-6.744,17.129c-5.116-3.688,3.067-41.28-22.595-46.26c5.362,13.836,7.564,25.758-2.607,40.076\
    c-0.667-5.422-3.255-12.263-8.834-17.183c-0.945,16.386,0.97,23.368-9.507,44.682c-2.945,8.902-5.02,17.635,0.533,26.418\
    C171.354,102.673,180.555,108.205,190.761,109.999z\
    M330.738,371.614h-15.835v-61.829l-74.409-78.541v-21.516c0-6.073-4.477-11.087-10.309-11.957v-82.156h-63.632v82.156\
    c-5.831,0.869-10.308,5.883-10.308,11.957v21.516l-74.409,78.541v61.829H66l-25.124,25.123h314.984L330.738,371.614z\
    M166.554,371.614h-61.717v-29.782h61.717V371.614z M166.554,319.956h-61.717v-1.007l51.471-54.329\
    c0.555,5.513,4.813,9.919,10.246,10.729V319.956L166.554,319.956z M291.903,371.614h-61.718v-29.782h61.718V371.614z\
    M291.903,319.956h-61.718V275.35c5.435-0.811,9.691-5.217,10.246-10.729l51.472,54.329V319.956z"

  icons.pyrolysis =
    "F M226.46,198.625v-75.5h-87.936v-19.391h-14.304V92.319h-5.079l-3.724-82.777H91.766l-3.724,82.777h-6.18v11.415H68.535\
    V92.319h-5.079L59.731,9.542H36.08l-3.724,82.777h-6.18v11.415H11.872v94.891H0v35.167h243.333v-35.167H226.46z M61.355,191.792h-28\
    v-69.333h28V191.792z M117.041,191.792h-28v-69.333h28V191.792z M168.46,198.625h-29.936v-17.5h29.936V198.625z M206.46,198.625h-18\
    v-37.5h-49.936v-18h67.936V198.625z";

  icons.fractionation =
    "F M224.609,218.045l-5.24-173.376h9.172V18.297h-9.969L218.019,0h-32.956l-0.553,18.297h-9.969v26.372h9.171l-2.475,81.878\
    h-39.196l-1.833-52.987h8.998V47.188h-9.91l-0.633-18.297h-32.913l-0.633,18.297h-9.911V73.56h8.999l-1.833,52.987H62.081\
    l-0.974-24.097h8.767V76.079h-9.833l-0.74-18.298H26.446l-0.739,18.298h-9.832v26.371h8.766L19.97,218.045H3.041v26.371h238.333\
    v-26.371z  M144.536,198.667h34.522l-0.586,19.378h-33.267L144.536,198.667z M143.624,172.296l-0.67-19.378h37.487\
    l-0.586,19.378H143.624z M100.792,172.296H63.93l-0.783-19.378h38.315L100.792,172.296z M99.88,198.667l-0.67,19.378h-33.43\
    l-0.783-19.378H99.88z";

  icons.gasprocessing =
    "F M242.179,212.635V58.634h-80.936v40.877h-13.465l-1.351-33.828h5.284V45.247h-6.1l-0.415-10.382h6.515V14.431h-46.927\
  v20.435h6.515l-0.415,10.382h-6.1v20.436h5.284l-2.8,70.125H96.186V95.007H10.642v117.628H0v25.755h252.82v-25.755H242.179z\
  M73.501,135.808H51.714v76.827H33.327v-94.942h40.174V135.808z M137.797,213.516h-19.099v-88h19.099V213.516z M219.494,212.635\
  h-18.316v-51.411h18.316V212.635z M219.494,138.539h-18.316V99.511h-17.25V81.319h35.566V138.539z";

  icons.polymerization =
    "F M399.748,237.029 L363.965,174.401 345.094,174.401 343.113,155.463 326.566,155.463 322.797,29.385 290.486,29.385\
    286.715,155.463 270.17,155.463 261.634,237.029 242.029,237.029 242.029,190.314 192.029,190.314 192.029,230.587 109.84,187.329\
    109.84,230.486 27.84,187.329 27.84,237.029 0,237.029 0,394.674 424.059,394.674 424.059,237.029z";

  icons.finishedgas =
    "F M422.504,346.229v-68.306h-16.678v-24.856c0-21.863-16.199-39.935-37.254-42.882v-0.798\
    c0-26.702-21.723-48.426-48.426-48.426h-1.609c-26.699,0-48.426,21.724-48.426,48.426v87.633h-23.641v-93.169\
    c0-6.083-3.248-11.394-8.096-14.333c5.662-1.667,9.799-6.896,9.799-13.098c0-7.544-6.117-13.661-13.662-13.661h-10.981v-12.727h-17\
    v12.727h-10.984c-7.545,0-13.66,6.116-13.66,13.661c0,6.202,4.137,11.431,9.799,13.098c-4.848,2.94-8.098,8.25-8.098,14.333v93.169\
    h-23v-85.596c0-4.458-3.613-8.071-8.07-8.071h-16.412v-87.591c0-16.03-13.041-29.071-29.07-29.071v-1.267\
    c0-23.608-19.139-42.748-42.748-42.748S21.54,61.817,21.54,85.425v260.805H0v55.139h444.045v-55.139H422.504z M286.256,209.387\
    c0-17.801,14.48-32.284,32.281-32.284h1.609c17.803,0,32.285,14.483,32.285,32.284v1.559\
    c-19.059,4.545-33.232,21.673-33.232,42.124v24.855h-16.676v19.098h-16.27v-87.635H286.256z M302.525,313.162v33.067h-16.27\
    v-33.067H302.525z M270.113,313.162v33.067h-23.641v-33.067H270.113z M144.447,219.496v85.596c0,4.458,3.613,8.071,8.07,8.071\
    h31.07v33.068h-47.482V219.496H144.447z M107.035,102.834c7.129,0,12.93,5.8,12.93,12.929v87.591h-12.93V102.834z M107.035,219.496\
    h12.93v126.733h-12.93V219.496z";


  var $ = go.GraphObject.make;  // for conciseness in defining templates
  myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
    {
      maxSelectionCount: 1, // users can select only one part at a time
      "toolManager.hoverDelay": 10,  // how quickly tooltips are shown
      initialAutoScale: go.Diagram.Uniform,  // scale to show all of the contents
      "ChangedSelection": onSelectionChanged, // view additional information
      "ObjectDoubleClicked": onSelectionDoubleClicked
    });

  function infoString(obj) {
    var part = obj.part;
    if (part instanceof go.Adornment) part = part.adornedPart;
    var msg = "";
    if (part instanceof go.Link) {
      msg = "";
    } else if (part instanceof go.Node) {
      msg = part.data.text + ":\n\n" + part.data.description;
    }
    return msg;
  }

  // A data binding conversion function. Given an name, return the Geometry.
  // If there is only a string, replace it with a Geometry object, which can be shared by multiple Shapes.
  function geoFunc(geoname) {
    var geo = icons[geoname];
    if (typeof geo === "string") {
      geo = icons[geoname] = go.Geometry.parse(geo, true);
    }
    return geo;
  }

  myDiagram.nodeTemplate =
    $(go.Node, "Spot",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
        toolTip:
          $("ToolTip",
            $(go.TextBlock, { margin: 4, width: 140 },
              new go.Binding("text", "", infoString).ofObject())
          )
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      // The main element of the Spot panel is a vertical panel housing an optional icon,
      // plus a rectangle that acts as the port
      $(go.Panel, "Vertical",
        $(go.Shape, {
          name: 'icon',
          width: 1, height: 1,
          stroke: null, strokeWidth: 0,
          fill: colors.blue
        },
          new go.Binding("fill", "color", function(c) { return colors[c]; }),
          new go.Binding("width", "iconWidth"),
          new go.Binding("height", "iconHeight"),
          new go.Binding("geometry", "icon", geoFunc)),
        $(go.Shape, {
          name: 'main',
          width: 40, height: 40,
          margin: new go.Margin(-1, 0, 0, 0),
          portId: "",
          stroke: null, strokeWidth: 0,
          fill: colors.blue
        },
          new go.Binding("fill", "color", function(c) { return colors[c]; }),
          new go.Binding("width", "portWidth"),
          new go.Binding("height", "portHeight"))
      ),

      $(go.TextBlock, {
        font: "Bold 14px Lato, sans-serif",
        textAlign: "center",
        margin: 3,
        maxSize: new go.Size(100, NaN),
        alignment: go.Spot.TopCenter,
        alignmentFocus: go.Spot.BottomCenter
      },
        new go.Binding("text"))

    );

  // Some links need a custom to or from spot
  function spotConverter(dir) {
    if (dir === "left") return go.Spot.LeftSide;
    if (dir === "right") return go.Spot.RightSide;
    if (dir === "top") return go.Spot.TopSide;
    if (dir === "bottom") return go.Spot.BottomSide;
    if (dir === "rightsingle") return go.Spot.Right;
  }

  myDiagram.linkTemplate =
    $(go.Link, {
      toShortLength: -2,
      fromShortLength: -2,
      layerName: "Background",
      routing: go.Link.Orthogonal,
      corner: 15,
      fromSpot: go.Spot.RightSide,
      toSpot: go.Spot.LeftSide
    },
      // make sure links come in from the proper direction and go out appropriately
      new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d); }),
      new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),

      new go.Binding("points").makeTwoWay(),
      // mark each Shape to get the link geometry with isPanelMain: true
      $(go.Shape, { isPanelMain: true, stroke: colors.lightblue, strokeWidth: 10 },
        new go.Binding("stroke", "color", function(c) { return colors[c]; })),
      $(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [20, 40] })
    );
  myDiagram.model = go.Model.fromJson(jsondata);
  loop();  // animate some flow through the pipes
}

var opacity = 1;
var down = true;
function loop() {
  var diagram = myDiagram;
  setTimeout(function() {
    var oldskips = diagram.skipsUndoManager;
    diagram.skipsUndoManager = true;
    diagram.links.each(function(link) {
      var shape = link.findObject("PIPE");
      var off = shape.strokeDashOffset - 3;
      // animate (move) the stroke dash
      shape.strokeDashOffset = (off <= 0) ? 60 : off;
      // animte (strobe) the opacity:
      if (down) opacity = opacity - 0.01;
      else opacity = opacity + 0.003;
      if (opacity <= 0) { down = !down; opacity = 0; }
      if (opacity > 1) { down = !down; opacity = 1; }
      shape.opacity = opacity;
    });
    diagram.skipsUndoManager = oldskips;
    loop();
  }, 60);
}

function onSelectionChanged(e) {
  var node = e.diagram.selection.first();
  if (!(node instanceof go.Node)) return;
  var data = node.data;
  var image = document.getElementById('Image');
  var title = document.getElementById('Title');
  var description = document.getElementById('Description');

  if (data.imgsrc) {
    image.src = data.imgsrc;
    image.alt = data.caption;
  } else {
    image.src = "";
    image.alt = "";
  }
  title.textContent = data.text;
  description.textContent = data.description;

}

function onSelectionDoubleClicked(e) {
  var node = e.diagram.selection.first();
  if (!(node instanceof go.Node)) return;
  var data = node.data;
  if(data.type == "valve"){
    valveStrategy();
  }
}

function valveStrategy() {
  if(valveflag){
    $.getJSON("/static/assets/production-process_2.json", function(json){
      myDiagram.animationManager.initialAnimationStyle = go.AnimationManager.None;
      myDiagram.model = go.Model.fromJson(json);
    });
    valveflag = false;
  } else {
    $.getJSON("/static/assets/production-process.json", function(json){
      myDiagram.animationManager.initialAnimationStyle = go.AnimationManager.None;
      myDiagram.model = go.Model.fromJson(json);
    })
    valveflag = true;
  }
  
  
}
