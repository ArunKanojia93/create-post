import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAbbrnfiafyS_a8jNYnas_2OQTlU8KiWlk",
  authDomain: "create-post-77a45.firebaseapp.com",
  databaseURL: "https://create-post-77a45.firebaseio.com",
  projectId: "create-post-77a45",
  storageBucket: "create-post-77a45.appspot.com",
  messagingSenderId: "682397363960",
  appId: "1:682397363960:web:985701c1d4c4a81991d50d"
};

initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
