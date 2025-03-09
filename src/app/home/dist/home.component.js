"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.homeMessage = core_1.signal('yyyyyyyyyyyyyyyyyyyyyyyyy');
        this.xyz = '';
    }
    HomeComponent.prototype.keyUpHandller = function (event) {
        console.log("user press " + event.key + " key");
        this.xyz = "user press " + event.key + " key";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            standalone: true,
            // imports: [GreetingComponent, CounterComponent],
            templateUrl: './home.component.html',
            styleUrl: './home.component.scss'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
