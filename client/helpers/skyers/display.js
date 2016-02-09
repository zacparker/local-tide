Template.displaySkyers.helpers({
  actionPerformed: function() {
    initializing = true;
    var isAnimationInProgress;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    skyersCount = 0; // Defined in the global namespace to keep track of the count across actions
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "skyers" && isAnimationInProgress !== true && !initializing) { // if the added item matches this artist
          isAnimationInProgress = true;
          if (skyersCount >= 1) {
            $('#' + skyersCount).addClass('active').removeClass('hidden').animate({top: 0}, 5000);
            setTimeout(function() {
              $('#' + skyersCount).animate({top: "100%"}, 5000, function() {
                $('#' + skyersCount).removeClass('active').addClass('hidden');
                // Increment the mattesCounter
                skyersCount++;
                // Reset the mattesCounter
                if (skyersCount >= 17) {
                  skyersCount = 1;
                }
                isAnimationInProgress = false;
              });
            }, 500);
          } else {
            skyersCount++;
            isAnimationInProgress = false;
          }
        }
      }
    });
    initializing = false;
    return query;
  }
});
