/*
Title: estimator
*/


# Train 

this api is to train the model.

**Url: http://ai.qik.ai/estimators/train**

**method : get**


**Query Params:**

    {   "dataset" : "xxxxxxx" },
    {   "algorithm" : "xxxxxxxxx" },
    {   "feature_columns" : "xxxxxxx" },
    {   "label" : "xxxxxxxx" },
    {   "train_steps" : xxxx }

**output parameters :**

    {
        "algorithm": "xxxxx",
        "features": "xxxxx",
        "label": "xxxxx",
        "dataset": "xxxxx",
        "average_loss": "xxx.xxxx",
        "loss": "xx.xxx",
        "global_step": "xxx"
    }


**example :**


[![trainData](%image_url%/comodo/train.png "trainData")](%image_url%/comodo/train.png "trainData")

------------
------------


# Retrain 

this api is to retrain the dataset over the model.


**Url: http://ai.qik.ai/estimators/retrain**

**method : get**

**Query Params:**

    {   "dataset" : "xxxxx" },
    {   "algorithm" : "xxxxxxxx" },
    {   "feature_columns" :"xxxxxx" },
    {   "label" : "xxxxx"},
    {   "train_steps" : "xxxx"}


**output parameters :**

    {
        "algorithm": "xxxxx",
        "features": "xxxxx",
        "label": "xxxxx",
        "dataset": "xxxxx",
        "average_loss": "xxx.xxxx",
        "loss": "xx.xxx",
        "global_step": "xxx"
    }


**example :**

retrain example :

[![retrainData](%image_url%/comodo/retrain.png "retrainData")](%image_url%/comodo/retrain.png "retrainData")

------------
------------

# Predict 

this api is to make a single prediction.


**Url: http://ai.qik.ai/estimators/predict**

**method : get**

**Query Params:**


For DNNClassifier or DNNRegreesor:

    {
	    "dataset":"xxxxxxxxx",
	    "algorithm":"xxxxxxx",
	    "feature_columns":"xxxxxxxxxx,xxxxxxxx,xxxxxxx ....",
	    "label":"xxxxxxx",
	    "predict_values": ['xxx',xxx, xx.xx]   # ['str',int, float]
    }


For LinearClassifier or LinearRegressor:

    {
	    "dataset":"xxxxxxx",
	    "algorithm":"xxxxxxx",
	    "feature_columns":"xxxxx,xxxxxxx,xxxxx",
	    "label":"xxxx",
        "hidden_units":"xx,xx ...",
	    "predict_values": ['xxx',xxx, xx.xx]   # ['str',int, float]
    }


**output parameters :**

for Regression Result :

    {
        "result for record ": "Predicted Value of xxxxxx is [xxxxxx]"  #label , result
    }

for Classification Result:

    {
        "result for record ": "Prediction is xx with xxx%  accuracy"
    }



**example :**

regression:

[![predictData](%image_url%/comodo/predict.png "predictData")](%image_url%/comodo/predict.png "predictData") 


classification:

[![predictData2](%image_url%/comodo/predict2.png "predictData2")](%image_url%/comodo/predict2.png "predictData2")


------------
------------

# deleteModel 

this api delete the model.

**Url: http://ai.qik.ai/estimators/delete**

**method : get**

**Query Params:**

    { "dataset" : "xxxxxxxxx"}
    { "algorithm" : "xxxxxxxxx"}

**output parameters :**

    {
        "Status": "Success",
        "message": "xxxxx is removed"
    }

**example :**

[![deleteModel](%image_url%/comodo/delete.png "deleteModel")](%image_url%/comodo/delete.png "deleteModel")

------------
------------