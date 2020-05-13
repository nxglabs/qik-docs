/*
Title: bulkcalling
*/

------------

Postman Collection - https://www.getpostman.com/collections/ebbc1cb54d3bab54a22b

------------


# bulkcallingExotel

This Api calls to varified number from exotel for the given campaign name.
for ex. Drona

------------

    url:        https://qik-node:qik-node@actions.qik.ai/bulkcallingExotel

    method :    post

    header:     {"Content-Type" : "application/json"}

    body:
                Default Parameters :

                    {
                        "mobileNumber": "xxxxxxxxxx",
                        "campaign": "xxxx"
                    }


                Dynamic Parameters:

                    {
                        "exotelSid": "xxxxx",
                        "exotelApiKey": "xxxxxxx",
                        "exotelApiToken": "xxxxxx",
                        "exotelCallerId": "xxxxxx",
                        "exotelNumber": "xxxxxx",
                        "mobileNumber": "xxxxxxxxxx",
                        "campaign": "xxxxx"
                    }

    result:     call initiated

**Notes:**

    1. mobileNumber should be varified. 
    2. mobileNumber should be 10 digit.

**example :**

bulkcalling default:

[![bulkcalling_def](%image_url%/qik-node-actions/bulkcalling/bulkcalling_def.png "bulkcalling_def")](%image_url%/qik-node-actions/bulkcalling/bulkcalling_def.png "bulkcalling_def")

bulkcalling dynamic:

[![bulkcalling_dyn](%image_url%/qik-node-actions/bulkcalling/bulkcalling_dyn.png "bulkcalling_dyn")](%image_url%/qik-node-actions/bulkcalling/bulkcalling_dyn.png "bulkcalling_dyn")

------------
------------

#   bulkcallingReport

This API generate report of bulkcall campaign.

------------

    url:            https://qik-node:qik-node@actions.qik.ai/report

    method :        get

    quary params:   {"Campaign": "xxxxxx"}

    result:         [
                        {
                            "phoneNumber":"xxxxxxxxxx",
                            "response":"xxxxxxxxxxx"
                        }
                    ]

**example :**

[![bulkcalling_report](%image_url%/qik-node-actions/bulkcalling/bulkcalling_report.png "bulkcalling_report")](%image_url%/qik-node-actions/bulkcalling/bulkcalling_report.png "bulkcalling_report")

------------
------------

# browserCall Support Form

Here Custmer can create a ticket regarding their problem by submitting this form.
after filling the form support agent will call them afterwords.

**url:**

    https://qik-node-actions.herokuapp.com/home

**Notes:**

    1. all fields should be filled.
    2. mobile number should be with country code. ex.(+91xxxxxxxxxx)
    3. for authentication username/password - qik-node


**webpage:**

[![browserCalling_form](%image_url%/qik-node-actions/bulkcalling/browserCalling_form.png "browserCalling_form")](%image_url%/qik-node-actions/bulkcalling/browserCalling_form.png "browserCalling_form")


------------
------------

# browserCall Support Dashboard

<p>Here support agent can call to customer via browser.</p>
<p>after getting the ticket agent can click on 'Call Custmer' Button to call the custmer and after solving the problem they can remove the ticket by clicking 'Remove Ticket' Button.</p>
<p> for hang the call click on 'Hang Up' Button</p>


**url:**

    https://qik-node-actions.herokuapp.com/dashboard

**Notes:**

    1. click on call only after in status updated to ready.

**webpage:**

[![browserCalling_dashboard](%image_url%/qik-node-actions/bulkcalling/browserCalling_dashboard.png "browserCalling_dashboard")](%image_url%/qik-node-actions/bulkcalling/browserCalling_dashboard.png "browserCalling_dashboard")
