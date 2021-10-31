---
sidebar_position: 6
---

## Introduction

In this tutorial, we will use IBM Cloud to Language Translation, and then we can convert that to another language.

# Code

First we need to install the IBM Watson SDK for Python.

To do that use,

````py
!pip install ibm_watson

# import deps
from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
````

1. Then we need to goto IBM cloud and get our credentials.

[https://cloud.ibm.com/](https://cloud.ibm.com/) Follow this link and Register first if you don't have.

2. Then go to manage where the credentials are.

You need to create language translation service.

````py
apikey = ''
url = ''
````

3.  Let's set up the services
````py
# Setup service
authenticator = IAMAuthenticator(apikey)
lt = LanguageTranslatorV3(version='2018-05-01', authenticator=authenticator)
lt.set_service_url(url)
````

4.  Let's set up the language translation
````py
translation = lt.translate(text='I am comming home', model_id='en-de').get_result()
translation

text = translation['translations'][0]['translation']
````

5. Identify Language
`````py
language = lt.identify('Wir sinken.').get_result()

language
`````

6. Convert to another Language

````py
with open('./help.mp3', 'wb') as audio_file:
    res = tts.synthesize(text, accept='audio/mp3', voice='zh-CN_LiNaVoice').get_result()
    audio_file.write(res.content)
````