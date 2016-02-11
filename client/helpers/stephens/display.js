Template.displayStephens.helpers({
  actionPerformed: function() {
    stephensCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "5" && stephensCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "stephens" && stephensCount) { // if the added item matches this artist
          $('.stephens-video').toggleClass('hidden');
        } else if (fields.artist === "stephens" && stephensCount === 0) {
          stephensCount++;
        }
      }
    });
    return query;
  }
});
