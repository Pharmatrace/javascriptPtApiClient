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
    define(['io.pharmatrace.api.scin.public/ApiClient', 'io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Error', 'io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../io.pharmatrace.api.scin.public.model/Error'), require('../io.pharmatrace.api.scin.public.model/Repackage'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.RepackagesApi = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Error, root.PharmaTraceSupplyChainInformationNetworkApi.Repackage);
  }
}(this, function(ApiClient, Error, Repackage) {
  'use strict';

  /**
   * Repackages service.
   * @module io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new RepackagesApi. 
   * @alias module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi
   * @class
   * @param {module:io.pharmatrace.api.scin.public/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:io.pharmatrace.api.scin.public/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addRepackage operation.
     * @callback module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~addRepackageCallback
     * @param {String} error Error message, if any.
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new repackage
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage} repackage Repackage to create
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~addRepackageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage}
     */
    this.addRepackage = function(repackage, callback) {
      var postBody = repackage;

      // verify the required parameter 'repackage' is set
      if (repackage === undefined || repackage === null) {
        throw new Error("Missing the required parameter 'repackage' when calling addRepackage");
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
      var returnType = Repackage;

      return this.apiClient.callApi(
        '/repackages', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRepackage operation.
     * @callback module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~deleteRepackageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes a single repackage based on the ID supplied
     * @param {Number} id ID of repackage to delete
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~deleteRepackageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRepackage = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRepackage");
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
        '/repackages/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findRepackageById operation.
     * @callback module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~findRepackageByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a repackage based on the ID
     * @param {Number} id ID of repackage to fetch
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~findRepackageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage}
     */
    this.findRepackageById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findRepackageById");
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
      var returnType = Repackage;

      return this.apiClient.callApi(
        '/repackages/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findRepackages operation.
     * @callback module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~findRepackagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all repackages from the system that the user has access to Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.  Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tags tags to filter by
     * @param {Number} opts.limit maximum number of results to return
     * @param {module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.api/RepackagesApi~findRepackagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:io.pharmatrace.api.scin.public/io.pharmatrace.api.scin.public.model/Repackage>}
     */
    this.findRepackages = function(opts, callback) {
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
      var returnType = [Repackage];

      return this.apiClient.callApi(
        '/repackages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
