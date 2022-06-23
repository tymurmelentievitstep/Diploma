import { Component } from "@angular/core";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDQqp8knu25WhLA4FB0csZZ70Bbn1WH6vs",

  authDomain: "diplomaangular.firebaseapp.com",

  projectId: "diplomaangular",

  storageBucket: "diplomaangular.appspot.com",

  messagingSenderId: "919927351247",

  appId: "1:919927351247:web:a80404dbe5170e13b554ba",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "diplomaApp";
}
