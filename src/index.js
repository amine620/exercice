const { default: User } = require("./models/User");

function run() {

loadDataInTheDom()
removeFromDocument()
loadStatus()

}
run()


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

function loadStatus() {
    const statusList=["Rejeté","Validé","En validation"]
    statusList.forEach(status=>{
        document.getElementById('status').innerHTML+=`
           <option value="${status}">${status}</option>
        `
    })
}

document.getElementById('btnAdd').addEventListener('click',function(){
    addNewUser()
    document.querySelector('tbody').innerHTML=""
    loadDataInTheDom()
    document.getElementById('parentDiv').style.display='none'
})

document.getElementById('btnModal').addEventListener('click',function(){
    document.getElementById('parentDiv').style.display='block'
})

function addNewUser() {
    let firstName=document.getElementById('firstName').value
    let lastName=document.getElementById('lastName').value
    let userName=document.getElementById('userName').value
    let createdDate=document.getElementById('createdDate').value
    let status=document.getElementById('status').value
    let registrationNumber=document.getElementById('registrationNumber').value 
    new User(firstName,lastName,userName,createdDate,status,registrationNumber)
    
    let inputs=document.querySelectorAll("input")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value="" 
    }
}