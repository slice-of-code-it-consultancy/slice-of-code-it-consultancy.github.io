/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/

// nightmode management
$('.night-toggle').on("click", (e) => {
  // Cancel the default action
  e.preventDefault();
  // set class
  $('html').toggleClass("nightmode");
  // save to session storage
  sessionStorage.setItem('nightmode',
    // toggle value
    (sessionStorage.getItem('nightmode') === '1' ? '0' : '1')
  );
});

// immediately set before document ready
if (sessionStorage.getItem('nightmode') === '1') {
  $('html').addClass('nightmode');
}
