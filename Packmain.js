Ext.define('D3Pack.view.d3.Pack', {
    extend: 'Ext.Panel',
    requires: [
        'D3Pack.view.d3.TreeViewModel',
        'Ext.d3.hierarchy.Pack'
    ],


    controller: 'pack',

    viewModel: {
        type: 'tree'
    },

    session: true,

    cls: 'card1',
    layout: 'fit',
    shadow: true,

    items: [{
        xtype: 'd3-pack',
        padding: 20,
        bind: {
            store: '{store}'
        },
        tooltip: {
            renderer: 'onTooltip'
        }
    }]
});