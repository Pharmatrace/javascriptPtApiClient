/**
 * PharmaTrace Supply Chain Information Network API
 * The PharmaTrace SCIN API provides network members a resource and process oriented access to the blockchain backed market and inventory information. It represents a layer of abstraction above the Hyperledger network to facilitate a business focused development of clients and integration systems without the need to directly connect to Hyperledger nodes.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: api@pharmatrace.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.pharmatrace.api.scin.public/ApiClient', 'io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Container'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Container'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.Containers = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Container);
  }
}(this, function(ApiClient, Container) {
  'use strict';



  /**
   * The Containers model module.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Containers
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Containers</code>.
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Containers
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Containers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Containers} obj Optional instance to populate.
   * @return {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Containers} The populated <code>Containers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('listing')) {
        obj['listing'] = ApiClient.convertToType(data['listing'], [Container]);
      }
    }
    return obj;
  }

  /**
   * Position in pagination.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Number of items to retrieve (100 max).
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Total number of items available.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Array.<module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Container>} listing
   */
  exports.prototype['listing'] = undefined;



  return exports;
}));


