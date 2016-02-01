Template.displayHult.helpers({

  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'

    query.observeChanges({ // listen to changes to the collection

      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "hult") { // if the added item matches this artist
          $('.slide-show-before').toggleClass('hidden');
          $('.slide-show-after').toggleClass('hidden');
          setTimeout(function() {
            $('.slide-show-before').toggleClass('hidden');
            $('.slide-show-after').toggleClass('hidden');
          }, 3000);
        }
      },

      removed: function() {
          console.log('previous action removed');
      }
    });

    return query;
  }
});


Template.displayHult.rendered = function () {

  var slideShowOptions = {
    // Optional: How many ms should the auto slider be set to?
    // Set to 0 for no auto slide
    timer: 8000,
    // Optional: Should the slideshow restart at the first element
    // if the user clicks "next" at the last element?
    carousel: true,
    // Holder of all your views. Will most often only contain one
    // view object!
    views: [{
      // Set to the DOM wrapper element
      wrapper: this.find('.slide-show-before'),
      // Set to the DOM slides elements
      slides: this.findAll('.slide-show-before .slide')
    },{
      // Set to the DOM wrapper element
      wrapper: this.find('.slide-show-after'),
      // Set to the DOM slides elements
      slides: this.findAll('.slide-show-after .slide')
    }]
  };

  // Here the slideshow is actually created!
  var slideShow = new Slidr( slideShowOptions );
}