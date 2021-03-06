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
    root.PharmaTraceSupplyChainInformationNetworkApi.SystemInformation = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SystemInformation model module.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/SystemInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SystemInformation</code>.
   * Global system message from PT node operators / Newsfeed
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/SystemInformation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SystemInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/SystemInformation} obj Optional instance to populate.
   * @return {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/SystemInformation} The populated <code>SystemInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the system information.
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * Iso Language code, e.g. en_us.
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Message header.
   * @member {String} header
   */
  exports.prototype['header'] = undefined;
  /**
   * message body.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


