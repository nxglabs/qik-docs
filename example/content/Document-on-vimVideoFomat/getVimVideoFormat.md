         Document on VimeoGetFormats
.
     Introduction
•	The video is uploaded to vim account from after save function of elearning_Videos class and the videoed is saved in videourl field of elearning_Videos class which then replaced with formatted URL using checkM3u8 job and this job call VimeoGetFormats to get video formated

•	Some time according to video size it takes time to convert video in formats 

•	So checkM3u8 job is set for this to call the function at every 15 minutes to check if the video formats are available and this job is scheduled using cron in app.js file


        1. checkM3u8


 | API Title   | checkM3u8                                                   |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/jobs/checkM3u8                   |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | --                                                          |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 |  X-Parse-Master-Key   |                           |
 | Content-Type           | application/json         |

  
     How to use

•	It is called internally 

      
     Result:-

•	It saves formatted video url in elearning_Video class’s videourl field 









        2.  VimeoGetFormats

•	It is Post function for getting video formats array from vimeo 

 
 | API Title   | VimeoGetFormats                                             |
 |-------------|-------------------------------------------------------------|
 | URL	       |  https://server.qik.ai/app/functions/VimeoGetFormats        |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | Body Params | playurl                                                     |
 | Version     | 1.0                                                         |


 | Headers Key            | Headers Value            |
 |------------------------|--------------------------|
 | X-Parse-Application-Id | shbjmmhfcp               |
 | Content-Type           | application/json         |


     How to use

•	Provide input parameter “playurl” it is a vimeo playurl saved in videourl field of
elearning_Videos class

•	Example valid input request is as follows 

   {"playurl":"https://player.vimeo.com/external/447767272.sd.mp4?s=a44785965de5c1517a8df9075f6e324a88160bca&profile_id=165&oauth2_token_id=1378826644 "   }

'
    Result:-
 


