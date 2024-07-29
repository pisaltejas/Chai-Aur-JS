const accountID = 23434
let accountEmail = "xyz@gmail.com"
/*prefer not to use  var because of issue in blocked scope and functional scope*/
var accountPassword = "1234"
accountCity = "Jaipur" //not recommended

//accountID = 2  //not allowed
console.log(accountID);

accountEmail = "acy@gmail.com"
accountPassword = "1345"
accountCity = "Mumbai"
let accounState; //accountState is not defined
console.table([accountID, accountEmail, accountPassword,accountCity, accountState])
console.table([accountID, accountEmail, accountPassword,accountCity])
