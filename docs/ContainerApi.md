# PharmaTraceSupplyChainInformationNetworkApi.ContainerApi

All URIs are relative to *https://api.pharmatrace.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationHistoryGet**](ContainerApi.md#locationHistoryGet) | **GET** /locationHistory | Location History


<a name="locationHistoryGet"></a>
# **locationHistoryGet**
> Locations locationHistoryGet(opts)

Location History

Returns the location history of a container or a individually labeled pharmaceutical

### Example
```javascript
var PharmaTraceSupplyChainInformationNetworkApi = require('pharma_trace_supply_chain_information_network_api');

var apiInstance = new PharmaTraceSupplyChainInformationNetworkApi.ContainerApi();
var opts = {
  'containerId': "containerId_example", // String | container id of the tracked container.
  'offset': 56, // Number | Offset the list of returned results by this amount. Default is zero.
  'limit': 56 // Number | Number of items to retrieve. Default is 5, maximum is 100.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locationHistoryGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **containerId** | **String**| container id of the tracked container. | [optional] 
 **offset** | **Number**| Offset the list of returned results by this amount. Default is zero. | [optional] 
 **limit** | **Number**| Number of items to retrieve. Default is 5, maximum is 100. | [optional] 

### Return type

[**Locations**](Locations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

