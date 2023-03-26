/* This is a variable that is storing the current day. */
var currentDayEl = $('#currentDay')

$(document).ready(function () {
/* This is a function that is saving the text that is inputted into the text area. */
  $('.saveBtn').on('click', function(){
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    
 /* This is a function that is saving the text that is inputted into the text area. */
    localStorage.setItem(time, text);
    
/* This is a function that is adding a class to the time block depending on the time of day. */
    $('notification').addClass('show');
    
  })
  /**
   * This function is adding a class to the time block depending on the time of day
   */
  function workHour () {
    var currentHour = dayjs().hour();
    
   /* This is a function that is adding a class to the time block depending on the time of day. */
    $('.time-block').each(function(){
      var otherHour = parseInt($(this).attr('id').split('-')[1]);
      
      /* This is a function that is adding a class to the time block depending on the time of day. */
      if (otherHour < currentHour) {
        $(this).addClass ('past');
      } else if (otherHour === currentHour) {
        $(this).addClass('present')
        $(this).removeClass('past')
      } else {
        $(this).addClass('future')
        $(this).removeClass('past')
        $(this).removeClass('present')
      }
    })
  }
  workHour()



 /* This is a function that is saving the text that is inputted into the text area. */
  document.querySelector('#hour-9 .description').value = localStorage.getItem('hour-9');
  document.querySelector('#hour-10.description').value = localStorage.getItem('hour10');
  document.querySelector('#hour-11 .description').value = localStorage.getItem('hour_11');
  document.querySelector('#hour12.description').value = localStorage.getItem('hour-12');
  document.querySelector('#hour-13.description').value = localStorage.getItem('hour-13');
  document.querySelector('#hour-14 .description').value = localStorage.getItem('hour14');
  document.querySelector('#hour_15.description').value = localStorage.getItem('hour-15');
  document.querySelector('#hour-16 .description').value = localStorage.getItem('hour_16');
  document.querySelector('#hour17.description').value = localStorage.getItem('hour-17');
  

/**
 * The above function displays the current date and time in the header.
 */
  function displayTime () {
    var todaysDate = dayjs().format('dddd MMMM DD, YYYY');
    currentDayEl.text(todaysDate);
  }
  displayTime();
  setInterval(displayTime);
  
});

