"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodosComponent = void 0;
var core_1 = require("@angular/core");
var todos_s_service_1 = require("../services/todos-s.service");
var rxjs_1 = require("rxjs");
var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoItem) {
        this.todoItem = todoItem;
        this.todoS = core_1.signal([]);
        this.todoIteamS = core_1.inject(todos_s_service_1.TodosSService);
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoIteamS
            .getHttpData()
            .pipe(rxjs_1.catchError(function (error) {
            throw error;
        }))
            .subscribe(function (todo1) { return _this.todoS.set(todo1); });
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'app-todos',
            imports: [],
            templateUrl: './todos.component.html',
            styleUrl: './todos.component.scss'
        })
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
