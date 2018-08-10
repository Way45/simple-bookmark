Router.configure({
    layoutTemplate: 'layout'

});

Router.route('/', {name: 'bookmarkList'});
Router.route('/add', {name: 'bookmarkAdd'});

Router.route('/edit/:_id', {
    name: 'bookmarkEdit',
    data: function () {
        return Bookmarks.findOne(this.params._id);
    }
});//此句主要作用是带参数路由，跳转前带查询参数_id，
// 跳转后把data传入bookmarkEdit模板