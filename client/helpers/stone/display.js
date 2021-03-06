Template.displayStone.helpers({
  actionPerformed: function() {
    stoneCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "1" && stoneCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "stone" && stoneCount) { // if the added item matches this artist
          var selectedImageNumber = fields.selectedImageNumber;
          var $selectedImgContainer = $('.user-selected-image-container');
          var $selectedImg = $('.user-selected-image-container').find('img'); // the image that the user selected via the interface
          var fadeRate = 1500; // 1.5 seconds
          $selectedImgContainer.html('<img src="/media/stone/display/' + selectedImageNumber + '.jpg">'); // add the selected image to it's container
          $selectedImgContainer.fadeTo(fadeRate, 1); // fade the image in
          setTimeout(function() { // after 5 seconds, fade the image out and then remove it from the DOM
            $selectedImgContainer.fadeTo(fadeRate, 0, function() {
              $selectedImg.remove();
            })
          }, 5000);
        } else if (fields.artist === "stone" && stoneCount === 0) {
          stoneCount++;
        }
      }
    });
    return query;
  }
});
