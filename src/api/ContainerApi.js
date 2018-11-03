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
    define(['ApiClient', 'model/Error', 'model/Locations'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Locations'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.ContainerApi = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Error, root.PharmaTraceSupplyChainInformationNetworkApi.Locations);
  }
}(this, function(ApiClient, Error, Locations) {
  'use strict';

  /**
   * Container service.
   * @module api/ContainerApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ContainerApi. 
   * @alias module:api/ContainerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the locationHistoryGet operation.
     * @callback module:api/ContainerApi~locationHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Locations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Location History
     * Returns the location history of a container or a individually labeled pharmaceutical
     * @param {Object} opts Optional parameters
     * @param {String} opts.containerId container id of the tracked container.
     * @param {Number} opts.offset Offset the list of returned results by this amount. Default is zero.
     * @param {Number} opts.limit Number of items to retrieve. Default is 5, maximum is 100.
     * @param {module:api/ContainerApi~locationHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Locations}
     */
    this.locationHistoryGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'container_id': opts['containerId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = Locations;

      return this.apiClient.callApi(
        '/locationHistory', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));