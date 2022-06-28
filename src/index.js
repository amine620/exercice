const { default: User } = require("./models/User");




function loadDataInTheDom(){
    const users=User.getData()
    let tbody=document.querySelector('tbody')

    users.forEach((user,index)=>{

       tbody.innerHTML+=`
       <tr>
       <th>${user.id}</th>
       <td>${User.getFormatedDate(user.createdDate)}</td>
       <td><span id="badge" class="badge" style="background-color:${User.checkStatus(user.status)}">${user.status}</span></td>
       <td>${user.userName}</td>
       <td>${user.firstName}</td>
       <td>${user.lastName}</td>
       <td>${user.registrationNumber}</td>
       <td>
       <i  class="fa fa-trash" aria-hidden="true"></i>
       <input type="hidden" value="${index}">
       </td>
     </tr>
       `
    })

}
loadDataInTheDom()

function removeFromDocument(){
    document.querySelector('tbody').addEventListener('click',function(e){
           if(e.target.className=="fa fa-trash")
           {
              e.target.parentElement.parentElement.remove()
              let index =e.target.nextElementSibling.value
              User.removeFromArray(index)
           }
    })
}
removeFromDocument()