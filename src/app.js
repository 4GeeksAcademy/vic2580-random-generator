/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/cars.jpg";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", function() {
    generateCar("button");
  });
};

const generateCar = () => {
  let brand = [
    "Lamborghini",
    "Ferrari",
    "Bugatti",
    "Porsche",
    "Rolls-Royce",
    "Maserati"
  ];
  let model = ["Yaris", "Corolla", "Forte", "Sentra", "Civic", "Palio"];
  let version = [
    "Concept",
    "Sport",
    "Hatchback",
    "Premium",
    "Coupe",
    "Electric"
  ];
  let year = ["2002", "2026", "1997", "1976", "2031", "2010"];

  for (let i = 0; i < brand.length; i++) {}

  for (let z = 0; z < model.length; z++) {}

  for (let y = 0; y < version.length; y++) {}

  for (let x = 0; x < year.length; x++) {}

  let brandIndex = Math.floor(Math.random() * brand.length);
  let modelIndex = Math.floor(Math.random() * model.length);
  let versionIndex = Math.floor(Math.random() * version.length);
  let yearIndex = Math.floor(Math.random() * year.length);

  let fullCar =
    brand[brandIndex] +
    " " +
    model[modelIndex] +
    " " +
    version[versionIndex] +
    " " +
    year[yearIndex];
  document.querySelector(".yourCar").innerHTML = fullCar;

  return generateCar;
};
