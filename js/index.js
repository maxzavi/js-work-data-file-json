import { betFindById, usersAll } from "../repository/bet-repo.js";

document.getElementById('btn-find').addEventListener("click" ,evt=>{
    const id = document.getElementById('txt-val').value;
    const bet = betFindById(id);
    document.getElementById('sp-data').innerHTML= `<pre>${JSON.stringify(bet,null,2)}</pre>`;  
});

//Load table

const users = usersAll();

let content ='';
let id=0;
users.forEach(user=>{
    content+=`
        <tr>
            <td>${id+=1}</td>
            <td>${user.userName}</td>
            <td>${user.sumGoles1}</td>
        </tr>`;
});
const tableId=document.getElementById('tbl-users');
const tBody = tableId.getElementsByTagName('tbody')[0].innerHTML=content;

//console.log(tBody)