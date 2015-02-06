/*****************************************************************************/
/* SlideThumbnail: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.SlideThumbnail.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .move-left': function (e, tmpl) {
    e.preventDefault();

    var id = $(e.target).closest('.page-box').attr('id');

    Meteor.call('moveLeft', id);
  },

  'click .move-right': function (e, tmpl) {
    e.preventDefault();

    var id = $(e.target).closest('.page-box').attr('id');

    Meteor.call('moveRight', id);
  },

  'dropped .dropzone': function (e, tmpl) {
    e.preventDefault();

    // to do display a spinner
    var dropzoneSpinner = tmpl.find('.dropzone-spinner');
    $(dropzoneSpinner).fadeIn();
    var id = $(e.target).closest('.page-box').attr('id');

    var file = null;
    FS.Utility.eachFile(e, function(file) {
      file = Images.insert(file, function (err, fileObj) {
        //If !err, we have inserted new doc with ID fileObj._id, and
        //kicked off the data upload using HTTP
        if (err) {
          console.log('is it an error? ' + err);
        } else {
          console.log('file uploaded');
        }
      });

      console.log('Updating slide with file id: ');
      console.log(file);

      if (file) {
        Slides.update({_id: id}, {
          $set: {backgroundImage: file}
        });
      }
    });
  },

  'click .cog': function (e) {
    e.preventDefault();

    if (Session.get('listGroup') === this._id) {
      Session.set('listGroup', undefined);
    } else {
      Session.set('listGroup', this._id);
    }
  },

  'click .remove-image': function (e) {
    e.preventDefault();

    var slide = Slides.findOne({ _id: this._id });

    Slides.update({ _id: slide._id }, {
      $unset: { backgroundImage: '' }
    });

    Images.remove({ _id: slide.backgroundImage._id });

    Alerts.set('Image removed.', 'success');
    Session.set('listGroup', undefined);
  },

  'click .remove-slide': function (e) {
    e.preventDefault();

    if (this.background_image) {
      Alerts.set('Please empty the slide!', 'warning');
    } else {
      // Slides.remove({ _id: this._id});
      Meteor.call('removeSlide', this._id, function (error) {
        if (error) {
          Alerts.set(error.reason);
        } else {
          Alerts.set('Slide removed.', 'success');
        }
      });
    }
    Session.set('listGroup', undefined);
  }
});

Template.SlideThumbnail.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  listGroup: function () {
    if (Session.get('listGroup') === this._id) {
      return true;
    } else {
      return false;
    }
  },

  shortId: function (id) {
    return id.substring(0, 8);
  },

  img: function (id) {
    var img = Images.findOne(id);
    if (img) {
      $('.dropzone-spinner').fadeOut();
      return img.url();
    } else {
      return null;
    }
  }
});

/*****************************************************************************/
/* SlideThumbnail: Lifecycle Hooks */
/*****************************************************************************/
Template.SlideThumbnail.created = function () {
  $(window).resize(function () {
    var boxSize = $('.page-box').width();
    $('.page-box').height(boxSize);
  });
};

Template.SlideThumbnail.rendered = function () {
  var boxSize = $('.page-box').width();
  $('.page-box').height(boxSize);
};

Template.SlideThumbnail.destroyed = function () {
  $(window).off('resize');
};
