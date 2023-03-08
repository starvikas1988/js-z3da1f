// Import stylesheets
import './style.css';

// Write Javascript code!
class Car {
  constructor(name, year, model) {
      console.log("inside car constructor");
    this.name = name;
    this.year = year;
    this.model = model;
  }
}

const carObj = new Car("Hyundai", 2020, "Santro");
console.log(carObj.name + " " + carObj.model + " " + carObj.year);

document.getElementById("demo").innerHTML =
carObj.name + " " + carObj.model + " " + carObj.year;

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;