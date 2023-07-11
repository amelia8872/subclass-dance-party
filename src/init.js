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
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    // push dancer to the "dancers" array
    window.dancers.push(dancer);
    myFunc(dancer.$node);
  });

  var myFunc = function(currentDancer) {
    if ($(currentDancer).hasClass('BreakDancer')) {
      $(currentDancer).on('mouseover', function(event) {
      // var randomNum = Math.floor(Math.random() * 3) + 1;
        $(currentDancer).css('border', '10px solid white');
      });
    }
  };

  $('.lineupButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.freeDance').on('click', function(event) {
    $('body').css('background-image', 'url("https://thumbs.gfycat.com/PoshHotHeron-size_restricted.gif")');
    $('body').css('background-size', 'cover');
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].breakLine();
    }
  });


  $('.interacting').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = i + 1; j < window.dancers.length; j++) {
        var dancer1 = window.dancers[i];
        var dancer2 = window.dancers[j];
        var distance = calDistance(dancer1, dancer2);
        console.log('distance', distance);
        if (distance < 51) {
          dancer1.$node.css('background-image', "url('assets/pngegg (1).png')");
          dancer2.$node.css('background-image', "url('assets/pngegg (1).png')");
        }
      }
    }

  });

  $('.clear').on('click', function(event) {
    $('span.dancer').remove();
    window.dancers = [];
    $('body').css('background-image', 'url("https://www.transparenttextures.com/patterns/always-grey.png")');
    $('body').css('background-size', 'auto');
  });


  var calDistance = function(dancer1, dancer2) {
    yLength = dancer1.top - dancer2.top;
    xLength = dancer1.left - dancer2.left;
    return Math.sqrt(yLength * yLength + xLength * xLength);
  };

});

