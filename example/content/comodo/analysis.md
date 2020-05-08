/*
Title: analysis
*/

# Sentiment Analysis 

this api helps to differentiate between positive and negative reviews.


**url: http://ai.qik.ai/analysis/sentiment**

**method : get**

**params:**

    {   "review" : "xxxx" }

**result :**

    {
        "result": "xxxxx Review"
    }

**example :**

[![sentiment](%image_url%/comodo/sentiment.png "sentiment")](%image_url%/comodo/sentiment.png "sentiment")

------------
------------

# captionGenerationByImage

this api helps to generate caption by uploading a image.

**Url: http://ai.qik.ai/analysis/captionGenerationByImage**

**method : post**

**headers:**

    {   "Content-Type" : "multipart/form-data" }

**body:**

    {   "image" : upload a image file }

**result:**

    {
        "Image Name": "xxxxx",
        "caption": "xxxxx"
    }


**example :**

[![captionGenerationByImage](%image_url%/comodo/captionGenerationByImage.png "captionGenerationByImage")](%image_url%/comodo/captionGenerationByImage.png "captionGenerationByImage")

------------
------------

# captionGenerationByUrl

this api helps to generate caption by providing a image url.

**Url: http://ai.qik.ai/analysis/captionGenerationByUrl**

**method : post**

**headers:**

    {   "Content-Type" : "application/json" }

**body:**

    {   "imageUrl" : "xxxxx" }

**result:**

    {
        "caption": "xxxxx"
    }


**example :**

[![captionGenerationByUrl](%image_url%/comodo/captionGenerationByUrl.png "captionGenerationByUrl")](%image_url%/comodo/captionGenerationByUrl.png "captionGenerationByUrl")

------------
------------


# emotionDetectionByImage

this api helps detect emotion from uploaded face images.

**url: http://ai.qik.ai/analysis/emotionDetectionByImage**

**method : post**

**headers:**

    {   "Content-Type" : "multipart/form-data" }

**body:**

    {   "image" : upload a image file }

**result :**

    {
        "Image Name": "xxxx",
        "Emotion": "xxxx"
    }

**example :**

[![emotionDetectionByImage](%image_url%/comodo/emotionDetectionByImage.png "emotionDetectionByImage")](%image_url%/comodo/emotionDetectionByImage.png "emotionDetectionByImage")

------------
------------