Template.displaySkyers.helpers({
  actionPerformed: function() {
    skyersCount = 0;
    skyersDisplayCount = 0; // Defined in the global namespace to keep track of the count across actions
    var isAnimationInProgress = false;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "4" && skyersCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "skyers" && isAnimationInProgress !== true && skyersCount) { // if the added item matches this artist
          isAnimationInProgress = true;
          var $images = $('img');
          var thisImage = $images.get(skyersDisplayCount);
          var $thisImage = $(thisImage);
          $thisImage.addClass('active').removeClass('hidden').animate({top: 0}, 5000);
          setTimeout(function() {
            $thisImage.animate({top: "100%"}, 5000, function() {
              $thisImage.removeClass('active').addClass('hidden');
              $thisImage.css({top: "-100%"});
              // Increment the skyersDisplayCounter
              skyersDisplayCount++;
              // Reset the skyersDisplayCounter
              if (skyersDisplayCount >= 2) {
                skyersDisplayCount = 0;
              }
              isAnimationInProgress = false;
            });
          }, 500);
        } else if (fields.artist === "skyers" && skyersCount === 0) {
          skyersCount++;
        }
      }
    });
    return query;
  }
});
