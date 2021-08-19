     Document on Default functions

   Default functions are the set of helper function and they are created in defaultdata app and can be used in other apps





       1.SendOTP

•	It is Post function for getting otp in response for front end 

 | API Title   | SendOTP                                                     |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/SendOTP                |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | phone                                                       |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

 
  How to use
  
•	Provide input parameter and you will get otp with saved hashcode of that elearning app

•	Example valid input request is as follows 

      { "phone ":"9876543210" }



Result:-

1. In return of this function the otp will be return 

1234

2. This message will be received on given phone number

You OTP is:1234 shZVjoAQhN2











       2.SendOTPv2

•	It is Post function for app side for getting otp in response 
 
 | API Title   | SendOTPv2                                                   |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/SendOTPv2              |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | packageName, phone                                          |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

 
  How to use
  
•	Provide input parameter and you will get otp with saved hashcode of that package

•	Example valid input request is as follows 

      {"packageName ":"test", "phone ":"9876543210",     }


Result:-

 1. In return of this function the otp will be return 

   1234

 2. This message will be received on given phone number 

     You OTP is:1234 abc








	



        3.SendOTPV3

•	It is Post function for getting otp in response,it can be used on app side or frontend

•	It need some extra input parameter to calculate the number of sms  
 
 | API Title   | SendOTPv2                                                   |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/SendOTPV3              |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | phone, packageName or appId, UserId                         |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

 
  How to use
  
•	Provide input parameter and you will get otp with saved hashcode of that package
        packageName parameter is provided to get hashcode from elearning_BuildConfig class
	which is used to autoread otp in app  

•	Example valid input request is as follows for app side 

      {"packageName ":"test", "phone ":"9876543210" }
      
•	Example valid input request is as follows for app side 

     { "phone":"98816789382",
    "appId":{ "__type": "Pointer", "className": "w_appinfo", "objectId": "objid" },
    "UserId":{ "__type": "Pointer", "className": "_User", "objectId": "objid" }}


Result:-

1. In return of this function the otp will be return 

{
    "result": 4256
}

2. This message will be received on given phone number 

      for appsite

     <#> You OTP is:1234 abc -QikEln
     
     
      for frontend

     <#> You OTP is:1234 -QikEln
     











       4.sendsms

•	It is Post function for sending sms in response 

•       default account - livedrona and  sender - QikEln
 
 | API Title   | sendsms                                                             |
 |-------------|---------------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/sendsms                        |
 | Method      | Post                                                                |
 | URL Params  | --                                                                  |
 | Body Params | receiver, message, templateId, TenantId OR CreatedBy, extendedClass |
 | Version     | 1.0                                                                 |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

 
  How to use
  
•	Provide input parameter and you will get 

•	Example valid input request is as follows 

      { "receiver":"9876543210",  
        "message":"abcd" ,
	"templateId": "xyz", 
	"TenantId":{ "__type": "Pointer", "className": "partners_Tenant", "objectId": TenantId }}
	OR
	{ "receiver":"9876543210",  
        "message":"abcd" ,
	"templateId": "xyz", 
	"CreatedBy":{ "__type": "Pointer", "className": "_User", "objectId": id},
	"extendedClass":"extendedClass"}



Result:-

1. In return of this function the success will be return 

  {"result":"success"}

2. The message will be received on given phone number 

   Abcd












       5.SendEmails

•	It is Post function for sending mails in response 

•       default account - mailer@nxglabs.in
 
 | API Title   | SendEmails                                                          |
 |-------------|---------------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/SendEmails                     |
 | Method      | Post                                                                |
 | URL Params  | --                                                                  |
 | Body Params | Emails, Subject, Emailbody, user, pass,                             |
 |             | TenantId OR CreatedBy, extendedClass                                |  
 | Version     | 1.0                                                                 |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

 
  How to use
  
•	Provide input parameter and you will get emails sent if multiple sms needed
        send array of emailids,asvalue of "Emails" parameter 

•	Example valid input request is as follows 

      { "Emails":"EmailID",
        "Subject":"Subject",
        "Emailbody":"abcd" ,
	"user": "xyz",
	"pass":"pass",
	"TenantId":{ "__type": "Pointer", "className": "partners_Tenant", "objectId": TenantId }}
	OR
	{ "Emails":"EmailID",
        "Subject":"Subject",
        "Emailbody":"abcd" ,
	"user": "xyz",
	"pass":"pass",
	"CreatedBy":{ "__type": "Pointer", "className": "_User", "objectId": id },
	"extendedClass":"extendedClass"}



Result:-

1. In return of this function the success will be return 

 {"result":"success"}

2. The mail will be received on given Email Id

 Abcd
















       6.Authentication(unsecure)

•It is Post function is for app site Authentication or login 

  
 | API Title   | Authentication                                              |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/Authentication         |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | installationid, phone                                       |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


How to use

•	Provide input parameter and you will get 

•	Example valid input request is as follows 

      { " phone ":"9876543210",   " installationid ":"abcd"  }



Result:-

1. In return of this function the success will be return 

[{"username":"9881680372",

"phone":"9881680372",

"createdAt":"2020-05-05T05:26:40.715Z",

"updatedAt":"2020-12-30T10:37:26.086Z",

"ACL":{"*":{"read":true},

"vD0BCCZZVC":{"read":true,"write":true}},

"sessionToken":"r:6bc860bf50e0243c944939c8ad115036",

"objectId":"vD0BCCZZVC","__type":"Object","className":"_User"}] 









     7.	 createMeeting

