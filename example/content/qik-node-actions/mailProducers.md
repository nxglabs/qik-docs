/*
Title: mailProducers
*/

------------

Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------

#   GMAIL producer

This Api Send mail from gmail account.

------------

    url:        http://qik-node:qik-node@actions.qik.ai/gmailProducer

    method :    post

    headers:    { "Content-Type" : "application/json"}

    body:       

        for default configuration:

                {
                    "to": "xxxxxx",
                    "cc": "xxxxxx",
                    "bcc": "xxxxx",
                    "subject": "xxxxx",
                    "body": "xxxxx"
                }

        for dynamic configuration:

                {
                    "username": "xxxxx",
                    "password": "xxxxx",
                    "to": "xxxxxx",
                    "cc": "xxxxxx",
                    "bcc": "xxxxx",
                    "subject": "xxxxx",
                    "body": "xxxxx"
                }

    result:     inserted in queue


**Note:**

1. 'cc', 'bcc', 'to' are all optional but atleast one is must
2. multiple receivers are ',' seperated.
3. 'username' and 'password' are optional and for configuring new sender user.
4. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![gmailProducer_default](%image_url%/qik-node-actions/mail/gmail_def.png "gmailProducer_default")](%image_url%/qik-node-actions/mail/gmail_def.png "gmailProducer_default")

dynamic:

[![gmailProducer_dynamic](%image_url%/qik-node-actions/mail/gmail_dyn.png "gmailProducer_dynamic")](%image_url%/qik-node-actions/mail/gmail_dyn.png "gmailProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](%image_url%/qik-node-actions/response.png "response")


------------

#   SMTP producer:

This Api Send mail from any smtp account.

------------

    url:        http://qik-node:qik-node@actions.qik.ai/smtpProducer

    method :    post

    headers:    {   "Content-Type" : "application/json"}

    body:   

        for default configuration:
                
                {
                    "to": "xxxxxx",
                    "cc": "xxxxxx",
                    "bcc": "xxxxx",
                    "subject": "xxxxx",
                    "body": "xxxxx"
                }

        for dynamic configuration:
                
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

    result:     inserted in queue

**Note:**

1. 'cc', 'bcc', 'to' are all optional but atleast one is must
2. multiple receivers are ',' seperated.
3. 'username','password','host' and 'port' are optional and for configuring new user.
4. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![smtpProducer_default](%image_url%/qik-node-actions/mail/smtp_def.png "smtpProducer_default")](%image_url%/qik-node-actions/mail/smtp_def.png "smtpProducer_default")

dynamic:

[![smtpProducer_dynamic](%image_url%/qik-node-actions/mail/smtp_dyn.png "smtpProducer_dynamic")](%image_url%/qik-node-actions/mail/smtp_dyn.png "smtpProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](%image_url%/qik-node-actions/response.png "response")

------------
------------

#   MAILGUN Producer

This API send simple text mail to only validate receivers.

------------

    url:        http://qik-node:qik-node@actions.qik.ai/mailgunProducer

    method :    post

    headers:    {   "Content-Type" : "application/json"}

    body:   

        for default configuration:

                {
                    "from":"xxxxx",
                    "to": "xxxxxx",
                    "subject": "xxxxx",
                    "body": "xxxxx"
                    }

        for dynamic configuration:

                {
                    "apiKey": "xxxxx",
                    "domain": "xxxxx",
                    "from":"xxxxx",
                    "to": "xxxxxx",
                    "subject": "xxxxx",
                    "body": "xxxxx"
                    }

    Result:     inserted in queue


**Note:**

1. 'apiKey' and 'domain' are optional and for configuring new user.
2. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![mailgunProducer_default](%image_url%/qik-node-actions/mail/mailgun_def.png "mailgunProducer_default")](%image_url%/qik-node-actions/mail/mailgun_def.png "mailgunProducer_default")

dynamic:

[![mailgunProducer_dynamic](%image_url%/qik-node-actions/mail/mailgun_dyn.png "mailgunProducer_dynamic")](%image_url%/qik-node-actions/mail/mailgun_dyn.png "mailgunProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](!%5Bscreen-shots%5D/response.png "response")

------------
------------

#   SESMAIL Producer

This API send simple text mail to only validate receivers.

------------

    url:        http://qik-node:qik-node@actions.qik.ai/sesmailProducer

    method:     post

    headers:    {   "Content-Type" : "application/json"}

    body:  

        for default configuration:

                {
                    "from":"xxxxx",
                    "to":"xxxxx",
                    "cc":"xxxxx",
                    "bcc":"xxxxx",
                    "subject":"xxxxx",
                    "body":"xxxxx"
                }

        for dynamic configuration:

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

    Result:     inserted in queue


**Note:**

1. 'cc', 'bcc', 'to' are all optional but atleast one is must
2. multiple receivers are ',' seperated.
3. 'awsAccessKey','awsSecretKey','awsRegion' are optional and for configuring new user.
4. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![sesProducer_default](%image_url%/qik-node-actions/mail/ses_def.png "sesProducer_default")](%image_url%/qik-node-actions/mail/ses_def.png "sesProducer_default")

dynamic:

[![sesProducer_dynamic](%image_url%/qik-node-actions/mail/ses_dyn.png "sesProducer_dynamic")](%image_url%/qik-node-actions/mail/ses_dyn.png "sesProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](%image_url%/qik-node-actions/response.png "response")

------------
------------