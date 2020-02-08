answer=prompt("Are You There ?");
while (answer.indexOf("yes")==-1 && answer.indexOf("yeah")==-1){
	// console.log(answer.indexof("yes"));
	// console.log(answer.indexof("yeah"));
	answer=prompt("Are You There ?");
}
alert("You Made it !!! Let's Party");