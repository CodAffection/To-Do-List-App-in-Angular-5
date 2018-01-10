// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCHYdy88bwCn_9NvuOxC2NCULSKoy-xEvc",
    authDomain: "todolistapp-8361f.firebaseapp.com",
    databaseURL: "https://todolistapp-8361f.firebaseio.com",
    projectId: "todolistapp-8361f",
    storageBucket: "todolistapp-8361f.appspot.com",
    messagingSenderId: "954824914202"
  }
};
