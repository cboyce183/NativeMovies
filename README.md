# NativeMovies
Technical challenge for Dice

## Getting Started:
System Requirements:
- Homebrew with node, watchman
- [Cocoapods](https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995)
- JDK 8
- Android Studio with Android SDK (Oreo 8.1), Android SDK Platform 27, Android SDK build tools 27.0.3 Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image, Performance (Intel ® HAXM), Android Virtual Device
- Xcode with latest command line tools

You'll need to edit your bash profile if you havn't got a path for Android emulators already:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
And load the project into Android Studio/Xcode.

If stuck, you can find help [here.](https://facebook.github.io/react-native/docs/getting-started.html)

Running the app from `root/NativeMovies/`:
- Android: `react-native run-android`
- iOS: `react-native run-ios --simulator="iPhone 6s"`

## Troubleshooting
- When running `npm i`, the module may need linking with `react-native link <module_name>`.
- There are build issues running on the iPhone X simulator, I recommend using iPhone 6s simulator first.
- If you get *really* stuck, leave an issue here with a paste/screenshot of the error message (if any), and I will see if I can help.

____

## Motivations & Workflow

I started by exploring the API provided, and discovered the major endpoints lend themselves well to using Redux.

In order to build the features I want, I will use three bundled redux stores to return movie genres, favourited movies, and search results. This gives three seperate sources of data, one for each major feature, but the shape of each allowing easy cross reference between them.

I will also use react-navigation to handle the two views: the main content view, and the individual movie details view.

Finally, I plan to use Axios to fetch the data since the library has a lot of common functionality baked in, and will save time.

I tried to use as few libraries as possible (besides the main react-native one) while building the components, mostly because this is an exercise (but I am partial to using `material-ui` sometimes). The few libraries I did use include `react-native-elements + react-native-vector-icons` for quick iconography, and `react-native-youtube` to play trailers. I thought about doing it myself with iFrames, but it would be quite a task and take up more of the suggested time than I would like (and I didn't want to fuss about with getting a YouTube API key).

Design wise, the colour scheme is a clean white-on-grey, accented brightly to draw attention to interactive components. I chose a simple two view layout of a content library type view, and an asset details view. The choice not to have bespoke pages for thing like search results and favourites was intentional; the data is the same, so why present it differently for the sake of it. I am also generally a fan of rich views that serve many purposes - so I introduced search and favourites as conditionally rendered sections of the main page. If I had decided to go all-in on the search feature, I may have done a page allowing filters and tags to be added to the query to search by things like cast, genres etc, but since the search feature is quite straight-forward its best not to direct the user to a different page.
The viewer component design is simple and clean. There was an absolute trove of data from the API that could have been used to flesh out more statistics and mini-features for the page (which I would have loved to do with more time), and I think the design lends well to expansion if one chooses to do any of these.
 
