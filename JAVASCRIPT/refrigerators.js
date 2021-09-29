let refrigeratorsProducts = document.getElementById("refrigeratorsProductsContainer"); 
let num = 1
let classForButton = 0;
   for (let i = 0; i < arrayAllProducts.length; i++) {
       num += 0.1;
       classForButton +=1;
            if (arrayAllProducts[i].category == "refrigerators") {
                refrigeratorsProducts.innerHTML +=
                `<article class="eachProduct"><h1>${arrayAllProducts[i].name} </h1><p><span id="previousPrice">Was ${arrayAllProducts[i].price*num.toFixed()}$ </span><span id="currentPrice"> Now ${arrayAllProducts[i].price}$ </span></p>
                <p><span id="productDetails">PRODUCT DETAILS:</span> ${arrayAllProducts[i].describe}</p><button id="btnrefrigerators">add to cart</button></article> `;
                for (let j = 0; j < arrayAllProducts[i].pictures.length; j++){
                    let image = "picOne" ;
                    if (j==1) {
                        image = "picTwo";
                    }
                 refrigeratorsProducts.innerHTML += `<img class="${image}" src="${arrayAllProducts[i].pictures[j]}"></img>`
                }
                refrigeratorsProducts.innerHTML += `<hr id="shift">`
            }        

            // let buttonToAddRefrigeratorProductToCart = document.getElementsByClassName("btnrefrigerators")
            // for (let x = 0; x < buttonToAddRefrigeratorProductToCart.length; x++) {
            //     buttonToAddRefrigeratorProductToCart.onclick = ()=>{
            //         if (arrayAllProducts[i].category == "refrigerators"){
            //             containerCart.innerHTML += `<tr class="num${i}"><td class="infoTable">${arrayAllProducts[i].category}</td><td class="infoTable">${arrayAllProducts[i].name}</td><td class="infoTable">${arrayAllProducts[i].price}$</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>`;

            //         }
            //     }
                
            // }
    };




