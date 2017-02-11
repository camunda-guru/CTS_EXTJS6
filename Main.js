/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('TreeHierarchy.view.main.Main', {
    extend: 'Ext.Panel',
    controller: 'tree',

    requires: [
        'TreeHierarchy.view.main.MainModel',
        'Ext.d3.hierarchy.tree.HorizontalTree',
        'Ext.d3.interaction.PanZoom',
        'Ext.tip.ToolTip'
    ],


    viewModel: {
        type: 'salary'
    },

    session: true,

    cls: 'card1',
    layout: 'fit',
    shadow: true,
    items: [{
        xtype: 'd3-tree',
        bind: {
            store: '{store}'
        },
        colorAxis: {
            field: 'id'
        },
        interactions: {
            type: 'panzoom',
            zoom: {
                extent: [0.3, 10],
                doubleTap: false
            }
        },
        nodeSize: [30, 250],
        nodeRadius: 20,
        nodeText: function (tree, node) {
            var text = node.data.text;
            //console.log(node.data);
            if (node.depth ==1) {
                text += ' (' + node.data.industry_type + ')';
            }
            console.log(node.depth);
            if (node.depth ==2) {
               
                text += ' (' + node.data.state + '=>' + Ext.util.Format.currency(node.data.salary, '$', 0) + ')';
            }
            return text;
        },
        tooltip: {
            renderer: 'onTooltip'
        },
        platformConfig: {
            desktop: {
                nodeSize: [20, 250],
                nodeRadius: 10
            }
        }
    }]
});
