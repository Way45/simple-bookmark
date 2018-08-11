Bookmarks = new Mongo.Collection('SimpleBookmarks');

Meteor.methods({

    bookmarkInsert: function (postAttributes) {
        var user = Meteor.user();
        // var _ = jQuery;

        // console.log("0.5：" + postAttributes);//print status of postAttributes

        var post = _.extend(postAttributes, {
            owner: user._id
        });//拼接参数

        // console.log("1：" + post);////print status of post
        // console.log("1.5：" + postAttributes);//print status of postAttributes

        var postId = Bookmarks.insert(post);//插入数据

        //console.log("2：" + postId);//print status of postId

        return {
            _id: postId
        };//返回单条数据id，非用户ID，非owner

    },

    bookmarkUpdate: function (postAttributes) {
        Bookmarks.update({_id: postAttributes.id},
            {$set: postAttributes});
    },

    bookmarkRemove: function (postAttributes) {
        Bookmarks.remove({_id: postAttributes.id});
    }


});