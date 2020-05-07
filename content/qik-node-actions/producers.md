/*
Title: producers
*/


Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------

# SMS Producer

This API send sms using onlinebulksms provider .

SmsProviderLink - www.onlinebulksmslogin.com

**url: http://qik-node:qik-node@actions.qik.ai/smsProducer**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json


**body :**

    {
        "username":"xxxxx",    
        "password":"xxxxx",
        "sender":"xxxxx",
        "message":"xxxxx",
        "receiver":"xxxxx"
    }

**Note:**

1. receiver number should be 10 digit.
2. for multiple receiver are ',' seperated.
3. 'username','password','sender' are optional and for configuring new user.
    
**Result:**

    inserted in queue

**example :**

default :

![%image_url%/qik-node-actions/sms_def.png](%image_url%/qik-node-actions/sms_def.png])

dynamic:

[![smsProducer_dynamic](%5Bscreen-shots%5D/sms/sms_dyn.png "smsProducer_dynamic")](!%5Bscreen-shots%5D/sms/sms_dyn.png "smsProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------

# Email Producers

------------

## GMAIL producer

This Api Send mail from gmail account.

**url: http://qik-node:qik-node@actions.qik.ai/gmailProducer**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "username": "xxxxx",
        "password": "xxxxx",
        "to": "xxxxxx",
        "cc": "xxxxxx",
        "bcc": "xxxxx",
        "subject": "xxxxx",
        "body": "xxxxx"
    }

**Note:**

1. 'cc', 'bcc', 'to' are all optional but atleast one is must
2. multiple receivers are ',' seperated.
3. 'username' and 'password' are optional and for configuring new sender user.
    
**Result:**

    inserted in queue


**example :**

default :

[![gmailProducer_default](%5Bscreen-shots%5D/mail/gmail_def.png "gmailProducer_default")](%5Bscreen-shots%5D/mail/gmail_def.png "gmailProducer_default")

dynamic:

[![gmailProducer_dynamic](%5Bscreen-shots%5D/mail/gmail_dyn.png "gmailProducer_dynamic")](!%5Bscreen-shots%5D/mail/gmail_dyn.png "gmailProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")


------------

## SMTP producer:

This Api Send mail from any smtp account.

**url: http://qik-node:qik-node@actions.qik.ai/smtpProducer**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "username": "xxxxx",
        "password": "xxxxx",
        "host":"xxxxx",
        "port":"xxxxx",
        "to": "xxxxxx",
        "cc": "xxxxxx",
        "bcc": "xxxxx",
        "subject": "xxxxx",
        "body": "xxxxx"
    }

**Note:**

1. 'cc', 'bcc', 'to' are all optional but atleast one is must
2. multiple receivers are ',' seperated.
3. 'username','password','host' and 'port' are optional and for configuring new user.
    
**Result:**

    inserted in queue

**example :**

default :

[![smtpProducer_default](%5Bscreen-shots%5D/mail/smtp_def.png "smtpProducer_default")](%5Bscreen-shots%5D/mail/smtp_def.png "smtpProducer_default")

dynamic:

[![smtpProducer_dynamic](%5Bscreen-shots%5D/mail/smtp_dyn.png "smtpProducer_dynamic")](!%5Bscreen-shots%5D/mail/smtp_dyn.png "smtpProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------

## MAILGUN

This API send simple text mail to only validate receivers.

**url: http://qik-node:qik-node@actions.qik.ai/mailgunProducer**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "apiKey": "xxxxx",
        "domain": "xxxxx",
        "from":"xxxxx",
        "to": "xxxxxx",
        "subject": "xxxxx",
        "body": "xxxxx"
    }

**Note:**

1. 'apiKey' and 'domain' are optional and for configuring new user.
    
**Result:**

    inserted in queue


**example :**

default :

[![mailgunProducer_default](%5Bscreen-shots%5D/mail/mailgun_def.png "mailgunProducer_default")](%5Bscreen-shots%5D/mail/mailgun_def.png "mailgunProducer_default")

dynamic:

[![mailgunProducer_dynamic](%5Bscreen-shots%5D/mail/mailgun_dyn.png "mailgunProducer_dynamic")](!%5Bscreen-shots%5D/mail/mailgun_dyn.png "mailgunProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------

## SESMAIL Producer

This API send simple text mail to only validate receivers.

**url: http://qik-node:qik-node@actions.qik.ai/sesmailProducer**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "awsAccessKey": "xxxxx",
        "awsSecretKey": "xxxxx",
        "awsRegion": "xxxxx",
        "from":"xxxxx",
        "to":"xxxxx",
        "cc":"xxxxx",
        "bcc":"xxxxx",
        "subject":"xxxxx",
        "body":"xxxxx"
    }

