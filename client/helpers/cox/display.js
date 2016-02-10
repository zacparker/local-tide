Template.displayCox.helpers({
  actionPerformed: function() {
    coxCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "1" && coxCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "cox" && coxCount) { // if the added item matches this artist
          var $hiddenImages = $('img.hidden');
          var thisImage = $hiddenImages.get(0);
          var $thisImage = $(thisImage);
          $thisImage.removeClass('hidden');
          if (!$thisImage.length) {
            $('img').addClass('hidden');
            $('img.bg').removeClass('hidden');
          }
        } else if (fields.artist === "cox" && coxCount === 0) {
          coxCount++;
        }
      }
    });
    return query;
  }
});
