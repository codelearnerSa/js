// Problem solving-4 start (Perfect friend)


function perfectFriend(friendName){

    let largest = friendName[0];
    for(let i = 0; i < friendName.length; i++){
         // error throw
        if(typeof friendName[i] != "string") {
            return "Please enter valid name!";  
        }
       // main task
        else if(friendName[i].length == 5 ){ 
            largest = friendName[i]; 
            return largest; 
        } 

    }
    // error throw
    return "All name are the same length";

}

console.log(perfectFriend(["sabxr", "sabr", "sabr", "sabr", "sabr", "sabr", "sabr"]));

  // Problem solving-4 end 