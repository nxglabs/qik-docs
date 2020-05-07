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


[![imagePrediction](%image_url%/comodo/imagePrediction.png "imagePrediction")](%image_url%/comodo/imagePrediction.png "imagePrediction")

------------
------------

# model for zip file

this api is to train a model on saved zip file.

build types - scratch.

------------

**Url: http://3.6.33.247/keras/image_classification**

**method : post**

------------

**input:**

Query Params :

    {"key":"zip_name","value":"xxxx"},
    {"key":"build_type","value":"xxxx"}

------------

**output parameters :**

    {
        "zip name": "xxxx",
        "build type": "xxx",
        "no_of_classes": xxx,
        "model saved at": "xxx",
        "scratch_model": "xxxxxxxxx"
    }
------------
