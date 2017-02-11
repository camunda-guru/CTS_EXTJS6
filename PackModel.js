﻿Ext.define('D3Pack.view.d3.TreeViewModel', {
    extend: 'Ext.app.ViewModel',

    

    requires: [
        
        'Ext.data.TreeStore'
    ],

    alias: 'viewmodel.tree',

    stores: {
        store: {
            type: 'tree',
            
          
            data: [
        {
            "task": "Project: Shopping",
            "duration": 13.25,
            "user": "Tommy Maintz",
            "iconCls": "tree-grid-task-folder",
            "expanded": true,
            "children": [
                {
                    "task": "Housewares",
                    "duration": 1.25,
                    "user": "Tommy Maintz",
                    "iconCls": "tree-grid-task-folder",
                    "children": [
                        {
                            "task": "Kitchen supplies",
                            "duration": 0.25,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task"
                        }, {
                            "task": "Groceries",
                            "duration": .4,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task",
                            "done": true
                        }, {
                            "task": "Cleaning supplies",
                            "duration": .4,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task"
                        }, {
                            "task": "Office supplies",
                            "duration": .2,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task"
                        }
                    ]
                }, {
                    "task": "Remodeling",
                    "duration": 12,
                    "user": "Tommy Maintz",
                    "iconCls": "tree-grid-task-folder",
                    "expanded": true,
                    "children": [
                        {
                            "task": "Retile kitchen",
                            "duration": 6.5,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task"
                        }, {
                            "task": "Paint bedroom",
                            "duration": 2.75,
                            "user": "Tommy Maintz",
                            "iconCls": "tree-grid-task-folder",
                            "children": [
                                {
                                    "task": "Ceiling",
                                    "duration": 1.25,
                                    "user": "Tommy Maintz",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Walls",
                                    "duration": 1.5,
                                    "user": "Tommy Maintz",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }
                            ]
                        }, {
                            "task": "Decorate living room",
                            "duration": 2.75,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task",
                            "done": true
                        }, {
                            "task": "Fix lights",
                            "duration": .75,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task",
                            "done": true
                        }, {
                            "task": "Reattach screen door",
                            "duration": 2,
                            "user": "Tommy Maintz",
                            "leaf": true,
                            "iconCls": "tree-grid-task"
                        }
                    ]
                }
            ]
        }, {
            "task": "Project: Testing",
            "duration": 2,
            "user": "Core Team",
            "iconCls": "tree-grid-task-folder",
            "children": [
                {
                    "task": "Mac OSX",
                    "duration": 0.75,
                    "user": "Tommy Maintz",
                    "iconCls": "tree-grid-task-folder",
                    "children": [
                        {
                            "task": "FireFox",
                            "duration": 0.25,
                            "user": "Tommy Maintz",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }, {
                            "task": "Safari",
                            "duration": 0.25,
                            "user": "Tommy Maintz",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }, {
                            "task": "Chrome",
                            "duration": 0.25,
                            "user": "Tommy Maintz",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }
                    ]
                }, {
                    "task": "Windows",
                    "duration": 3.75,
                    "user": "Darrell Meyer",
                    "iconCls": "tree-grid-task-folder",
                    "children": [
                        {
                            "task": "FireFox",
                            "duration": 0.25,
                            "user": "Darrell Meyer",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }, {
                            "task": "Safari",
                            "duration": 0.25,
                            "user": "Darrell Meyer",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }, {
                            "task": "Chrome",
                            "duration": 0.25,
                            "user": "Darrell Meyer",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }, {
                            "task": "Internet Explorer",
                            "duration": 3,
                            "user": "Darrell Meyer",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }
                    ]
                }, {
                    "task": "Linux",
                    "duration": 0.5,
                    "user": "Aaron Conran",
                    "iconCls": "tree-grid-task-folder",
                    "children": [
                        {
                            "task": "FireFox",
                            "duration": 0.25,
                            "user": "Aaron Conran",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }, {
                            "task": "Chrome",
                            "duration": 0.25,
                            "user": "Aaron Conran",
                            "iconCls": "tree-grid-task",
                            "leaf": true
                        }
                    ]
                }
            ]
        }
            ],
    autoLoad: true,
            root: {
                text: 'Task'
            }
        }
    }


});