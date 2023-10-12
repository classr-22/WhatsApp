const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const userschema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    profile_image:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    mobileno:{
        type: Number,
        required: true
    }
},{timestamps: true})


userschema.pre('save', function(next) {
  if(!this.isDirectModified("password")) return next();

  this.password = bcrypt.hashSync(this.password,8);
  this.username = this.username.toLowerCase();
  return next();
});

userschema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

const user = new mongoose.model("user",userschema);
module.exports = user;