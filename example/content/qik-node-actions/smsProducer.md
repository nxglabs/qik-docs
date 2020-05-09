/*
Title: smsProducer
*/

------------

Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------


This API send sms using onlinebulksms provider .

SmsProviderLink - www.onlinebulksmslogin.com

------------

    url:        http://qik-node:qik-node@actions.qik.ai/smsProducer

    method :    post

    headers:    { "Content-Type" : "application/json" }


    body:       {
                    "username":"xxxxx",    
                    "password":"xxxxx",
                    "sender":"xxxxx",
                    "message":"xxxxx",
                    "receiver":"xxxxx"
                }

    Result:     inserted in queue

**Note:**

1. receiver number should be 10 digit.
2. for multiple receiver are ',' seperated.
3. 'username','password','sender' are optional and for configuring new user.
    

**example :**

default :

[![smsProducer_def](%image_url%/qik-node-actions/sms/sms_def.png "smsProducer_def")](%image_url%/qik-node-actions/sms/sms_def.png "smsProducer_def")

dynamic:

[![smsProducer_dyn](%image_url%/qik-node-actions/sms/sms_dyn.png "smsProducer_dyn")](%image_url%/qik-node-actions/sms/sms_dyn.png "smsProducer_dyn")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------