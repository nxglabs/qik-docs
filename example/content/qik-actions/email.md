/*
Title: email
*/
------------

Postman Collection - https://www.getpostman.com/collections/b07869d105ab39fde583

------------

# GMAIL

This Api Send mail from gmail account with attachment files url. 
attachment files can be video, audio, documents, images etc.

for attachments add 'attachement_url' field in parameters and insert attachment url.

if you didn't enter the parameters in dynamic fields it will take default parameters

for now ,default parameters firstly needs to be saved in the database,
this api will take the first entry that has been stored in the database.

in upcoming cycles we are moving to the parmenent solution for entries into the database like mongodb or parse_server.

------------

**send_gmail Url: https://qik-actions.herokuapp.com/email/send_gmail/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

send_gmail_default:

    {
    	"receivers": "xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx",
    	"subject": "xxx",
    	"body": "xxxx",
    	"attachment_url": "xxxx"        # optional field
    }

send_gmail_dynamic :

    {
        "username":"xxx@xxxxx.xxx",
	    "password":"xxxxxxxxxx",
    	"receivers": "xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx" # multiple receivers , seperated.
    	"subject": "xxxxx",
    	"body": "xxxx",
    	"attachment_url": "xxxxx"   # optional field
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "email sent to xxx@xxx.xxx" or "email sent to xxx@xxx.xxx,xxx@xxx.xxx"
    }

------------

**example :**

send_gmail_default :

[![send_gmail_dynamic](%image_url%/qik-actions/email_app/send_gmail_default.png "send_gmail_dynamic")](%image_url%/qik-actions/email_app/send_gmail_default.png "send_gmail_dynamic")

 

------------

send_gmail_dynamic :

[![send_gmail_dynamic](%image_url%/qik-actions/email_app/send_gmail_dynamic.png "send_gmail_dynamic")](%image_url%/qik-actions/email_app/send_gmail_dynamic.png "send_gmail_dynamic")


------------
------------

# SMTP

This Api Send mail from any smtp account with attachment files url.
attachment files can be video, audio, documents, images etc.

for attachments add 'attachement_url' field in parameters and insert attachment url.

for now ,default parameters firstly needs to be saved in the database,
this api will take the first entry that has been stored in the database.

in upcoming cycles we are moving to the parmenent solution for entries into the database like mongodb or parse_server.

for tls use port = "587" or for ssl use port = "465"

------------

**send_mail Url: https://qik-actions.herokuapp.com/email/send_mail/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

send_mail_default:

    {
    	"receivers": "xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx", # multiple receivers , seperated.
    	"subject": "subject_here",
    	"body": "body_here",
    	"attachment_url": "attachement_file_url"   # optional field
    }

send_mail_dynamic :

    {
        "username":"xxx@xxxxx.xxx",
	    "password":"xxxxxxxxxx",
	    "host":"smtp.xxxx.com",
	    "port":"465" or "587", 
    	"receivers": "xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx",   # multiple receivers ,seperated.
    	"subject": "xxxxxxxxxx",
    	"body": "xxxxxxxxxx",
    	"attachment_url": "attachement_file_url"    # optional field
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "email sent to xxx@xxx.xxx" or "email sent to xxx@xxx.xxx,xxx@xxx.xxx "
    }

------------

**example :**

send_mail_default: 

[![send_mail_default](%image_url%/qik-actions/email_app/send_mail_default.png "send_mail_default")](%image_url%/qik-actions/email_app/send_mail_default.png "send_mail_default")

------------

send_mail_dynamic: 

[![send_mail_dynamic](%image_url%/qik-actions/email_app/send_mail_dynamic.png "send_mail_dynamic")](%image_url%/qik-actions/email_app/send_mail_dynamic.png "send_mail_dynamic")



------------
------------

# MAILGUN

This API send simple text mail to only validate receivers.

default parameters come from environment file.

------------

**mailgun Link: https://qik-actions.herokuapp.com/email/mailgun/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

mailgun_default :

    {
    	"sender":"xxx@xxx.xxx",
    	"receivers":"xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx",  # multiple receivers , seperated.
    	"subject":"xxxxxxxx",
    	"body":"xxxxxxxx"
    }

mailgun_dynamic :
    
    {
	    "api_key":"XXXXXXXXXX-XXXXX-XXXX",
	    "base_url":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	    "sender":"xxxxx@xxxx.xxxxxx",
	    "receivers":"xxxxx@xxxx.xxxxx",  # multiple receivers , seperated.
	    "subject":"xxxxxxxxxxxxx",
	    "body":"xxxxxxxxxxxx"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "email sent to xxx@xxx.xxx" or "email sent to xxx@xxx.xxx,xxx@xxx.xxx"
    }

------------

**example :**

mailgun_default:

[![mailgun_default](%image_url%/qik-actions/email_app/mailgun_default.png "mailgun_default")](%image_url%/qik-actions/email_app/mailgun_default.png "mailgun_default")

------------

mailgun_dynamic:

[![mailgun_dynamic](%image_url%/qik-actions/email_app/mailgun_dynamic.png "mailgun_dynamic")](%image_url%/qik-actions/email_app/mailgun_dynamic.png "mailgun_dynamic")

------------
------------

# SESMAIL

This API send simple text mail to only validate receivers.

default parameters come from environment file.

------------

**sesmail Link: https://qik-actions.herokuapp.com/email/sesmail/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

sesmail_default:

    {
    	"sender":"xxx@xxx.xxx",
    	"receivers":"xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx",  # multiple receivers , seperated.
    	"subject":"xxxxxxxx",
    	"body":"xxxxxx"
    }

sesmail_dynamic :

    {
        "access_key":"xxxxxxxxxxxxxxx",
	    "secret_key":"xxxxxxxxxxxxxxxxxxxxxx",
	    "region":"xxxxx",
    	"sender":"xxx@xxx.xxx",
    	"receivers":"xxx@xxx.xxx" or "xxx@xxx.xxx,xxx@xxx.xxx",  # multiple receivers , seperated.
    	"subject":"xxxxxx",
    	"body":"xxxxxxxx"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "email sent to xxx@xxx.xxx" or "email sent to xxx@xxx.xxx,xxx@xxx.xxx"
    }

------------

**example :**

sesmail_default:

[![sesmail_default](%image_url%/qik-actions/email_app/sesmail_default.png "sesmail_default")](%image_url%/qik-actions/email_app/sesmail_default.png "sesmail_default")

------------

sesmail_dynamic:

[![sesmail_dynamic](%image_url%/qik-actions/email_app/sesmail_dynamic.png "sesmail_dynamic")](%image_url%/qik-actions/email_app/sesmail_dynamic.png "sesmail_dynamic")

------------
------------
