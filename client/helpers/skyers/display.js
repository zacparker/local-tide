Template.displaySkyers.helpers({

  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'

    query.observeChanges({ // listen to changes to the collection

      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "skyers") { // if the added item matches this artist
          skyersCount = typeof skyersCount === "undefined" ? 1 : skyersCount; // Defined in the global namespace to keep track of the count across actions
          $('#' + skyersCount).addClass('active').removeClass('hidden').animate({top: "100%"}, 5000, function() {
            $('#' + skyersCount).removeClass('active').addClass('hidden');

            // Increment the mattesCounter
            skyersCount++;
            // Reset the mattesCounter
            if (skyersCount >= 17) {
              skyersCount = 1;
            }
          });
        }
      },

      removed: function() {
          console.log('previous action removed');
      }
    });

    return query;
  }
});
