const mongoose = require('mongoose');


main().then((res) =>{
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  age:Number,
});

const user=mongoose.model("User",userSchema); // collection banane ke liye use hota hai
// const Employee=mongoose.model("Employee",userSchema); // collection banane ke liye use hota hai

const user1=new user({
  name:"Adam",
  email:"adam@yahoo.in",
  age:48,
});

user1.save();


user.insertMany([{name:"Satwik",email:"asasas@gmail.com",age:22},
  {name:"Rahul",email:"asasaaasas@gmail.com",age:42}
]).then((data)=>{
  console.log(data);
});