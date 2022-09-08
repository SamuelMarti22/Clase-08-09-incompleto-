import {data} from "../data/data.js";
const items = document.getElementById('items');
const templatecCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = {};
document.addEventListener('DOMContentLoaded',()=>{
    loadData(data)
})
const loadData = data =>{
    data.forEach(personajes =>{
        const {id,name,image} = personajes
        templatecCard.querySelector('h5').textContent = name
        templatecCard.querySelector('img').setAttribute('src',image)
        templatecCard.querySelector('.btn-dark').dataset.id = id
        const clone = templatecCard.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)
}
