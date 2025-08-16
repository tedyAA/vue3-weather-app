import {isEmpty} from "lodash";

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
