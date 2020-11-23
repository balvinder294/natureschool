# Nature School App
App for providing information for people to learn About nature

## Generating pages/components in ionic

Run the command based on required component

```bash
ionic generate
ionic generate page
ionic generate page contact
ionic generate component contact/form
ionic generate component login-form --change-detection=OnPush
ionic generate directive ripple --skip-import
ionic generate service api/user
```

## How to install ionic plugin with capacitor

a) Add Cordova plugin
```bash
npm install cordova-plugin-firebasex
```

b) Add Ionic Native plugin
```bash
npm install @ionic-native/firebase-x
```

c) Sync changes with capacitor
```bash
ionic cap sync
```

  [More reference](https://ionicframework.com/docs/native/firebase-x)

## running app (browser)

```
ionic serve
```

## building app
```bash
ionic build --prod
```
## sync with capacitor android/ios
```bash
ionic cap sync
```

## Steps for building android app
 
1. Do any changes, build and sync project with capacitor

2. Open android studio and locate android folder on root repo of project

3. Optional, run > debug to run in emulator/connected devices to test app with debug logs

4. Build > release > android app bundles for building AAB, or Build > release > android app apk for single apk.

Note: Android app bundle helps reduce installation size, so preferred

## Common error and solution

1. Google play services library

As we use different cordova plugins, there may be dependency of google libraries. They sometimes have different version dependencies of same, so build fails. Solution is to temporary manual setting up the version in project level gradle(build.gradle) and then build.
Repeat each time, when you sync the ionic project with capacitor

2. Platform level libraries

some plugins only work in platform, i.e. ios and android devices only and not web, so we need to handle them in some logic. like

this.device.ready()
  .then(() => {
    // call goes here for platform dependent library
  })

3. Version change

each time you update capacitor app for build, need to change version manually.