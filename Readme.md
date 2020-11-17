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