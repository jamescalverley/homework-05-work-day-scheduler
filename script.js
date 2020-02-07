// introduce time
const currentTime = moment().format("MM/DD/YYYY h:mmA");
console.log(currentTime);
console.log(`toString() => ${currentTime.toString()}`);

var currentTimeString = (`${currentTime.toString()}`);
console.log(`The current time is ${currentTimeString}`);


// set current time
// $('#currentDay').html(moment(now).format())

$('#currentDay').append(currentTimeString);


// events object
let events = { hour9: "", hour10: "", hour11: "", hour12: "", hour13: "", hour14: "", hour15: "", hour16: "", hour17: ""};

// parse from local storage
// events = JSON.parse(localStorage.events);

// use code below for if there is nothing in local storage
// events = localStorage.events ? JSON.parse(localStorage.events) : { hour9: "", hour10: "", hour11: "", hour12: "", hour13: "", hour14: "", hour15: "", hour16: "", hour17: ""};

//adding event description to array
function addEvent(){
    let eventDescription = (document.getElementById('hour9').value);
    console.log(`text field: ${eventDescription}`);
    
    console.log("button 9 >>> clicked");
    events.hour9 = `${eventDescription}`;
    console.log(`${events.hour9}`);
}

document.getElementById('save9').addEventListener('click', addEvent);

// save to local storage
localStorage.events = JSON.stringify(events);


let testArray = ["meeting", "interview", "work on project"];
localStorage.testArray = JSON.stringify(testArray);


// change block color based on time

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


    