"use strict";
/**
 * ContentfulModel holds configuration values to communicate with
 * Contentful's Delivery API.
 *
 * The default setup uses the space shared with the ios and android demo apps.
 *
 */
var ContentfulModel = (function () {
    function ContentfulModel(spaceId, apiKey, productContentType, categoryContentType) {
        this.spaceId = spaceId;
        this.apiKey = apiKey;
        this.productContentType = productContentType;
        this.categoryContentType = categoryContentType;
    }
    return ContentfulModel;
}());
exports.ContentfulModel = ContentfulModel;
//# sourceMappingURL=contentful-model.js.map