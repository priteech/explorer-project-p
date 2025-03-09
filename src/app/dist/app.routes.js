"use strict";
exports.__esModule = true;
exports.routes = void 0;
exports.routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./home/home.component'); }).then(function (m) { return m.HomeComponent; }); }
    },
    {
        path: 'todos',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./todos/todos.component'); }).then(function (m) { return m.TodosComponent; }); }
    }
];
