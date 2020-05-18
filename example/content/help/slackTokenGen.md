/*
Title: slackTokenGen
*/


# Steps to generate new slack Token

**Note**

you need to have a admin access to a slack workspace.
if don't then please
<a href="https://slack.com/help/articles/206845317-create-a-slack-workspace">follow this tutorial</a>


---------

**Step 1:** 

<h1>Create a slack App</h1>

to create new slack app  <a href="https://api.slack.com/apps"> click here </a>
</br>

[![createSlackApp](%image_url%/qik-node-actions/slack/createSlackApp.png "createSlackApp")](%image_url%/qik-node-actions/slack/createSlackApp.png "createSlackApp")

</br>

Select Development Slack Workspace, created above.

</br>

---------

**Step 2:**
<h1>Activate Incoming Webhook</h1>

[![basic](%image_url%/qik-node-actions/slack/basic.png "basic")](%image_url%/qik-node-actions/slack/basic.png "basic")

</br>

from 'Add features and functionality' select Incoming Webhooks.

</br>

[![incomingWebhook](%image_url%/qik-node-actions/slack/incomingWebhook.png "incomingWebhook")](%image_url%/qik-node-actions/slack/incomingWebhook.png "incomingWebhook")

</br>

after turing on the switch add Webhook URLs for Your Workspace
and select channel you want posts as an app.

</br>

---------


**Step 3:**
<h1>OAuth Tokens & Redirect URLs</h1>

in Scopes add following scopes:
1.  chat:write
2.  chat:write.public

</br>

[![botScope](%image_url%/qik-node-actions/slack/botScope.png "botScope")](%image_url%/qik-node-actions/slack/botScope.png "botScope")

</br>

and then reinstall the app.

</br>

after reinstalling the app use  <b>Bot User OAuth Access Token</b> as  <b>slack api token</b> in your slack apis.

-------------
------------
