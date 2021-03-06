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
    define(['io.pharmatrace.api.scin.public/ApiClient', 'io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.Repackage = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Transaction);
  }
}(this, function(ApiClient, Transaction) {
  'use strict';



  /**
   * The Repackage model module.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Repackage</code>.
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage
   * @class
   * @implements module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Transaction
   */
  var exports = function() {
    var _this = this;

    Transaction.call(_this);
  };

  /**
   * Constructs a <code>Repackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage} obj Optional instance to populate.
   * @return {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage} The populated <code>Repackage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Transaction.constructFromObject(data, obj);
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('tx_uid')) {
        obj['tx_uid'] = ApiClient.convertToType(data['tx_uid'], 'String');
      }
      if (data.hasOwnProperty('terms_id')) {
        obj['terms_id'] = ApiClient.convertToType(data['terms_id'], 'String');
      }
      if (data.hasOwnProperty('transaction_channel')) {
        obj['transaction_channel'] = ApiClient.convertToType(data['transaction_channel'], 'String');
      }
    }
    return obj;
  }

  /**
   * GMT, Unix Epoch
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * unique id hash of the transaction
   * @member {String} tx_uid
   */
  exports.prototype['tx_uid'] = undefined;
  /**
   * id reference to the terms and conditions for this transaction
   * @member {String} terms_id
   */
  exports.prototype['terms_id'] = undefined;
  /**
   * hyperledger channel the transaction has been executed in
   * @member {String} transaction_channel
   */
  exports.prototype['transaction_channel'] = undefined;

  // Implement Transaction interface:
  /**
   * GMT, Unix Epoch
   * @member {Number} timestamp
   */
exports.prototype['timestamp'] = undefined;

  /**
   * unique id hash of the transaction
   * @member {String} tx_uid
   */
exports.prototype['tx_uid'] = undefined;

  /**
   * id reference to the terms and conditions for this transaction
   * @member {String} terms_id
   */
exports.prototype['terms_id'] = undefined;

  /**
   * hyperledger channel the transaction has been executed in
   * @member {String} transaction_channel
   */
exports.prototype['transaction_channel'] = undefined;



  return exports;
}));


