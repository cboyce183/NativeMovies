# NativeMovies
Technical challenge for Dice

## Getting Started:
System Requirements:
- Homebrew with node, watchman
- [Cocoapods](https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995)
- JDK 8
- Android Studio with Android SDK (Oreo 8.1), Android SDK Platform 27, Android SDK build tools 27.0.3 Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image, Performance (Intel ® HAXM), Android Virtual Device
- Xcode with latest command line tools

You'll need to edit your bash profile:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
And load the project into Android Studio/Xcode.

If stuck, you can find help [here.](https://facebook.github.io/react-native/docs/getting-started.html)

Running the app:
- Android: `react-native run-android`
- iOS: `react-native react-native run-ios --simulator="iPhone 6s"`

##Motivations & Workflow
____
I started by exploring the API provided, and discovered the major endpoints lend themselves well to using Redux.

In order to build the features I want, I will use three bundled redux stores to return movie genres, favourited movies, and search results. This gives three seperate sources of data, one for each major feature, but the shape of each allowing easy cross reference between them.

I will also use react-navigation to handle the two views: the main content view, and the individual movie details view.

Finally, I plan to use Axios to fetch the data since the library has a lot of common functionality baked in, and will save time.
____