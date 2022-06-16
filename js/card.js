
let myCard = {
 poster: "poster.png",
 type: "type.png",
 sale: "act.png",
 title1: "Тайная жизнь",
 title2: "домашних животных 2",
 price: 52,
 currency: "руб.",
 sale_discount: 15,
 rating: 3.5,
 button: "order.png",
 promotion: true,
}

// myCard.rating = prompt("Оцените мультфильм");

//Формат полной стоимости
let fullPrice = `${myCard.price},00 ${myCard.currency}`;
// console.log(fullPrice);

let salePrice = `${Math.round(myCard.price * (100-myCard.sale_discount)/100)},00 ${myCard.currency}`;
// console.log(salePrice);

// Рейтинг (доработать)
let rank = "";
if (myCard.rating <= 0 || myCard.rating > 5 || !isFinite(myCard.rating)) {
    rank = "star_border " + "star_border " + "star_border " + "star_border " + "star_border";
} else if (myCard.rating == 0.5 || myCard.rating == 1.5 || myCard.rating == 2.5 || myCard.rating == 3.5 || myCard.rating == 4.5) {
    for (i =1 ; i <= myCard.rating ; i++) {
        rank += "star ";
    }
    rank += "star_half"
    for (i = 0 + myCard.rating; i < 4 ; i++) {
        rank += "star_border ";
    }
} else {
    for (i =1 ; i <= myCard.rating ; i++) {
        rank += "star ";
    }
    for (i = 0 + myCard.rating; i < 5 ; i++) {
        rank += "star_border ";
    }
}

    // console.log(rank);

 // Акция (доработать)
    let divPrice = "";
    let divPromoLogo = "";
    let divType = "";

    if (myCard.promotion) {
        divPrice = `<div>${salePrice}</div><div>${fullPrice}</div>`;
        divPromoLogo = `<img style="transform: translate(-86%, -150%);" src="images/${myCard.sale}" alt="">`;
        divType = `<img style="transform: translate(95%, -570%);" src="images/${myCard.type}" alt="">`;
        } else {
        divPrice = `<div>${fullPrice}</div>`;
        divType = `<img style="transform: translate(95%, -530%);" src="images/${myCard.type}" alt="">`;
        }


let s = "";

s = `
<div class="card">
    <div class="poster">
        <img src="images/${myCard.poster}" alt="">
        ${divType}
        ${divPromoLogo}
    </div>

<div class="title">
<div>${myCard.title1}</div>
<div>${myCard.title2}</div>
</div>

<div class="price">
   ${divPrice}
</div>

<div class="rating">
    <span class="material-icons">
           ${rank}
        </span>
</div>

<div class="order">
    <img src="images/${myCard.button}" alt="">
</div>

</div>
`;

cards.innerHTML = s;
