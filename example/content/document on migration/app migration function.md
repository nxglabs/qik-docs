     Document on app migration function
     
•	The migrateData API is used to migrate application classes data between parse server 

•	This api can be used for migrating application data between $localhost, $uat, $production or other mongodb connection string

•	This functions are deployed through vm by deployFunction and all function are deployed by
Calling from DBFunction 



 

 | API Title   | migrateData                                                 |
 |-------------|-------------------------------------------------------------|
 | URL	       | https://server.qik.ai/migrateData                           |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | appname, targetConString, sourceConString                   |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |



   How to use      
Values of any parameter should not be blank 
Provide appname of app which needs to be migrated 
targetConString - the target or destination server connection string should be provided here there are option values  for this parameter are as follows
         1.$localhost- where the migration api is running
         2.$uat- nxg-parse app
         3.$production- qik server app
         4.Direct connection string or mongo url
newappname- this parameter is used to rename the app in target database if don’t need to rename app then its default value will be ‘None’
sourceConString - the source server connection string should be provided here there are option values  for this parameter are as follows
         1.$localhost- where the migration api is running
         2.$uat- nxg-parse app
         3.$production- qik server app
         4.Direct connection string or mongo url
Sample input :-
{"appname":"expensetracker",
 "targetConString":"mongodb://heroku_d1j8nx5z:k53epkb0vapb79aq2hfu3qmq1m@ds263808.mlab.com:63808/heroku_d1j8nx5z ",
 "sourceConString":"$localhost"}

Note: - if same app name is already present on target database then again same app can't be migrated 
