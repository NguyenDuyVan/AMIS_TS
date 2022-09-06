const express = require('express'); // Require module express vào project
const app = express(); // Tạo một app mới
const port = 8086; // Định nghĩa cổng để chạy ứng dụng NodeJS của bạn trên server

// Require user route
const userRoute = require('./routes/user')

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use('/users', userRoute);

app.get('/', function(req, res){
	res.send("<h2>This is my first app</h2>");
})

// Config .env
require('dotenv').config()
console.log(process.env)


app.listen(port, function(){
    console.log('Your app running on port '+ port);
    console.log('userRoute '+ userRoute);
})