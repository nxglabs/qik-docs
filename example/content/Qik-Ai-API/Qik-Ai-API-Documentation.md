              Document on Schemas Query

Before using this document one must know about Rest API for classes and schema API on parse server given links contains the related topics
https://docs.parseplatform.org/rest/guide/#object-format

https://docs.parseplatform.org/rest/guide/#schema

   Note: 

•	This document is for the users who are holding the role like “appname_appeditor” except UniqueQuery and UserGroups 

•	The class Name in request must have prefix of app name like “appname_className”



     1.  Schemas API

Introduction

•  The Get API for schemas where Master key is required is can be execute through “schemas” API

 
 | API Title   | schemas                                                     |
 |-------------|-------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/schemas                 |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | className                                                   |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |
 



    How to use
•	Provide input parameter “className” as the required class name to get the schema

•	The header sessionToken must be the logged in user’s sessionToken and the user must be in the appeditor group the below image shows an example for the same

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/header.PNG)


•	Example valid input request is as follows 


      {  "className":"Invoice_ak"   }

.

    Result:-
 
 ![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/schemas.PNG)

.


    2.	AddSchemas API

Introduction

•  The Post API for schemas where master key is required is can be execute through “AddSchemas”

 
 | API Title   | AddSchemas                                                  |
 |-------------|-------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/AddSchemas              |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | reqparam                                                    |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |



    How to use
•	Provide input parameter “reqparam” as the required to add the class or schema

•	Example valid input request is as follows 


      {   "reqparam":{
                                "className":"City",
		        "fields":{"cityname":{"type":"String" }}}
       }


.


       Result:-

 ![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/addschema.PNG)

.

 
    3.	UpdateSchemas API

Introduction

•	The Put or Update API for schemas where master key is required is can be execute through the “UpdateSchemas ” API and 
•	 this api is use for deleting particular field from schema  ,to delete a particular field or index, you need to use {"__op" : "Delete" }



 
 | API Title   | UpdateSchemas                                                |
 |-------------|--------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/UpdateSchemas            |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | reqparam                                                     |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |



    How to use
•	Provide input parameter reqparam as the required row body to update schema 

•	Example valid input request to update schema is as follows 

      {    "reqparam":
           {
                    "className":"City",
                  "fields":{ "pincode":{ "type":"Number" }
              }
           }
        } 

.        

•	Example valid input request to delete field is as follows 

     {   "reqparam":
          {  
                 "className": "City",
                 "fields": {"cityname": { "__op": "Delete" }
             }
           }
      }


.


      Result:-


•	For update schema

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/updateschema.PNG)


•	For delete field

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/deletefield.PNG)

.


    4.	DeleteSchemas API

Introduction


•	All the Delete API for classes, schemas where master key is required is can be execute through only one     “DeleteSchemas” API

•	But the class won’t be delete, if it holds records
 

 
 | API Title   | DeleteSchemas                                                |
 |-------------|--------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/DeleteSchemas            |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | className                                                    |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |



    How to use
•	Provide input parameter “className” to delete the schema

•	Example valid input request is as follows, must change class name with real one

      {  "className":"City" }

.    


    Result:-
 
 ![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/deleteschema.PNG)

.


    5.	Classlist API	


Introduction

•	The class list API for is use to give list of classes of the app only to the user having app editor role


 | API Title   | Classlist                                                    |
 |-------------|--------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/Classlist                |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | appname                                                      |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |



    How to use
•	Provide input parameter “appname” to get the class list as shown in the following image

•	Example valid input request is as follows

      {
	    "appname":"Invoice"  
      } 

.

    Result:-
 
 ![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/classlistwithappname.PNG)

 
 

     6.	UniqueQuery API


Introduction

•	The UniqueQuery API is use to give condition result like aggregate and distinct queries for the given className

•	To use this API appeditor role is not compulsory if the user has read permissions for the requested className

•	This API is also use for group by conditions



 | API Title   | UniqueQuery                                                  |
 |-------------|--------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/UniqueQuery              |
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

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/uniqueQuery.PNG)


•	Example valid input request for group conditions as follows

        {
	     "condition":"group={'objectId':'$employee_id','total':{'$sum':'$calculation_details'}}",
	      "className":"uat_ExpenseDetails"
       }
.

     Result:-

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/groupInUniquequery.PNG)




       7.	UserGroups API

Introduction

•	The UserGroups API is use to give the now logged in user’s groups or  roles for given appname 

•	To use this API appeditor role is not compulsory 


 | API Title   | UserGroups                                                   |
 |-------------|--------------------------------------------------------------|
 | URL	   | https://server.qik.ai/app/functions/UserGroups               |
 | Method      | Post                                                         |
 | URL Params  | --                                                           |
 | Body Params | appname                                                      |
 | Version     | 1.0                                                          |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |


    How to use
   
•	Provide input parameter “appname” to get the roles of user for that particular app in result

•	 Example valid input request is as follows

       {
	       "appname":"invoicetracker"
       }
