"use strict";
exports.__esModule = true;
exports.TasksServiceToken = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("./app/app.config");
var app_component_1 = require("./app/app.component");
var core_1 = require("@angular/core");
platform_browser_1.bootstrapApplication(app_component_1.AppComponent, app_config_1.appConfig)["catch"](function (err) { return console.error(err); });
exports.TasksServiceToken = new core_1.InjectionToken('TasksServiceToken');
