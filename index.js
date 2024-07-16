const form = document.querySelector("#frm-input");
const inputs = [...document.getElementsByClassName("input-cpo")];
const obrigatorio = document.querySelectorAll(".cpo-valido");

form.addEventListener("submit", (ev)=>{
    ev.preventDefault(); 
    let formValid = true

    inputs.map((el,ind)=>{
    if(el.value === ""){
        obrigatorio[ind].classList.remove("cpo-valido");
        obrigatorio[ind].classList.add("cpo-erro");
        inputs[ind].classList.add("input-erro");
        inputs[ind].classList.remove("input-valido");
        formValid = false;
        return;
    } else {
        obrigatorio[ind].classList.add("cpo-valido");
        obrigatorio[ind].classList.remove("cpo-erro");
        inputs[ind].classList.remove("input-erro");
        inputs[ind].classList.add("input-valido");
    }
    })
    
    if (formValid){
        form.submit()
    }
})

