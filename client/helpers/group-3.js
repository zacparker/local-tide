Template.group3.events({
  "click .btn-3": function(event, template) {
    var artist = event.target.dataset.redirect;
    var actionType = event.type;
    Meteor.call('removeActions', artist, function() {
      Actions.insert({
        actionType: actionType,
        artist: artist,
        createdAt: new Date(),
        sender: "3"
      });
      location.href = "/" + artist + "/interface"
    });
  }
})