**Note:**

1. 'cc', 'bcc', 'to' are all optional but atleast one is must
2. multiple receivers are ',' seperated.
3. 'awsAccessKey','awsSecretKey','awsRegion' are optional and for configuring new user.
    
**Result:**

    inserted in queue


**example :**

default :

[![sesProducer_default](%5Bscreen-shots%5D/mail/ses_def.png "sesProducer_default")](%5Bscreen-shots%5D/mail/ses_def.png "sesProducer_default")

dynamic:

[![sesProducer_dynamic](%5Bscreen-shots%5D/mail/ses_dyn.png "sesProducer_dynamic")](!%5Bscreen-shots%5D/mail/ses_dyn.png "sesProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------

# Notify Producers

------------

## NotifyDevice Producer

This API send notification to android device .

**url: http://qik-node:qik-node@actions.qik.ai/deviceNotification**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "fcmTokenKey":"xxxxx",
        "deviceId": "xxxxx",
        "notificationTitle":"xxxxx",
        "notificationMessage": "xxxxx"
    }

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
    
**Result:**

    inserted in queue


**example :**

default :

[![devicenotifyProducer_default](%5Bscreen-shots%5D/notify/devicenotify_def.png "devicenotifyProducer_default")](%5Bscreen-shots%5D/notify/devicenotify_def.png "devicenotifyProducer_default")

dynamic:

[![devicenotifyProducer_dynamic](%5Bscreen-shots%5D/notify/devicenotify_dyn.png "devicenotifyProducer_dynamic")](!%5Bscreen-shots%5D/notify/devicenotify_dyn.png "devicenotifyProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------

## NotifyTopic Producer

This API send notification to android devices which are subscribed to the topic .

**url: http://qik-node:qik-node@actions.qik.ai/topicNotification**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "fcmTokenKey":"xxxxx",
        "topicName": "xxxxx",
        "notificationTitle":"xxxxxx",
        "notificationMessage": "xxxxx"
    }

**Note:**

1. 'fcmTokenKey' is optional and for configuring new fcmToken.
    
**Result:**

    inserted in queue


**example :**

default :

[![topicnotifyProducer_default](%5Bscreen-shots%5D/notify/topicnotify_def.png "topicnotifyProducer_default")](%5Bscreen-shots%5D/notify/topicnotify_def.png "topicnotifyProducer_default")

dynamic:

[![topicnotifyProducer_dynamic](%5Bscreen-shots%5D/notify/topicnotify_dyn.png "topicnotifyProducer_dynamic")](!%5Bscreen-shots%5D/notify/topicnotify_dyn.png "topicnotifyProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------


# Slack Producers

------------

## slackToChannel Producer

This API send slack to channel .

**url: http://qik-node:qik-node@actions.qik.ai/slackToChannel**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {
        "slackApiToken":"xxxxx",
        "slackChannelName":"#xxxxx",
        "slackMessage":"xxxxx"
    }

**Note:**
    
1. 'slackApiToken' is optional and for configuring new slackApiToken.
    
**Result:**

    inserted in queue


**example :**

default :

[![slack2ChannelProducer_default](%5Bscreen-shots%5D/slack/slack2Ch_def.png "slack2ChannelProducer_default")](%5Bscreen-shots%5D/slack/slack2Ch_def.png "slack2ChannelProducer_default")

dynamic:

[![slack2ChannelProducer_dynamic](%5Bscreen-shots%5D/slack/slack2Ch_dyn.png "slack2ChannelProducer_dynamic")](!%5Bscreen-shots%5D/slack/slack2Ch_dyn.png "slack2ChannelProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------

## slackToUser Producer

This API send slack to user .

**url: http://qik-node:qik-node@actions.qik.ai/slackToUser**

**method : post**

**headers:**

    {"key" : "Content-Type",  "value" : "application/json"}

**body :**

    {	
        "slackApiToken":"xxxxx",
        "slackUser":"@xxxxx",
        "slackMessage":"xxxxx"
    }

**Note:**

1. 'slackApiToken' is optional and for configuring new slackApiToken.
    
**Result:**

    inserted in queue


**example :**

default :

[![slack2UserProducer_default](%5Bscreen-shots%5D/slack/slack2Us_def.png "slack2UserProducer_default")](%5Bscreen-shots%5D/slack/slack2Us_def.png "slack2UserProducer_default")

dynamic:

[![slack2UserProducer_dynamic](%5Bscreen-shots%5D/slack/slack2Us_dyn.png "slack2UserProducer_dynamic")](!%5Bscreen-shots%5D/slack/slack2Us_dyn.png "slack2UserProducer_dynamic")

Result:

[![response](%5Bscreen-shots%5D/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------



