


//checks if a string is a palindone
function palindrome(num) {
    var num1 = String(num); //converts number into a String
    for(var i=0; i < num1.length/2;i++){   //Goes through the number and checks if the corresponding digits are the same
        if(num1[i] != num1[num1.length-1-i]){
            return false;
        }
    }
    return true;
    
}

//find most freq value in array
function mostfreq(input){
    var max = 0;
    var char = '';

    var current=0;
    for(var i=0; i < input.length;i++){
        for(var j =i; j<input.length;j++){ //checks how many of each value is in array
            if(input[i] == input[j]){
                current++;
            }
        }
        if(current > max){
            char = input[i]; 
            max= current;
        }
        current =0;

    }
    if(max==1){
        return console.log("no most freq");
    }
    return char;
}

