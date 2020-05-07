/*
Title: sms
*/

# SENDSMS
This api send sms from onlinebulksms server.

default account - livedrona

**prerequisites :**
- valid 10 digits Number Only .

------------

**send_sms url : https://qik-actions.herokuapp.com/sms/send_sms/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

default :

    {
    	"receivers": "xxxxxxxxxx" or "xxxxxxx,xxxxxxx", # multiple receivers , seperated.
    	"message": "xxxxxx",
    }

dynamic :

    {
	    "username":"xxxxxxx",
	    "password":"xxxxxxxxx",
	    "sender":"xxxxxxx",
	    "receivers":"xxxxx" or "xxxxxxxxxx,xxxxxxx",  # multiple receivers , seperated.
	    "message":"xxxxx"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "Sent to xxxxxxxxxx" or "Sent to xxxxxxxxxx,xxxxxxxxxx"
    }

------------

**example :**
 
 
default:

[![send_sms_default](!%5Bscreen-shots%5D/sms_app/send_sms_default.png "send_sms_default")](!%5Bscreen-shots%5D/sms_app/send_sms_default.png "send_sms_default")

------------

dynamic:

[![send_sms_dynamic](!%5Bscreen-shots%5D/sms_app/send_sms_dynamic.png "send_sms_dynamic")](!%5Bscreen-shots%5D/sms_app/send_sms_dynamic.png "send_sms_dynamic")


------------



# SEND BULKSMS

This API send bulk sms to mobile numbers from csv file

default server -  livedrona

**prerequisites :**
- sms will be sent to 10 digit Numbers 
- csv_file_format  example -

    Name,Mobile Number
    
    xxxx,xxxxxxxxxx
    
    yyyy,yyyyyyyyyy
    
    aaa,aaaaaaaaaa

------------

**send_bulksms url : https://qik-actions.herokuapp.com/sms/send_bulksms/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

default:

    {
    	"csv_url":"xxxxxxxxx",
    	"message": "xxxxxxxx"
    }

dynamic:

    {
	    "username":"xxxxxxx",
	    "password":"xxxxxxx",
        "sender":"xxxxxxx",
	    "csv_url":"xxxxxxxxx",
	    "message":"xxxxxxx"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "Sent to ['xxxxxxxxxx','yyyyyyyyyy','aaaaaaaaaa']"
    }

------------

**example :**

default:

[![send_bulksms_default](!%5Bscreen-shots%5D/sms_app/send_bulksms_default.png "send_bulksms_default")](!%5Bscreen-shots%5D/sms_app/send_bulksms_default.png "send_bulksms_default")

------------

dynamic:

[![send_bulksms_dynamic](!%5Bscreen-shots%5D/sms_app/send_bulksms_dynamic.png "send_bulksms_dynamic")](!%5Bscreen-shots%5D/sms_app/send_bulksms_dynamic.png "send_bulksms_dynamic")

------------
------------

# GENERATE OTP

This API generates 4 digits OTP for a mobile number.

default server - livedrona


**prerequisites :**
- valid 10 digits Number Only

------------

**generate_otp url: https://qik-actions.herokuapp.com/sms/generate_otp/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

default:

    {
    	"mobile_number":"xxxxxxxxxx",
    }

dynamic:

    {
        "username":"xxxxxxx",
	    "password":"xxxxxxx",
        "sender":"xxxxxxx",
    	"mobile_number":"xxxxxxxxxx",
    }

------------

**output parameters :**

    {
        "status": "Success",
        "OTP": "Otp Sent to xxxxxxxxx"
    }

------------  

**example :**

default:
 
[![generate_otp_default](!%5Bscreen-shots%5D/sms_app/generate_otp_default.png "generate_otp_default")](!%5Bscreen-shots%5D/sms_app/generate_otp_default.png "generate_otp_default")

------------

dynamic:
 
[![generate_otp_dynamic](!%5Bscreen-shots%5D/sms_app/generate_otp_dynamic.png "generate_otp_dynamic")](!%5Bscreen-shots%5D/sms_app/generate_otp_dynamic.png "generate_otp_dynamic")

------------
------------

# UHOSTL SENDSMS

This Api sms from UHOSTL server.

default server - livedrona

**prerequisites :**
- valid 10 digits Number Only .

------------

**uhostl/sendsms url : https://qik-actions.herokuapp.com/sms/uhostl/sendsms/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

sendsms_default :

    {
    	"receivers": "xxxxxxxxxx" or "xxxxxxxxxx,xxxxxxxxxx",
    	"message": "sms_text_here",
    }

