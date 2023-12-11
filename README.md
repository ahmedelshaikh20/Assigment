# Coding Task for Ztar

Coding Assigment was about creating endpoint to create shipment for two different services.
## Description
<img width="2629" alt="Shipment API ENDPOINT" src="https://user-images.githubusercontent.com/61388151/146079444-f6f12db5-9feb-47e6-83e6-e088619dd8c7.png">

## Installation

Install node modules and run index.js file and now the server is listening on port 5000

```bash
npm install
node index.js
```

## Api EndPoints

1-Post a shipment to specific service type.

    -Request Endpoint: api/shipment/:type.
    -HTTP Verb:POST.
    -Request Content-Type: application/json.

```json
//Request Body Example for Ups

{"serviceId" : "UPSExpress",
"packageDimensions" :{
"width" : 2 ,
"height" : 20 , 
"length" : 2 ,
"unit":"inch"}
,"packageWeight":{
    "weight":2 ,
    "unit":"pound"
}}

//Request Body Example for Fedex

{
"serviceId" : "fedexAir",
"packageDimensions" :
{"width" : 2 ,
"height" : 20 ,
"length" : 2 ,
"unit":"cm"},
"packageWeight":{
    "weight":2 ,
    "unit":"gram"
}
}



```
1-Get all shipments.

    -Request Endpoint: api/shipment/all.
    -HTTP Verb:GET.
    -Response Content-Type: application/json.
```json
//Respnse Example

{
    "status": "success",
    "data": {
        "shipments": [
            
        ]
    }
}

```



## Validation

- **Validation for Fedex:**
   - **`serviceId`** --> [String, valid:[fedexGround, fedexAIR]].
   - **`packageDimensions.width`** --> [Numeric, min(1)]].
   - **`packageDimensions.height`** --> [Numeric, min[1]].
   - **`packageDimensions.length`** --> [Numeric, min[1]].
   - **`packageDimensions.unit`** --> [String, e [cm]].
   - **`packageWeight.weight`** --> [Numeric, min[1]].
   - **`packageWeight.unit`** --> [String, valid:[gram]].
- **Validation for Ups:**
   - **`serviceId`** --> [String, valid:[UPSExpress, UPS2DAY]].
   - **`packageDimensions.width`** --> [Numeric, min(1)]].
   - **`packageDimensions.height`** --> [Numeric, min[1]].
   - **`packageDimensions.length`** --> [Numeric, min[1]].
   - **`packageDimensions.unit`** --> [String, valid:[inch]].
   - **`packageWeight.weight`** --> [Numeric, min[1]].
   - **`packageWeight.unit`** --> [String, valid:[pound]].

- **Success response** --> status code: 200, response body:
```json
{
Shipment to <ServiceType> has completed successfully!
}
```
- **Error response** --> status code: 422, response body:
```json
{
    "Status": "Faild to create shipment",
    "error": "ServiceId is not valid,You Should enter a valid ServiceId"
}
```



