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
<<<<<<< HEAD
 * OpenAPI Generator version: 3.3.2
=======
 * OpenAPI Generator version: 3.3.1
>>>>>>> a6118ed8961f917750a5536f1f51a2b78e400369
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
    instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
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

  describe('LegalTxTerms', function() {
    it('should create an instance of LegalTxTerms', function() {
      // uncomment below and update the code to test LegalTxTerms
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be.a(PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms);
    });

    it('should have the property timestampValidFrom (base name: "timestamp_valid_from")', function() {
      // uncomment below and update the code to test the property timestampValidFrom
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property timestampValidUntil (base name: "timestamp_valid_until")', function() {
      // uncomment below and update the code to test the property timestampValidUntil
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property validityTolerance (base name: "validity_tolerance")', function() {
      // uncomment below and update the code to test the property validityTolerance
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property termsId (base name: "terms_id")', function() {
      // uncomment below and update the code to test the property termsId
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property termsVersion (base name: "terms_version")', function() {
      // uncomment below and update the code to test the property termsVersion
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property termsIdPreviousVersion (base name: "terms_id_previous_version")', function() {
      // uncomment below and update the code to test the property termsIdPreviousVersion
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property termsText (base name: "terms_text")', function() {
      // uncomment below and update the code to test the property termsText
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

    it('should have the property legislation (base name: "legislation")', function() {
      // uncomment below and update the code to test the property legislation
      //var instance = new PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms();
      //expect(instance).to.be();
    });

  });

}));
