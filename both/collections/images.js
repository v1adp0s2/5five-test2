var imageStore = new FS.Store.GridFS('images', {

});

Images = new FS.Collection('images', {
  stores: [imageStore]
});
/*
 * Add query methods like this:
 *  Images.findPublic = function () {
 *    return Images.find({is_public: true});
 *  }
 */
