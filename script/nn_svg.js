// Generated by CoffeeScript 1.9.3
(function() {
  var Layer, func_NN, horizontalDistance, verticalDistance;

  verticalDistance = 2;

  horizontalDistance = 2;

  $(document).ready(function() {
    var anchor, architecture, nn, s;
    architecture = [6, 6, 6, 1];
    anchor = [50, 475];
    nn = func_NN(anchor, architecture);
    return s = new sigma({
      graph: nn,
      container: 'graph-container',
      settings: {
        drawEdges: true
      }
    });
  });

  func_NN = function(P, architecture) {
    var i, j, k, l, layer, len, len1, len2, len3, m, n, nn, node, num_layers, ref, ref1, ref2, target;
    nn = {
      layers: [],
      edges: []
    };
    num_layers = architecture.length;
    for (i = k = 0, len = architecture.length; k < len; i = ++k) {
      layer = architecture[i];
      P = [P[0] + i * horizontalDistance, P[1]];
      nn.layers.push(Layer(P, i, layer));
    }
    ref = nn.layers;
    for (i = l = 0, len1 = ref.length; l < len1; i = ++l) {
      layer = ref[i];
      for (j = m = 0, len2 = layer.length; m < len2; j = ++m) {
        node = layer[j];
        if (i + 1 < num_layers) {
          ref1 = nn.layers[i + 1];
          for (n = 0, len3 = ref1.length; n < len3; n++) {
            target = ref1[n];
            nn.edges.push({
              id: node.id + '-' + target.id,
              source: node.id,
              target: target.id
            });
          }
        }
      }
    }
    nn.nodes = (ref2 = []).concat.apply(ref2, nn.layers);
    delete nn.layers;
    return nn;
  };

  Layer = function(P, layer_id, num_nodes) {
    var j, k, nodes, ref;
    nodes = [];
    for (j = k = 1, ref = num_nodes; 1 <= ref ? k <= ref : k >= ref; j = 1 <= ref ? ++k : --k) {
      nodes.push({
        id: layer_id + '.' + j,
        label: layer_id + '.' + j,
        x: P[0],
        y: P[1] + j * verticalDistance,
        size: 1,
        color: '#123456'
      });
    }
    return nodes;
  };

}).call(this);
