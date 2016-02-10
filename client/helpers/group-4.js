Template.group4.events({
  "click .btn": function(event, template) {
    var artist = event.target.dataset.redirect;
    var actionType = event.type;
    Meteor.call('removeActions', artist, function() {
      Actions.insert({
        actionType: actionType,
        artist: artist,
        createdAt: new Date(),
        sender: "4"
      });
      location.href = "/" + artist + "/interface"
    });
  }
})