/*

Title: analysis

*/

# Analysis Application documention

------------
------------

## 1) Sentiment Analysis - 

this api helps to differentiate between positive and negative reviews.


**url: http://ai.qik.ai/analysis/sentiment**

**method : get**

**body:**

    Content-Disposition: form-data; name="review" value="xxxx"


**result :**

    {
        "result": "xxxxx Review"
    }

**example :**

[![sentiment](!%5Bscreen-shots%5D/sentiment.png "sentiment")](!%5Bscreen-shots%5D/sentiment.png "sentiment")

------------

## 2) Caption Generate - 

this api helps to generate caption for a image.

**Url: http://ai.qik.ai/analysis/caption**

**method : post**

**body:**

    Content-Disposition: form-data; name="xxxx"; filename="xxx"
    Content-Type: image/jpeg


**result:**

    {
        "Image Name": "xxxxx",
        "caption": "xxxxx"
    }


**example :**

[![caption](!%5Bscreen-shots%5D/caption.png "caption")](!%5Bscreen-shots%5D/caption.png "caption")

------------

## 3) Emotion Detect - 

this api helps detect emotion from uploaded face images.

**url: http://ai.qik.ai/analysis/emotion**

**method : post**

**body:**

    Content-Disposition: form-data; name="xxxx"; filename="xxx"
    Content-Type: image/jpeg


**result :**

    {
        "Image Name": "man.jpg",
        "Emotion": "Surprise"
    }

**example :**

[![emotion](!%5Bscreen-shots%5D/emotion.png "emotion")](!%5Bscreen-shots%5D/emotion.png "emotion")

------------