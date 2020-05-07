/*
Title: keras
*/

# Image Prediction

this api is to predict image classes on pretrained models.

pretrained models - inception , mobilenet, xception.

------------

**Url: http://3.6.33.247/keras/image_prediction**

**method : post**

------------

**input:**

Query Params :
    
{"key":"image","type":"file","value":"xxxx"}
{"key":"pretrainedModel","value":"xxxxx"}

------------

**output parameters :**

    {
        "Image Name": "xxxx.xxx",
        "Model Name": "xxxxx",
        "prediction_result": {
            "xxxx": "xxx%",
            "xxxx": "xxx%",
            "xxx": "xxx%",
            "xxx": "xxxx%",
            "xxxx": "xxx%"
        }
    }

------------

**example :**


[![imagePrediction](%image_url%/comodo/image_prediction.png "imagePrediction")](%image_url%/comodo/image_prediction.png "imagePrediction")

------------
------------

