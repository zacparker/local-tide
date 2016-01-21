Template.display.helpers({

  actionPerformed: function() {
    var query = Actions.find();

    query.observeChanges({
      added: function(id, fields) {
        var actionType = fields.action;
        console.log(query.fetch());
        if (actionType === "tap") {
          handleTap();
        }
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