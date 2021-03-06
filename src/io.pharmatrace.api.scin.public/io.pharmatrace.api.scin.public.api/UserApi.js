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
    define(['io.pharmatrace.api.scin.public/ApiClient', 'io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Error', 'io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Profile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../io.pharmatrace.api.scin.public.model/Error'), require('../io.pharmatrace.api.scin.public.model/Profile'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.UserApi = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Error, root.PharmaTraceSupplyChainInformationNetworkApi.Profile);
  }
}(this, function(ApiClient, Error, Profile) {
  'use strict';

  /**
   * User service.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/UserApi
   * @version 0.0.1
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/UserApi
   * @class
   * @param {module:io.pharmatrace.api.scin.public/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:io.pharmatrace.api.scin.public/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the meGet operation.
     * @callback module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/UserApi~meGetCallback
     * @param {String} error Error message, if any.
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Profile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Profile
     * The User Profile endpoint returns information about the PharmaTrace user that has authorized with the application.
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/UserApi~meGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Profile}
     */
    this.meGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Profile;

      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
