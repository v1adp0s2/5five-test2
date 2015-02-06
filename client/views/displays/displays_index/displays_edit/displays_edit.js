
/*****************************************************************************/
/* DisplaysEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DisplaysEdit.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'dblclick .display-title-content': function (e, tmpl) {
    e.preventDefault();

    $('.remove-display').hide();
    $('.display-edit-form').hide();
    $('.display-title-content').fadeIn();

    $(e.target).hide();
    $(e.target).siblings('.display-edit-form').fadeIn();

    // clear up potential selections during double click
    var sel ;
    if(document.selection && document.selection.empty){
      document.selection.empty() ;
    } else if(window.getSelection) {
      sel=window.getSelection();
      if(sel && sel.removeAllRanges)
        sel.removeAllRanges() ;
    }
  },

  'mouseover .display-title-content': function (e, tmpl) {
    $('.remove-display').hide();
    var trash = tmpl.find('.remove-display');
    $(trash).fadeIn();
  },



  'click .remove-display': function (e, tmpl) {
    e.preventDefault();

    var id = $(e.target).closest('.display-title-cell').attr('id');

    var confirmation = confirm("Are you sure?");

    if (confirmation) {
      Meteor.call('removeDisplay', id, function(error) {
        if (error) {
          Alerts.set(error.reason, 'danger');
        }
      });
    }
  },

  'submit form': function (e, tmpl) {
    e.preventDefault();

    var id = $(e.target).closest('.display-title-cell').attr('id');

    Displays.update({ _id: id }, {
      $set: {
        title: tmpl.find('[name="display_title"]').value
      }
    });

    $('.display-edit-form').hide();
    $('.display-title-content').fadeIn();
  }
});

Template.DisplaysEdit.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* DisplaysEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplaysEdit.created = function () {
};

Template.DisplaysEdit.rendered = function () {
};

Template.DisplaysEdit.destroyed = function () {
};


