
let ovensProducts = document.getElementById("ovensProductsContainer"); 
let num = 1
let classForButton = 0;
   for (let i = 0; i < arrayAllProducts.length; i++) {
       num += 0.1;
       classForButton +=1;
            if (arrayAllProducts[i].category == "ovens") {
                ovensProducts.innerHTML +=
                `<article class="eachProduct"><h1>${arrayAllProducts[i].name} </h1><p><span id="previousPrice">Was ${arrayAllProducts[i].price*num.toFixed()}$ </span><span id="currentPrice"> Now ${arrayAllProducts[i].price}$ </span></p>
                <p><span id="productDetails">PRODUCT DETAILS:</span> ${arrayAllProducts[i].describe}</p> <button class="btnAirConditioners${classForButton}">add to cart</button></article>`;
                for (let j = 0; j < arrayAllProducts[i].pictures.length; j++){
                    let image = "picOne" ;
                    if (j==1) {
                        image = "picTwo";
                    }
                 ovensProducts.innerHTML += `<img class="${image}" src="${arrayAllProducts[i].pictures[j]}"></img>`
                }
                ovensProducts.innerHTML += `<hr id="shift">`
            }        
    }
