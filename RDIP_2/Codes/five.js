﻿var englishsentences = ['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday.','She decorated the cake carefully.','Mary wore a dress with polka dots.'];
var hindisentences   = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];
var hindianswers = [["Noun","Postposition","Noun","Postposition","Postposition","Noun","Verb"],["Adjective","Noun","Noun","Adverb","Verb"],["Noun","Postposition","Noun","Adjective","Verb","Verb"],["Interjection","Pronoun","Adjective","Verb"],["Noun","Postposition","Noun","Verb","Verb"]];
function partselect(id, value){
    if(id==='partzero') partVal[0]=value; else if(id==='partone') partVal[1]=value; else if(id==='parttwo') partVal[2]=value; else if(id==='partthree') partVal[3]=value; else if(id==='partfour') partVal[4]=value; else if(id==='partfive') partVal[5]=value; else if(id==='partsix') partVal[6]=value;
}function tab(){
    show = "",partVal=[],enganswers=[],fabb=0;
    document.getElementById("inp").innerHTML = "<i>Select the POS tag for corresponding words</i>";
    document.getElementById('getbutton').innerHTML = "";    
    if(document.getElementById("englishh").selected){
    if(document.getElementById("one").selected) show=englishsentences[0];
    else if(document.getElementById("two").selected) show=englishsentences[1];
    else if(document.getElementById("three").selected) show=englishsentences[2];
    else if(document.getElementById("four").selected) show=englishsentences[3];
    else if(document.getElementById("five").selected) show=englishsentences[4];
    show=show.replace(".","");
    partdrop = "<option id='part1' value='Noun'>Noun</option><option id='part2' value='Pronoun'>Pronoun</option><option id='part3' value='Verb'>Verb</option><option id='part4' value='Adjective'>Adjective</option><option id='part5' value='Adverb'>Adverb</option><option id='part6' value='Determiner'>Determiner</option><option id='part7' value='Preposition'>Preposition</option><option id='part8' value='Conjunction'>Conjunction</option><option id='part9' value='Interjection'>Interjection</option>";}
    else if(document.getElementById("hindii").selected){
    if(document.getElementById("one").selected){
        show=hindisentences[0];
        index=0;}
    else if(document.getElementById("two").selected){
        show=hindisentences[1];
        index=1;}
    else if(document.getElementById("three").selected){
        show=hindisentences[2];
        index=2;}
    else if(document.getElementById("four").selected){
        show=hindisentences[3];
        index=3;}
    else if(document.getElementById("five").selected){
        show=hindisentences[4];
        index=4;}
    show=show.replace("।","");
    partdrop = "<option id='part1' value='Noun'>Noun</option><option id='part2' value='Pronoun'>Pronoun</option><option id='part3' value='Verb'>Verb</option><option id='part4' value='Adjective'>Adjective</option><option id='part5' value='Adverb'>Adverb</option><option id='part6' value='Postposition'>Postposition</option><option id='part7' value='Conjunction'>Conjunction</option><option id='part8' value='Interjection'>Interjection</option>";}
    show=show.split(" ");
    var colum="<tr id='tablerow' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
    for(var i = 0; i < show.length; i++){
        colum = colum +"<tr id='id"+i+"'><td>"+show[i]+"</td><td><select id='partdropdown"+i+"' class='partdropdown' onchange='partselect(this.id,this.value)'>"+partdrop+"</select></td><td id='image"+i+"'></td><td id='answer"+i+"'></td></tr>";
            partVal[i]="Noun";}
    document.getElementById("out").innerHTML = colum.trim();
        document.getElementById('submitbutton').innerHTML = "<button onclick='findout()'>Submit</button>";
}function check(){
    var answerid = ['answer0','answer1','answer2','answer3','answer4','answer5','answer6'];
    if(document.getElementById('englishh').selected){
    for(var i = 0; i < show.length; i++)
        document.getElementById(answerid[i]).innerHTML=enganswers[i];}
    else if(document.getElementById('hindii').selected){
    for(var i = 0; i < show.length; i++)
        document.getElementById(answerid[i]).innerHTML = hindianswers[index][i];}
    document.getElementById('getbutton').innerHTML = '<button onclick="uncheck()">Hide Answer</button>'
}function uncheck() {
    var answerid = ['answer0','answer1','answer2','answer3','answer4','answer5','answer6'];
    for(var i = 0; i < show.length; i++)
        document.getElementById(answerid[i]).innerHTML="";
    document.getElementById('getbutton').innerHTML = '<button onclick="check()">Get Answer</button>'}
    var pos = require('pos');
var words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.'); 
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);}
var show="", partdrop, partVal,enganswers=[],index,fabb=0;
function selection(){
    if(document.getElementById("default").selected)
        alert("Select a Language");
    else{partVal=[];        
        document.getElementById("dropthree").innerHTML = "<select id='droptwo' onchange='tab()'><option id='defaultone' value='Select a sentence'>---Select a sentence---</option><option id='one'></option><option id='two'></option><option id='three'></option><option id='four'></option><option id='five'></option></select>";
        document.getElementById("inp").innerHTML = "";
        document.getElementById("out").innerHTML = "";
        document.getElementById("submitbutton").innerHTML = "";
        document.getElementById('getbutton').innerHTML = "";
        if(document.getElementById("englishh").selected){
            document.getElementById("one").innerHTML   = englishsentences[0];
            document.getElementById("two").innerHTML   = englishsentences[1];
            document.getElementById("three").innerHTML = englishsentences[2];
            document.getElementById("four").innerHTML  = englishsentences[3];
            document.getElementById("five").innerHTML  = englishsentences[4];}
        else if(document.getElementById("hindii").selected){
            document.getElementById("one").innerHTML   = hindisentences[0];
            document.getElementById("two").innerHTML   = hindisentences[1];
            document.getElementById("three").innerHTML = hindisentences[2];
            document.getElementById("four").innerHTML  = hindisentences[3];
            document.getElementById("five").innerHTML  = hindisentences[4];}}}
function findout() {
    var imagee = ['image0','image1','image2','image3','image4','image5','image6'];
    if(document.getElementById('englishh').selected){
    for(var i=0;i<show.length;i++)
    {   var ment=nlp(show[i]);
        if((ment.nouns().text())!="") enganswers[i]="Noun"; else if((ment.pronouns().text())!="") enganswers[i]="Pronoun"; else if((ment.verbs().text())!="") enganswers[i]="Verb"; else if((ment.adjectives().text())!="") enganswers[i]="Adjective"; else if((ment.adverbs().text())!="") enganswers[i]="Adverb"; else if((ment.prepositions().text())!="") enganswers[i]="Preposition"; else if((ment.conjunctions().text())!="") enganswers[i]="Conjunction"; else enganswers[i]="Determiner"; console.log(enganswers);}
    for(var i=0;i<show.length;i++){
        if(partVal[i]==enganswers[i])
            document.getElementById(imagee[i]).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/right.png" width="30" height="30">';
        else{ fabb=1;
            document.getElementById(imagee[i]).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/wrong.png" width="30" height="30">';}}}
    else if(document.getElementById('hindii').selected){
        for(var i = 0; i < show.length; i++){
            if(partVal[i]==hindianswers[index][i])
                document.getElementById(imagee[i]).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/right.png" width="30" height="30">';
            else{ fabb=1;
                document.getElementById(imagee[i]).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/wrong.png" width="30" height="30">';}}}
            if( fabb==1)
                document.getElementById('getbutton').innerHTML = '<button onclick="check()">Get Answer</button>';} 