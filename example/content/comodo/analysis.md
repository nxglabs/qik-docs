/*
Title: analysis
*/

------------

Postman Collection - https://www.getpostman.com/collections/0c533b502b2b89d1e4cc

------------

# Sentiment Analysis 

this api helps to differentiate between positive and negative reviews.

    url:        http://ai.qik.ai/analysis/sentiment

    method :    get

    params:     {   "review" : "xxxx" }

    result :    {
                    "result": "xxxxx Review"
                    }

**example :**

[![sentiment](%image_url%/comodo/sentiment.png "sentiment")](%image_url%/comodo/sentiment.png "sentiment")

------------
------------

# captionGenerationByImage

this api helps to generate caption by uploading a image.

    Url:        http://ai.qik.ai/analysis/captionGenerationByImage

    method:     post

    headers:    {   "Content-Type" : "multipart/form-data" }

    body:       {   "image" : upload a image file }

    result:     {
                    "Image Name": "xxxxx",
                    "caption": "xxxxx"
                    }


**example :**

[![captionGenerationByImage](%image_url%/comodo/captionGenerationByImage.png "captionGenerationByImage")](%image_url%/comodo/captionGenerationByImage.png "captionGenerationByImage")

------------
------------

# captionGenerationByUrl

this api helps to generate caption by providing a image url.

    Url:        http://ai.qik.ai/analysis/captionGenerationByUrl
    
    method:    post
    
    headers:    {   "Content-Type" : "application/json" }
    
    body:       {   "imageUrl" : "xxxxx" }
    
    result:     {   "caption": "xxxxx"  }


**example :**

[![captionGenerationByUrl](%image_url%/comodo/captionGenerationByUrl.png "captionGenerationByUrl")](%image_url%/comodo/captionGenerationByUrl.png "captionGenerationByUrl")

------------
------------


# emotionDetectionByImage

this api helps detect emotion from uploaded face images.


    url:        http://ai.qik.ai/analysis/emotionDetectionByImage

    method :    post

    headers:    {   "Content-Type" : "multipart/form-data" }

    body:       {   "image" : upload a image file }

    result:     {
                    "Image Name": "xxxx",
                    "Emotion": "xxxx"
                    }

**example :**

[![emotionDetectionByImage](%image_url%/comodo/emotionDetectionByImage.png "emotionDetectionByImage")](%image_url%/comodo/emotionDetectionByImage.png "emotionDetectionByImage")

------------

# emotionDetectionByUrl

this api helps detect emotion from given image url.

    url:        http://ai.qik.ai/analysis/emotionDetectionByUrl
    
    method:     post
    
    headers:    {   "Content-Type" : "application/json" }

    body:       {   "imageUrl" : "xxxxx" }

    result:     {   "Emotion": "xxxx"   }

**example :**

[![emotionDetectionByUrl](%image_url%/comodo/emotionDetectionByUrl.png "emotionDetectionByUrl")](%image_url%/comodo/emotionDetectionByUrl.png "emotionDetectionByUrl")

------------
------------


# ObsceneImageDetectionByImage

this api helps detect whether the image is obscene or not  from uploaded face images.

---------------

    url:        http://ai.qik.ai/analysis/obsceneImageDetection

    method :    post

    headers:    {   "Content-Type" : "multipart/form-data" }

    body:       {   "image" : upload a image file }

    result:     {
                    "Image Name": "xxxx",
                    "is it safe?": "xxxx"   // safe or unsafe
                    }

**example :**

[![obsceneImageDetectionByImage](%image_url%/comodo/obsceneImageDetectionByImage.png "obsceneImageDetectionByImage")](%image_url%/comodo/obsceneImageDetectionByImage.png "obsceneImageDetectionByImage")

------------

# ObsceneImageDetectionByUrl

this api helps detect whether the image is obscene or not  from given image url.

-------------

    url:        http://ai.qik.ai/analysis/ObsceneImageDetectionByUrl
    
    method:     post
    
    headers:    {   "Content-Type" : "application/json" }

    body:       {   "imageUrl" : "xxxxx" }

    result:     {   
                    "filename": "xxxx",
                    "is it safe?": "xxxx" // safe or unsafe
                }

**example :**

[![obsceneImageDetectionByUrl](%image_url%/comodo/obsceneImageDetectionByUrl.png "obsceneImageDetectionByUrl")](%image_url%/comodo/obsceneImageDetectionByUrl.png "obsceneImageDetectionByUrl")

------------
------------