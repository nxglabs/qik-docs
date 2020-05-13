/*
Title: notifyProducers
*/


------------

Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------

## NotifyDevice Producer

This API send notification to android device .

------------

    url:        http://qik-node:qik-node@actions.qik.ai/deviceNotification

    method :    post

    headers:    { "Content-Type" : "application/json"}
    
    body:       

        for default configuration:

                {
                    "deviceId": "xxxxx",      
                    "notificationTitle":"xxxxx",
                    "notificationMessage": "xxxxx"
                }

        for dynamic configuration:

                {
                    "fcmTokenKey":"xxxxx",
                    "deviceId": "xxxxx",      
                    "notificationTitle":"xxxxx",
                    "notificationMessage": "xxxxx"
                }

    Result:     inserted in queue

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
2. for default , default parameters from environment variables will be loaded.         

**example :**

default :

[![devicenotifyProducer_default](%image_url%/qik-node-actions/notify/devicenotify_def.png "devicenotifyProducer_default")](%image_url%/qik-node-actions/notify/devicenotify_def.png "devicenotifyProducer_default")

dynamic:

[![devicenotifyProducer_dynamic](%image_url%/qik-node-actions/notify/devicenotify_dyn.png "devicenotifyProducer_dynamic")](%image_url%/qik-node-actions/notify/devicenotify_dyn.png "devicenotifyProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------

## NotifyTopic Producer

This API send notification to android devices which are subscribed to the topic .

------------

    url:        http://qik-node:qik-node@actions.qik.ai/topicNotification

    method :    post

    headers:    {   "Content-Type" : "application/json" }

    body:       
    
        for default configuration:

                {
                    "topicName": "xxxxx",       //subscribed topic name
                    "notificationTitle":"xxxxxx",
                    "notificationMessage": "xxxxx"
                }
        
        for dynamic configuration:

                {
                    "fcmTokenKey":"xxxxx",
                    "topicName": "xxxxx",       //subscribed topic name
                    "notificationTitle":"xxxxxx",
                    "notificationMessage": "xxxxx"
                }

    Result:     inserted in queue

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
2. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![topicnotifyProducer_default](%image_url%/qik-node-actions/notify/topicnotify_def.png "topicnotifyProducer_default")](%image_url%/qik-node-actions/notify/topicnotify_def.png "topicnotifyProducer_default")

dynamic:

[![topicnotifyProducer_dynamic](%image_url%/qik-node-actions/notify/topicnotify_dyn.png "topicnotifyProducer_dynamic")](%image_url%/qik-node-actions/notify/topicnotify_dyn.png "topicnotifyProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------

## subscribeToTopic

This API helps devices to subscribe To topic .

------------

    url:        http://qik-node:qik-node@actions.qik.ai/subscribeToTopic

    method :    post

    headers:    {   "Content-Type" : "application/json" }

    body:       
    
        for default configuration:

                {
                    "topicName": "xxxxx",
                    "deviceId":"xxxxxx"
                }
        
        for dynamic configuration:

                {
                    "fcmTokenKey":"xxxxx",
                    "topicName": "xxxxx",
                    "deviceId":"xxxxxx"
                }

    Result:     subscribed.

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
2. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![subscribeToTopic_default](%image_url%/qik-node-actions/notify/subscribeToTopic_def.png "subscribeToTopic_default")](%image_url%/qik-node-actions/notify/subscribeToTopic_def.png "subscribeToTopic_default")

dynamic:

[![subscribeToTopic_dynamic](%image_url%/qik-node-actions/notify/subscribeToTopic_dyn.png "subscribeToTopic_dynamic")](%image_url%/qik-node-actions/notify/subscribeToTopic_dyn.png "subscribeToTopic_dynamic")

------------
------------

## unsubscribeToTopic

This API helps devices to unsubscribe To topic .

------------

    url:        http://qik-node:qik-node@actions.qik.ai/unsubscribeToTopic

    method :    post

    headers:    {   "Content-Type" : "application/json" }

    body:       
    
        for default configuration:

                {
                    "topicName": "xxxxx",                         "deviceId":"xxxxxx"
                }
        
        for dynamic configuration:

                {
                    "fcmTokenKey":"xxxxx",
                    "topicName": "xxxxx",       //subscribed topic name
                    "deviceId":"xxxxxx"
                }

    Result:     unsubscribed.

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
2. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![unsubscribeToTopic_default](%image_url%/qik-node-actions/notify/unsubscribeToTopic_def.png "unsubscribeToTopic_default")](%image_url%/qik-node-actions/notify/unsubscribeToTopic_def.png "unsubscribeToTopic_default")

dynamic:

[![unsubscribeToTopic_dynamic](%image_url%/qik-node-actions/notify/unsubscribeToTopic_dyn.png "unsubscribeToTopic_dynamic")](%image_url%/qik-node-actions/notify/unsubscribeToTopic_dyn.png "unsubscribeToTopic_dynamic")


------------
------------


