/*
Title: bulkcalling
*/

# BulkCalling Call


**URL Link: https://qik-actions.herokuapp.com/bulkcalling/call/**

**method : post**

**Content-Type : application/json**

This Api calls to multiple varified numbers from exotel regarding drona app survey.

**input parameters :**

Default Parameters :

    {
	    "mobile_number":"7304937696",
	    "campaign":"Drona"
    }


Dynamic Parameters:

    {
	    "exotel_sid":"xxxxxxx",
	    "api_key":"xxxxxxx",
	    "api_token":"xxxxxxxxxx",
	    "exotel_number":"xxxxxxxxxxx",
	    "exotel_caller_id":"xxxx",
	    "campaign":"xxxxxx",
        "mobile_number":"xxxxxxxxxx, xxxxxxxxxx, xxxxxxxxxx"
    }

**output parameters :**

    {
        "status": "Success"
    }

**prerequisites :**
- mobile number should be varified. 

**example :**

[![BulkCalling_Call](!%5Bscreen-shots%5D/bulkcalling/call.png "BulkCalling_Call")](!%5Bscreen-shots%5D/bulkcalling/call.png "BulkCalling_Call")

------------
------------

# Bulk Calling Records

This API generate reports of bulkcalling status.


**URL Link: https://qik-actions.herokuapp.com/bulkcalling/report/**

**method : get**

**Content-Type : application/json**

**Input Params :**

campaign = xxxxxx

**output parameters :**

Mobile Number,Response
07304937696,Satisfied With Application


**example :**

[![BulkCalling_Report](!%5Bscreen-shots%5D/bulkcalling/report.png "BulkCalling_Report")](!%5Bscreen-shots%5D/bulkcalling/report.png "BulkCalling_Report")

------------
------------