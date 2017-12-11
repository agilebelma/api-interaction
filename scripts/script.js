"use strict";

document.addEventListener('DOMContentLoaded', startQuote);

function startQuote() {

  console.log("startQuote is called");
  document.getElementById('buttonNewQuote').addEventListener("click", loadQuotes);
  //document.getElementById('buttonNewQuote').onclick = loadQuotes;

}

function loadQuotes() {

  console.log("loadQuotes is called");
  var maoriQuote = document.getElementById('maoriQuote');
  var englishQuote = document.getElementById('englishQuote');

  maoriQuote.innerHTML = "Tuhinga!";
  englishQuote.innerHTML = "Success!";
}