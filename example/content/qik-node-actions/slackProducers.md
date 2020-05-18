/*
Title: slackProducers
*/

------------

Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------

## slackToChannel Producer

This API send slack to channel .

------------

    url:        http://qik-node:qik-node@actions.qik.ai/slackToChannel

    method :    post

    headers:    { "Content-Type" : "application/json" }

    body:       
    
        for default configuration:

                {
                    "slackChannelName":"#xxxxx",
                    "slackMessage":"xxxxx"
                }

        for dynamic configuration:
                
                {
                    "slackApiToken":"xxxxx",
                    "slackChannelName":"#xxxxx",
                    "slackMessage":"xxxxx"
                }


    Result:     inserted in queue

**Note:**
    
1. 'slackApiToken' is optional and for configuring new slackApiToken.
2. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![slack2ChannelProducer_default](%image_url%/qik-node-actions/slack/slack2Ch_def.png "slack2ChannelProducer_default")](%image_url%/qik-node-actions/slack/slack2Ch_def.png "slack2ChannelProducer_default")

dynamic:

[![slack2ChannelProducer_dynamic](%image_url%/qik-node-actions/slack/slack2Ch_dyn.png "slack2ChannelProducer_dynamic")](%image_url%/qik-node-actions/slack/slack2Ch_dyn.png "slack2ChannelProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](%image_url%/qik-node-actions/response.png "response")

------------

## slackToUser Producer

This API send slack to user .

------------

    url:        http://qik-node:qik-node@actions.qik.ai/slackToUser

    method:     post

    headers:    { "Content-Type" : "application/json" }

    body:       
    
        for default configuration:

                {	
                    "slackUser":"@xxxxx",
                    "slackMessage":"xxxxx"
                }

        for dynamic configuration:

                {	
                    "slackApiToken":"xxxxx",
                    "slackUser":"@xxxxx",
                    "slackMessage":"xxxxx"
                }

    Result:     inserted in queue


**Note:**

1. 'slackApiToken' is optional and for configuring new slackApiToken.
2. for default , default parameters from environment variables will be loaded.    

**example :**

default :

[![slack2UserProducer_default](%image_url%/qik-node-actions/slack/slack2Us_def.png "slack2UserProducer_default")](%image_url%/qik-node-actions/slack/slack2Us_def.png "slack2UserProducer_default")

dynamic:

[![slack2UserProducer_dynamic](%image_url%/qik-node-actions/slack/slack2Us_dyn.png "slack2UserProducer_dynamic")](%image_url%/qik-node-actions/slack/slack2Us_dyn.png "slack2UserProducer_dynamic")

Result:

[![response](%image_url%/qik-node-actions/response.png "response")](%image_url%/qik-node-actions/response.png "response")

------------
------------
