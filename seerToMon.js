// Problem solving-1 start (seer to mon)

function seerToMon(number) {

    const oneMon = 40;

   // error throw started
    if (typeof number != 'number') {
        return "Please give a valid number!";
    } 
    
    else if (number <= 0) {
        return "Must input positive number!";

    } 
    // main task
    else{
        // formula
        let convert = number / oneMon;
        return convert;
       
    } 

}

console.log(seerToMon(550));

// Problem solving-1 end