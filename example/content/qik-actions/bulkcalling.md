/*
Title: bulkcalling
*/

------------

Postman Collection - https://www.getpostman.com/collections/b07869d105ab39fde583

------------

# BulkCalling Call

This Api calls to multiple varified numbers from exotel for the given campaign name.
for ex. Drona

------------

    url:        https://qik-actions.herokuapp.com/bulkcalling/call/

    method :    post

    header:     {"Content-Type" : "application/json"}

    body:
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

    result:     {
                    "status": "Success"
                }

**Notes:**

    1.mobile number should be varified. 

**example :**

[![BulkCalling_Call](%image_url%/qik-actions/bulkcalling/call.png "BulkCalling_Call")](%image_url%/qik-actions/bulkcalling/call.png "BulkCalling_Call")

------------
------------

#   Bulk Calling Records

This API generate reports of campaign.

------------

    url:            https://qik-actions.herokuapp.com/bulkcalling/report/

    method :        get

    quary params:   {"campaign": "xxxxxx"}

    result:
            Mobile Number,Response
            xxxxxxx,xxxxx


**example :**

[![BulkCalling_Report](%image_url%/qik-actions/bulkcalling/report.png "BulkCalling_Report")](%image_url%/qik-actions/bulkcalling/report.png "BulkCalling_Report")

------------
------------