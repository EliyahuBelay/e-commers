const containerCart = document.getElementById("containerCart");

let cartArray = [arrayAllProducts[30],arrayAllProducts[7],arrayAllProducts[19],arrayAllProducts[55]];
//  console.log(cartArray);



 let trash = document.getElementsByClassName("fa fa-trash");
 let numCart = 0;
 for (let i = 0; i < cartArray.length; i++) {
    containerCart.innerHTML += `<tr class="numCart${i}"><td class="infoTable">${cartArray[i].category}</td><td class="infoTable">${cartArray[i].name}</td><td class="infoTable">${cartArray[i].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>`
    numCart++;
     let trClass = document.getElementsByClassName("numCart"+i)
     console.log(trash)
    for (let j = 0; j < trash.length; j++) {
        trash[j].onclick = ()=>{
            for (let x = 0; x < trClass.length; x++) {
                trClass[j].innerHTML = "";
                
            }
            
        }
    }
 };



// containerCart.innerHTML += `<table id="table"><tr><th class="headline">Category</th><th class="headline">Name</th><th class="headline">Price</th><th class="headline">Delete item</th><tr>
// <tr><td class="infoTable">${arrayAllProducts[30].category}</td><td class="infoTable">${arrayAllProducts[30].name}</td><td class="infoTable">${arrayAllProducts[30].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>
// <tr><td class="infoTable">${arrayAllProducts[7].category}</td><td class="infoTable">${arrayAllProducts[7].name}</td><td class="infoTable">${arrayAllProducts[7].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>
// <tr><td class="infoTable">${arrayAllProducts[19].category}</td><td class="infoTable">${arrayAllProducts[19].name}</td><td class="infoTable">${arrayAllProducts[19].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>
// <tr><td class="infoTable">${arrayAllProducts[55].category}</td><td class="infoTable">${arrayAllProducts[55].name}</td><td class="infoTable">${arrayAllProducts[55].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr></table>`;



// let trash = document.getElementsByClassName("fa fa-trash");
// for (let i = 0; i < trash.length; i++) {
//     trash[i].onclick = ()=>{
//         for (let j = 0; j < cartArray.length; j++) {
//             containerCart.innerText = "";
            
//         }
        
//     }
    
// }



let allTd = document.getElementsByTagName("td");

let btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click",()=>{
    for (let i = 0; i < allTd.length; i++) {
        allTd[i].innerText = "";
    };
});






// let deleteItem = document.getElementById("deleteItem");

// deleteItem.onclick = function(){
//     containerCartArray.
// };

