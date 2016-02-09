Template.displayKnogl.helpers({
  actionPerformed: function() {
    var initializing = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection

      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "knogl" && !initializing) { // if the added item matches this artist
          $('#knogl-video-display-overlay').toggleClass('opacity-zero');
        }
      }
    });
    initializing = false;
    return query;
  }
});
