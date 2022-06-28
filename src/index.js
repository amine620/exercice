const { default: User } = require("./models/User");




function loadDataInTheDom(){
    const users=User.getData()
    let tbody=document.querySelector('tbody')

    users.forEach(user=>{

       tbody.innerHTML+=`
       <tr>
       <th>${user.id}</th>
       <td>${user.createdDate}</td>
       <td><span id="badge" class="badge" style="background-color:${User.checkStatus(user.status)}">${user.status}</span></td>
       <td>${user.userName}</td>
       <td>${user.firstName}</td>
       <td>${user.lastName}</td>
       <td>${user.registrationNumber}</td>
       <td><i class="fa fa-trash" aria-hidden="true"></i></td>
     </tr>
       `
    })

}
loadDataInTheDom()