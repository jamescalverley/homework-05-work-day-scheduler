// introduce time
const currentTime = moment().format("MM/DD/YYYY h:mmA");
console.log(currentTime);
console.log(`toString() => ${currentTime.toString()}`);

var currentTimeString = (`${currentTime.toString()}`);
console.log(`The current time is ${currentTimeString}`);


// set current time
// $('#currentDay').html(moment(now).format())

$('#currentDay').append(currentTimeString);





    