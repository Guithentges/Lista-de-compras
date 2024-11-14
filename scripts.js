const input = document.getElementById("input")
const excludeFooter = document.querySelector(".exclude-2")
const listFooter = document.getElementById("list-footer")
const form = document.querySelector("form")
const list = document.querySelector(".list")
let exclude = document.querySelector(".exclude")
const submit = document.getElementById("submit")


listFooter.classList.add("no-appear")
input.addEventListener("input", () => {
})
excludeFooter.addEventListener("click", (event) => {
    event.preventDefault()
    listFooter.classList.add("no-appear")
})

submit.addEventListener("click", (event) => {
    event.preventDefault()
    
    let listItem = document.createElement("div")
    listItem.classList.add("list-item")
    list.prepend(listItem)

    let item = document.createElement("div")
    item.classList.add("item")
    listItem.append(item)

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.setAttribute("name", "item")
    check.classList.add("checkbox")
    item.append(check)

    let label = document.createElement("label")
    label.textContent = input.value
    item.append(label)

    let exclude = document.createElement("button")
    exclude.classList.add("exclude")
    listItem.append(exclude)
    listFooter.classList.add("no-appear")
    exclude.addEventListener("click", () => {
        listItem.remove();
        listFooter.classList.remove("no-appear")
    });

    input.value = ""
})
