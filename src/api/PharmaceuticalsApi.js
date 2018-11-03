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
    define(['ApiClient', 'model/Error', 'model/Pharmaceutical'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Pharmaceutical'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.PharmaceuticalsApi = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Error, root.PharmaTraceSupplyChainInformationNetworkApi.Pharmaceutical);
  }
}(this, function(ApiClient, Error, Pharmaceutical) {
  'use strict';

  /**
   * Pharmaceuticals service.
   * @module api/PharmaceuticalsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PharmaceuticalsApi. 
   * @alias module:api/PharmaceuticalsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addPharmaceutical operation.
     * @callback module:api/PharmaceuticalsApi~addPharmaceuticalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pharmaceutical} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new pharmaceutical
     * @param {module:model/Pharmaceutical} pharmaceutical Pharmaceutical to create
     * @param {module:api/PharmaceuticalsApi~addPharmaceuticalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pharmaceutical}
     */
    this.addPharmaceutical = function(pharmaceutical, callback) {
      var postBody = pharmaceutical;

      // verify the required parameter 'pharmaceutical' is set
      if (pharmaceutical === undefined || pharmaceutical === null) {
        throw new Error("Missing the required parameter 'pharmaceutical' when calling addPharmaceutical");
      }


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Pharmaceutical;

      return this.apiClient.callApi(
        '/pharmaceuticals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePharmaceutical operation.
     * @callback module:api/PharmaceuticalsApi~deletePharmaceuticalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes a single pharmaceutical based on the ID supplied
     * @param {Number} id ID of pharmaceutical to delete
     * @param {module:api/PharmaceuticalsApi~deletePharmaceuticalCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePharmaceutical = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePharmaceutical");
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/pharmaceuticals/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findPharmaceuticalById operation.
     * @callback module:api/PharmaceuticalsApi~findPharmaceuticalByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pharmaceutical} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a pharmaceutical based on the ID
     * @param {Number} id ID of pharmaceutical to fetch
     * @param {module:api/PharmaceuticalsApi~findPharmaceuticalByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pharmaceutical}
     */
    this.findPharmaceuticalById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findPharmaceuticalById");
      }


      var pathParams = {
        'id': id
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
      var returnType = Pharmaceutical;

      return this.apiClient.callApi(
        '/pharmaceuticals/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findPharmaceuticals operation.
     * @callback module:api/PharmaceuticalsApi~findPharmaceuticalsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pharmaceutical>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all pharmaceuticals from the system that the user has access to Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.  Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tags tags to filter by
     * @param {Number} opts.limit maximum number of results to return
     * @param {module:api/PharmaceuticalsApi~findPharmaceuticalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Pharmaceutical>}
     */
    this.findPharmaceuticals = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
        'tags': {
          value: opts['tags'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Pharmaceutical];

      return this.apiClient.callApi(
        '/pharmaceuticals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
