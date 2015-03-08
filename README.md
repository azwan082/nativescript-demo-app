# NativeScript Demo App

NativeScript provides NativeScript Modules (NSM) as an abstraction layer to hide platform-specific implementation of some common functionalities. That's an opinionated way to build apps & and for me, it's adding a lot of boilerplate codes to make sure correct behavior for different platform.

This sample app is for me to experiment using platform-specific codes to achieve certain functionality such as user interface, networking, hardware API etc. The only component that I think can be shared across different platform is the business logic & data model.

What's been done:

- Master-detail navigation
  - iOS = MainViewController contains TableView, tap an item will open DetailViewController. root view controller is UINavigationController
  - Android = MainActivity contains a fragment with a listview. Tap an item will open DetailActivity. Launcher activity show splashscreen without actionbar & when land on MainActivity, will have have actionbar

Next: UI layout, use NIB for iOS and XML layout for Android
