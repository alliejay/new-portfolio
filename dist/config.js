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
var Config = (function () {
    function Config() {
    }
    Config.BASE_FOLDER = 'cfApiKey';
    Config.SESSION_STORAGE_API_KEY = 'cfApiKey';
    Config.SESSION_STORAGE_SPACE_ID = 'cfSpaceId';
    Config.SPACE_ID = 'nmgztccbw6vv';
    Config.API_KEY = 'e497757882cd3b4ec4e7de59146786c0ecf6eb4af395bbcb6fd97c68b809fe31';
    //public static API_KEY:string = 'ecf6be82900f0a5421c8bcdeef94d3822360a5c3f6204649e6849937bc1727ec';
    Config.PRODUCT_CONTENT_TYPE_ID = '2PqfXUJwE8qSYKuM0U6w8M';
    Config.CATEGORY_CONTENT_TYPE_ID = '6XwpTaSiiI2Ak2Ww0oi6qa';
    Config.URL_BASE_PATH = '/product-catalogue-web.ts/';
    //public static URL_BASE_PATH:string = '/';
    Config.URL_SETTINGS_DEEPLINK = '#/settings?';
    Config = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Config);
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map