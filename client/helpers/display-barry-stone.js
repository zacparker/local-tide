Template.displayBarryStone.helpers({

  actionPerformed: function() {
    var query = Actions.find();

    query.observeChanges({
      added: function(id, fields) {
        var selectedImageNumber = fields.selectedImageNumber;
        var $selectedImgContainer = $('.user-selected-image-container');
        var $selectedImg = $('.user-selected-image-container').find('img');
        var fadeRate = 1500;

        console.log(query.fetch());
        $selectedImgContainer.html('<img src="/images/barry-stone/' + selectedImageNumber + '.jpg">');
        $selectedImgContainer.fadeTo(fadeRate, 1);
        setTimeout(function() {
          $selectedImgContainer.fadeTo(fadeRate, 0, function() {
            $selectedImg.remove();
          })
        }, 5000);
      },
      changed: function(id, fields) {
        console.log('doc updated');
        console.log(query.fetch());
      },
      removed: function() {
        console.log('previous action removed');
      }
    });

    return query;
  }

});