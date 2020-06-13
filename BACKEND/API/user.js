const pool = require('../db/database')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router();
const port =3003

app.use(cors())

app.listen(port,()=>{
    console.log('listen port: '+port)
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
app.get('/user/:id',(req,res)=>{

    let query="SELECT *FROM user WHERE id ="+req.params.id
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        response={
            status:true,
            user:result[0]
        }
        res.send(JSON.stringify(response))
    })

  
})

app.use(express.json())
app.post('/user',(req,res)=>{

    let nombre = req.body.nombre
	let apellido = req.body.apellido
	let cedula = req.body.cedula
	let edad = req.body.edad
	let email = req.body.email
    let password = req.body.password

    let query ="INSERT INTO user VALUES(id,'"+nombre+"','"+apellido+"','"+cedula+"','"+edad+"','"+email+"','"+password+"')"
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        response ={
            status:true,
            result: result,
            msg:'usuario guardado',
            query:query
        }
        res.send(JSON.stringify(response))
    })
})

app.put('/user/:id',(req,res)=>{
    let nombre = req.body.nombre
	let apellido = req.body.apellido
	let cedula = req.body.cedula
	let edad = req.body.edad
	let email = req.body.email
    let password = req.body.password

    let query ="UPDATE user u SET u.nombre='"+nombre+"',u.apellido= '"+apellido+"',u.cedula ='"+cedula+"',u.edad='"+edad+"',u.email='"+email+"',u.password='"+password+"' WHERE id ="+req.params.id
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        response ={
            status:true,
            result: result,
            msg:'usuario actualizado',
            query:query
        }
        res.send(JSON.stringify(response))
    })
    
})

app.delete('/user/:id',(req,res)=>{
    let query ="DELETE FROM user WHERE id="+req.params.id
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        response ={
            status:true,
            result: result,
            msg:'usuario borrado',
            query:query
        }
        res.send(JSON.stringify(response))
    })
})