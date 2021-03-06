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
 * OpenAPI Generator version: 3.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.Location = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Location model module.
   * @module model/Location
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('location_type')) {
        obj['location_type'] = ApiClient.convertToType(data['location_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * GMT, C time format.
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Unique identifier for the location.
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * longitude.
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * latitude.
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * type of container location, e.g. VESSEL, AIR, STREET, WAREHOUSE, PROCESSING, STORE, WITH_PATIENT, ...
   * @member {String} location_type
   */
  exports.prototype['location_type'] = undefined;



  return exports;
}));


