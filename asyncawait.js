const jokes = document.querySelector("#jokes");
const jokebtn = document.querySelector("#jokebtn");

try {
    const changejoke = async () => {//GET 

        const header = {
            headers: {
                Accept: "application/json"
            }
        }
        const getdata = await fetch("https://icanhazdadjoke.com/", header);
        const data = await getdata.json();
        jokes.innerHTML = data.joke;

    }
    jokebtn.addEventListener("click", changejoke);
    changejoke();
} catch (error) {
    console.log(error);
}
