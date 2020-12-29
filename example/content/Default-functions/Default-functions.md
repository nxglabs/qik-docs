Document on Default functions
1.	SendOTPv2

•	It is Post function for getting otp in response 
___________________________________________________________________
API Title	|    SendOTPv2
________________|__________________________________________________
URL	        |   https://server.qik.ai/app/functions/SendOTPv2
________________|___________________________________________________
Method	        |   Post
________________|___________________________________________________
URL Params	|   --
________________|___________________________________________________
Body Params	|   packageName, phone
________________|___________________________________________________
Headers	 	|   Key                |           Value 
________________|______________________|____________________________
	        |X-Parse-Application-Id| shbjmmhfcp
		____________________________________________________
	        | Content-Type	       |  application/json
________________|______________________|____________________________
 
  How to use
•	Provide input parameter and you will get otp with saved hashcode of that package
•	Example valid input request is as follows 
      {"packageName ":"test", "phone ":"9876543210",     }


Result:-
1. In return of this function the otp will be return 
1234
2. This message will be received on given phone number 
# You OTP is:1234 abc













2.	SendOTP

•	It is Post function for getting otp in response 

__________________________________________________________________ 
API Title	|    SendOTP
________________|__________________________________________________
URL	        |   https://server.qik.ai/app/functions/SendOTP
________________|___________________________________________________
Method	        |   Post
________________|___________________________________________________
URL Params	|   --
________________|___________________________________________________
Body Params	|  phone
________________|___________________________________________________
Headers	 	|   Key                |           Value 
________________|______________________|____________________________
	        |X-Parse-Application-Id| shbjmmhfcp
		____________________________________________________
	        | Content-Type	       |  application/json
________________|______________________|____________________________
 
  How to use
•	Provide input parameter and you will get otp with saved hashcode of that elearning app
•	Example valid input request is as follows 
      { "phone ":"9876543210",     }



Result:-
1. In return of this function the otp will be return 
1234
2. This message will be received on given phone number 
# You OTP is:1234 shZVjoAQhN2





	







3.	sendsms

•	It is Post function for sending sms in response 
__________________________________________________________________
API Title	|   sendsms
________________|__________________________________________________
URL	        |   https://server.qik.ai/app/functions/sendsms
________________|___________________________________________________
Method	        |   Post
________________|___________________________________________________
URL Params	|   --
________________|___________________________________________________
Body Params	|  receiver, message
________________|___________________________________________________
Headers	 	|   Key                |           Value 
________________|______________________|____________________________
	        |X-Parse-Application-Id| shbjmmhfcp
		____________________________________________________
	        | Content-Type	       |  application/json
________________|______________________|____________________________
 
 
  How to use
•	Provide input parameter and you will get 
•	Example valid input request is as follows 
      { " receiver ":"9876543210",   "message":"abcd"  }



Result:-
1. In return of this function the success will be return 
{"result":"success"}
2. The message will be received on given phone number 
Abcd











