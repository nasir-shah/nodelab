// const square = (x) => {
//     return x * x
// }


const square =  (x) => x*x
console.log(2)

const party = {
    name: 'birthday',
    invitees: ['jack', 'ryan', 'jimmy'],
    invitedGuests(){
        this.invitees.forEach((invitee) => {
           console.log( invitee + ' is attending my ' + this.name + ' party! ')
        })
    }
}

party.invitedGuests()