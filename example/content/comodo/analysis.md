/*
Title: analysis
*/

# Sentiment Analysis

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

[![sentiment](%image_url%/comodo/sentiment.png "sentiment")](%images_url%/comodo/sentiment.png "sentiment")

------------

# Caption Generate  

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

[![caption](%image_url%/comodo/caption.png "caption")](%images_url%/comodo/caption.png "caption")

------------

# Emotion Detect

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

[![emotion](%image_url%/comodo/emotion.png "emotion")](%images_url%/comodo/emotion.png "emotion")

------------