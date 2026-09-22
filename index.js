let addButton=document.querySelector(".add-button");


let calculateButton=document.querySelector(".calculate-button");

let totalLabel=document.querySelector(".total-label");

let textTotalLabel=document.querySelector(".text-total-label");


let amount=0;







addButton.addEventListener("click",function(e){
    let exPrice=document.querySelector(".ex-price");
    let exPriceNumber=Number(exPrice.value);

    let exType=document.querySelector(".ex-type");

    let itemsdiv=document.createElement("div");

    let item=document.createElement("p");

    let price=document.createElement("p");

    let listItemsDiv=document.querySelector(".list-items-div");



item.textContent=exType.value;
item.classList.add("item");

price.textContent=`${exPriceNumber}$`;
price.classList.add("price");

itemsdiv.appendChild(item);
itemsdiv.appendChild(price);
itemsdiv.classList.add("item-div");

listItemsDiv.appendChild(itemsdiv);



    amount=amount+exPriceNumber;
    totalLabel.textContent="";
    textTotalLabel.textContent="";
    exPrice.value="";
    exType.value="";

});


calculateButton.addEventListener("click",function(){
    textTotalLabel.textContent="your daily expenses is";
    totalLabel.textContent=amount;
    amount=0;
});