•	It is Post function is for creating video meeting/online meeting it's created
        using big blue buttton apis

  
 | API Title   | createMeeting                                               |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/createMeeting          |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | --                                                          |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


 How to use

•	Provide input headers and call the function
	


 Result:-

1. In return of this function the success will be return 

{
    "result": "<response>\r\n<returncode>SUCCESS</returncode>\r\n<meetingID>random-8019801</meetingID>\r\n<internalMeetingID>a3441e5321f000e9530aca2840c55e2261aae8f3-1609396937141</internalMeetingID>\r\n<parentMeetingID>bbb-none</parentMeetingID>\r\n<attendeePW>ap</attendeePW>\r\n<moderatorPW>mp</moderatorPW>\r\n<createTime>1609396937141</createTime>\r\n<voiceBridge>05370</voiceBridge>\r\n<dialNumber>613-555-1234</dialNumber>\r\n<createDate>Thu Dec 31 00:42:17 CST 2020</createDate>\r\n<hasUserJoined>false</hasUserJoined>\r\n<duration>0</duration>\r\n<hasBeenForciblyEnded>false</hasBeenForciblyEnded>\r\n<messageKey></messageKey>\r\n<message></message>\r\n</response>"
}











     8.	JoinMeeting


• It is Post function is for joining video meeting/online meeting as attendent
  
| API Title   | JoinMeeting                                                  |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/JoinMeeting            |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | meetingID, fullName                                         |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


How to use

   Provide input meetingID  from createMeeting response and fullName to join the meeting using this
function
	


Result:-

1. In return of this function the joining url will be return 

{
    "result": "https://live.qik.ai/bigbluebutton/api/join?meetingID=abcd&password=pa&fullName=abc&redirect=true&checksum=abc1234 "
}
















    9.	JoinAsModerator

 •It is Post function is for joining video meeting/online meeting as Moderator
  
 | API Title   | JoinAsModerator                                             |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/JoinAsModerator        |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | meetingID, fullName                                         |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


How to use

   Provide input meetingID  from createMeeting response and fullName to join the meeting using this
function
	


Result:-

1. In return of this function the joining url will be return

{
    "result": "https://live.qik.ai/bigbluebutton/api/join?meetingID=abcd&password=pa&fullName=abc&redirect=true&checksum=abc1234 "
}


















    10.	Auth(unsecure)

•	It is Post function is for Authentication or login in frantend
  
 | API Title   | Auth                                                        |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/Auth                   |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | phone                                                       |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


How to use

•	Provide input parameter and you will get 

•	Example valid input request is as follows 

      { " phone ":"9876543210 "  }



Result:-

1. In return of this function the success will be return 

[{"username":"9881680372",
"phone":"9881680372",
"createdAt":"2020-05-05T05:26:40.715Z",
"updatedAt":"2020-12-30T10:37:26.086Z",
"ACL":{"*":{"read":true},
"vD0BCCZZVC":{"read":true,"write":true}},
"sessionToken":"r:6bc860bf50e0243c944939c8ad115036",
"objectId":"vD0BCCZZVC","__type":"Object","className":"_User"}] 







    11.	APPActivation function

Introduction


•	APPActivation is used to activate app add default data in default classes in that app
	and insert the userid in extended user class and entry in Activation class of partners app

•	if the user or admin (means the tenant user from partners class) don't have subscription 
        for the given app then it will return err msg

•	if the user is admin then the function will be done automaticaly else it will return err msg 

•	if the user is not admin then with other details admin email input will be needed



 
 | API Title   | APPActivation                                                |
 |-------------|--------------------------------------------------------------|
 | URL	       | https://server.qik.ai/app/functions/APPActivation            |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | AppId,UserId,AdminEmail(optional)                    |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | X-Parse-Session-Token  | sessiontoekn             |
 



    How to use

•	Example valid input request is as follows, must change parameter with real one

      {
       "AppId":{ "__type": "Pointer", "className": "w_appinfo", "objectId": "9iLy7VWpmp" },
       "UserId":{ "__type": "Pointer", "className": "_User", "objectId": "apusKvAbBQ" }
       }

.    


    Result:-
 
    {"result":"success"}
 
 
.



    12.	getdistinct


Introduction

•	The getdistinct is created for frontend

•	The getdistinct is use to give condition result like aggregate and distinct queries for the given className

•	To use this API appeditor role is not compulsory if the user has read permissions for the requested className

•	This API is also use for group by conditions 



 | API Title   | getdistinct                                                  |
 |-------------|--------------------------------------------------------------|
 | URL	    | https://server.qik.ai/app/functions/getdistinct              |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | Condition, className                                         |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |




   How to use

•	Provide input parameter “condition” and “className” to get the required result 

•	 Example valid input request is as follows

      {  "condition":"distinct=name", 
         "className":"City"  }

.
     Result:-
       {"result":[required response]}


•	Example valid input request for group conditions as follows

        {
	     "condition":"group={'objectId':'$employee_id','total':{'$sum':'$calculation_details'}}",
	      "className":"uat_ExpenseDetails"
       }
.

     Result:-
       {"result":[required response]}

.





 