.
    Result:-

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/usergroupwithappname.PNG)


.


      8.	AddUserToRole API


Introduction

•	The AddUserToRole API is use to add the user or attach the user to given role

•	To use this API appeditor role is not compulsory 


 | API Title   | AddUserToRole                                                 |
 |-------------|-------------------------------------------------------------- |
 | URL	   | https://server.qik.ai/app/functions/AddUserToRole             |
 | Method      | Post                                                          |
 | URL Params  | --                                                            |
 | Body Params | roleName, userId                                              |
 | Version     | 1.0                                                           |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


       How to use

•	Provide input parameter “roleName” in which given “userId” need to be added   

•	Example valid input request is as follows

        {
	       "roleName":"Invoice_appeditor",
	       "userId":"XKzefHKvR2"
        }

.

Result:-
![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/addusertorole.PNG)

.


      9.	Applist API


Introduction

•	The ApplistAPI is use to add the user or attach the user to given role

•	To use this API appeditor role is not compulsory 


 | API Title   | Applist                                                       |
 |-------------|-------------------------------------------------------------- |
 | URL	   | https://server.qik.ai/app/functions/Applist                   |
 | Method      | Post                                                          |
 | URL Params  | --                                                            |
 | Body Params | --                                                            |
 | Version     | 1.0                                                           |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | sessionToken           | sessionToken             |


      How to use

•	Provide header parameter “sessionToken” and app list of that  user will be given as a result  


      Result:-

![screen-shot](https://github.com/nxglabs/qik-express-server/blob/master/Images/Applist.PNG)
 
 













       10.   MoveUserToRole API

Introduction

 The MoveUserToRole API is used to delete the user or detach the user from given role

 Validations to use this API are as follows

The logged in user must be added in the appname_appeditor role else

The logged in user must be added in any role of current app

The user must be moved to the role of current app



 | API Title   | MoveUserToRole                                                |
 |-------------|-------------------------------------------------------------- |
 | URL	   | https://server.qik.ai/app/functions/MoveUserToRole            |
 | Method      | Post                                                          |
 | URL Params  | --                                                            |
 | Body Params | roleName, userId, appName                                     |
 | Version     | 1.0                                                           |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |


How to use

Provide input parameter “roleName” in which given “userId” need to be moved and current app name  

Example valid input request is as follows

{
        	"roleName":"expensetracker_appeditor",
        	"userId":"XKzefHKvR2",
	"appName":"expensetracker"
}

Result:-
 




        11.   DeleteUserFromRole

Introduction

 The DeleteUserFromRole API is used to delete the user or detach the user from given role

 Validations to use this API are as follows

The logged in user must be added in the appname_appeditor role else

The logged in user must be added in any role of current app 

The user must be deleted from  the role of current app


 | API Title   | DeleteUserFromRole                                            |
 |-------------|-------------------------------------------------------------- |
 | URL	   | https://server.qik.ai/app/functions/DeleteUserFromRole        |
 | Method      | Post                                                          |
 | URL Params  | --                                                            |
 | Body Params | roleName, userId, appName                                     |
 | Version     | 1.0                                                           |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |
 | sessionToken           | sessionToken             |


How to use

Provide input parameter “roleName” in which given “userId” need to be deleted and current app name  

Example valid input request is as follows

{
        	"roleName":"expensetracker_appeditor",
        	"userId":"XKzefHKvR2",
	"appName":"expensetracker"
}

Result:-












         12.   IntIncrement

Introduction

The intIncrement API is use for auto-increment value of given field of the given class
and we can increment value condition wise by giving condition in query parameter
The field type should be “Number”
 



 | API Title   | intIncrement                                                  |
 |-------------|-------------------------------------------------------------- |
 | URL	   | https://server.qik.ai/app/functions/intIncrement              |
 | Method      | Post                                                          |
 | URL Params  | --                                                            |
 | Body Params | className, fieldName, query                                   |
 | Version     | 1.0                                                           |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |



How to use

Provide input parameter “className” in which given “fieldName” need to be incremented  

Example valid input request is as follows

        {  
             "className": "careerhub_TblEmplyeeId", 
             "fieldName": "EmpId",
	     "query":"where={"CreatedBy": {"__type": "Pointer","className":"_User","objectId": "ixsiE4sfHH"}}"
         }

Result:-
















        13.   image_upload

Introduction

 The image_upload API is used to upload image


 | API Title   | DBFunction                                                    |
 |-------------|-------------------------------------------------------------- |
 | URL	   | https://server.qik.ai/image_upload                           |
 | Method      | Post                                                          |
 | URL Params  | --                                                            |
 | Body Params | file (form-data input parameter)                              |
 | Version     | 1.0                                                           |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |

How to use

Provide input parameter “file” which need to provide the uploaded file, ima, doc etc

Example valid input request is as follows

{
"file":"filepath"
}


Result:-

file will be uploaded aws s3 bucket and in return will recive url

{ "status":"Success" ,"imageUrl": "fileurl" }


