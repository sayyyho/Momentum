// object
const player = {
    name : "sayyyho",
    sayHello : function(userName){
        console.log("hello " + userName);    
    },
};
player.birthday = 323 // add
console.log(player)
console.log(player.name);
player.sayHello("sayyyho");


// array
const dataBox = ["sayyyho", 3, 23, true, "park"];
console.log(dataBox[0]);
dataBox[0] = "seho";
console.log(dataBox[0]);
dataBox.push("isfp");
console.log(dataBox);

// function
function koreanAge(userAge){
    return userAge + 2;
}
const age = koreanAge(21);
console.log(age);

//use parseInt
const myAge = prompt("how old are you?");
console.log(typeof myAge); //string
console.log(typeof parseInt(myAge)); // string to number. if, everything is string > NaN

//isNan, condition(if / else if / else)
const num = parseInt(prompt("input num"));
console.log(isNaN(num));

if (isNaN(num)){
    console.log("please input number");
}

else{
    console.log("you have number");
}
