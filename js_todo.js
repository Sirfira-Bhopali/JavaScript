list1=[]
answer=prompt("please enter your response");
while (answer!="quit"){
	if(answer=="new"){
		console.clear();
		todo=(prompt("please enter to todo list"));
		list1.push(todo);
		console.log(todo +" has been successfuly added !");
		answer=prompt("please enter your response");
	}
	if (answer=="list"){
		console.clear();
		count=1;
		list1.forEach(function(todo){
			console.log(count+"-> "+todo);
			count+=1;
		})
		answer=prompt("please enter your response");
	}
	if (answer=="delete"){
		console.clear();
		count=1;
		list1.forEach(function(todo){
			console.log(count+"-> "+todo);
			count+=1;
		})
		index=prompt("please select index");
		list2=list1.splice(index-1,1);
		console.clear()
		count=1;
		list1.forEach(function(todo){
			console.log(count+"-> "+todo);
			count+=1;
		})
		answer=prompt("please enter your response");

	}
}