sendsms_dynamic :

    {
	    "username":"xxxxxxx",
	    "password":"xxxxxxxx",
	    "receivers":"xxxxxxxxxx",
	    "message":"sms_text_here"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "Sent to xxxxxxxxxx" or "Sent to xxxxxxxxxx,xxxxxxxxxx"
    }

------------

**example :**
 
 
sendsms_default:

[![uhostl_sendsms_default](!%5Bscreen-shots%5D/sms_app/uhostl_sendsms_default.png "uhostl_sendsms_default")](!%5Bscreen-shots%5D/sms_app/uhostl_sendsms_default.png "uhostl_sendsms_default")

------------

sendsms_dynamic:

[![uhostl_sendsms_dynamic](!%5Bscreen-shots%5D/sms_app/uhostl_sendsms_dynamic.png "uhostl_sendsms_dynamic")](!%5Bscreen-shots%5D/sms_app/uhostl_sendsms_dynamic.png "uhostl_sendsms_dynamic")


------------

# TWILIO SENDSMS 

This Api sms from Twilio server to validated users.

**prerequisites :**
- valid 10 digits Number Only
- receivers numbers should be validated on TWILIO.

------------

**twilio/sendsms url : https://qik-actions.herokuapp.com/sms/twilio/sendsms/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

sendsms_default:

    {
    	"receivers": "xxxxxxxxxx" or "xxxxxxxxxx,xxxxxxxxxx",
    	"message": "sms_text_here",
    }

sendsms_dynamic:

    {
	    "account_sid":"xxxxxxxxxxxxxxxxxxxxxxx",
	    "auth_token":"xxxxxxxxxxxxxxxxxxxxxxxxx",
	    "twilio_number":"xxxxxxxxxx",
	    "receivers":"xxxxxxxxxx",
	    "message":"sms_text_here"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "Sent to xxxxxxxxxx" or "Sent to xxxxxxxxxx,xxxxxxxxxx"
    }

------------

**example :**
 
sendsms_default:

[![twilio_sendsms_default](!%5Bscreen-shots%5D/sms_app/twilio_sendsms_default.png "twilio_sendsms_default")](!%5Bscreen-shots%5D/sms_app/twilio_sendsms_default.png "twilio_sendsms_default")

------------

sendsms_dynamic:

[![twilio_sendsms_dynamic](!%5Bscreen-shots%5D/sms_app/twilio_sendsms_dynamic.png "twilio_sendsms_dynamic")](!%5Bscreen-shots%5D/sms_app/twilio_sendsms_dynamic.png "twilio_sendsms_dynamic")

------------
------------


# UHOSTL BULKSMS

This API send bulk sms to mobile numbers from csv file

default server -  livedrona

**prerequisites :**
- sms will be sent to 10 digit Numbers 
- csv_file_format  example -

    Name,Mobile Number
    
    xxxx,xxxxxxxxxx
    
    yyyy,yyyyyyyyyy
    
    aaa,aaaaaaaaaa

------------

**uhostl/bulksms url : https://qik-actions.herokuapp.com/sms/uhostl/bulksms/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

bulksms_default:

    {
    	"csv_url":"csv_file_url",
    	"message": "text_message_here"
    }

bulksms_dynamic:

    {
	    "username":"xxxxxxx",
	    "password":"xxxxxxx",
	    "csv_url":"csv_file_url",
	    "message":"text_message_here"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "Sent to ['xxxxxxxxxx','yyyyyyyyyy','aaaaaaaaaa']"
    }

------------

**example :**

bulksms_default:

[![uhostl_bulksms_default](!%5Bscreen-shots%5D/sms_app/uhostl_bulksms_default.png "uhostl_bulksms_default")](!%5Bscreen-shots%5D/sms_app/uhostl_bulksms_default.png "uhostl_bulksms_default")

------------

bulksms_dynamic:

[![uhostl_bulksms_dynamic](!%5Bscreen-shots%5D/sms_app/uhostl_bulksms_dynamic.png "uhostl_bulksms_dynamic")](!%5Bscreen-shots%5D/sms_app/uhostl_bulksms_dynamic.png "uhostl_bulksms_dynamic")

------------
------------

# TWILIO BULKSMS

This API send bulk sms to mobile numbers from csv file

**prerequisites :**
- sms will be sent to 10 digit Numbers 
- csv_file_format  example -

    Name,Mobile Number
    
    xxxx,xxxxxxxxxx
    
    yyyy,yyyyyyyyyy
    
    aaa,aaaaaaaaaa

------------

**twilio/bulksms url : https://qik-actions.herokuapp.com/sms/twilio/bulksms/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

bulksms_default:

    {
    	"csv_url" : "csv_file_url",
    	"message" : "text_message_here"
    }

