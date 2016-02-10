Template.displayBarnett.helpers({
  actionPerformed: function() {
    barnettCount = 0;
    barnettDisplayCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "2" && barnettCount >= 1) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "barnett" && barnettCount >= 1) { // if the added item matches this artist
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
        } else if (fields.artist === "barnett" && barnettCount === 0) {
          barnettCount++;
        }
      }
    });
    return query;
  }
});
