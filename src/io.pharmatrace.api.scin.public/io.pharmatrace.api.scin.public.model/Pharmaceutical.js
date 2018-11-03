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
    define(['io.pharmatrace.api.scin.public/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.Pharmaceutical = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Pharmaceutical model module.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Pharmaceutical
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Pharmaceutical</code>.
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Pharmaceutical
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Pharmaceutical</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Pharmaceutical} obj Optional instance to populate.
   * @return {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Pharmaceutical} The populated <code>Pharmaceutical</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('pharmaceutical_id')) {
        obj['pharmaceutical_id'] = ApiClient.convertToType(data['pharmaceutical_id'], 'String');
      }
      if (data.hasOwnProperty('gtin')) {
        obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
      }
      if (data.hasOwnProperty('trade_name')) {
        obj['trade_name'] = ApiClient.convertToType(data['trade_name'], 'String');
      }
      if (data.hasOwnProperty('ean_code')) {
        obj['ean_code'] = ApiClient.convertToType(data['ean_code'], 'String');
      }
      if (data.hasOwnProperty('manufacturer_id')) {
        obj['manufacturer_id'] = ApiClient.convertToType(data['manufacturer_id'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
    }
    return obj;
  }

  /**
   * Either gtin or synthetical for precision medicine.
   * @member {String} pharmaceutical_id
   */
  exports.prototype['pharmaceutical_id'] = undefined;
  /**
   * Global trade item number (GS1)
   * @member {String} gtin
   */
  exports.prototype['gtin'] = undefined;
  /**
   * Manufacturers official name of the pharmaceutical product.
   * @member {String} trade_name
   */
  exports.prototype['trade_name'] = undefined;
  /**
   * EAN code.
   * @member {String} ean_code
   */
  exports.prototype['ean_code'] = undefined;
  /**
   * Manufaturer id
   * @member {String} manufacturer_id
   */
  exports.prototype['manufacturer_id'] = undefined;
  /**
   * Image URL representing the product.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;



  return exports;
}));


