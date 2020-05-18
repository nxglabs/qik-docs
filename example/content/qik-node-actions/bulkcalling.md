/*
Title: bulkcalling
*/

------------

Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------


# bulkcallingExotel

This Api calls to varified number from exotel for the given campaign name.
for ex. Drona

------------

    url:        https://qik-node:qik-node@actions.qik.ai/bulkcallingExotel

    method :    post

    header:     {"Content-Type" : "application/json"}

    body:
                Default Parameters :

                    {
                        "mobileNumber": "xxxxxxxxxx",
                        "campaign": "xxxx"
                    }


                Dynamic Parameters:

                    {
                        "exotelSid": "xxxxx",
                        "exotelApiKey": "xxxxxxx",
                        "exotelApiToken": "xxxxxx",
                        "exotelCallerId": "xxxxxx",
                        "exotelNumber": "xxxxxx",
                        "mobileNumber": "xxxxxxxxxx",
                        "campaign": "xxxxx"
                    }

    result:     call initiated

**Notes:**

    1. mobileNumber should be varified. 
    2. mobileNumber should be 10 digit.

**example :**

bulkcalling default:

[![bulkcalling_def](%image_url%/qik-node-actions/bulkcalling/bulkcalling_def.png "bulkcalling_def")](%image_url%/qik-node-actions/bulkcalling/bulkcalling_def.png "bulkcalling_def")

bulkcalling dynamic:

[![bulkcalling_dyn](%image_url%/qik-node-actions/bulkcalling/bulkcalling_dyn.png "bulkcalling_dyn")](%image_url%/qik-node-actions/bulkcalling/bulkcalling_dyn.png "bulkcalling_dyn")

------------
------------

#   bulkcallingReport

This API generate report of bulkcall campaign.

------------

    url:            https://qik-node:qik-node@actions.qik.ai/report

    method :        get

    quary params:   {"Campaign": "xxxxxx"}

    result:         [
                        {
                            "phoneNumber":"xxxxxxxxxx",
                            "response":"xxxxxxxxxxx"
                        }
                    ]

**example :**

[![bulkcalling_report](%image_url%/qik-node-actions/bulkcalling/bulkcalling_report.png "bulkcalling_report")](%image_url%/qik-node-actions/bulkcalling/bulkcalling_report.png "bulkcalling_report")

------------
------------
