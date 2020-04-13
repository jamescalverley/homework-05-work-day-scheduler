$(document).ready(()=> {
  $('#currentDay').append(currentTimeString);
  parseLocalStorage();
  schedule = JSON.parse(localStorage.schedule)
});
 
let schedule = {
  t9: "",
  t10: "",
  t11: "", 
  t12: "", 
  t13: "", 
  t14: "",
  t15: "",
  t16: "", 
  t17: "",
  t18: ""
};

$('#save9').click( function(){
  const saveValue = $('#hour9').val();
  schedule.t9 = saveValue;
  saveLocalStorage();
});

$('#save10').click( function(){
  const saveValue = $('#hour10').val();
  schedule.t10 = saveValue;
  saveLocalStorage();
});

$('#save11').click( function(){
  const saveValue = $('#hour11').val();
  schedule.t11 = saveValue;
  saveLocalStorage();
});

$('#save12').click( function(){
  const saveValue = $('#hour12').val();
  schedule.t12 = saveValue;
  saveLocalStorage();
});

$('#save13').click( function(){
  const saveValue = $('#hour13').val();
  schedule.t13 = saveValue;
  saveLocalStorage();
});

$('#save14').click( function(){
  const saveValue = $('#hour14').val();
  schedule.t14 = saveValue;
  saveLocalStorage();
});

$('#save15').click( function(){
  const saveValue = $('#hour15').val();
  schedule.t15 = saveValue;
  saveLocalStorage();
});

$('#save16').click( function(){
  const saveValue = $('#hour16').val();
  schedule.t16 = saveValue;
  saveLocalStorage();
});

$('#save17').click( function(){
  const saveValue = $('#hour17').val();
  schedule.t17 = saveValue;
  saveLocalStorage();
});

function saveLocalStorage(){
  localStorage.schedule = JSON.stringify(schedule)
};

function parseLocalStorage(){
  let schedule = JSON.parse(localStorage.schedule)
  $('#hour9').val(schedule.t9)
  $('#hour10').val(schedule.t10);
  $('#hour11').val(schedule.t11);
  $('#hour12').val(schedule.t12);
  $('#hour13').val(schedule.t13);
  $('#hour14').val(schedule.t14);
  $('#hour15').val(schedule.t15);
  $('#hour16').val(schedule.t16);
  $('#hour17').val(schedule.t17);
};

function setClass( hour, setClass ){
  $(`#content${hour}`).addClass(`${setClass}`)
  $(`#btn${hour}`).addClass(`${setClass}`)
};

const currentTime = moment().format("MM/DD/YYYY H:mm:ss");
let currentTimeString = currentTime.toString();

console.log(currentTime);
console.log(`The current time is ${currentTimeString}`);

const currentHour = moment().format('H')
//const currentHour = 13;
const compareHours = [9,10,11,12,13,14,15,16,17]

function setRowColor(){
  compareHours.forEach( (hour) => {
    if( hour == currentHour ){
      //console.log( `Hour: ${hour} is equal to testCurrent: ${testCurrent}`)
      setClass( hour, "present" );
    } if( hour < currentHour ){
      setClass( hour, "past");
    } if( hour > currentHour ){
      setClass( hour, "future");
    }
  }); 
};

setRowColor();






    