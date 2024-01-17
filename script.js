let modebtn = document.querySelector('#mode');
let body = document.querySelector('body');
let currmode = "light";
modebtn.addEventListener("click", ()=>{
    console.log("you are changing mode");
    if(currmode === "light")
    {
        currmode="dark";
        body.style.backgroundColor="black";
    }
    else
    {
        currmode ="light";
        body.style.backgroundColor="white";
    }
    console.log(currmode);
}
);