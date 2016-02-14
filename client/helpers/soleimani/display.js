Template.displaySoleimani.helpers({
  actionPerformed: function() {
    soleimaniCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "1" && soleimaniCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "soleimani" && soleimaniCount) { // if the added item matches this artist
          var $images = $('img');
          $images.toggleClass('hidden');
        } else if (fields.artist === "soleimani" && soleimaniCount === 0) {
          soleimaniCount++;
        }
      }
    });
    return query;
  }
});
