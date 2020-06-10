const url ='http://localhost:3000/user'
var table =null
var loadFlag =false

const load=()=>{
    console.log('load()')
    table = document.getElementById('userTable')
    tbody = document.getElementById('tbody')
    console.log(table)
    console.log(loadFlag)

    if(loadFlag===false){
        loadUsers()
        loadFlag=true
    }
}
const loadUsers= ()=>{
    console.log('loadUsers()')
    
    axios.get(url,{responseType:'json'}).then(
        (res)=>{
            console.log(res.data)
            console.log('users:'+JSON.stringify(res.data.users))

            var users = res.data.users

            users.forEach(usuario => {
                var row =tbody.insertRow()
                
                row.insertCell(0).innerHTML=usuario.id
                row.insertCell(1).innerHTML=usuario.nombre
                row.insertCell(2).innerHTML=usuario.apellido
                row.insertCell(3).innerHTML=usuario.cedula
                row.insertCell(4).innerHTML=usuario.edad
                row.insertCell(5).innerHTML=usuario.email
                row.insertCell(6).innerHTML=usuario.password
                row.insertCell(7).innerHTML=' <td> <a href="viewId.html" class="icon-button blue step fi-eye size-36"></a><a href="edit.html" class="icon-button gray step fi-pencil size-36"></a><Button  class="icon-button red step fi-trash size-36" data-open="modal_delete_user"></Button></td>'
            });
        }
        
    ).catch(
        (err)=>{
            console.log(err)
        }
    ).then(
        ()=>{
            console.log('then')
        }
    )
}

const createUser =(e)=>{
    e.preventDefault()
    console.log('createUser()')
    nombre = document.getElementById('uNombre').value
    apellido = document.getElementById('uApellido').value
    cedula = document.getElementById('uCedula').value
    edad =document.getElementById('uEdad').value
    email =document.getElementById('uEmail').value
    password = document.getElementById('uPassword').value

    axios.post(url,{
        'nombre':nombre,
        'apellido':apellido,
        'cedula':cedula,
        'edad':edad,
        'email':email, 
        'password':password
    }).then(res=>{
        console.log(res.data.status)
        if(res.data.status){
            location.href="view.html"
        }
    }).catch(
        (err)=>{
            console.log(err)
        }
    )
}