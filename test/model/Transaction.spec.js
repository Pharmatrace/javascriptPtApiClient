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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PharmaTraceSupplyChainInformationNetworkApi);
  }
}(this, function(expect, PharmaTraceSupplyChainInformationNetworkApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PharmaTraceSupplyChainInformationNetworkApi.Transaction();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Transaction', function() {
    it('should create an instance of Transaction', function() {
      // uncomment below and update the code to test Transaction
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Transaction();
      //expect(instance).to.be.a(PharmaTraceSupplyChainInformationNetworkApi.Transaction);
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property txUid (base name: "tx_uid")', function() {
      // uncomment below and update the code to test the property txUid
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property termsId (base name: "terms_id")', function() {
      // uncomment below and update the code to test the property termsId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionChannel (base name: "transaction_channel")', function() {
      // uncomment below and update the code to test the property transactionChannel
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Transaction();
      //expect(instance).to.be();
    });

  });

}));