$(document).ready(function() {
  // Accordion functionality
  $('.title').on('click', function() {
    $('.box').slideUp(500);
    
    var findElm = $(this).next(".box");
    
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
    } else {
      $('.close').removeClass('close');
      $(this).addClass('close');
      $(findElm).slideDown(500);
    }
  });
  
  // Hide all boxes on page load
  $('.box').hide();
  
  // Open specific accordion items on page load
  $(window).on('load', function() {
    $(".accordion-area li:first-of-type section").removeClass("open");
    $(".open").each(function(index, element) {
      var Title = $(element).children('.title');
      $(Title).addClass('close');
      var Box = $(element).children('.box');
      $(Box).slideDown(500);
    });
    // Toggle all sections
   $('#toggleAllSections').on('click', function() {
    $('.title').toggleClass('close');
    $('.box').slideToggle(500);

    // Update button text
    var buttonText = $(this).text() === 'Open All' ? 'Close All' : 'Open All';
    $(this).text(buttonText);
  });
    // Show the circle1 and word elements
    $('.circle1, .word').show();
  });
  
  // Web click event
  $('.web').on('click', function() {
    // Perform click operation logic
    // Example: Print the clicked website's title in the console
    var title = $(this).find('h3').text();
    console.log('Clicked:', title);
  });
});

// Function to handle hash ID for tabs
function GethashID(hashIDName) {
  if (hashIDName) {
    // Tab settings
    $('.tab li').find('a').each(function() {
      var idName = $(this).attr('href');
      if (idName == hashIDName) {
        var parentElm = $(this).parent();
        $('.tab li').removeClass("active");
        $(parentElm).addClass("active");
        // Display area settings
        $(".area").removeClass("is-active");
        $(hashIDName).addClass("is-active");
      }
    });
  }
}

// Handle tab clicks
$('.tab a').on('click', function() {
  var idName = $(this).attr('href');
  GethashID(idName);
  return false;
});

// Execute tab handling on page load
$(window).on('load', function() {
  $('.tab li:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName = location.hash;
  GethashID(hashName);
});

$(document).ready(function() {
  // Handle click on image-container
  $('.graflex .image-container').on('click', function() {
    // Get the overlay element
    var overlay = $(this).find('.overlay');
    // Toggle the overlay visibility
    overlay.toggleClass('show-overlay');
  });
});

