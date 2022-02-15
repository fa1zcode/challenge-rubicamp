const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('data.json','utf-8'))

const app = express()


// lokasi folder views
app.set('views', '/home/faiz/Desktop/rubicamp/challenge/web/views')
//set view engine ejs   
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('list',{ data })      //render data.json pada list.ejs                 
})

app.get('/add', function(req, res){
    res.render('add')
})

app.post('/add', function(req, res){
    let task = req.body.task
    
    let todo = {
        task: task,
        complete: false
    }

    data.push(todo)
    fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
    res.redirect('/')
})

app.get('/delete/:id', function(req, res){
    const id = req.params.id
    data.splice(id,1)
    res.redirect('/')
})

app.get('/edit/:id', function(req,res){
    const id = req.params.id
    res.render('edit', {data: data[id]})
})

app.post('/edit/:id', function(req, res){
    const id = req.params.id
    data[id].task = req.body.task
    data[id].complete = JSON.parse(req.body.complete)
    fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
    res.redirect('/')
})

app.listen(3000, function(){
    console.log('web berjalan di port 3000')
})