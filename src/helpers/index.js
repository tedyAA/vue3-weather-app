import {isEmpty} from "lodash";

// Function that returns time in format day date month year
export function dateBuilderDDMY(d) {
  if(!isEmpty(d)) {
    d = new Date(d);
  } else {
    d= new Date();
  }
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear()
  return `${day} ${date} ${month} ${year}`;
}

// Function that returns time in format weekday day
export function dateBuilderDD(timestamp) {
  const date = new Date(timestamp * 1000);

  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const day = date.getDate();

  return `${weekday} ${day}`;
}

// Function that returns time in format HH:MM
export function timeBuilder(timestamp) {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}: ${minutes}`;
}

// Simple function that calculates the temperature from kelvins to Celsius

export function kelvinToCelsius(temp){
  return Math.round((temp - 272))
}
