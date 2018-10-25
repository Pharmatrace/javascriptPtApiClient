# PharmaTraceSupplyChainInformationNetworkApi.UserApi

All URIs are relative to *https://api.pharmatrace.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meGet**](UserApi.md#meGet) | **GET** /me | User Profile


<a name="meGet"></a>
# **meGet**
> Profile meGet()

User Profile

The User Profile endpoint returns information about the PharmaTrace user that has authorized with the application.

### Example
```javascript
var PharmaTraceSupplyChainInformationNetworkApi = require('pharma_trace_supply_chain_information_network_api');

var apiInstance = new PharmaTraceSupplyChainInformationNetworkApi.UserApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.meGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