bulksms_dynamic:

    {
	    "account_sid" : "xxxxxxxxxxxxxxxx",
	    "auth_token" : "xxxxxxxxxxxxxxxxxx",
	    "twilio_number" : "xxxxxxxxxxx",
	    "csv_url" : "csv_file_url",
	    "message" : "text_message_here twilio"
    }

------------

**output parameters :**

    {
        "status": "Success",
        "message": "Sent to ['+91xxxxxxxxxx','+91yyyyyyyyyy','+91aaaaaaaaaa']"
    }

------------

**example :**
 
bulksms_default:

[![twilio_bulksms_default](!%5Bscreen-shots%5D/sms_app/twilio_bulksms_default.png "twilio_bulksms_default")](!%5Bscreen-shots%5D/sms_app/twilio_bulksms_default.png "twilio_bulksms_default")

------------

bulksms_dynamic:

[![twilio_bulksms_dynamic](!%5Bscreen-shots%5D/sms_app/twilio_bulksms_dynamic.png "twilio_bulksms_dynamic")](!%5Bscreen-shots%5D/sms_app/twilio_bulksms_dynamic.png "twilio_bulksms_dynamic")

------------
------------

# UHOSTL GETOTP

This API generates 4 digits OTP for a mobile number.

default server - livedrona


**prerequisites :**
- valid 10 digits Number Only

------------

**uhostl/bulksms url: https://qik-actions.herokuapp.com/sms/uhostl/getotp/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

getotp_default:

    {
    	"mobile_number":"xxxxxxxxxx",
    }

getotp_dynamic:

    {
        "username":"xxxxxxx",
	    "password":"xxxxxxx",
    	"mobile_number":"xxxxxxxxxx",
    }

------------

**output parameters :**

    {
        "status": "Success",
        "OTP": xxxxxx
    }

------------  

**example :**

getotp_default:
 
[![uhostl_getotp_default](!%5Bscreen-shots%5D/sms_app/uhostl_getotp_default.png "uhostl_getotp_default")](!%5Bscreen-shots%5D/sms_app/uhostl_getotp_default.png "uhostl_getotp_default")

------------

getotp_dynamic:
 
[![uhostl_getotp_dynamic](!%5Bscreen-shots%5D/sms_app/uhostl_getotp_dynamic.png "uhostl_getotp_dynamic")](!%5Bscreen-shots%5D/sms_app/uhostl_getotp_dynamic.png "uhostl_getotp_dynamic")

------------
------------

# TWILIO GETOTP

This API generates 4 digits OTP for a mobile number.

**prerequisites :**
- valid 10 digits Number Only
- number has to be validated on twilio

------------

**twilio/bulksms url: https://qik-actions.herokuapp.com/sms/twilio/getotp/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

getotp_default:

    {
    	"mobile_number":"xxxxxxxxxx",
    }

getotp_dynamic:

    {
	    "account_sid":"xxxxxxxxxxx",
	    "auth_token":"xxxxxxxxxx",
	    "twilio_number":"xxxxxxxx",
    	"mobile_number":"xxxxxxxxxx",
    }

------------

**output parameters :**

    {
        "status": "Success",
        "OTP": xxxxxx
    }

------------  

**example :**

getotp_default:
 
[![twilio_getotp_default](!%5Bscreen-shots%5D/sms_app/twilio_getotp_default.png "twilio_getotp_default")](!%5Bscreen-shots%5D/sms_app/twilio_getotp_default.png "twilio_getotp_default")

------------

getotp_dynamic:
 
[![twilio_getotp_dynamic](!%5Bscreen-shots%5D/sms_app/twilio_getotp_dynamic.png "twilio_getotp_dynamic")](!%5Bscreen-shots%5D/sms_app/twilio_getotp_dynamic.png "twilio_getotp_dynamic")

------------
------------

# VERIFY OTP

This API verifies otp with most recent entry saved into the database .

**prerequisites :**
- valid 10 digits Number Only

------------

**URL Link: https://qik-actions.herokuapp.com/sms/otpverify/**

**method : post**

**Content-Type : application/json**

------------

**input parameters :**

    {
    	"mobile_number" : "xxxxxxxxxx",
    	"OTP" : "xxxxxx"
    }

------------

**output parameters :**

    {
        "status" : "Success",
        "message" : "verified for {mobile_number} "
    }

------------

**example :**
 
[![otp_verify](!%5Bscreen-shots%5D/sms_app/otp_verify.png "otp_verify")](!%5Bscreen-shots%5D/sms_app/otp_verify.png "otp_verify")

------------
------------