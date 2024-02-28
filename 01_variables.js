const accountId = 20200
let   accountEmail = "abc@gmail.com"
var   emailPassword = "ddddd"
accountCity = "Pune"

// if we not give value to any varible so it is default undefined:)
let accountState

// to print value we generally use console log 
console.log(accountId);


// instead of that we can use console.table in that we can give parameter we print in table formate all the infor
// information. lets try

console.table([accountId, accountEmail, emailPassword,accountCity, accountState])

/*
prefer to not use var 
because of issue in block scope and functional scope 

*/