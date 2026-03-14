const lista = document.getElementById("lista-tarefas");
const btnSalvar = document.getElementById("btn-salvar");
const btnApagar = document.querySelectorAll(".btn-apagar");


const listaTarefas = [

]

const tarefasSalvas = localStorage.getItem("tarefas");

if(tarefasSalvas){
    listaTarefas.push(...JSON.parse(tarefasSalvas));
}


function listar(){
    lista.innerHTML = "";
    listaTarefas.forEach((li,index) => {
        const el = `
                <div >
                    <h2 class="titulo-li">${li.titulo}</h2>
                    <span class="Prioridade">${li.prioridade}</span>
                </div>
                <div>
                    <button class="btn-apagar" type="submit" data-index="${index}">Apagar</button>
                </div>
        `

        const liTarefa = document.createElement("li");
        liTarefa.classList.add(li.prioridade.toLowerCase());
        liTarefa.innerHTML = el;

        lista.appendChild(liTarefa);
    })
}


listar();



btnSalvar.addEventListener("click", ()=>{
    const inputTitulo = document.getElementById("input-tarefa");
    const prioridade = document.querySelector('.input-prioridade:checked')

    listaTarefas.push({
        titulo: inputTitulo.value,
        prioridade: prioridade.value
    })

    localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
    listar();
})


lista.addEventListener('click',(e)=>{
    if(e.target.classList.contains("btn-apagar")){
        const index = e.target.dataset.index;
        listaTarefas.splice(index,1);
        localStorage.setItem("tarefas", JSON.stringify(listaTarefas) );
        listar();
    }

})

