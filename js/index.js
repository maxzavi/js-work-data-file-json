import { betFindById } from "../repository/bet-repo.js";

document.getElementById('btn-find').addEventListener("click" ,evt=>{
    const id = document.getElementById('txt-val').value;
    const bet = betFindById(id);
    document.getElementById('sp-data').innerHTML= `<pre>${JSON.stringify(bet,null,2)}</pre>`;  
});