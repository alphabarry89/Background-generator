var database=[
{	userName: "Boby",
	password: "uppersecret"
};
var newFeeds =[{
	userName: "Boby",
	timeline: "so tired from all that learning"
},
{
	userName: "Boby",
	timeline: "Javascript is coo;"
}
];
var pUser = prompt("Your User Name");
var Ppassword= prompt("Your password");
var signIn function(user, password){
	if(user===databases[0].userName && password===databases[1].password){
		console.log(newsFeed);
	}else{
		alert("please check you user name of password");
	}
}
signIn(pUser,Ppassword);