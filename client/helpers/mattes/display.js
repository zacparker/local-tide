Template.displayMattes.helpers({
  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    mattesCount = 0; // Defined in the global namespace to keep track of the count across actions
    isMattesAnimationInProgress = false;
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "mattes" && isMattesAnimationInProgress === false) { // if the added item matches this artist
          var i = Math.floor(mattesCount / 3);
          switch (mattesCount) {
            case 0:
              break;
            case 1:
            case 4:
            case 7:
            case 10:
            case 13:
            case 16:
              $('.artifacts #'+ (i + 1)).removeClass('hidden');
              break;
            case 2:
            case 5:
            case 8:
            case 11:
            case 14:
            case 17:
              isMattesAnimationInProgress = true;
              $("html, body").animate({ scrollTop: $(document).height() }, 30000, function() {
                isMattesAnimationInProgress = false;
              });
              break;
            case 3:
            case 6:
            case 9:
            case 12:
            case 15:
            case 18:
              $('.artifacts #' + i).addClass('hidden');
              $("html, body").animate({ scrollTop: 0 }, 0);
              break;
          }
          // Increment the mattesCounter
          mattesCount++;
          // Reset the mattesCounter
          if (mattesCount >= 18) {
            mattesCount = 0;
          }
        }
      }
    });
    return query;
  }
});