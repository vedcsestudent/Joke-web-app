const jokes=document.querySelector("#jokes");
const jokebtn=document.querySelector("#jokebtn");
const changejoke=()=>{
    //GET https://icanhazdadjoke.com/
     const header={
        headers:{
            Accept:"application/json"
        }
    }
    fetch("https://icanhazdadjoke.com/",header).then((res)=>res.json())
    .then((data)=> jokes.innerHTML= data.joke
    )
    .catch((error)=>console.log(error));
}
jokebtn.addEventListener("click",changejoke);
changejoke();


/*const header={
    headers:{
        Accept:"application/json"
    }
}
const changejoke=()=>{
    
    fetch("https://dad-jokes.p.rapidapi.com/random/joke",header)
    .then((res)=>{
        res.json()
    }).then((data)=> jokes.innerHTML=data.jokes).catch((err)=>{
        console.log(err)
    });
}
jokebtn.addEventListener("click",changejoke);*/