var User = require('../schema/user.js');

function insert() {
    var user = new User({
        username: 'Tracy McGrady',
        password: 'abcd',
    });
    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    });
}
insert();