# pharma_trace_supply_chain_information_network_api

PharmaTraceSupplyChainInformationNetworkApi - JavaScript client for pharma_trace_supply_chain_information_network_api
The PharmaTrace SCIN API provides network members a resource and process oriented access to the blockchain backed market and inventory information. It represents a layer of abstraction above the Hyperledger network to facilitate a business focused development of clients and integration systems without the need to directly connect to Hyperledger nodes.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install pharma_trace_supply_chain_information_network_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your pharma_trace_supply_chain_information_network_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('pharma_trace_supply_chain_information_network_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PharmaTraceSupplyChainInformationNetworkApi = require('pharma_trace_supply_chain_information_network_api');


var api = new PharmaTraceSupplyChainInformationNetworkApi.ActivitysApi()
var activity = new PharmaTraceSupplyChainInformationNetworkApi.Activity(); // {Activity} Activity to create

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addActivity(activity, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.pharmatrace.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PharmaTraceSupplyChainInformationNetworkApi.ActivitysApi* | [**addActivity**](docs/ActivitysApi.md#addActivity) | **POST** /activitys | 
*PharmaTraceSupplyChainInformationNetworkApi.ActivitysApi* | [**deleteActivity**](docs/ActivitysApi.md#deleteActivity) | **DELETE** /activitys/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.ActivitysApi* | [**findActivityById**](docs/ActivitysApi.md#findActivityById) | **GET** /activitys/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.ActivitysApi* | [**findActivitys**](docs/ActivitysApi.md#findActivitys) | **GET** /activitys | 
*PharmaTraceSupplyChainInformationNetworkApi.ContainerApi* | [**locationHistoryGet**](docs/ContainerApi.md#locationHistoryGet) | **GET** /locationHistory | Location History
*PharmaTraceSupplyChainInformationNetworkApi.ContainersApi* | [**addContainer**](docs/ContainersApi.md#addContainer) | **POST** /containers | 
*PharmaTraceSupplyChainInformationNetworkApi.ContainersApi* | [**deleteContainer**](docs/ContainersApi.md#deleteContainer) | **DELETE** /containers/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.ContainersApi* | [**findContainerById**](docs/ContainersApi.md#findContainerById) | **GET** /containers/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.ContainersApi* | [**findContainers**](docs/ContainersApi.md#findContainers) | **GET** /containers | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQueryResponsesApi* | [**addInformationQueryResponse**](docs/InformationQueryResponsesApi.md#addInformationQueryResponse) | **POST** /informationqueryresponses | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQueryResponsesApi* | [**deleteInformationQueryResponse**](docs/InformationQueryResponsesApi.md#deleteInformationQueryResponse) | **DELETE** /informationqueryresponses/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQueryResponsesApi* | [**findInformationQueryResponses**](docs/InformationQueryResponsesApi.md#findInformationQueryResponses) | **GET** /informationqueryresponses | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQueryResponsesApi* | [**findInformationqueryresponseById**](docs/InformationQueryResponsesApi.md#findInformationqueryresponseById) | **GET** /informationqueryresponses/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQuerysApi* | [**addInformationQuery**](docs/InformationQuerysApi.md#addInformationQuery) | **POST** /informationquerys | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQuerysApi* | [**deleteInformationQuery**](docs/InformationQuerysApi.md#deleteInformationQuery) | **DELETE** /informationquerys/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQuerysApi* | [**findInformationQuerys**](docs/InformationQuerysApi.md#findInformationQuerys) | **GET** /informationquerys | 
*PharmaTraceSupplyChainInformationNetworkApi.InformationQuerysApi* | [**findInformationqueryById**](docs/InformationQuerysApi.md#findInformationqueryById) | **GET** /informationquerys/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.LegalTxTermssApi* | [**addLegalTxTerms**](docs/LegalTxTermssApi.md#addLegalTxTerms) | **POST** /legaltxtermss | 
*PharmaTraceSupplyChainInformationNetworkApi.LegalTxTermssApi* | [**deleteLegalTxTerms**](docs/LegalTxTermssApi.md#deleteLegalTxTerms) | **DELETE** /legaltxtermss/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.LegalTxTermssApi* | [**findLegalTxTermss**](docs/LegalTxTermssApi.md#findLegalTxTermss) | **GET** /legaltxtermss | 
*PharmaTraceSupplyChainInformationNetworkApi.LegalTxTermssApi* | [**findLegaltxtermsById**](docs/LegalTxTermssApi.md#findLegaltxtermsById) | **GET** /legaltxtermss/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.LocationsApi* | [**addLocation**](docs/LocationsApi.md#addLocation) | **POST** /locations | 
*PharmaTraceSupplyChainInformationNetworkApi.LocationsApi* | [**deleteLocation**](docs/LocationsApi.md#deleteLocation) | **DELETE** /locations/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.LocationsApi* | [**findLocationById**](docs/LocationsApi.md#findLocationById) | **GET** /locations/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.LocationsApi* | [**findLocations**](docs/LocationsApi.md#findLocations) | **GET** /locations | 
*PharmaTraceSupplyChainInformationNetworkApi.PharmaceuticalsApi* | [**addPharmaceutical**](docs/PharmaceuticalsApi.md#addPharmaceutical) | **POST** /pharmaceuticals | 
*PharmaTraceSupplyChainInformationNetworkApi.PharmaceuticalsApi* | [**deletePharmaceutical**](docs/PharmaceuticalsApi.md#deletePharmaceutical) | **DELETE** /pharmaceuticals/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.PharmaceuticalsApi* | [**findPharmaceuticalById**](docs/PharmaceuticalsApi.md#findPharmaceuticalById) | **GET** /pharmaceuticals/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.PharmaceuticalsApi* | [**findPharmaceuticals**](docs/PharmaceuticalsApi.md#findPharmaceuticals) | **GET** /pharmaceuticals | 
*PharmaTraceSupplyChainInformationNetworkApi.ProfilesApi* | [**addProfile**](docs/ProfilesApi.md#addProfile) | **POST** /profiles | 
*PharmaTraceSupplyChainInformationNetworkApi.ProfilesApi* | [**deleteProfile**](docs/ProfilesApi.md#deleteProfile) | **DELETE** /profiles/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.ProfilesApi* | [**findProfileById**](docs/ProfilesApi.md#findProfileById) | **GET** /profiles/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.ProfilesApi* | [**findProfiles**](docs/ProfilesApi.md#findProfiles) | **GET** /profiles | 
*PharmaTraceSupplyChainInformationNetworkApi.RepackagesApi* | [**addRepackage**](docs/RepackagesApi.md#addRepackage) | **POST** /repackages | 
*PharmaTraceSupplyChainInformationNetworkApi.RepackagesApi* | [**deleteRepackage**](docs/RepackagesApi.md#deleteRepackage) | **DELETE** /repackages/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.RepackagesApi* | [**findRepackageById**](docs/RepackagesApi.md#findRepackageById) | **GET** /repackages/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.RepackagesApi* | [**findRepackages**](docs/RepackagesApi.md#findRepackages) | **GET** /repackages | 
*PharmaTraceSupplyChainInformationNetworkApi.StakeholdersApi* | [**addStakeholder**](docs/StakeholdersApi.md#addStakeholder) | **POST** /stakeholders | 
*PharmaTraceSupplyChainInformationNetworkApi.StakeholdersApi* | [**deleteStakeholder**](docs/StakeholdersApi.md#deleteStakeholder) | **DELETE** /stakeholders/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.StakeholdersApi* | [**findStakeholderById**](docs/StakeholdersApi.md#findStakeholderById) | **GET** /stakeholders/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.StakeholdersApi* | [**findStakeholders**](docs/StakeholdersApi.md#findStakeholders) | **GET** /stakeholders | 
*PharmaTraceSupplyChainInformationNetworkApi.SystemInformationsApi* | [**addSystemInformation**](docs/SystemInformationsApi.md#addSystemInformation) | **POST** /systeminformations | 
*PharmaTraceSupplyChainInformationNetworkApi.SystemInformationsApi* | [**deleteSystemInformation**](docs/SystemInformationsApi.md#deleteSystemInformation) | **DELETE** /systeminformations/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.SystemInformationsApi* | [**findSystemInformations**](docs/SystemInformationsApi.md#findSystemInformations) | **GET** /systeminformations | 
*PharmaTraceSupplyChainInformationNetworkApi.SystemInformationsApi* | [**findSysteminformationById**](docs/SystemInformationsApi.md#findSysteminformationById) | **GET** /systeminformations/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.TradesApi* | [**addTrade**](docs/TradesApi.md#addTrade) | **POST** /trades | 
*PharmaTraceSupplyChainInformationNetworkApi.TradesApi* | [**deleteTrade**](docs/TradesApi.md#deleteTrade) | **DELETE** /trades/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.TradesApi* | [**findTradeById**](docs/TradesApi.md#findTradeById) | **GET** /trades/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.TradesApi* | [**findTrades**](docs/TradesApi.md#findTrades) | **GET** /trades | 
*PharmaTraceSupplyChainInformationNetworkApi.TransportsApi* | [**addTransport**](docs/TransportsApi.md#addTransport) | **POST** /transports | 
*PharmaTraceSupplyChainInformationNetworkApi.TransportsApi* | [**deleteTransport**](docs/TransportsApi.md#deleteTransport) | **DELETE** /transports/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.TransportsApi* | [**findTransportById**](docs/TransportsApi.md#findTransportById) | **GET** /transports/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.TransportsApi* | [**findTransports**](docs/TransportsApi.md#findTransports) | **GET** /transports | 
*PharmaTraceSupplyChainInformationNetworkApi.UserApi* | [**meGet**](docs/UserApi.md#meGet) | **GET** /me | User Profile
*PharmaTraceSupplyChainInformationNetworkApi.WalletsApi* | [**addWallet**](docs/WalletsApi.md#addWallet) | **POST** /wallets | 
*PharmaTraceSupplyChainInformationNetworkApi.WalletsApi* | [**deleteWallet**](docs/WalletsApi.md#deleteWallet) | **DELETE** /wallets/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.WalletsApi* | [**findWalletById**](docs/WalletsApi.md#findWalletById) | **GET** /wallets/{id} | 
*PharmaTraceSupplyChainInformationNetworkApi.WalletsApi* | [**findWallets**](docs/WalletsApi.md#findWallets) | **GET** /wallets | 


## Documentation for Models

 - [PharmaTraceSupplyChainInformationNetworkApi.Activities](docs/Activities.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Activity](docs/Activity.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Container](docs/Container.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Containers](docs/Containers.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Error](docs/Error.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.InformationQuery](docs/InformationQuery.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.InformationQueryResponse](docs/InformationQueryResponse.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.LegalTxTerms](docs/LegalTxTerms.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Location](docs/Location.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Locations](docs/Locations.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Pharmaceutical](docs/Pharmaceutical.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.PharmaceuticalList](docs/PharmaceuticalList.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Profile](docs/Profile.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Repackage](docs/Repackage.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Stakeholder](docs/Stakeholder.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.SystemInformation](docs/SystemInformation.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.SystemInformations](docs/SystemInformations.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Trade](docs/Trade.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Transaction](docs/Transaction.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Transport](docs/Transport.md)
 - [PharmaTraceSupplyChainInformationNetworkApi.Wallet](docs/Wallet.md)


## Documentation for Authorization


### apikey

- **Type**: API key
- **API key parameter name**: server_token
- **Location**: URL query string

