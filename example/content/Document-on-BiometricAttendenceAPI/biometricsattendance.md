         Document on Bimetrics attendence API
.
     Introduction
     
•	The attendence is marked by biometric machine and uploaded attendance by API in Biometrics_MachineConfig class
         for that we need to add domain in biometric machine e.g. server.qik.ai
         
•	In Biometrics_MachineConfig class we need to add configration details as given below.
.
.
         1)Targetclass        :- the class of the application where biometric attendance will be saved
.         
         2)TimeStampField     :- the field of target class where the timestamp need to be added 
.         
         3)MachineId          :- the biometric machine id
.        
         4)MachineUserIdField :- the where the MachineUserId of user is saved
.       

•	attendence or timeStamp is marked & updated in timeStampField using where condition for MachineUserId and MachineId 
         in th given target class

•	we need to get the timestamp from target class on beforesave or aftersave events ot that class and use it as per need


     How to use

•	It is called by machine when there is thumb impression 

      
     Result:-

•	saved attendence by api in Biometrics_MachineConfig





