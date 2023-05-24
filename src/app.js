import express, { json } from 'express'
const users =[
    {id:1, name:"Juan", age:32},
    {id:2, name:"Bruno", age:12},
    {id:3, name:"Tiziana", age:11},
    {id:4, name:"Stefano", age:23},
]


const app = express()
app.use(express.json())

app.get('/', (req,res) => res.status(200).json({message: 'ok'}))
app.get('/users',(req,res) => {
    req.status(200).json({users})
})
app.listen(8080,() => console.log('Server Up'))

app.post('/users', (req,res) => {
    const { id, name, age} = req.query
    const newUser = {id:parseInt(id), name, age:parseInt(age)}
    users.push(newUser)
    res.status(201).json({message:'usuario creado', data: newUser})
})