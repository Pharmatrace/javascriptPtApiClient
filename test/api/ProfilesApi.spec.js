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
    instance = new PharmaTraceSupplyChainInformationNetworkApi.ProfilesApi();
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

  describe('ProfilesApi', function() {
    describe('addProfile', function() {
      it('should call addProfile successfully', function(done) {
        //uncomment below and update the code to test addProfile
        //instance.addProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProfile', function() {
      it('should call deleteProfile successfully', function(done) {
        //uncomment below and update the code to test deleteProfile
        //instance.deleteProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findProfileById', function() {
      it('should call findProfileById successfully', function(done) {
        //uncomment below and update the code to test findProfileById
        //instance.findProfileById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findProfiles', function() {
      it('should call findProfiles successfully', function(done) {
        //uncomment below and update the code to test findProfiles
        //instance.findProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
