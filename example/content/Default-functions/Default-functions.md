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
2. This message will be received on given phone number You OTP is:1234 shZVjoAQhN2





	







      3.sendsms

•	It is Post function for sending sms in response 
 
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











