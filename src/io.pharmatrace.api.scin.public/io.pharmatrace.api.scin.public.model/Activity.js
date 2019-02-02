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
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.pharmatrace.api.scin.public/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.Activity = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Activity model module.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Activity
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Activity</code>.
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Activity
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Activity} obj Optional instance to populate.
   * @return {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Activity} The populated <code>Activity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the activity
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;



  return exports;
}));


