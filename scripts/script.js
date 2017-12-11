"use strict";

document.addEventListener('DOMContentLoaded', startQuote);

function startQuote() {

  //console.log("startQuote is called");
  document.getElementById('buttonNewQuote').addEventListener("click", loadQuotes);

  loadQuotes();
}

function loadQuotes() {

  //console.log("loadQuotes is called");
  var maoriQuote = document.getElementById('maoriQuote');
  var englishQuote = document.getElementById('englishQuote');

  var connection = new XMLHttpRequest();
  connection.addEventListener("load", updateDisplay);
  connection.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs");
                          //https://eda-te-reo.herokuapp.com/api/proverbs
  connection.send();

}

function updateDisplay() {

  let json = JSON.parse(this.responseText);
  console.log(json);

  maoriQuote.innerHTML = json.source;
  englishQuote.innerHTML = json["translation"];
}