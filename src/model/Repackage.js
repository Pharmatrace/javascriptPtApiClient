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
    define(['ApiClient', 'model/Transaction'], factory);
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
   * @module model/Repackage
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Repackage</code>.
   * @alias module:model/Repackage
   * @class
   * @extends module:model/Transaction
   * @implements module:model/Transaction
   */
  var exports = function() {
    var _this = this;
    Transaction.call(_this);
    Transaction.call(_this);
  };

  /**
   * Constructs a <code>Repackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Repackage} obj Optional instance to populate.
   * @return {module:model/Repackage} The populated <code>Repackage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Transaction.constructFromObject(data, obj);
      Transaction.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Transaction.prototype);
  exports.prototype.constructor = exports;


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


