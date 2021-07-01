Document on Default functions

       1.SendOTPv2

•	It is Post function for getting otp in response 
 
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













       2.SendOTP

•	It is Post function for getting otp in response 

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

      { "phone ":"9876543210",     }



Result:-

1. In return of this function the otp will be return 

1234

2. This message will be received on given phone number

You OTP is:1234 shZVjoAQhN2





	







       3.sendsms

•	It is Post function for sending sms in response 

•       default account - livedrona and  sender - QikEln
 
 | API Title   | sendsms                                                     |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/sendsms                |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | receiver, message                                           |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

 
  How to use
  
•	Provide input parameter and you will get 

•	Example valid input request is as follows 

      { " receiver ":"9876543210",   "message":"abcd"  }



Result:-

1. In return of this function the success will be return 

{"result":"success"}

2. The message will be received on given phone number 

Abcd












       4.Authentication

•It is Post function is for app site Authentication

  
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









     5.	 createMeeting

•	It is Post function is for creating video meeting/online meeting

  
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











     6.	JoinMeeting


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
















    7.	JoinAsModerator

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


















    8.	Auth

•	It is Post function is for Authentication
  
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







    9.	APPActivation function

Introduction


•	APPActivation is used to activate app add default data in default classes in that app

•	and insert the userid in extended user class
 

 
 | API Title   | DeleteSchemas                                                |
 |-------------|--------------------------------------------------------------|
 | URL	       | https://server.qik.ai/app/functions/APPActivation            |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | TenantId,AppId,UserId,IsActive                               |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | X-Parse-Session-Token  | sessiontoekn             |
 



    How to use

•	Example valid input request is as follows, must change parameter with real one

      {"TenantId":{ "__type": "Pointer", "className": "partners_Tenant", "objectId": "t19E2tYzVv" },
       "AppId":{ "__type": "Pointer", "className": "w_appinfo", "objectId": "9iLy7VWpmp" },
       "UserId":{ "__type": "Pointer", "className": "_User", "objectId": "apusKvAbBQ" },
       "IsActive":true}

.    


    Result:-
 
 {"result":"success"}
