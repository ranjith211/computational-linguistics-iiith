corpus1="A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'";
corpus2="A wolf carried off a lamb. The lamb said, 'I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."
corpus3="A man had a little dog, and he was very fond of it. He would pat a he its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does, 'said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'";

//making the Corpus selection dropdown
//Displays table and information 

function next(){
	document.getElementById("answer").innerHTML="";
	document.getElementById('four').innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types";
	document.getElementById("three").style.visibility="hidden";
	document.getElementById('continue').innerHTML="#New types:";
	document.getElementById('five').innerHTML="<input id='newtype' type=text>";
}


function functokens(str){
	str=str.replace(/[^a-zA-Z ]/g, "")
	str = str.split(" ");
	return str.length;
}

function functypes(str){
	str=str.replace(/[^a-zA-Z ]/g, "")
	str= str.toLowerCase();
	str = str.split(" ");
	var unique = str.filter(distinct);
	return unique.length;

}

function distinct(value, index, self) { 
    return self.indexOf(value) === index;
}

function validate(corp){
	document.getElementById('continue').innerHTML="";
	var token= document.getElementById('token').value;
	var type1= document.getElementById('types').value;
	var x=document.getElementById('token').innerHTML;
	if(token== functokens(corp) && type1== functypes(corp)){
		document.getElementById('answer').innerHTML="Right answer!";
		document.getElementById('answer').style.color="green";
		document.getElementById('token').style.backgroundColor="green";
		document.getElementById('types').style.backgroundColor="green";
		document.getElementById('continue').innerHTML="<button onclick='next()'>continue</button>";
	}
	if(token== functokens(corp) && type1!= functypes(corp)){
		document.getElementById('answer').innerHTML="Wrong answer!";
		document.getElementById('answer').style.color="red";
		document.getElementById('token').style.backgroundColor="green";
		document.getElementById('types').style.backgroundColor="red";
	}
	if(token!= functokens(corp) && type1== functypes(corp)){
		document.getElementById('answer').innerHTML="Wrong answer!";
		document.getElementById('answer').style.color="red";
		document.getElementById('token').style.backgroundColor="red";
		document.getElementById('types').style.backgroundColor="green";
	}
	if(token!= functokens(corp) && type1!= functypes(corp)){
		document.getElementById('answer').innerHTML="Wrong answer!";
		document.getElementById('answer').style.color="red";
		document.getElementById('token').style.backgroundColor="red";
		document.getElementById('types').style.backgroundColor="red";
	}
} 


function viewcorpus(){
	var a=document.getElementById("selected").value;
	if(a=="Corpus1"){
		document.getElementById("answer").innerHTML="";
		document.getElementById("three").innerHTML="";
		document.getElementById("continue").innerHTML="";
		document.getElementById("five").innerHTML="";
		document.getElementById("one").innerHTML=corpus1;
		document.getElementById("display").innerHTML="Enter the number of tokens and types for the above corpus:";
		document.getElementById("two").innerHTML="<table><tr><td>"+"#tokens:"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types:"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("three").innerHTML="<button onclick='validate(corpus1)'>Submit</button>"
	}
	if(a=="Corpus2"){
		document.getElementById("answer").innerHTML="";
		document.getElementById("three").innerHTML="";
		document.getElementById("continue").innerHTML="";
		document.getElementById("five").innerHTML="";
		document.getElementById("one").innerHTML=corpus2;
		document.getElementById("display").innerHTML="Enter the number of tokens and types for the above corpus:";
		document.getElementById("two").innerHTML="<table><tr><td>"+"#tokens:"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types:"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table?";
		document.getElementById("three").innerHTML="<button onclick='validate(corpus2)'>Submit</button>"

	}
	if(a=="Corpus3"){
		document.getElementById("answer").innerHTML="";
		document.getElementById("three").innerHTML="";
		document.getElementById("continue").innerHTML="";
		document.getElementById("five").innerHTML="";
		document.getElementById("one").innerHTML=corpus3;
		document.getElementById("display").innerHTML="Enter the number of tokens and types for the above corpus:";
		document.getElementById("two").innerHTML="<table><tr><td>"+"#tokens:"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types:"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("three").innerHTML="<button onclick='validate(corpus3)'>Submit</button>"

	}
}