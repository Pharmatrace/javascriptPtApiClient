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
    root.PharmaTraceSupplyChainInformationNetworkApi.Stakeholder = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Stakeholder model module.
   * @module model/Stakeholder
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Stakeholder</code>.
   * @alias module:model/Stakeholder
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Stakeholder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stakeholder} obj Optional instance to populate.
   * @return {module:model/Stakeholder} The populated <code>Stakeholder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trade_id')) {
        obj['trade_id'] = ApiClient.convertToType(data['trade_id'], 'String');
      }
      if (data.hasOwnProperty('trade_id_type')) {
        obj['trade_id_type'] = ApiClient.convertToType(data['trade_id_type'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('stakeholder_role')) {
        obj['stakeholder_role'] = ApiClient.convertToType(data['stakeholder_role'], 'String');
      }
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * unique official register entry, e.g. Handelsregistereintrag, court number, ...
   * @member {String} trade_id
   */
  exports.prototype['trade_id'] = undefined;
  /**
   * type of the official register that has issued the trade id
   * @member {String} trade_id_type
   */
  exports.prototype['trade_id_type'] = undefined;
  /**
   * display name visible to other network members
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * one of Manufacturer, Distributor, Pharmacy, Regulator, Hospital, MedicalPractice, CareProvider, DisposalFirm, Insurance, Patient, LawEnforcement
   * @member {String} stakeholder_role
   */
  exports.prototype['stakeholder_role'] = undefined;
  /**
   * id of the main wallet, which the stakeholder uses for PT token transactions with other stakeholders
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;



  return exports;
}));

