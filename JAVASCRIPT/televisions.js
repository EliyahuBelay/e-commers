let televisionsProductsContainer = document.getElementById("televisionsProductsContainer"); 
let num = 1
let classForButton = 0;
   for (let i = 0; i < arrayAllProducts.length; i++) {
       num += 0.1;
       classForButton +=1;
            if (arrayAllProducts[i].category == "televisions") {
                televisionsProductsContainer.innerHTML +=
                `<article class="eachProduct"><h1>${arrayAllProducts[i].name} </h1><p><span id="previousPrice">Was ${arrayAllProducts[i].price*num.toFixed()}$ </span><span id="currentPrice"> Now ${arrayAllProducts[i].price}$ </span></p>
                <p><span id="productDetails">PRODUCT DETAILS:</span> ${arrayAllProducts[i].describe}</p> <button class="btnAirConditioners${classForButton}">add to cart</button></article>`;
                for (let j = 0; j < arrayAllProducts[i].pictures.length; j++){
                    let image = "picOne" ;
                    if (j==1) {
                        image = "picTwo";
                    }
                 televisionsProductsContainer.innerHTML += `<img class="${image}" src="${arrayAllProducts[i].pictures[j]}"></img>`
                }
                televisionsProductsContainer.innerHTML += `<hr id="shift">`
            }     
            
    };

// let button = getElementsByClassName("btnAirConditioners"+classForButton);
//             button.onclick = ()=>{
//                 containerCart.push(`<tr class="num${i}"><td class="infoTable">${arrayAllProducts[i].category}</td><td class="infoTable">${arrayAllProducts[i].name}</td><td class="infoTable">${arrayAllProducts[i].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>`);
//             }    




