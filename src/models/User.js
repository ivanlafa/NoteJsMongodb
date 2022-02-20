const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema= new Schema({
    name: {Type: String, required: true},
    email: {Type: String,required:true},
    password:{type: String,required: true}
},{
    timestamps:true
});

UserSchema.methods.encrypPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);


};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = model('User',UserSchema);