import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arduino';

  constructor() {
  var firebaseConfig = {
    apiKey: "AIzaSyBduq7n9z64GADX_jOhbxXTl44FUm9UHmw",
    authDomain: "arduino-test-b5689.firebaseapp.com",
    databaseURL: "https://arduino-test-b5689-default-rtdb.firebaseio.com",
    projectId: "arduino-test-b5689",
    storageBucket: "arduino-test-b5689.appspot.com",
    messagingSenderId: "769704174542",
    appId: "1:769704174542:web:4db31dfef8f8653d83019f",
    measurementId: "G-98F7V2C0ZG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

}
