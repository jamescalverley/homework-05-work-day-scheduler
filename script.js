// introduce time
const currentTime = moment().format("MM/DD/YYYY h:mmA");
console.log(currentTime);
console.log(`toString() => ${currentTime.toString()}`);

let currentTimeString = (`${currentTime.toString()}`);
console.log(`The current time is ${currentTimeString}`);


// set current time
// $('#currentDay').html(moment(now).format())

$(document).ready(()=> {
  $('#currentDay').append(currentTimeString);
  parseLocalStorage();
  schedule = JSON.parse(localStorage.schedule)
});
 
let schedule = {
  nine: "",
  ten: "",
  eleven: "", 
  twelve: "", 
  thirteen: "", 
  fourteen: "",
  fifthteen: "",
  sixteen: "", 
  seventeen: "",
  eighteen: ""
};

$('#save9').click( function(){
  const saveValue = $('#hour9').val();
  schedule.nine = saveValue;
  saveLocalStorage();
});

$('#save10').click( function(){
  const saveValue = $('#hour10').val();
  schedule.ten = saveValue;
  saveLocalStorage();
});

$('#save11').click( function(){
  const saveValue = $('#hour11').val();
  schedule.eleven = saveValue;
  saveLocalStorage();
});

$('#save12').click( function(){
  const saveValue = $('#hour12').val();
  schedule.twelve = saveValue;
  saveLocalStorage();
});

$('#save13').click( function(){
  const saveValue = $('#hour13').val();
  schedule.thirteen = saveValue;
  saveLocalStorage();
});

$('#save14').click( function(){
  const saveValue = $('#hour14').val();
  schedule.fourteen = saveValue;
  saveLocalStorage();
});

$('#save15').click( function(){
  const saveValue = $('#hour15').val();
  schedule.fifthteen = saveValue;
  saveLocalStorage();
});

$('#save16').click( function(){
  const saveValue = $('#hour16').val();
  schedule.sixteen = saveValue;
  saveLocalStorage();
});

$('#save17').click( function(){
  const saveValue = $('#hour17').val();
  schedule.seventeen = saveValue;
  saveLocalStorage();
});

function saveLocalStorage(){
  localStorage.schedule = JSON.stringify(schedule)
};

function parseLocalStorage(){
  let schedule = JSON.parse(localStorage.schedule)
  $('#hour9').val(schedule.nine)
  $('#hour10').val(schedule.ten);
  $('#hour11').val(schedule.eleven);
  $('#hour12').val(schedule.twelve);
  $('#hour13').val(schedule.thirteen);
  $('#hour14').val(schedule.fourteen);
  $('#hour15').val(schedule.fifthteen);
  $('#hour16').val(schedule.sixteen);
  $('#hour17').val(schedule.seventeen);
};

function compareTime(){
    let blockTime = (document.getElementById('block9').value); 
    console.log(`${blockTime}`)
}


// assign a time value to each row >>> create a function that compares the current time to the row time >>> based on the difference in time, set the css styling accordingly (maybe give each row an ID?? or make each row an LI in UL container or OL???)

// creat an ID for each row (based on time) then add a click function on this.saveBtn which will save this.eventDescription in local storage

// quick way: when saveBtn is clicked >>> save to local storage >>> parse back into the value of the input field **** will allow the event to appear and then be editable

// just use hours of time not minutes. if current hour = hour of div >>> div == present 

// forget putting an input field inside of div >>> just use forms on their own

// add event key for enter >>> save to local storage

// create an array of the description of each hour. pass this array to local storage 

// need to add event description to array first, then push to local storage. Parse in whole array and replace everything. Look at movie exercise


    