// Problem solving-2 start (Total sales)


function totalSales(shirtQuantity , pantsQuantity , shoesQuantity ) {
    const shirtPrice = 100;
    const pantsPrice = 200;
    const shoesPrice = 500;
 
    // error throw started
     if (typeof shirtQuantity != "number" || shirtQuantity < 0){
         return 'Please give a valid number of shirt quantity';
     }
    else if (typeof pantsQuantity != "number" || pantsQuantity < 0) {
        return 'Please give a valid number of pants quantity';
    }
    else if (typeof shoesQuantity != "number" || shoesQuantity < 0) {
        return 'Please give a valid number of shoes quantity';
    }

    else {
    const totalPriceOfShirt = shirtPrice * shirtQuantity;
    const totalPriceOfPants = pantsPrice * pantsQuantity;
    const totalPriceOfShoes = shoesPrice * shoesQuantity;
    const totalSalesOfDaily =totalPriceOfShirt + totalPriceOfPants + totalPriceOfShoes ;
    return totalSalesOfDaily;
    }

} 

console.log(totalSales(1,2,2));

// Problem solving-2 end