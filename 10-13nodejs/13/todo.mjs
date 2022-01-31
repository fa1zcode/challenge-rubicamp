import fs from 'fs'
let todo = JSON.parse(fs.readFileSync('todo.json', 'utf-8'))
let param = process.argv
let taskId = param[3] - 1
// console.log(todo)


switch (param[2]) {

    case 'list':
        console.log('Daftar Pekerjaan')
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
        console.log(`"${tugasBaru}" telah ditambahkan.`)

        fs.writeFileSync('todo.json', JSON.stringify(todo, null, 3), 'utf-8')

        break;

    case 'delete':
        console.log(`'${todo[taskId].tugas}' telah dihapus dari daftar`)
        todo.splice(taskId, 1)

        fs.writeFileSync('todo.json', JSON.stringify(todo, null, 3), 'utf-8')

        break;

    case 'complete':
        todo[taskId].status = true
        console.log(`'${todo[taskId].tugas}' telah selesai`)

        fs.writeFileSync('todo.json', JSON.stringify(todo, null, 3), 'utf-8')

        break;

    case 'uncomplete':

        todo[taskId].status = false
        console.log(`'${todo[taskId].tugas}' status selesai dibatalkan`)
        fs.writeFileSync('todo.json', JSON.stringify(todo, null, 3), 'utf-8')

        break;

    case 'outstanding':
        console.log('Daftar Pekerjaan')
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
        console.log('Daftar Pekerjaan')
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
        let tag = param.slice(4, param.length)
        console.log(tag)
        tag.forEach((item,index) => {
            
        });
        //todo[taskId].tag.push(tag)
        console.log(`'${tag}' telah ditambahkan ke daftar '${todo[taskId].tugas}'`)

        //fs.writeFileSync('todo.json', JSON.stringify(todo, null, 3), 'utf-8')

        break;

    default:

        if (!param[2] || param[2] == 'help') {
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
        }
        else {
            let inputFilter = param[2].split(':')
            let filter = inputFilter[1]
            //console.log(filter)
            todo.forEach((item, index) => {
                if (todo[index].tag.includes(filter)) {
                    console.log(`${index + 1}. ${item.status ? '[x]' : '[ ]'} ${item.tugas}`)
                }
            })
        };

        break;


}
