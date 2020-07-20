//arrays of English correct sentences
var sent   = new Array( );
sent[0]    = ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"]
sent[1]    = ["some students like to study in the night", "at night some students like to study"]
sent[2]    = ["John and Mary went to church", "Mary and John went to church"]
sent[3]    = ["John went to church after eating", "after eating John went to church", "John after eating went to church"]
sent[4]    = ["did he go to market", "he did go to market"]
sent[5]    = ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
sent[6]    = ["John goes to the library and studies", "John studies and goes to the library"]
sent[7]    = ["John ate an apple so did she", "she ate an apple so did John"]
sent[8]    = ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
sent[9]    = ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]

//arrays of Hindi correct sentences
var sent1  =  new Array( );
sent1[0]   =["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"]
sent1[1]   =["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"]
sent1[2]   =["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"]
sent1[3]   =["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"]
sent1[4]   =["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर"	, "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"]
sent1[5]   =["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"]
sent1[6]   =["एक बड़ी सी किताब वहाँ है	", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", " है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"] 


function randomize(mixed){
	var club = mixed.split(" ");
	var i = club.length, temp, rand;
	while(0!==i)
	{
		rand = Math.floor(Math.random()*i);
		i = i-1;
		temp = club[i];
		club[i] = club[rand];
		club[rand] = temp;
	}
	return club;
}

var resultsentence ="";
function selected_words(id,value){

	document.getElementById("four").innerHTML = "Formed Sentence ";
	document.getElementById("fourr").innerHTML="(after selecting words):";
							resultsentence += value + " ";
	 document.getElementById("five").innerHTML = resultsentence;
	document.getElementById(id).style.display = "none";
	document.getElementById("six").innerHTML = "<button id='seven' onclick='funboi(); funct();'>Re-form the sentence</button>"
}

function funboi()
{
  document.getElementById("five").remove();
  
}

function funct()
{
if(document.getElementById("english").selected)
{
	document.getElementById("one").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
	document.getElementById("two").innerHTML="(select the buttons in proper order)"
		var r = Math.floor(Math.random()* sent.length);
		var mixed = sent[r][0];
		var j = randomize(mixed);
		var but ="";
		var res = "";
		for(i=0;i<=j.length-1;i++)
		{
			val = j[i];
			but = "<button id='btn"+i+"'onclick='selected_words(this.id,this.value)' value='"+val+"'>"+val+"  </button> ";
			res = res+ but;
		}
		three.innerHTML = res.trim();
}
else if (document.getElementById("hindi").selected) 
{
	document.getElementById("one").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
	document.getElementById("two").innerHTML="(select the buttons in proper order)";

	 var r = Math.floor(Math.random()* sent1.length);
		var mixed = sent1[r][0];
		var j = randomize(mixed);
		var but ="";
		var res = "";
		for(i=0;i<=j.length-1;i++)
		{
			val = j[i];
			but = "<button id='btn"+i+"' onclick='selected_words(this.id,this.value)' value='"+val+"'>"+val+"</button> &nbsp;&nbsp;";
			res = res+but;
		}
		three.innerHTML = res.trim();
}
else
{
	document.getElementById("one").innerHTML=""
	document.getElementById("two").innerHTML=""
	document.getElementById("three").innerHTML=""
	alert("Choose a language!");
}
}