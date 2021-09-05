//  Problem solving-3 start ( Delivery Cost)


function deliveryCost(quantity){

    const firstHundredSinglequantityCost =100;
    const oneHundredMoreSinglequantityCost =80;
    const twoHundredMaxSinglequantityCost = 50;

    // error throw 
    if (typeof quantity != 'number'|| quantity == 0) {
        return "Please give a valid number of quantity";
    } 
    
    else if (quantity <0) {
        return "Please enter positive number!";

    }    
   // main task 
    // First 1 to 100 quantity delivery cost.

    else if (quantity <= 100) {
       const firstHundredquantityTotalCost = quantity * firstHundredSinglequantityCost;
       return firstHundredquantityTotalCost;
    }
    // First 1 to 100 quantity delivery cost and 101 to 200 quantity delivery cost.

    else if (quantity <=200 ) {
       const firstHundredquantityTotalCost = 100 * firstHundredSinglequantityCost;
       const onehundredMoreQunatity = quantity - 100;
       const onehundredMoreQunatityCost = onehundredMoreQunatity * oneHundredMoreSinglequantityCost;
       const totalCost =firstHundredquantityTotalCost + onehundredMoreQunatityCost;
       return totalCost;
    }

    // First 1 to 100 quantity  , 101 to 200 quantity and 201 more quantity delivery cost.

    else {
        const firstHundredquantityTotalCost = 100 * firstHundredSinglequantityCost;
        const onehundredMoreQunatityCost = 100 * oneHundredMoreSinglequantityCost ;
        const twoHundredMaxquantity = quantity - 200;
        const twoHundredMaxquantityCost = twoHundredMaxquantity * twoHundredMaxSinglequantityCost ;
        const totalCost =firstHundredquantityTotalCost + onehundredMoreQunatityCost + twoHundredMaxquantityCost ;
        return totalCost;


    }
}

console.log(deliveryCost(200));

        // Problem solving-3 end
