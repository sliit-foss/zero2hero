---
sidebar_position: 4
---

## Introduction

In this tutorial, we will use IBM Cloud to convert speech to text.
By using IBM Cloud we can get natural voices.

In order to get a accurate result this uses  knowledge of grammar, language structure, and the composition of audio and voice signals

This application can be in voice-automated chatbots, analytic tools for customer-service call centers, and multi-media transcription.

_**You can view thr cod ein github (tts.ipynb) [https://github.com/timnirmal/Text-to-Speech-IBM.git](https://github.com/timnirmal/Text-to-Speech-IBM.git)

Head to ttts.ipynb to see the code and open in Colab._**

**Available languages:**
Brazilian Portuguese, Chinese (Mandarin dialect), Dutch, English (US and UK dialects), French, German, Italian, Japanese, Korean, Spanish (Argentinian, Castilian, Chilean, Colombian, Mexican, and Peruvian dialects), and Modern Standard Arabic (broadband model only).

You can view more details on [here](https://cloud.ibm.com/catalog/services/speech-to-text#about)

Ok So, now let's start to make the application.

# Code

First we need to install the IBM Watson SDK for Python.

To do that use,
````py
!pip install ibm_watson

from ibm_watson import SpeechToTextV1
from ibm_watson.websocket import RecognizeCallback, AudioSource 
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
````

1. Then we need to goto IBM cloud and get our credentials.

[https://cloud.ibm.com/](https://cloud.ibm.com/) Follow this link and Register first if you don't have.

2. Then go to catalogue and choose Text to Speech ([https://cloud.ibm.com/catalog/services/speech-to-text](https://cloud.ibm.com/catalog/services/speech-to-text))

3. Then select light plan from that.

This will give 500 minute per month.

4. Then go to manage where the credentials are.

````py
URL = 'https://api.au-syd.text-to-speech.watson.cloud.ibm.com/instances/cc144'
APIkey = 'ROx'
````

In here I have deleted part of my credentials. So replace '' with your credentials.
5. 
6. Next we need to setup our service and make new stt

````py
# Setup Service
authenticator = IAMAuthenticator(APIkey)

# New STT service
tts = TextToSpeechV1(authenticator=authenticator)
# Set service URL
tts.set_service_url(URL)
````

6. Now lets set language model.

```py
 # Set model for stt
 model='en-US_NarrowbandModel'
```

You can find more language model from here. ([https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-models](https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-models))

7. Then use this command to write the output audio to the Speech.mp3 file

````py
# Perform conversion
with open('audio.mp3', 'rb') as aud:
    getAud = stt.recognize(audio=aud, content_type='audio/mp3', continuous=True).get_result()

getAud

text = getAud['results'][0]['alternatives'][0]['transcript']
text

with open('output.txt', 'w') as out:
    out.writelines(text)
````
