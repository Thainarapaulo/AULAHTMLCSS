// addEventListner =  adicionar um "ouvidor" de eventos 
botao.addEventListener("click",modo)

function modo(){
    // document = html
    // queryselector = selecionar elementos 
    let body = document.querySelector("body")
    let botao = document.querySelector("#botaoTema")
    
     if(botao.checked){
        // setAtribute (atributo, valor)
        body.setAttribute("data-bs-theme","dark")

      }else{
        body.setAttribute("data-bs-theme","light")

         }
     }