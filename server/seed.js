Meteor.startup(function () {
    var userEmail = 'test@test.com';

    if(Meteor.users.find({"emails.address":userEmail}).count() === 0){
        var ownerId = Accounts.createUser({
            email:userEmail,
            password:'111111'
        });

        [
            {
                name: "百度",
                url: "http://www.baidu.com",
                owner:ownerId

            },

           {
                name: "淘宝",
                url: "http://www.taobao.com",
                owner:ownerId
            },

            {
                name: "腾讯",
                url: "http://www.qq.com",
                owner:ownerId
            }

        ].forEach(function (one) {
            Bookmarks.insert(one);

        });

    }
});



