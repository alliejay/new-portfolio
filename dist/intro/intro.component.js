"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngAfterViewInit = function () {
        $("#js-rotating").Morphext({
            animation: "fadeIn",
            speed: 2000
        });
    };
    __decorate([
        core_1.ViewChild('#selectElem'), 
        __metadata('design:type', core_1.ElementRef)
    ], IntroComponent.prototype, "el", void 0);
    IntroComponent = __decorate([
        core_1.Component({
            selector: 'intro',
            templateUrl: 'app/intro/intro.component.html',
            styleUrls: ['app/intro/style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;
//# sourceMappingURL=intro.component.js.map