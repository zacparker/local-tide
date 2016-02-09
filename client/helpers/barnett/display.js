Template.displayBarnett.helpers({
  actionPerformed: function() {
    barnettDisplayCount = 0;
    var initializing = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "barnett" && !initializing) { // if the added item matches this artist
          var $images = $('img.interactive');
          var imgCount = barnettDisplayCount - 1;
          var thisImage = $images.get(imgCount);
          var $thisImage = $(thisImage);
          var toggleImage = function() {
            if ($('img.bg')) {
              $('img.bg').remove();
            }
            $images.addClass('hidden')
            $thisImage.removeClass('hidden');
            if (barnettDisplayCount >= 2) {
              barnettDisplayCount = 1;
            } else {
              barnettDisplayCount++;
            }
          };
          switch(barnettDisplayCount) {
            case 0:
            barnettDisplayCount++;
              break;
            case 1:
              toggleImage();
              break;
            case 2:
              toggleImage();
              break;
          }
        }
      }
    });
    initializing = false;
    return query;
  }
});
