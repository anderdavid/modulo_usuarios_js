const mysql = require('mysql')

const params ={
    host:'localhost',
    user:'root',
    password:'root',
    database:'js_mod_user'
}

const pool = mysql.createPool(params)
module.exports=pool