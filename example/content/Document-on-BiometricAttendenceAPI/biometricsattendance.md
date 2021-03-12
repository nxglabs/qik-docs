         Document on Bimetrics attendence API
.
     Introduction
     
•	The attendence is marked by biometric machine and uploaded attendance by API to Biometrics_MachineConfig class

•	attendence or timeStamp is marked updated in timeStampField using where MachineUserId for perticular MachineId 

•	we need to add MachineUserId and MachineId in Biometrics_MachineConfig class and domain in biometric machine
   e.g. server.qik.ai


     How to use

•	It is called by machine when there is thumb impression 

      
     Result:-

•	saved attendence by api in Biometrics_MachineConfig





