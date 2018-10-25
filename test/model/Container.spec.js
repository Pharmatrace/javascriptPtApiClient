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
    instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
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

  describe('Container', function() {
    it('should create an instance of Container', function() {
      // uncomment below and update the code to test Container
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be.a(PharmaTraceSupplyChainInformationNetworkApi.Container);
    });

    it('should have the property containerId (base name: "container_id")', function() {
      // uncomment below and update the code to test the property containerId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property epcCode (base name: "epc_code")', function() {
      // uncomment below and update the code to test the property epcCode
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property rfId (base name: "rf_id")', function() {
      // uncomment below and update the code to test the property rfId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property currentLocationId (base name: "current_location_id")', function() {
      // uncomment below and update the code to test the property currentLocationId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property ownerStakeholderId (base name: "owner_stakeholder_id")', function() {
      // uncomment below and update the code to test the property ownerStakeholderId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

    it('should have the property parentContainerId (base name: "parent_container_id")', function() {
      // uncomment below and update the code to test the property parentContainerId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.Container();
      //expect(instance).to.be();
    });

  });

}));
