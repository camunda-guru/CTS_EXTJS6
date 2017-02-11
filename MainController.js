/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TreeHierarchy.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tree',

    requires: [
        'Ext.util.Format'
    ],

    onTooltip: function (component, tooltip, node, element, event) {
        var n = node.childNodes.length;

        tooltip.setHtml(n + ' items' + (n === 1 ? '' : 's') + ' inside.');
    }
});
