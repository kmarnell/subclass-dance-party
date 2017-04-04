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


  $('.lineUpButton').on('click', function(event) {
    var blinkCount = 0;
    var fadeCount = 0;
    var slideCount = 0;

    window.dancers.forEach(function(dancer) {
      if(dancer.constructor.name === 'slideDancer') {
        slideCount++;
      } else if (dancer.constructor.name === 'fadeDancer') {
        fadeCount++;
      } else {
        blinkCount++;
      }
    });
    var slideSpacing = $(window).width() / slideCount;
    var fadeSpacing = $(window).width() / fadeCount;
    var blinkSpacing = $(window).width() / blinkCount;

    window.dancers.forEach(function(dancer, index) {
      if (dancer.constructor.name === 'slideDancer') {
        dancer.lineUp(500, slideSpacing * (slideCount - 1));
        slideCount--;
      } else if (dancer.constructor.name === 'fadeDancer') {
        dancer.lineUp(500, fadeSpacing * (fadeCount - 1));
        fadeCount--;
      } else {
        dancer.lineUp(500, blinkSpacing * (blinkCount - 1));
        blinkCount--;
      }
    });

  });

  $('.pairUpButton').on('click', function(event) {
    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var newPosition = function() {
      var newTop = getRandomInt(0, ($(window).height() - 150));
      var newLeft = getRandomInt(0, ($(window).width() - 125));
      return [newTop, newLeft];
    }

    window.dancers.forEach(function(dancer, index) {
      if (index % 2 === 0) {
        var position = newPosition();
        dancer.$node.css({top: position[0], left: position[1]});
      } else {
        dancer.$node.css({top: position[0], left: (position[1] + 125)});
      }
    });
  });



});

