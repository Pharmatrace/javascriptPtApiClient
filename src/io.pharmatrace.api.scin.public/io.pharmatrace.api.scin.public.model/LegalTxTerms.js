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
    root.PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The LegalTxTerms model module.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/LegalTxTerms
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>LegalTxTerms</code>.
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/LegalTxTerms
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>LegalTxTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/LegalTxTerms} obj Optional instance to populate.
   * @return {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/LegalTxTerms} The populated <code>LegalTxTerms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('timestamp_valid_from')) {
        obj['timestamp_valid_from'] = ApiClient.convertToType(data['timestamp_valid_from'], 'Number');
      }
      if (data.hasOwnProperty('timestamp_valid_until')) {
        obj['timestamp_valid_until'] = ApiClient.convertToType(data['timestamp_valid_until'], 'Number');
      }
      if (data.hasOwnProperty('validity_tolerance')) {
        obj['validity_tolerance'] = ApiClient.convertToType(data['validity_tolerance'], 'Number');
      }
      if (data.hasOwnProperty('terms_id')) {
        obj['terms_id'] = ApiClient.convertToType(data['terms_id'], 'String');
      }
      if (data.hasOwnProperty('terms_version')) {
        obj['terms_version'] = ApiClient.convertToType(data['terms_version'], 'String');
      }
      if (data.hasOwnProperty('terms_id_previous_version')) {
        obj['terms_id_previous_version'] = ApiClient.convertToType(data['terms_id_previous_version'], 'String');
      }
      if (data.hasOwnProperty('terms_text')) {
        obj['terms_text'] = ApiClient.convertToType(data['terms_text'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('legislation')) {
        obj['legislation'] = ApiClient.convertToType(data['legislation'], 'String');
      }
    }
    return obj;
  }

  /**
   * GMT, Unix Epoch
   * @member {Number} timestamp_valid_from
   */
  exports.prototype['timestamp_valid_from'] = undefined;
  /**
   * GMT, Unix Epoch
   * @member {Number} timestamp_valid_until
   */
  exports.prototype['timestamp_valid_until'] = undefined;
  /**
   * tolerance window for transactions that begin but do not finish under the governance of these terms (in ms)
   * @member {Number} validity_tolerance
   */
  exports.prototype['validity_tolerance'] = undefined;
  /**
   * unique id hash of the transaction terms and conditions
   * @member {String} terms_id
   */
  exports.prototype['terms_id'] = undefined;
  /**
   * optional version mark of the terms
   * @member {String} terms_version
   */
  exports.prototype['terms_version'] = undefined;
  /**
   * optional link to the previous version of these terms
   * @member {String} terms_id_previous_version
   */
  exports.prototype['terms_id_previous_version'] = undefined;
  /**
   * text of the terms and conditions
   * @member {String} terms_text
   */
  exports.prototype['terms_text'] = undefined;
  /**
   * ISO language code, e.g. en_us
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * legislation enforcing these terms
   * @member {String} legislation
   */
  exports.prototype['legislation'] = undefined;



  return exports;
}));

