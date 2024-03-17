import { data } from "./main.js"


const dataElem = document.querySelector(".data")
const searchElem = document.querySelector("#search")





donRender(data)


searchElem.addEventListener("keyup", () => {
    let filteredList = data.filter(data => data.name.includes(searchElem.value))
    dataElem.innerHTML = ""
    donRender(filteredList)

})

function donRender(param) {
    param.forEach((item) => {
        dataElem.innerHTML += `
        <div class="">
            <h3>${item.name}</h3>
            <h3>${item.ticker}</h3>
            <h3>${item.value}</h3>
            <h3>${item.change}</h3>
        </div> 
        `
    })
}