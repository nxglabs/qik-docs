         Document on Bimetrics attendence API
.
     Introduction
     
•	The attendence is marked by biometric machine and uploaded attendance by API in Biometrics_MachineConfig class
         for that we need to add domain in biometric machine e.g. server.qik.ai
         
•	In Biometrics_MachineConfig class we need to add configration details as given below.

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
        
         given below is the code snippet example for calculating Intime, Outtime and working hours from timestamp 
         
                  var currentid = request.object.id;
                  //var MachineUserID = request.object.get("MachineUserID");
                 //var MachineID = request.object.get("MachineID");

               if (!request.original) {
                 console.log("object being insert");
                 console.log("regiftered MachineUserID");
                } else {
                   console.log("object being update");
                    var currentobj = request.object;
                    var currentobj_orig = request.original;
                    var TimeStamp = request.object.get("TimeStamp");
                    //-- if field TimeStamp changed
                    if (currentobj.get("TimeStamp") !== currentobj_orig.get("TimeStamp")) {
                        console.log("only if TimeStamp field chg");

                         let timestamp = TimeStamp.split(" ");
                        // Create a new JavaScript Date object based on the timestamp
                        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                        var d = timestamp[0];
                        console.log(d);
                        d = new Date(d);

                         var formattedTime = timestamp[1];
                         console.log("formattedTime");
                         console.log(formattedTime);
                         var t = formattedTime.split(":");
                          //--Hours part from the timestamp
                          var hours = t[0];
                          //--Minutes part from the timestamp
                          var minutes = t[1];


                         //--find employeeId or studentId from target class
                        const BioAttendanceEntry = new Parse.Query("targetclass");
                        const BioAttendanceEntryRes = await BioAttendanceEntry.get(currentid, { useMasterKey: true });
                        if (BioAttendanceEntryRes.length !== 0) {
                            var EmpId = BioAttendanceEntryRes.get("EmpId");
                            var empid = BioAttendanceEntryRes.get("EmpId").id;
                            var BranchId = BioAttendanceEntryRes.get("BranchId");
                            var Branch = BioAttendanceEntryRes.get("BranchId").id;


                            let formD = new Date(
                                 Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0)
                             );
                            let ToD = new Date(
                                 Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59)
                             );

                             //--check for entry in today in targetclass  
                             const pipeline = [
                                   { match: { BranchId: Branch, EmpId: empid, Date: { $gte: formD, $lt: ToD } } },
                                   { project: { objectId: 1, InTime: 1 } }
                               ]
                               console.log(JSON.stringify(pipeline));

                               const Attquery = new Parse.Query("targetclass");
                               var Attresults = await Attquery.aggregate(pipeline, { useMasterKey: true })
                                   console.log("Attresults");
                                 if (Attresults.length !== 0) {
                                      console.log(JSON.stringify(Attresults[0]));
                                       var AtId
                                       AtId = Attresults[0].objectId;
                                       var presentInTime
                                       presentInTime = Attresults[0].InTime;
                                       var OutTime = formattedTime;


                                      //--calculate working hours
                                       if (hours == '00') { hours = 24 }

                                       var currentTime = hours + "." + minutes;
                                       console.log(currentTime);

                                     //-- get input time
                                    var time = presentInTime.split(":");
                                    var hour = time[0];
                                    if (hour == '00') { hour = 24 }
                                    var min = time[1];

                                    var inputTime = hour + "." + min;
                                    console.log(inputTime);

                                     var totalTime = currentTime - inputTime;

                                      totalTime = totalTime.toFixed(2);
                                      totalTime = (Math.abs(totalTime));
                                      var TotalHours = Number(totalTime);
                                      console.log("TotalHours");
                                      console.log(TotalHours);

                                      var WorkingStatus
                                       if (TotalHours < 4) {

                                          WorkingStatus = "Absent"

                                         } else if (TotalHours >= 4 && TotalHours < 8) {

                                           WorkingStatus = "HalfDay"

                                         } else if (TotalHours >= 8) {

                                           WorkingStatus = "FullDay"
                                        }


                                  //--update targetclass for out time in that day
                                  var AtIdclass = Parse.Object.extend("targetclass");
                                  var AtIdclassquery = new Parse.Query(AtIdclass);
                                   await AtIdclassquery.get(AtId, { useMasterKey: true }).then((object) => {
                                   object.set("OutTime", OutTime);
                                   object.set("TotalHours", TotalHours);
                                   object.set("WorkingStatus", WorkingStatus)
                                   object.save(null, { useMasterKey: true }).then((response) => {
                                         console.log('targetclass Updated object');
                                   }, (error) => {
                                      console.error('Error while updating targetclass object', error);
                                      //return Promise.reject("Error:Result not found");
                                 });
                           });
                    } else {

                    //-- save InTime to targetclass
                    var Attendance = Parse.Object.extend("targetclass");
                    var Attendancequery = new Attendance();
                    Attendancequery.set("BranchId", BranchId);
                    Attendancequery.set("EmpId", EmpId);
                    Attendancequery.set("Date", d);
                    Attendancequery.set("InTime", formattedTime);
                    Attendancequery.set("WorkingStatus", "logIn")
                    await Attendancequery.save(null, { useMasterKey: true }).then(
                        (result) => {
                            console.log('targetclass Object created');
                        },
                        (err) => {
                            console.log('Error while creating targetclass Object: ')
                            console.log(err);
                        });
                      }
                    }
                  }
                  }
         
.


     How to use

•	It is called by machine when there is thumb impression 

      
     Result:-

•	saved attendence by api in Biometrics_MachineConfig





