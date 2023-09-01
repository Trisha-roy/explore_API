function loadAdd(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>disAdd(data))
}
function disAdd(data){
    const ul=document.getElementById('users-list')
    for(const add of data){
        console.log(add.address)
        const li=document.createElement('li')
        li.innerText=add.address.street
        ul.appendChild(li)
    }
}