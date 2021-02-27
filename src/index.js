console.log("inside extention");

import axios from "axios";
const api = "https://api.mocki.io/v1/608512ca";
const apiResponse = {
  message: null,
};
// declare a method to search by sample api
const getMessage = async (e) => {
  try {
    const response = await axios.get(`${api}`);
    apiResponse.message = response.data.message;
    var element = document.createElement("h1");
    element.appendChild(document.createTextNode(`${apiResponse.message}`));
    document.getElementById("extabar").appendChild(element);
  } catch (error) {}
};

// declare a function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  getMessage();
};

window.addEventListener("load", (e) => handleSubmit(e));

const val = document.getElementsByName("q")[0].value;

console.log("inside extention", val);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === "hello!") {
    console.log("url", request.url); // new url is now in content scripts!
  }
});
