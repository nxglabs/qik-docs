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
    
    body:       {
                    "fcmTokenKey":"xxxxx",
                    "deviceId": "xxxxx",      
                    "notificationTitle":"xxxxx",
                    "notificationMessage": "xxxxx"
                }

    Result:     inserted in queue

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
    

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

    body:       {
                    "fcmTokenKey":"xxxxx",
                    "topicName": "xxxxx",       //subscribed topic name
                    "notificationTitle":"xxxxxx",
                    "notificationMessage": "xxxxx"
                }

    Result:     inserted in queue

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
    
**example :**

default :

[![topicnotifyProducer_default](%image_url%/qik-node-actions/notify/topicnotify_def.png "topicnotifyProducer_default")](%image_url%/qik-node-actions/notify/topicnotify_def.png "topicnotifyProducer_default")

dynamic:

[![topicnotifyProducer_dynamic](%image_url%/qik-node-actions/notify/topicnotify_dyn.png "topicnotifyProducer_dynamic")](%image_url%/qik-node-actions/notify/topicnotify_dyn.png "topicnotifyProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------
