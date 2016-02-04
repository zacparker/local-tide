Template.displayMattes.helpers({
  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "mattes") { // if the added item matches this artist
          mattesCount = typeof mattesCount === "undefined" ? 0 : mattesCount; // Defined in the global namespace to keep track of the count across actions
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
              $("html, body").animate({ scrollTop: $(document).height() }, 15000);
              break;
            case 3:
            case 6:
            case 9:
            case 12:
            case 15:
            case 18:
              $('.artifacts #' + i).addClass('hidden');
              $("html, body").animate({ scrollTop: 0 }, "slow");
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

Template.displayMattes.rendered = function () {
  var slideShowOptions = {
    // Optional: How many ms should the auto slider be set to?
    // Set to 0 for no auto slide
    timer: 4000,
    // Optional: Should the slideshow restart at the first element
    // if the user clicks "next" at the last element?
    carousel: true,
    // Holder of all your views. Will most often only contain one
    // view object!
    views: [{
      // Set to the DOM wrapper element
      wrapper: this.find('.slide-show-fingers'),
      // Set to the DOM slides elements
      slides: this.findAll('.slide-show-fingers .slide')
    }]
  };
  // Here the slideshow is actually created!
  var slideShow = new Slidr( slideShowOptions );
};