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
    root.PharmaTraceSupplyChainInformationNetworkApi.Container = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Container model module.
   * @module model/Container
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Container</code>.
   * @alias module:model/Container
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Container} obj Optional instance to populate.
   * @return {module:model/Container} The populated <code>Container</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('container_id')) {
        obj['container_id'] = ApiClient.convertToType(data['container_id'], 'String');
      }
      if (data.hasOwnProperty('epc_code')) {
        obj['epc_code'] = ApiClient.convertToType(data['epc_code'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('barcode')) {
        obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
      }
      if (data.hasOwnProperty('rf_id')) {
        obj['rf_id'] = ApiClient.convertToType(data['rf_id'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('current_location_id')) {
        obj['current_location_id'] = ApiClient.convertToType(data['current_location_id'], 'String');
      }
      if (data.hasOwnProperty('owner_stakeholder_id')) {
        obj['owner_stakeholder_id'] = ApiClient.convertToType(data['owner_stakeholder_id'], 'String');
      }
      if (data.hasOwnProperty('parent_container_id')) {
        obj['parent_container_id'] = ApiClient.convertToType(data['parent_container_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier representing a specific container.
   * @member {String} container_id
   */
  exports.prototype['container_id'] = undefined;
  /**
   * EPC code
   * @member {String} epc_code
   */
  exports.prototype['epc_code'] = undefined;
  /**
   * Serialization label.
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * barcode on container. Normally equal to container id.
   * @member {String} barcode
   */
  exports.prototype['barcode'] = undefined;
  /**
   * RFID of RF tracking label on conatiner.
   * @member {String} rf_id
   */
  exports.prototype['rf_id'] = undefined;
  /**
   * quantity of product in container.
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Unit for quantity measurement.
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * Location id of last tracked locaction.
   * @member {String} current_location_id
   */
  exports.prototype['current_location_id'] = undefined;
  /**
   * stakeholder id of the last tracked owner of the container.
   * @member {String} owner_stakeholder_id
   */
  exports.prototype['owner_stakeholder_id'] = undefined;
  /**
   * id of the parent container or null.
   * @member {String} parent_container_id
   */
  exports.prototype['parent_container_id'] = undefined;



  return exports;
}));


