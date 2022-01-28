import fs from 'fs'
let index = 0
let param = process.argv
let todo = JSON.parse(fs.readFileSync('todo.json', 'utf-8'))
let arrLength = todo.length
// console.log(arrLength)
// console.log(todo)


switch (param[2]) {
    case 'list':
        todo.forEach((item, index) => {
            console.log(`${index + 1}. ${item.status ? '[x]' : '[ ]'} ${item.tugas}`)
        });
        break;

    case 'add':
        let baru = param.slice(3, param.length)
        let tugasBaru = baru.join(' ')
        let newTodo = {
            "tugas": tugasBaru,
            "status": false,
            "tag": []
        }
        todo.push(newTodo)
        //console.log(todo)
        fs.writeFileSync('todo.json', JSON.stringify(todo), 'utf-8')
        break;

    case 'delete':
        todo.splice(param[3] - 1, 1)
        //console.log(todo)
        fs.writeFileSync('todo.json', JSON.stringify(todo), 'utf-8')
        break;

    case 'complete':
        let complete = param[3] - 1
        todo[complete].status = true

        fs.writeFileSync('todo.json', JSON.stringify(todo), 'utf-8')
        break;

    case 'uncomplete':
        let uncomplete = param[3] - 1
        todo[uncomplete].status = false

        fs.writeFileSync('todo.json', JSON.stringify(todo), 'utf-8')
        break;

    case 'outstanding':
        if (param[3] == 'asc') {
            todo.forEach((item, index) => {
                if (todo[index].status == false) {
                    console.log(`${index + 1}. ${item.status ? '[x]' : '[ ]'} ${item.tugas}`)
                }
            })
        } else for (let i = todo.length - 1; i >= 0; i--) {
            if (todo[i].status == false) {
                // console.log(todo[i])
                console.log(`${i + 1}. ${todo[i].status ? '[x]' : '[ ]'} ${todo[i].tugas}`)
            }
        }
        break;

    case 'completed':
        if (param[3] == 'asc') {
            todo.forEach((item, index) => {
                if (todo[index].status == true) {
                    console.log(`${index + 1}. ${item.status ? '[x]' : '[ ]'} ${item.tugas}`)
                }
            })
        } else for (let i = todo.length - 1; i >= 0; i--) {
            if (todo[i].status == true) {
                // console.log(todo[i])
                console.log(`${i + 1}. ${todo[i].status ? '[x]' : '[ ]'} ${todo[i].tugas}`)
            }
        }
        break;

    case 'tag':
        let tag = param.slice(3, param.length)
        console.log(tag)

        // fs.writeFileSync('todo.json', JSON.stringify(todo), 'utf-8')
        break;

    default:
        console.log('>>>JS TODO<<<')
        console.log('$ node todo.mjs <command>')
        console.log('$ node todo.mjs list')
        console.log('$ node todo.mjs task <task_id>')
        console.log('$ node todo.mjs add <task content>')
        console.log('$ node todo.mjs delete <task_id>')
        console.log('$ node todo.mjs complete <task_id>')
        console.log('$ node todo.mjs uncomplete <task_id>')
        console.log('$ node todo.mjs list:outstanding asc|desc')
        console.log('$ node todo.mjs list:completed asc|desc')
        console.log('$ node todo.mjs tag <task_id> <tag_name_1> <tag_name_2> . . . <tag_name_N>')
        console.log('$ node todo.mjs filter:<tag_name>')
        break;
}

