/*
Title: browserCalling
*/

------------


<!-- # browserCall Support Form

Here Custmer can create a ticket regarding their problem by submitting this form.
after filling the form support agent will call them afterwords.

**url:**

    https://qik-node-actions.herokuapp.com/home

**Notes:**

    1. all fields should be filled.
    2. mobile number should be with country code. ex.(+91xxxxxxxxxx)
    3. for authentication username/password - qik-node


**webpage:**

[![browserCalling_form](%image_url%/qik-node-actions/bulkcalling/browserCalling_form.png "browserCalling_form")](%image_url%/qik-node-actions/bulkcalling/browserCalling_form.png "browserCalling_form") -->


------------
------------

# CallAction

<p>Here support agent can call to customer via browser.</p>

<p>after passing the parameters agent can click on 'Call Custmer' Button to call the custmer from browser to users phone.</p>
<p> for hang the call click on 'Hang Up' Button</p>


**url:**

    https://qik-node-actions.herokuapp.com/callaction

**Query Params:**

        {   Phone           : "xxxxxxxxxxxx"},
        {   Name            :  "xxxxx"   }
        {   Details         : "xxxxxxxx"},
        {   sessionToken    : "xxxxxxxxx" }
    
**Notes:**

    1. click on call only after in status updated to ready.
    2. Phone number should be attached with country code.ex for india(91xxxxxxxxxx).
    3. sessionToken should taken from server.qik.ai server

**webpage:**

[![browserCall](%image_url%/qik-node-actions/bulkcalling/browserCall.png "browserCall")](%image_url%/qik-node-actions/bulkcalling/browserCall.png "browserCall")
