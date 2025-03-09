"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HighlighterDirective = void 0;
var core_1 = require("@angular/core");
var HighlighterDirective = /** @class */ (function () {
    function HighlighterDirective() {
        var _this = this;
        this.isComplete = core_1.input(false);
        this.el = core_1.inject(core_1.ElementRef);
        this.styleEffect = core_1.effect(function () {
            if (!_this.isComplete()) {
                _this.el.nativeElement.style.backgroundColor = "#023b11";
            }
            else {
                _this.el.nativeElement.style.backgroundColor = "#704402";
            }
        });
    }
    HighlighterDirective = __decorate([
        core_1.Directive({
            selector: '[appHighlighter]'
        })
    ], HighlighterDirective);
    return HighlighterDirective;
}());
exports.HighlighterDirective = HighlighterDirective;
