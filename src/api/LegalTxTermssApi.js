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
    define(['ApiClient', 'model/Error', 'model/LegalTxTerms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/LegalTxTerms'));
  } else {
    // Browser globals (root is window)
    if (!root.PharmaTraceSupplyChainInformationNetworkApi) {
      root.PharmaTraceSupplyChainInformationNetworkApi = {};
    }
    root.PharmaTraceSupplyChainInformationNetworkApi.LegalTxTermssApi = factory(root.PharmaTraceSupplyChainInformationNetworkApi.ApiClient, root.PharmaTraceSupplyChainInformationNetworkApi.Error, root.PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms);
  }
}(this, function(ApiClient, Error, LegalTxTerms) {
  'use strict';

  /**
   * LegalTxTermss service.
   * @module api/LegalTxTermssApi
   * @version 0.0.1
   */

  /**
   * Constructs a new LegalTxTermssApi. 
   * @alias module:api/LegalTxTermssApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLegalTxTerms operation.
     * @callback module:api/LegalTxTermssApi~addLegalTxTermsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTxTerms} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new legaltxterms
     * @param {module:model/LegalTxTerms} legalTxTerms LegalTxTerms to create
     * @param {module:api/LegalTxTermssApi~addLegalTxTermsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTxTerms}
     */
    this.addLegalTxTerms = function(legalTxTerms, callback) {
      var postBody = legalTxTerms;

      // verify the required parameter 'legalTxTerms' is set
      if (legalTxTerms === undefined || legalTxTerms === null) {
        throw new Error("Missing the required parameter 'legalTxTerms' when calling addLegalTxTerms");
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
      var returnType = LegalTxTerms;

      return this.apiClient.callApi(
        '/legaltxtermss', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLegalTxTerms operation.
     * @callback module:api/LegalTxTermssApi~deleteLegalTxTermsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes a single legaltxterms based on the ID supplied
     * @param {Number} id ID of legaltxterms to delete
     * @param {module:api/LegalTxTermssApi~deleteLegalTxTermsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLegalTxTerms = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLegalTxTerms");
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
        '/legaltxtermss/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findLegalTxTermss operation.
     * @callback module:api/LegalTxTermssApi~findLegalTxTermssCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LegalTxTerms>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all legaltxtermss from the system that the user has access to Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.  Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tags tags to filter by
     * @param {Number} opts.limit maximum number of results to return
     * @param {module:api/LegalTxTermssApi~findLegalTxTermssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LegalTxTerms>}
     */
    this.findLegalTxTermss = function(opts, callback) {
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
      var returnType = [LegalTxTerms];

      return this.apiClient.callApi(
        '/legaltxtermss', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findLegaltxtermsById operation.
     * @callback module:api/LegalTxTermssApi~findLegaltxtermsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTxTerms} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a legaltxterms based on the ID
     * @param {Number} id ID of legaltxterms to fetch
     * @param {module:api/LegalTxTermssApi~findLegaltxtermsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTxTerms}
     */
    this.findLegaltxtermsById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findLegaltxtermsById");
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
      var returnType = LegalTxTerms;

      return this.apiClient.callApi(
        '/legaltxtermss/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
