const pool = require('../db/database')
const express = require('express')
const cors = require('cors')
const app = express()
const port =3000

app.use(cors())

app.listen(port,()=>{
    console.log('listen port: '+3000)
})

app.get('/user',(req,res)=>{
  
    let query ='SELECT *FROM user'
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        response ={
            status:true,
            users:result
        }
        res.send(JSON.stringify(response))
    })
})