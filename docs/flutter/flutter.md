---
sidebar_position: 1
---

# Flutter

![Flutter](https://raw.githubusercontent.com/iMeriem/zero2hero/addFlutterdoc/docs/assets/img/flutter/flutter-lockup.png)<br/>

## 1) Installation

There are multiple ways to install Flutter on your system, it also depends on<br/>
the OS you are using on your machine.<br/>

You can install flutter according to your machine’s OS from the below links:<br/>


Windows : <https://flutter.dev/docs/get-started/install/windows> <br/>
MacOS : <https://flutter.dev/docs/get-started/install/macos> <br/>
Linux:  <https://flutter.dev/docs/get-started/install/linux> <br/>
Chrome: <https://flutter.dev/docs/get-started/install/chromeos> <br/>

## 2) Set up an editor

### IDE

To develop Flutter applications, below IDEs are available<br/>

- [Android Studio](https://developer.android.com/studio)
- [VS Code](https://code.visualstudio.com)
- [IntelliJ Idea Community / IntelliJ Idea Ultimate](https://www.jetbrains.com/idea/promo/)
- [Emacs](https://www.gnu.org/software/emacs/download.html)

### Dart

Dart is completely open source with a clean license.Dart was released by Google<br/>
in 2011 and was initially designed as a replacement for JavaScript.<br/>

<small>To start programming with DART, please refer below official article:</small><br/>
<small> https://dart.dev/guides/language/language-tour</small><br/>

## 3) Create the first project of Flutter

1. Open the IDE and select **Create New Flutter Project**
2. Select **Flutter Application** as the project type. Then click **Next**.
3. Verify the Flutter SDK path specifies the SDK’s location (select Install SDK… <be/>if the text field is blank).
4. Enter a project name (for example, ``myapp``). Then click Next.
5. Click Finish.
6. Wait for Android Studio to install the SDK and create the project.

### Do the coding

Open ``main.dart`` file from the lib folder. And replace the code with below:<br/>

```
import ‘package:flutter/material.dart’;

 
void main() => runApp(MyApp());

 

class MyApp extends StatelessWidget {

  @override

Widget build(BuildContext context) {

return MaterialApp(

      title: ‘Welcome to Flutter’,

      home: Scaffold(

        appBar: AppBar(

          title: Text(‘Welcome to Flutter’),

        ),

        body: Center(

          child: Text(‘Hello World’),

        ),

      ),

    );

  }

}
```

### Run the code:

![By Clicking the link above download the .exe file](https://raw.githubusercontent.com/iMeriem/zero2hero/addFlutterdoc/docs/assets/img/flutter/Screenshot_1.png)<br/>

As shown in the above image, from the Android Studio toolbar, click on the Target<br/> selector & select simulator / emulator. If none are listed as available, select Tools><br/> Android > AVD Manager and create one there.<br/>
For details, see Managing AVDs.<br/>

![By Clicking the link above download the .exe file](https://raw.githubusercontent.com/iMeriem/zero2hero/addFlutterdoc/docs/assets/img/flutter/Screenshot_2.png)

Run the app in the way your IDE describes. You should see either Android, iOS, or web output, depending on your device.<br/>

