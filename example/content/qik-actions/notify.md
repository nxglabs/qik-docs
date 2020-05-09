/*
Title: notify
*/

------------

Postman Collection - https://www.getpostman.com/collections/b07869d105ab39fde583

------------

# Device Notification


**URL Link: https://qik-actions.herokuapp.com/notification/notify_device/**

**method : post**

**Content-Type : application/json**

This Api Send notifications to a particular application.

Default - Demo application

**input parameters :**

notify_default:

    {
    	"device_id":"xxxxxxxx" or "xxxxxxxxx,xxxxxxxxx", # multiple device_ids , seperated.
    	"title":"xxxxxxxxxxx",
    	"message":"xxxxxxxxxxxxxxx"
    }

notify_dynamic:

    {
        "fcm_server_key":"xxxxxxxxxxxxx",
    	"device_id":"xxxxxxx" or "xxxxxxxxxxx,xxxxxxxxxxxx",   # multiple device_ids , seperated.
    	"title":"xxxxxxxxxxxx",
    	"message":"xxxxxxxxxxxxxx"
    }

**output parameters :**

    {
        "status": "Success",
        "message": "sent to device ids xxxxxxxxxxx, xxxxxxxxxxxx"
    }

------------

**example :**


[![notify_device](%image_url%/qik-actions/notifications/notify_device.png "notify_device")](%image_url%/qik-actions/notifications/notify_device.png "notify_device")


------------
------------

# Topic Notification


**URL Link: https://qik-actions.herokuapp.com/notification/notify_topic/**

**method : post**

**Content-Type : application/json**

This Api Send notifications to devices according the topic name, which are subscribed by users.

**input parameters :**

topic_default:

    {
	    "device_id":"xxxxxxxxxxxxxxx" or "xxxxxxx,xxxxxxxx", # multiple device_ids , seperated.
	    "topic_name":"xxxxxxxxxx",
	    "message":"xxxxxxxxxx"
    }

topic_dynamic:

    {
        "fcm_server_key":"xxxxxxxxxxxxx",
    	"device_id":"xxxxxxxxxx" or "xxxxxxxxxx,xxxxxxxx", # multiple device_ids , seperated.
    	"topic_name":"xxxxxxxxxxxx",
    	"message":"xxxxxxxxxxxxx"
    }

**output parameters :**

    {
        "status": "Success",
    }


------------

**example :**


[![notify_topic](%image_url%/qik-actions/notifications/notify_topic.png "notify_topic")](%image_url%/qik-actions/notifications/notify_topic.png "notify_topic")


------------
------------

# Subscribe To Topic


**URL Link: https://qik-actions.herokuapp.com/notification/subscribe_topic/**

**method : post**

**Content-Type : application/json**

Using this api device user can subscribe to a particular topic providing fcm key .


**input parameters :**
    
    {
	    "fcm_server_key":"xxxxxxx",
	    "device_id":"xxxxxx",
	    "topic_name":"xxxxx"
    }


**output parameters :**
    
    {
        "status": "Success",
        "message": " Successfully Subscribed to xxxxxx"  # topic_name
    }
 
------------

**example :**


[![subscribe_topic](%image_url%/qik-actions/notifications/subscribe_topic.png "subscribe_topic")](%image_url%/qik-actions/notifications/subscribe_topic.png "subscribe_topic")


------------
------------
