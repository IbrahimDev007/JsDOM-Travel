
// test to connect 
console.log("helllo js");
// document Object Model check
console.log(document);
// selection in js dome 
// slection by tag id class for usuaally html 

console.log(document.getElementsByTagName("section"));
console.log(document.getElementById("plaaces-id-1"));
console.log(document.getElementsByClassName("places"));
console.log(document.querySelectorAll(".places"));
console.log(document.querySelector(".places"));
console.log(document.querySelector("#plaaces-id-1"));
console.log(document.querySelector("section"));
// selection atribute class id  event img 
console.log(document.getElementById("plaaces-id-2").getAttribute('class'));
//style in js dom

const first_section=document.getElementById("plaaces-id-1");
first_section.style.color="yellow";

//create add remove element by js dom
 const header =document.createElement("h3");
 header.innerText="This is added by js dom";
 first_section.appendChild(header);

let lists =document.createElement("ul");

const items=["item-1","item-2","item-3","item-4"];

for (let  itemtext of items) {
    const list=document.createElement("li");
    list.setAttribute('id',itemtext);
    list.innerText=itemtext;
    
    lists.appendChild(list);
}
first_section.appendChild(lists);
//remove child
let removeItem = document.getElementById('item-3')
removeItem.remove(removeItem);
//remove class

// let removeItem = document.getElementsByClassName('item-3')
// removeItem.remove(removeItem);







