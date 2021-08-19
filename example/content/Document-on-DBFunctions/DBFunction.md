     Document on DBFunctions working
     
•	Dbfunctions or custom function we write in code editor of appcreator are saved In w_DBFunctions class

•	The code of functions is saved in encrypted(base64) format in the class with classname, conditions, eventTrigger and appid 

•	This functions are deployed through vm by deployFunction and all function are deployed by
     Calling from DBFunction 

•	The logs generated through vm is saved in w_DBFunctionsLogs class by current function objectId and can be access through live query using on the w_DBFunctionsLogs 
     
    1.	DBFunction

•	It’s a Post function calling and running functions saved in w_DBFunctions class through vm at time of restart or build
 

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

•	It's Post function for deploying custom function we write in code editor of appcreator 
     the custom function is called using provided objectId from w_DBFunctions class and runs the functions through vm

•	The logs generated through vm is saved in w_DBFunctionsLogs class by current function objectId and can be access through live query using on the w_DBFunctionsLogs 

 
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

•	Then the function will be run through vm then custom function can be used sepretly 


    Result:-
    
1. In return of this function the result will be return 

{"functionresult": "returns result of the called function"}
