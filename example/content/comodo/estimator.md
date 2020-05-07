/*
Title: estimator
*/


# Train

this api is to train the model.

------------

**Url: http://3.6.33.247/estimators/train**

**method : get**

------------

**input:**
Query Params :

    {"key":"dataset","value":"xxxxxxx"},
    {"key":"algorithm","value":"xxxxxxxxx"},
    {"key":"feature_columns","value":"xxxxxxx"},
    {"key":"label","value":"xxxxxxxx"},
    {"key":"train_steps","value":"xxxx"}

------------

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

------------

**example :**


[![trainData](%image_url%/comodo/train.png "trainData")](%image_url%/comodo/train.png "trainData")

------------
------------


# Retrain

this api is to retrain the dataset over the model.

------------

**Url: http://3.6.33.247/estimators/retrain**

**method : get**

------------

**input:**
Query Params :

[
    {"key":"dataset","value":"xxxxx"},
    {"key":"algorithm","value":"xxxxxxxx"},
    {"key":"feature_columns","value":"xxxxxx"},
    {"key":"label","value":"xxxxx"},
    {"key":"train_steps","value":"xxxx"}
    ]

------------

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

------------

**example :**

retrain example :

[![retrainData](%image_url%/comodo/retrain.png "retrainData")](%image_url%/comodo/retrain.png "retrainData")

------------

# Predict 

this api is to make a single prediction.

------------

**Url: http://3.6.33.247/estimators/predict**

**method : get**

**Content-Type : application/json**

------------

**input:**

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

------------

**output parameters :**

for Regression Result :

    {
        "result for record ": "Predicted Value of xxxxxx is [xxxxxx]"  #label , result
    }


------------

**example :**

[![predictData](%image_url%/comodo/predict.png "predictData")](%image_url%/comodo/predict.png "predictData") 

------------

# deleteModel 

this api delete the model.

------------

**Url: http://3.6.33.247/estimators/delete**

**method : get**

------------

**input:**
Query Params :

    {"key":"dataset","value":"xxxxxxxxx"},
    {"key":"algorithm","value":"xxxxxxxxx"},

------------

**output parameters :**

    {
        "Status": "Success",
        "message": "xxxxx is removed"
    }

------------

**example :**

[![deleteModel](%image_url%/comodo/delete.png "deleteModel")](%image_url%/comodo/delete.png "deleteModel")

------------