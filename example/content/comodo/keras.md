/*
Title: keras
*/

------------

Postman Collection - https://www.getpostman.com/collections/0c533b502b2b89d1e4cc

------------

# Image Prediction

this api is to predict image classes on pretrained models.

pretrained models - inception , mobilenet, xception.

    Url:        http://ai.qik.ai/keras/image_prediction

    method :    post
    
    headers:    {   "Content-Type" : "multipart/form-data" }

    body:       {   
                    "image": insert a image file,
                    "pretrainedModel" : "xxxxx" //options -inception,mobilenet,xception
                }
    
    result:    {
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


**example :**


[![imagePrediction](%image_url%/comodo/imagePrediction.png "imagePrediction")](%image_url%/comodo/imagePrediction.png "imagePrediction")

------------
------------
