const mongoose = require('../index.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String }, //用户账号 
    password: { type: String }, //密码
});
module.exports = mongoose.model('User', UserSchema);