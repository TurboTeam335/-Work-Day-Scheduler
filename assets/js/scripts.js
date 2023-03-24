var currentDayEl = $('#currentDay')

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
$(document).ready(function () {
  $('.saveBtn').on('click', function(){
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    
    localStorage.setItem(time, text);
    
    $('notification').addClass('show');
    
    // setTimeout(function (){
    //   $('.notification').removeClass('show');
    // }, 5000);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function workHour () {
    var currentHour = dayjs().hour();
    
    $('.time-block').each(function(){
      var otherHour = parseInt($(this).attr('id').split('-')[1]);
      
      if (otherHour < currentHour) {
        $(this).addClass ('.past');
      } else if (otherHour === currentHour) {
        $(this).addClass('.present')
        $(this).removeClass('.past')
      } else {
        $(this).addClass('.future')
        $(this).removeClass('.past')
        $(this).removeClass('.present')
      }
    })
  }
  workHour()


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  document.querySelector('#hour-9 .description').value = localStorage.getItem('hour-9');
  document.querySelector('#hour-10.description').value = localStorage.getItem('hour10');
  document.querySelector('#hour-11 .description').value = localStorage.getItem('hour_11');
  document.querySelector('#hour12.description').value = localStorage.getItem('hour-12');
  document.querySelector('#hour-13.description').value = localStorage.getItem('hour-13');
  document.querySelector('#hour-14 .description').value = localStorage.getItem('hour14');
  document.querySelector('#hour_15.description').value = localStorage.getItem('hour-15');
  document.querySelector('#hour-16 .description').value = localStorage.getItem('hour_16');
  document.querySelector('#hour17.description').value = localStorage.getItem('hour-17');
  
  // TODO: Add code to display the current date in the header of the page.
  function displayTime () {
    var todaysDate = dayjs().format('dddd MMMM DD, YYYY');
    currentDayEl.text(todaysDate);
  }
  displayTime();
  setInterval(displayTime);
  
});

