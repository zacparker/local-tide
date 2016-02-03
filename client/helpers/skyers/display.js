Template.displaySkyers.helpers({

  actionPerformed: function() {
    var blocking;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'

    query.observeChanges({ // listen to changes to the collection

      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "skyers" && blocking !== true) { // if the added item matches this artist
          blocking = true;
          skyersCount = typeof skyersCount === "undefined" ? 0 : skyersCount; // Defined in the global namespace to keep track of the count across actions
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
                blocking = false;
              });
            }, 500);
          } else {
            skyersCount++;
            blocking = false;
          }
        }
      },

      removed: function() {
          console.log('previous action removed');
      }
    });

    return query;
  }
});
