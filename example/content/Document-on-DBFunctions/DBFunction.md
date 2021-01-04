Document on DBFunctions working
     
•	Dbfunctions or custom function we write in code editor of elearing app or in other code editor of apps of appcreator are saved In w_DBFunctions class

•	The code of functions is saved in encrypted(base64) format in the class with classname, conditions, eventTrigger and appid 

•	This functions are deployed through vm by deployFunction and all function are deployed by
Calling from DBFunction 



    1.	DBFunction

•	It’s a Post function calling and running function saved in database through vm 
 

 | API Title   | DBFunction                                                  |
 |-------------|-------------------------------------------------------------|
 | URL	   |  https://server.qik.ai/app/functions/DBFunction             |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | --                                                          |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |



    How to use
  
•	This function is called internally at restart  

    Result:-
    
1. In return of this function success will be return 

{result : success}
 







































    2.	deployFunction

•	It is Post function for getting otp in response 

 
 | API Title   | deployFunction                                              |
 |-------------|-------------------------------------------------------------|
 | URL	   |  https://server.qik.ai/app/functions/deployFunction         |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | objectId                                                    |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |



    How to use
  
•	Provide input parameter objectId of function saved in w_DBFunctions class in parse database

•	Then the function will be run through vm then 


    Result:-
    
1. In return of this function the result will be return 

{"functionresult": "returns result of the called function"}
