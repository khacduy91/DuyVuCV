const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.end('Hello World')
})
app.get('/products',(req,res)=>{
    res.json({
        data : [{name:'product 1'}, {name:'product 2'}]
    })
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {username, password} = req.body;
    if (username == 'admin' && password =='123456'){
        res.json({message: 'login success', isLogged : true})
    }
    else res.json({message: 'login fail', isLogged: false})
})
app.listen(4000, ()=>{
    console.log('server is running on 4000')
})

