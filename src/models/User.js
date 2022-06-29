let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
]


export default class User {


    constructor(firstName, lastName, userName,createdDate,status, registrationNumber) {
        users.push({
            id: users.length + 1,
            createdDate,
            status,
            firstName,
            lastName,
            userName,
            registrationNumber
        })
        console.log(users);
    }

    static getData() {
        return users
    }
    static checkStatus(status) {
        switch (status) {

            case "Validé":return "#5BE881;"
    
            case "En validation":return "#FDB64D;"

            case "Rejeté":return "#FF0000;"


            default:""
                break;
        }
    }

    static getFormatedDate(date){

        return  new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
      
    }
    static removeFromArray(index){
      users.splice(index,1)
      console.log(users);
    }

}