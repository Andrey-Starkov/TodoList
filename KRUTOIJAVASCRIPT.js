const ol = document.querySelector("ol")

function render(){
    while(ol.hasChildNodes()){
        ol.removeChild(ol.firstChild)
    }
    for (var i = localStorage.length - 1; i >= 0; i--) {
        const li = document.createElement("li")
        const div = document.createElement("div")
        div.innerHTML = `<input type=\"checkbox\" id=\"Check${i}"\ name=\"test\">${JSON.parse(localStorage.getItem(i.toString())).name}`;
        div.className = "li__content";
        li.append(div);
        ol.append(li)
        const checkbox = document.querySelector(`#Check${i}`)

        if (JSON.parse(localStorage.getItem(i.toString())).IsDone){
            li.classList.toggle("li__complete")
            console.log(checkbox)
            checkbox.checked=true;
        }

        else {
            li.classList.toggle("li__uncomplete")
        }
        checkbox.addEventListener("click", (e) => {
            li.classList.toggle("li__complete")
            li.classList.toggle("li__uncomplete")
        })

        checkbox.addEventListener("click", (e) => {
            li.classList.toggle("li__complete")
            li.classList.toggle("li__uncomplete")
            if (checkbox.checked){
                localStorage.removeItem(li.firstChild.firstChild.id.replace("Check",""))
                localStorage.setItem(li.firstChild.firstChild.id.replace("Check",""),JSON.stringify(
                    {
                        id: li.firstChild.firstChild.id.replace("Check",""),
                        IsDone: true,
                        name: `${li.firstChild.lastChild.textContent}` }
                ))
            }
            else{
                localStorage.removeItem(li.firstChild.firstChild.id.replace("Check",""))
                localStorage.setItem(li.firstChild.firstChild.id.replace("Check",""),JSON.stringify(
                    {
                        id: li.firstChild.firstChild.id.replace("Check",""),
                        IsDone: false,
                        name: `${li.firstChild.lastChild.textContent}` }
                ))
            }
            render();
        })


        const divIcon = document.createElement("div");
        divIcon.id = localStorage.key(i);
        divIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-clipboard-x-fill\" viewBox=\"0 0 16 16\">\n" +
            "                        <path d=\"M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z\"/>\n" +
            "                        <path d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4 7.793 1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708L8 9.293Z\"/>";
        divIcon.className = "todoList__closeIcon"
        divIcon.addEventListener('click', (e) => {
            ol.removeChild(li)
            localStorage.removeItem(divIcon.id)
        })
        li.append(divIcon);
        ol.append(li);


    }
}



render()

function CreateTask(){
    const input = document.querySelector("#input");
    localStorage.setItem(localStorage.length,JSON.stringify(
        {
            id: localStorage.length,
            IsDone: false,
            name: `${input.value}` })
    )
}

document.getElementById("button").addEventListener("click",evt => {
        CreateTask();
        render();
    }
)

document.getElementById("input").addEventListener("keypress",evt => {
        if (evt.key === 'Enter') {
            CreateTask();
            render();
        }
    }
)


document.querySelector("#all").addEventListener("click",evt => {
    render()
})

document.querySelector("#not_complete").addEventListener("click",evt => {
    render()
    const lol = document.getElementsByClassName("li__complete");
    while (lol.length > 0){
        lol[0].remove();
    }
});

document.querySelector("#complete").addEventListener("click",evt => {
    render()
    const lol = document.getElementsByClassName("li__uncomplete");
    while (lol.length > 0){
        lol[0].remove();
    }
});
