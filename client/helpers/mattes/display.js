Template.displayMattes.helpers({
  actionPerformed: function() {
    mattesCount = 0;
    mattesDisplayCount = 1; // Defined in the global namespace to keep track of the count across actions
    isMattesAnimationInProgress = false;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "3" && mattesCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "mattes" && isMattesAnimationInProgress === false && mattesCount) { // if the added item matches this artist
          var i = Math.floor(mattesDisplayCount / 3);
          switch (mattesDisplayCount) {
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
          // Increment the mattesDisplayCounter
          mattesDisplayCount++;
          // Reset the mattesDisplayCounter
          if (mattesDisplayCount >= 18) {
            mattesDisplayCount = 1;
          }
        } else if (fields.artist === "mattes" && mattesCount === 0) {
          mattesCount++;
        }
      }
    });
    return query;
  }
});