Ext.define('D3Pack.view.d3.PackController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pack',

    requires: [
        'Ext.util.Format'
    ],

    onTooltip: function (component, tooltip, node, element, event) {
        var size = node.get('task'),
            n = node.childNodes.length;
        console.log(size);


        if (size) {
            tooltip.setHtml(node.data.task);
        } else {
            tooltip.setHtml(n + ' file' + (n === 1 ? '' : 's') + ' inside.');
        }
    }

});