/*
Title: database backup restore
*/


    # Steps to restore backup
.
1.unzip the backup of database, check if all collection files are present in it
2.Open command prompt on the backup folder of database
3.get the username and password, and connection string from target database account
4.use the following command like this to restore backup on target database 

 mongorestore --uri=mongodb+srv://username:url converted password@connection string/ClusterName?retryWrites=true --verbose --db databaseName .


