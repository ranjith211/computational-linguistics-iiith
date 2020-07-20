//arrays of English correct sentences

sent0    = ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"]
sent1    = ["some students like to study in the night", "at night some students like to study"]
sent2    = ["John and Mary went to church", "Mary and John went to church"]
sent3    = ["John went to church after eating", "after eating John went to church", "John after eating went to church"]
sent4    = ["did he go to market", "he did go to market"]
sent5    = ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
sent6    = ["John goes to the library and studies", "John studies and goes to the library"]
sent7    = ["John ate an apple so did she", "she ate an apple so did John"]
sent8    = ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
sent9    = ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]
var Englishsentences=["John ate an apple before afternoon","John goes to the library and studies","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


//arrays of Hindi correct sentences

sent10   =["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"]
sent11   =["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
sent12   =["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"]
sent13   =["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"]
sent14   =["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर"	, "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"]
sent15   =["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"]
sent16   =["एक बड़ी सी किताब वहाँ है	", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", " है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"] 
var hindisentences=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]

var newArray= ["John ate an apple before afternoon ", "before afternoon John ate an apple ", "John before afternoon ate an apple ",
				"some students like to study in the night ", "at night some students like to study ",
				"John and Mary went to church ", "Mary and John went to church ",
				"John went to church after eating ", "after eating John went to church ", "John after eating went to church ",
				"did he go to market ", "he did go to market ",
				"the woman who called my sister sells cosmetics ", "the woman who sells cosmetics called my sister ", "my sister who sells cosmetics called the woman ","my sister who called the woman sells cosmetics ",
				"John goes to the library and studies ","John studies and goes to the library ",
				"John ate an apple so did she ","she ate an apple so did John ",
				"the teacher returned the book after she noticed the error ", "the teacher noticed the error after she returned the book ", "after the teacher returned the book she noticed the error ","after the teacher noticed the error she returned the book ","she returned the book after the teacher noticed the error ","she noticed the error after the teacher returned the book ","after she returned the book the teacher noticed the error ","after she noticed the error the teacher returned the book ",
				"I told her that I bought a book yesterday ", "I told her yesterday that I bought a book ", "yesterday I told her that I bought a book ", "I bought a book that I told her yesterday ","I bought a book yesterday that I told her "	,"yesterday I bought a book that I told her ",
				"राम और श्याम बाजार गयें ", "राम और श्याम गयें बाजार ", "बाजार गयें राम और श्याम ", "गयें बाजार राम और श्याम ",
				"राम सोया और श्याम भी ","श्याम सोया और राम भी ","सोया श्याम और राम भी ","सोया राम और श्याम भी ",
				"मैंने उसे बताया कि राम सो रहा है ", "मैंने उसे बताया कि सो रहा है राम ", "उसे मैंने बताया कि राम सो रहा है ", "उसे मैंने बताया कि सो रहा है राम ", "मैंने बताया उसे कि राम सो रहा है ", "मैंने बताया उसे कि सो रहा है राम ", "उसे बताया मैंने कि राम सो रहा है ", "उसे बताया मैंने कि सो रहा है राम ", "बताया मैंने उसे कि राम सो रहा है ", "बताया मैंने उसे कि सो रहा है राम ", "बताया उसे मैंने कि राम सो रहा है ", "बताया उसे मैंने कि सो रहा है राम ",
				"राम खाकर सोया ", "खाकर राम सोया ", "राम सोया खाकर ", "खाकर सोया राम ", "सोया राम खाकर ", "सोया खाकर राम ",
				"बिल्लियों को मारकर कुत्ता सो गया ", "मारकर बिल्लियों को कुत्ता सो गया ", "बिल्लियों को मारकर सो गया कुत्ता ", "मारकर बिल्लियों को सो गया कुत्ता ", "कुत्ता सो गया बिल्लियों को मारकर "	, "कुत्ता सो गया मारकर बिल्लियों को ", "सो गया कुत्ता बिल्लियों को मारकर ", "सो गया कुत्ता मारकर बिल्लियों को ",
				"एक लाल किताब वहाँ है ", "एक लाल किताब है वहाँ ", "वहाँ है एक लाल किताब ", "है वहाँ एक लाल किताब ",
				"एक बड़ी सी किताब वहाँ है ","एक बड़ी सी किताब है वहाँ ","बड़ी सी एक किताब वहाँ है ","बड़ी सी एक किताब है वहाँ ","वहाँ है एक बड़ी सी किताब ","वहाँ है बड़ी सी एक किताब ","है वहाँ एक बड़ी सी किताब ","है वहाँ बड़ी सी एक किताब "];


function check()
{
        var str= document.getElementById("five").innerHTML;
			var n = newArray.includes(str);
        	if (n == 1) {
           	 document.getElementById('eight').innerHTML = "Right answer!!!";
           	 return;
       			 }
	   		else{
	   	 		document.getElementById('nine').innerHTML = "Wrong answer!!!" ;
				}
}

function funct()
{
	document.getElementById("three").innerHTML=""
	document.getElementById("five").innerHTML=""
	document.getElementById("four").innerHTML=""
	document.getElementById("fourr").innerHTML=""
	document.getElementById("six").style.visibility="hidden";
	count=0;

if(document.getElementById("english").selected)
{

	document.getElementById("one").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("two").innerHTML="(select the buttons in proper order)";
	var a=Englishsentences[Math.floor(Math.random() * Englishsentences.length)];
	let body = document.getElementsByTagName("span")[0];
	a1=a.split(" ");
	for(i=0;i<a1.length;i++)
{
	j=Math.floor(Math.random()*a1.length)
	a=a1[i];
	a1[i]=a1[j]
	a1[j]=a;
}


for(i=0;i<a1.length;i++)
{
		let button = document.createElement("button");
		button.id="button"+i;
		button.innerHTML = a1[i];
		body.appendChild(button);
button.addEventListener ("click", function()
 {
	document.getElementById("four").innerHTML="Formed Sentence";
	document.getElementById("fourr").innerHTML="(after selecting words):";
    document.getElementById("five").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count++;
    if (count>0) 
     {
     	document.getElementById("six").style.visibility="visible";
     }
    if (count==a1.length||count==2*a1.length||count==3*a1.length||count==4*a1.length||count==5*a1.length||count==6*a1.length||count==7*a1.length||count==8*a1.length) 
     {
     	document.getElementById("seven").style.visibility="visible";
     }
});
}  
}
else if(document.getElementById("hindi").selected) 
{ 
	document.getElementById("one").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("two").innerHTML="(select the buttons in proper order)";
	var b=hindisentences[Math.floor(Math.random() * hindisentences.length)];
	let body = document.getElementsByTagName("span")[0];
	b1=b.split(" ");
	for(i=0;i<b1.length;i++)
{
	j=Math.floor(Math.random()*b1.length)
	a=b1[i];
	b1[i]=b1[j]
	b1[j]=a;
}
for(i=0;i<b1.length;i++)
{
		  let button = document.createElement("button");
		  button.id='button'+i;
		  button.innerHTML = b1[i];
		  body.appendChild(button);
    button.addEventListener ("click", function() 
    {
			document.getElementById("four").innerHTML="Formed Sentence";
			document.getElementById("fourr").innerHTML="(after selecting words):";
		    document.getElementById("five").innerHTML+=this.innerHTML+" ";
		    this.style.visibility="hidden";
		    count++;
		    if (count>0) 
		     {
		     	document.getElementById("eleven").style.visibility="visible";
		     }
		    if (count==b1.length||count==2*b1.length||count==3*b1.length||count==4*b1.length||count==5*b1.length||count==6*b1.length||count==7*b1.length||count==8*b1.length) 
		     {
		     	document.getElementById("seven").style.visibility="visible";
		     }
	});		
}
}
else
{
	document.getElementById("one").innerHTML=""
	document.getElementById("two").innerHTML=""
	document.getElementById("three").innerHTML=""
}
}
function revert()

{

	for(i=0;i<a1.length;i++)
	{
	  if(document.getElementById('button'+i).style.visibility=="hidden")
	  
	  	document.getElementById('button'+i).style.visibility="visible";
	  	document.getElementById('four').innerHTML="";
	  	document.getElementById("fourr").innerHTML="";
		document.getElementById('five').innerHTML="";
		document.getElementById('six').style.visibility="hidden";
				document.getElementById('eleven').style.visibility="hidden";

		document.getElementById('seven').style.visibility="hidden";
		document.getElementById("eight").innerHTML="";
		document.getElementById('nine').innerHTML="";
}
}
function reverty()

{

	for(i=0;i<b1.length;i++)
	{
	  if(document.getElementById('button'+i).style.visibility=="hidden")
	  
	  	document.getElementById('button'+i).style.visibility="visible";
	  	document.getElementById('four').innerHTML="";
	  	document.getElementById("fourr").innerHTML="";
		document.getElementById('five').innerHTML="";
		document.getElementById('six').style.visibility="hidden";
				document.getElementById('eleven').style.visibility="hidden";

		document.getElementById('seven').style.visibility="hidden";
		document.getElementById("eight").innerHTML="";
		document.getElementById('nine').innerHTML="";
}
}
