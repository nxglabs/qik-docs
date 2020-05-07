/*
Title: slack
*/

# slackToChannel

This API is sends Message To 'nxgapis' channel on Slack .

------------

**URL Link: https://qik-actions.herokuapp.com/slack/SendToChannel/**

**method : post**

**Content-Type : application/json**

------------

## withAttachement

This Api Sends Attachement to Slack Channel.

------------

**input parameters :**

default:

    {
        "channel":"channel_name",
        "text":"file name",
        "file_url":"file_url"
    }

dynamic:
    
    {
        "token":"xxx-xxxx-xxxx",
        "channel":"xxxxxx",
        "text":"file name",
        "file_url":"file_url"
    } 


**output parameters :**

    {
        "status": "Success",
        "sent_to": "message delivered on 'xxxx' channel"   #channel_name
    }
    
**prerequisites :**
- file url field should not be empty 
- file link have to be downloadable.

------------

**example :**

default : 

[![SendToChannel_default](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_default.png "SendToChannel_default")](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_default.png "SendToChannel_default")

------------

dynamic : 

[![SendToChannel_dynamic](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_dynamic.png "SendToChannel_dynamic")](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_dynamic.png "SendToChannel_dynamic")

------------
------------

## withoutAttachement

This Api Sends Simple text message On Slack Channel.

------------

**input parameters :**
    
default:

    {   
        "channel":"channel_name",
        "text":"text",
    }

dynamic:

    {   
        "token":"xxx-xxxx-xxxx",
        "channel":"channel_name",
        "text":"File_Header"
    }


**output parameters :**

    {
        "status": "Success",
        "sent_to": "message delivered on 'nxgapis' channel"
    }

------------

**example :**

default :

[![SendToChannel_default_text](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_default_text.png "SendToChannel_default_text")](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_default_text.png "SendToChannel_default_text")

dynamic:

[![SendToChannel_dynamic_text](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_dynamic_text.png "SendToChannel_dynamic_text")](!%5Bscreen-shots%5D/slackmessenger/SendToChannel_dynamic_text.png "SendToChannel_dynamic_text")


------------
------------


# DmToUser :

This API is sends Direct Message To the user of 'nxgapis' channel on Slack .

------------

**URL Link: https://qik-actions.herokuapp.com/slack/DmToUser/**

**method : post**

**Content-Type : application/json**

------------

This Api Sends direct message to user of 'nxgapis' Slack Channel.

**input parameters :**

default:

    {
        "text":"message",
        "user":"xxxxxxxxx"
    }

dynamic:

    {
        "token":"xxx-xxx-xxx",
        "text":"message",
        "user":"xxxxxxxxx"
    }


**output parameters :**

    {
        "status": "Success",
        "message": "Message sent to xxxx "  # user
    }

------------

**example :**

default :

[![DmToUser_default](!%5Bscreen-shots%5D/slackmessenger/DmToUser_default.png "DmToUser_default")](!%5Bscreen-shots%5D/slackmessenger/DmToUser_default.png "DmToUser_default")

dynamic :

[![DmToUser_dynamic](!%5Bscreen-shots%5D/slackmessenger/DmToUser_dynamic.png "DmToUser_dynamic")](!%5Bscreen-shots%5D/slackmessenger/DmToUser_dynamic.png "DmToUser_dynamic")

------------
------------