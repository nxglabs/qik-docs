/*
Title: estimator
*/

------------

Postman Collection - https://www.getpostman.com/collections/0c533b502b2b89d1e4cc

------------

# TrainModel

this api is to train the model.

    Url:            http://ai.qik.ai/estimators/train

    method :        get

    Query Params:   {   
                        "dataset" : "xxxxxxx",    //saved csv file  ex. LVH.csv
                        "algorithm" : "xxxxxxxxx", //ex. DNNClassifier, DNNRegressor
                        "feature_columns" : "xxxxxxx", //Which are we want to use fro train
                        "label" : "xxxxxxxx", //column which we want to predict
                        "train_steps" : xxxx //default 100, no. of steps model to train
                        "eval_steps": xxx // default 100 , no. of steps to evaluate trained model 
                        "n_classes": xx // default 2 , no of classes for classification

                    }

    result:         {
                        "algorithm": "xxxxx",
                        "features": "xxxxx",
                        "label": "xxxxx",
                        "dataset": "xxxxx",
                        "average_loss": "xxx.xxxx",
                        "loss": "xx.xxx",
                        "global_step": "xxx"
                    }


"Notes" 

    1.Query Params Required - dataset,algorithm,feature_columns,label.
    
    2.Query Params Optional - train_steps,eval_steps, n_classes

**example :**

[![trainData](%image_url%/comodo/train.png "trainData")](%image_url%/comodo/train.png "trainData")

------------
------------


# RetrainModel

this api is to retrain the dataset over the model.


    Url:            http://ai.qik.ai/estimators/retrain

    method :        get

    Query Params:   {   
                        "dataset" : "xxxxxxx",    //saved csv file  ex. LVH.csv
                        "algorithm" : "xxxxxxxxx", //ex. DNNClassifier, DNNRegressor
                        "feature_columns" : "xxxxxxx", //Which are we want to use fro train
                        "label" : "xxxxxxxx", //column which we want to predict
                        "train_steps" : xxxx //default 100, no. of steps model to train
                        "eval_steps": xxx // default 100 , no. of steps to evaluate trained model 
                        "n_classes": xx // default 2 , no of classes for classification

                    }

    result:         {
                        "algorithm": "xxxxx",
                        "features": "xxxxx",
                        "label": "xxxxx",
                        "dataset": "xxxxx",
                        "average_loss": "xxx.xxxx",
                        "loss": "xx.xxx",
                        "global_step": "xxx"
                    }


Notes - 

    Query Params Required - dataset,algorithm,feature_columns,label.
    
    Query Params Optional - train_steps,eval_steps, n_classes
**example :**

[![retrainData](%image_url%/comodo/retrain.png "retrainData")](%image_url%/comodo/retrain.png "retrainData")

------------
------------

# Predict 

this api is to make a single prediction.


    Url: http://ai.qik.ai/estimators/predict

    method : get

    Query Params:
        For DNNClassifier or DNNRegreesor:
            {
                "dataset" : "xxxxxxx",    //saved csv file  ex. LVH.csv
                "algorithm" : "xxxxxxxxx", //ex. DNNClassifier, DNNRegressor
                "feature_columns" : "xxxxxxx", //Which are we want to use fro train
                "label" : "xxxxxxxx", //column which we want to predict
                "predict_values": [xxxx]    //['xxx'(str),xxx(int), xx.xx(float)] 
            }
    
        For LinearClassifier or LinearRegressor:

            {
                "dataset" : "xxxxxxx",    //saved csv file  ex. LVH.csv
                "algorithm" : "xxxxxxxxx", //ex. DNNClassifier, DNNRegressor
                "feature_columns" : "xxxxxxx", //Which are we want to use fro train
                "label" : "xxxxxxxx", //column which we want to predict
                "hidden_units": xx, //default 10,10,10
                "predict_values": [xxx]   //['xxx'(str),xxx(int), xx.xx(float)]
            }

    result:
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

    Url:            http://ai.qik.ai/estimators/delete

    method :        get

    Query Params:   { 
                        "dataset" : "xxxxxxx",    //saved csv file  ex. LVH.csv
                        "algorithm" : "xxxxxxxxx", //ex. DNNClassifier, DNNRegressor
                    }

    result:         {
                        "Status": "Success",
                        "message": "xxxxx is removed"
                    }

**example :**

[![deleteModel](%image_url%/comodo/delete.png "deleteModel")](%image_url%/comodo/delete.png "deleteModel")

------------
------------