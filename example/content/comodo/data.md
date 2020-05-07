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

[![csvUpload](%image_url%/comodo/csvupload.png "csvUpload")](%images_url%/comodo/csvupload.png "csvUpload")

------------

# getDataFromParse 

this api helps to save the data from parseServer into the csv file.


**Url: http://ai.qik.ai/data/getDataFromParse**

**method : get**

**body:**

    params:

    "key":"parseUrl","value":"xxxxxx"

    "key":"header","value":"xxxxx"



**result :**

    {
        "status": "success",
        "message": "file saved as xxxxx.csv"
    }

**example :**

[![parseData2](%image_url%/comodo/parseData2.png "parseData2")](!%5Bscreen-shots%5D/comodo/parseData2.png "parseData2")

------------
------------