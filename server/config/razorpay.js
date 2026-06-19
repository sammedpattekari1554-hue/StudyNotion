const Razorpay = require("razorpay")

console.log("KEY:", process.env.RAZORPAY_KEY)
console.log("SECRET:", process.env.RAZORPAY_SECRET ? "FOUND" : "NOT FOUND")

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
})