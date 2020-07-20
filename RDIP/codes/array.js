//arrays of English correct sentences
var eng=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
		["some students like to study in the night","at night some students like to study"],
		["John and Mary went to church","Mary and John went to church"],
		["John went to church after eating","after eating John went to church","John after eating went to church"],
		["did he go to market","he did go to market"],
		["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
		["John goes to the library and studies","John studies and goes to the library"],
		["John ate an apple so did she","she ate an apple so did John"],
		["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
		["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"  ,"yesterday I bought a book that I told her"]]
var Englishsentences=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]
//arrays of Hindi correct sentences
var hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
			["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
			["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
			["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
			["बिल्लियों को मारकर कुत्ता सो गया" ,"मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
			["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
			["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var Hindisentences=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया" ,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]

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



function revert(){
  for(i=0;i<a1.length;i++){
    if(document.getElementById("button"+i).style.visibility=="hidden"){
   document.getElementById("button"+i).style.visibility="visible";
    document.getElementById("four").innerHTML=""
    document.getElementById("fourr").innerHTML=""
    document.getElementById("five").innerHTML=""
    document.getElementById("eight").innerHTML=""
    document.getElementById("eightt").innerHTML=""
    document.getElementById("nine").innerHTML=""
    document.getElementById("six").style.visibility="hidden"
    document.getElementById("sixx").style.visibility="hidden";
    document.getElementById("seven").style.visibility="hidden"  
    document.getElementById("ten").style.visibility="hidden"; 
}
}
}

function reverty(){
  for(i=0;i<b1.length;i++){
    if(document.getElementById("button"+i).style.visibility=="hidden"){
    document.getElementById("button"+i).style.visibility="visible";
    document.getElementById("four").innerHTML=""
    document.getElementById("fourr").innerHTML=""
    document.getElementById("five").innerHTML=""
    document.getElementById("eight").innerHTML=""
    document.getElementById("eightt").innerHTML=""
    document.getElementById("nine").innerHTML=""
    document.getElementById("six").style.visibility="hidden"
    document.getElementById("sixx").style.visibility="hidden";
    document.getElementById("seven").style.visibility="hidden"  
    document.getElementById("ten").style.visibility="hidden"; 
}
}
}

function findout(){
  var x=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');
  o=0;
  t=0;
  if(document.getElementById("eng").selected){
  for(i=0;i<Englishsentences.length;i++){
    for(j=0;j<eng[i].length;j++){
      if(x==eng[i][j]){
        o++;
      }}}
if(o==1){
      document.getElementById("eight").innerHTML="Right answer!!!";
}
else{
      document.getElementById("eightt").innerHTML="Wrong answer!!!";
      document.getElementById("ten").style.visibility="visible";
}
}
 else if(document.getElementById("hin").selected){
  for(i=0;i<Hindisentences.length;i++){
    for(j=0;j<hindi[i].length;j++){
      if(x==hindi[i][j]){   
        t++;
      }}}
if(t==1){
      document.getElementById("eight").innerHTML="Right answer!!!"
}
else{
      document.getElementById("eightt").innerHTML="Wrong answer!!!"
      document.getElementById("ten").style.visibility="visible";
}}}
function toggle(){
p=Englishsentences.indexOf(x);u=eng[p];q=Hindisentences.indexOf(y);v=hindi[q];
if(document.getElementById("eng").selected){
    if(document.getElementById("ten").innerHTML=="Get Correct Sentence"){
       for(i=0;i<u.length;i++){ 
   document.getElementById("nine").innerHTML+=u[i]+"<br>";
   document.getElementById("ten").innerHTML="Hide the correct Sentence" ;
} 
}
else if(document.getElementById("ten").innerHTML=="Hide the correct Sentence"){
   document.getElementById("nine").innerHTML="";
   document.getElementById("ten").innerHTML="Get Answers";
}
else if(document.getElementById("ten").innerHTML=="Get Answers"){
       for(i=0;i<u.length;i++){ 
   document.getElementById("nine").innerHTML+=u[i]+"<br>";
   document.getElementById("ten").innerHTML="Hide the correct Sentence" ;
} 
}
}
else if(document.getElementById("hin").selected){ 
    if(document.getElementById("ten").innerHTML=="Get Correct Sentence"){
       for(i=0;i<v.length;i++){ 
   document.getElementById("nine").innerHTML+=v[i]+"<br>";
   document.getElementById("ten").innerHTML="Hide the correct Sentence" ;
} 
}
else if(document.getElementById("ten").innerHTML=="Hide the correct Sentence"){  
   document.getElementById("nine").innerHTML="";
   document.getElementById("ten").innerHTML="Get Answers";
}
else if(document.getElementById("ten").innerHTML=="Get Answers"){
  for(i=0;i<v.length;i++){
   document.getElementById("nine").innerHTML+=[i]+"<br>";
   document.getElementById("ten").innerHTML="Hide the correct Sentence" ;
}}}}
function funct()
{
    y=Hindisentences[Math.floor(Math.random() * Hindisentences.length)];
    b1=y.split(" ");
    x=Englishsentences[Math.floor(Math.random() * Englishsentences.length)];
a1=x.split(" ");
count=0;
  document.getElementById("three").innerHTML=""
  document.getElementById("five").innerHTML=""
  document.getElementById("four").innerHTML=""
  document.getElementById("fourr").innerHTML=" "
  document.getElementById("eight").innerHTML=""
  document.getElementById("eight").innerHTML=""
  document.getElementById("nine").innerHTML=""
  document.getElementById("ten").innerHTML="Get Correct Sentence";
  document.getElementById("six").style.visibility="hidden";
  document.getElementById("sixx").style.visibility="hidden";
  document.getElementById("seven").style.visibility="hidden"
  document.getElementById("ten").style.visibility="hidden";
if(document.getElementById("eng").selected)
{
  document.getElementById("one").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
  document.getElementById("two").innerHTML="(select the buttons in proper order)";
  let body = document.getElementsByTagName("span")[0];
  for(i=0;i<a1.length;i++)
{
  j=Math.floor(Math.random()*a1.length)
  a2=a1[i];a1[i]=a1[j];a1[j]=a2;
}

for(i=0;i<a1.length;i++)
{
     let button = document.createElement("button");
     button.id='button'+i;
     button.innerHTML = a1[i]
     body.appendChild(button); 
button.addEventListener ("click", function() {
  document.getElementById("four").innerHTML="Formed Sentence";
  document.getElementById("fourr").innerHTML="(after selecting words):";
    document.getElementById("five").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;
 
    if (count>0 ) 
     {
      document.getElementById("six").style.visibility="visible";
     }
     var v=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
     if(a1.length==v1.length)
     {
      document.getElementById("seven").style.visibility="visible";
     }
});
}
}
else if (document.getElementById("hin").selected) 
{ 
  document.getElementById("one").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
  document.getElementById("two").innerHTML="(select the buttons in proper order)";
  let body = document.getElementsByTagName("span")[0];
  for(i=0;i<b1.length;i++)
{
  j=Math.floor(Math.random()*b1.length)
  a2=b1[i];b1[i]=b1[j];b1[j]=a2;
}
for(i=0;i<b1.length;i++)
{
     let button = document.createElement("button");
     button.id='button'+i
  button.innerHTML = b1[i]
  body.appendChild(button)

button.addEventListener ("click", function() {
  document.getElementById("four").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("five").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;
    if (count>0) 
     {
      document.getElementById("sixx").style.visibility="visible";
     }
      var v=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
    if (b1.length==v1.length) 
     {
      document.getElementById("seven").style.visibility="visible";
     }
});

}
}
else
{
	  alert("Select a language");
  document.getElementById("one").innerHTML=""
  document.getElementById("two").innerHTML=""
  document.getElementById("three").innerHTML=""
}
}