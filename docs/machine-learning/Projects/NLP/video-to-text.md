---
sidebar_position: 5
---

## Introduction

In this tutorial, we will use IBM Cloud to convert video to text.

# Code

First we need to install the IBM Watson SDK for Python.

To do that use,

````py
!pip install ibm_watson
!brew install ffmpeg

import subprocess
from ibm_watson import SpeechToTextV1
from ibm_watson.websocket import RecognizeCallback, AudioSource
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
````

1. Then we need to goto IBM cloud and get our credentials.

[https://cloud.ibm.com/](https://cloud.ibm.com/) Follow this link and Register first if you don't have.

2. Then go to manage where the credentials are.
````py
apikey = ''
url = ''
````

3. First we need to extract audio

````py
command = 'ffmpeg -i aiml.mkv -ab 160k -ar 44100 -vn audio.wav'
subprocess.call(command, shell=True)

# Setup service
authenticator = IAMAuthenticator(apikey)
stt = SpeechToTextV1(authenticator=authenticator)
stt.set_service_url(url)
````

4. Open audio Source and Convert

````py
with open('audio.wav', 'rb') as f:
    res = stt.recognize(audio=f, content_type='audio/wav', model='en-AU_NarrowbandModel', continuous=True).get_result()
````

5. Process Result and Output to Text

````py
text = [result['alternatives'][0]['transcript'].rstrip() + '.\n' for result in res['results']]
````

````py
text = [para[0].title() + para[1:] for para in text]
transcript = ''.join(text)
with open('output.txt', 'w') as out:
    out.writelines(transcript)

transcript
````




