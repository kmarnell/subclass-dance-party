$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var dancer = new dancerMakerFunction(
      getRandomInt(0, ($(window).height() - 150)),
      getRandomInt(0, ($(window).width() - 129)),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });


  $('lineUpButton').on('click', function() {
    var slideDancers =[];
    var fadeDancers = [];
    var blinkyDancers = [];
    var slideTop = ($(window).height() - 450) / 2;
    var fadeTop = slideTop + 175;
    var blinkTop = fadeTop + 175;

    window.dancers.forEach(function(dancer) {
      if(dancer.constructor.name === 'slideDancer') {
        slideDancers.push(dancer);
      } else if (dancer.constructor.name === 'fadeDancer') {
        fadeDancers.push(dancer);
      } else {
        blinkyDancers.push(dancer);
      }
    });

    var slideLeft = ($(window).width() / slideDancers.length)

    slideDancers.forEach(function(dancer) {
      dancer.lineUp(slideTop, slideLeft)
    });
  });




});

