Template.interfaceHult.helpers({
  templateGestures: {
    'tap .trigger': function(event, templateInstance) {
      event.preventDefault(); // when the user taps, don't follow the src link
      var artist = "hult";
      var actionType = event.type; // what type of event?
      var selectedImageNumber = event.target.id; // looking for the id of the event target
      // remove all events from database
      Meteor.call('removeActions', artist, function() { // clear all contents of the database and then
        logActions(); // log to the console
        // console.log(actionType + ' performed via interface');
        // save latest event to database
        Actions.insert({
          actionType: actionType,
          artist: artist,
          selectedImageNumber: selectedImageNumber,
          createdAt: new Date() // current time
        });
      });
    },
    'tap .info-modal-open': function(event, templateInstance) {
      AntiModals.overlay('modal-hult', { // when the user taps the 'T', open the modal
        modal: true
      });
    }
  }
});

Template.interfaceHult.rendered = function () {

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
      wrapper: this.find('.slide-show'),
      // Set to the DOM slides elements
      slides: this.findAll('.slide-show .slide')
    }]
  };

  // Here the slideshow is actually created!
  var slideShow = new Slidr( slideShowOptions );

};
