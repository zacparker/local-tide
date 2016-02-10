Template.displaySkyers.helpers({
  actionPerformed: function() {
    skyersCount = 0;
    skyersDisplayCount = 0; // Defined in the global namespace to keep track of the count across actions
    var isAnimationInProgress;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "4" && skyersCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "skyers" && isAnimationInProgress !== true && skyersCount) { // if the added item matches this artist
          isAnimationInProgress = true;
          if (skyersDisplayCount >= 1) {
            $('#' + skyersDisplayCount).addClass('active').removeClass('hidden').animate({top: 0}, 5000);
            setTimeout(function() {
              $('#' + skyersDisplayCount).animate({top: "100%"}, 5000, function() {
                $('#' + skyersDisplayCount).removeClass('active').addClass('hidden');
                // Increment the skyersDisplayCounter
                skyersDisplayCount++;
                // Reset the skyersDisplayCounter
                if (skyersDisplayCount >= 17) {
                  skyersDisplayCount = 1;
                }
                isAnimationInProgress = false;
              });
            }, 500);
          } else {
            skyersDisplayCount++;
            isAnimationInProgress = false;
          }
        } else if (fields.artist === "skyers" && skyersCount === 0) {
          skyersCount++;
        }
      }
    });
    return query;
  }
});
