/*
Title: data
*/

# csv file upload 

this api helps to upload the csv file into the application.


**Url: http://ai.qik.ai/data/upload/**

**method : post**

**body:**

    Content-Disposition: form-data; name="remark" value="xxxx"

**output parameters :**

    {
        "file": "/media/dataset/xxxx.xxx",
        "remark": "xxxxx",
        "timestamp": "xxxx-xx-xxxxx:xx:xx.xxxxxx"
    }


**example :**

[![csvUpload](%image_url%/comodo/csvupload.png "csvUpload")](%image_url%/comodo/csvupload.png "csvUpload")

------------
------------

# getDataFromParse 

this api helps to save the data from parseServer into the csv file.


**Url: http://ai.qik.ai/data/getDataFromParse**

**method : post**


**headers:**

    {   "X-Parse-Application-Id" : "xxxxx" }
    {   "Content-Type" : "application/json"   }

**body:**

    {
	    "parseUrl":"xxxxxxxxxxx"
    }

**result :**

    {
        "status": "success",
        "message": "object data saved as xxxxx.csv"
    }

**example :**

[![getDataFromParse](%image_url%/comodo/getDataFromParse.png "getDataFromParse")](%image_url%/comodo/getDataFromParse.png "getDataFromParse")

------------
------------