
const moks = [
    {checked:false, content:"test1"},
    {checked:false, content:"test2"},
    {checked:false, content:"test2"}
]

const ol = document.querySelector("ol")

for (let mok of moks){
    const li = document.createElement("li")
    const div = document.createElement("div")
    div.innerHTML = `<input type=\"checkbox\" name=\"test\">${mok.content}`;
    div.className="li__content";

    li.append(div);
    ol.append(li)
}

function modifyText() {
    var button = document.getElementsByClassName("li__content");

}

var el = document.getElementsByClassName("todoList__closeIcon");
el.addEventListener("click", modifyText, false);