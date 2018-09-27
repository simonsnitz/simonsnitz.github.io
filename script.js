var timesCompleted = 0;
var ajaxCounter = 0;

  //Animate function
  function animate(elem,style,unit,from,to,time) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
  }


window.onload = function() {


/*
    1) switch iframe "StudyGuide" reference when click on side menu settings
    6) Add pics to right side of studyGuide section
    7) Add relevant properties/objectSets for questions section
    (maybe fixed?) 8) Fix font-size adjust when re-sizing window (change fonts)
    (maybe fixed?) 9) Fix "undefined" in multiple choice options in test
    10) add more settings
*/

/*
document.body.onkeydown = function(e){
  var nav = document.getElementById('scrollLeft');
  var nav2 = document.getElementById('scrollLeft2');
  //separate onscroll function. remove fixed class from all sections when toggle to questions. Run function when toggle back to review section.
    if(e.keyCode === 191){
      if(document.body.scrollTop == 0){
      window.scrollTo(0,1000);
      }
      else{
        window.scrollTo(0,0);
      }
    }
};
*/

    //yAAs! when resize page it stays on either Test or Reveiw section
window.addEventListener('resize', function(){
  if(document.body.scrollTop == 0){
      window.scrollTo(0,0);
      }
      else{
        window.scrollTo(0,1000);
      }
});



/* inserted
var K1 = { name: 'Metformin', usedFor: 'Diabetes', MoA: 'Activates AMP Kinase', sideEffect: 'GI irritation', brand:'Glucophage'};
window.K2 = { name: 'Acetaminophen', usedFor: 'Systemic Inflammation', MoA: 'Inhibits COX-2', sideEffect: 'Liver toxicity', brand:'Tylenol'};
window.K3 = { name: 'Fluticasone', usedFor: 'Asthma', MoA: 'Glucocorticoid receptor agonist', sideEffect: 'Depressed immune system', brand:'Flonase'};
window.K4 = { name: 'Azithromycin', usedFor: 'Bacterial Infections', MoA: 'Blocks protein synthesis', sideEffect: 'Upset Stomach', brand:'Zithromax'};
window.K5 = { name: 'Levothyroxine', usedFor: 'Hypothyroidism', MoA: 'Mimics natural thyroxine-4', sideEffect: 'Hyperthyroidism', brand:'Synthroid'};
window.K6 = { name: 'Citalopram', usedFor: 'Depression', MoA: 'Selective Serotonin Reuptake Inhibitor', sideEffect: 'Drowniness and weight gain',brand:'Celexa'};
window.K7 = { name: 'Prednisone', usedFor: 'Inflammation and autoimmune diseases', MoA: 'Glucocorticoid receptor agonist', sideEffect: 'High blood glucose', brand:'Deltasone'};
window.K8 = { name: 'Atorvastatin', usedFor: 'High cholesterol', MoA: 'HMG-CoA reductase inhibitor', sideEffect: 'High blood glucose', brand:'Lipitor'};
window.K9 = { name: 'Diazepam', usedFor: 'Anxiety', MoA: 'Increases effectiveness of GABA', sideEffect: 'Confusion and anterograde amnesia', brand:'Valium'};
window.K10 = { name: 'Lisinopril', usedFor: 'High blood pressure', MoA: 'ACE inhibitor', sideEffect: 'Hypotension and dizziness', brand:'Zestril'};
*/

// /*
window.drugOne = [
  {"name": "alanine", "codons": "GCT, GCC, GCA, GCG"},
  {"name": "valine", "codons": "GTT, GTC, GTA, GTG"},
  {"name": "leucine", "codons": "CTT, CTC, CTA, CTG, TTA, TTG"},
  {"name": "isoleucine", "codons": "ATT, ATC, ATA"},
  {"name": "methionine", "codons": "ATG"},
  {"name": "glycine", "codons": "GGT, GGC, GGA, GGG"}
  ];
  
window.drugTwo = [
  {"name": "Proline", "codons": "CCT, CCC, CCA, CCG"},
  {"name": "Cysteine", "codons": "TGT, TGC"},
  {"name": "Serine", "codons": "TCT, TCC, TCA, TCG, AGT, AGC"},
  {"name": "Threonine", "codons": "ACT, ACC, ACA, ACG"},
  {"name": "Asparagine", "codons": "AAT, AAC"},
  {"name": "Glutamine", "codons": "CAA, CAG"}
  ];

window.drugThree = [
  {"name": "Phenylalanine", "codons": "TTT, TTC"},
  {"name": "Tyrosine", "codons": "TAT, TAC"},
  {"name": "Histidine", "codons": "CAT, CAC"},
  {"name": "Tryptophan", "codons": "TGG"},
  {"name": "Glutamate", "codons": "GAA, GAG"},
  {"name": "Aspartate", "codons": "GAT, GAC"},
  {"name": "Lysine", "codons": "AAA, AAG"},
  {"name": "Arginine", "codons": "CGT, CGC, CGA, CGG, AGA, AGG"}
  ];
 /*
window.drugOne = [ {"name": "Pics/R01.gif", "substrate": "Glucose 1-phospate", "product": "Glucose 6-phosphate", "enzyme": "Phosphoglucomutase"},
  {"name": "Pics/R02.gif", "substrate": "Glucose 6-phosphate", "product": "Fructose 6-phosphate", "enzyme": "Glucose-6-phosphate isomerase"},
  {"name": "Pics/R03.gif", "substrate": "Fructose 6-phosphate", "product": "Fructose 1,6-bisphosphate", "enzyme": "6-phosphofructokinase 1"},
  {"name": "Pics/R04.gif", "substrate": "Fructose 1,6-bisphosphate", "product": "Glycerone phosphate + Glyceraldehyde 3-phosphate", "enzyme": "Fructose-bisphosphate aldolase"},
  {"name": "Pics/R05.gif", "substrate": "Glyceraldehyde 3-phosphate", "product": "Glycerone phosphate", "enzyme": "Triosephosphate isomerase"},
  {"name": "Pics/R06.gif", "substrate": "Glyceraldehyde 3-phosphate", "product": "3-Phosphoglyceroyl phosphate", "enzyme": "Glyceraldehyde 3-phosphate dehydrogenase"},
  {"name": "Pics/R07.gif", "substrate": "3-Phospho-D-glycerate", "product": "3-Phosphoglyceroyl phosphate", "enzyme": "phosphoglycerate kinase"},
  {"name": "Pics/R08.gif", "substrate": "2-Phospho-D-glycerate", "product": "3-Phospho-D-glycerate", "enzyme": "Phosphoglycerate mutase"},
  {"name": "Pics/R09.gif", "substrate": "2-Phospho-D-glycerate", "product": "Phosphoenolpyruvate", "enzyme": "Enolase"},
  {"name": "Pics/R10.gif", "substrate": "Pyruvate", "product": "Phosphoenolpyruvate", "enzyme": "Pyruvate kinase"}
 ],

 [ {"name": "Pics/R01.gif", "substrate": "Glucose 1-phospate", "product": "Glucose 6-phosphate", "enzyme": "Phosphoglucomutase"}
 ];
 */
    window.drugDrug = [drugOne, drugTwo, drugThree];
    window.propertyStuff = ["Name", "Codons"];
    //window.propertyStuff = ["Name","Substrate", "Product", "Enyzme"];
    window.objectSetNames = ["Nonpolar", "Polar uncharged", "Charged, Aromatics"];
    //window.objectSetNames = ["Glycolysis","Krebs Cycle","Pentose Phosphate Pathway","Gluconeogenesis"];
    window.propDesc = ["Codons"];
    //window.propDesc = ["Substrate", "Product", "Enyzme"];
    window.proop = ["codons"];
    //window.proop = ["substrate","product","enzyme"];



 // animate(document.getElementById('firstPage'),"opacity","",0,1,1400);    fading in first page makes it look glitchy

/*
function getStuff(url){
var xhr = new XMLHttpRequest();
xhr.open('GET',encodeURI(url));
xhr.onload = function(){
  if(xhr.status === 200){
    var thisArray = JSON.parse(xhr.responseText);
    window.drugOne = thisArray[0][0];
    window.drugDrug = [drugOne];
    window.propertyStuff = thisArray[1];
    window.objectSetNames = thisArray[2];
    window.propDesc = thisArray[3];
    window.proop = thisArray[4];
    thenLoadThis();
  }
};
xhr.send();
}

//whait, i don't have to declare var firstSet =document.getElementById('firstSet')????
firstSet.onclick = function(){
  getStuff('http://127.0.0.1:8887/carbohydrateMetabolism.txt');
  //document.getElementById('sidePart').style.width = '99.8vw';
  //animate(document.getElementById('main'),"opacity","",1,0,400);
}
secondSet.onclick = function(){
  getStuff('http://127.0.0.1:8887/lipidMetabolism.txt');
  //animate(document.getElementById('firstPage'),"opacity","",1,0,400);
}
thirdSet.onclick = function(){
  getStuff('http://127.0.0.1:8887/aminoAcidMetabolism.txt');
  //animate(document.getElementById('firstPage'),"opacity","",1,0,400);
}
fourthSet.onclick = function(){
  getStuff('http://127.0.0.1:8887/nucleotideMetabolism.txt');
  //animate(document.getElementById('firstPage'),"opacity","",1,0,400);
}
*/

                                                                                //function thenLoadThis(){
  /*
//insert
window.propertyStuff = ["Amino Acid",'Codon'];

//var objectSetNames = ['Set One','Antibiotics','Cancer Drugs','Anti-inflammatory','Lipid Lowering Drugs'];
var objectSetNames = ['Amino Acids'];

//for setting the propertiz variable for creating questions
  //window.propDesc = ['Is Treated with ...', 'Is the Mechanism of Action for ...', 'Is a Side Effect of ...','Is the brand name for ...']
  window.propDesc = ['Is the codon for ...'];
  
      //for creating cheatsheet table and setting propertiz
  //window.proop = ['usedFor','MoA','sideEffect','brand'];
  window.proop = ['usedFor'];
//end insert
*/
  
  
  ajaxCounter += 1;
var propertyGreen = new Array();
for(i=0;i<propertyStuff.length-1;i++){
  propertyGreen[i] = "propStyle"+(i+1);
}

window.innerPropertyGreen = new Array();
for(i=0;i<propertyStuff.length-1;i++){
  innerPropertyGreen[i] = "property"+(i+1);
}
var propertyBlue = new Array();
for(i=0;i<objectSetNames.length;i++){
  propertyBlue[i] = "classStyle"+(i+1);
}
window.innerPropertyBlue = new Array();
for(i=0;i<objectSetNames.length;i++){
  innerPropertyBlue[i] = "class"+(i+1);
}


//needs to be up here I guess.
 //toggle value and color of 'ask Property vs Object' setting
var askP = document.getElementById('askP');
var askO = document.getElementById('askO');
function askClick(one,two){
  if (one.checked == true){
    one.checked = false;
    one.parentNode.style.backgroundColor='white';
    two.checked = true;
    two.parentElement.style.backgroundColor='#E5BDFC';
  }
  else{
    two.checked = false;
    two.parentNode.style.backgroundColor='white';
    one.checked = true;
    one.parentElement.style.backgroundColor='#E5BDFC';
  }
}
document.getElementById('askPdiv').addEventListener('click',function() {askClick(askO,askP);},false);
document.getElementById('askOdiv').addEventListener('click',function() {askClick(askP,askO);},false);





    //removes property and Object set divs, before new ones are added.
  if(ajaxCounter>0){
    var myNode1 = document.getElementById("bottomProp");
    var myNode2 = document.getElementById("section1");
    while (myNode1.firstChild) {
      myNode1.removeChild(myNode1.firstChild);}
    while (myNode2.firstChild) {
      myNode2.removeChild(myNode2.firstChild);}
  }


  //used to create and insert html for new properties
function newProperty(divID,classID,checkID,divName,insertDiv){
    var newProp = document.createElement("div");
    newProp.id = divID;
    newProp.className = classID;
    newProp.innerHTML = "<input id="+checkID+" type='checkbox' name=''><br>"+divName;
    document.getElementById(insertDiv).appendChild(newProp);
  }
    //Creates green property box options, and sets first one to checked and green
for (i=0;i<propertyGreen.length;i++){
  newProperty(propertyGreen[i],'propStyleX',innerPropertyGreen[i],propertyStuff[i+1],'bottomProp');
}
  document.getElementById(innerPropertyGreen[0]).checked = true;
  document.getElementById(propertyGreen[0]).style.backgroundColor = '#99FFBE';
    //Creates blue Object Set box options, and sets first one to checked and blue
for (i=0;i<propertyBlue.length;i++){
  newProperty(propertyBlue[i],'propStyle',innerPropertyBlue[i],objectSetNames[i],'section1');
}
  document.getElementById(innerPropertyBlue[0]).checked = true;
  document.getElementById(propertyBlue[0]).style.backgroundColor = '#BDEEFF';
  

//needs to be included at the end of every variable set, unfortunately
//used to make selected property and object sets change color on click
    function makeGreen2(fish,cow) {
    if(document.getElementById(fish).style.backgroundColor!='#99FFBE' && document.getElementById(cow).checked === false){
      document.getElementById(fish).style.backgroundColor='#99FFBE';
      document.getElementById(cow).checked = true;
    }
    else {
      document.getElementById(fish).style.backgroundColor='white';
      document.getElementById(cow).checked = false;
    }
  }
  function makeGreen3(fish,cow) {
    if(document.getElementById(fish).style.backgroundColor!='#BDEEFF' && document.getElementById(cow).checked === false){
      document.getElementById(fish).style.backgroundColor='#BDEEFF';
      document.getElementById(cow).checked = true;
    }
    else {
      document.getElementById(fish).style.backgroundColor='white';
      document.getElementById(cow).checked = false;
    }
  }
for (i=0;i<propertyGreen.length;i++){
    (function(i){
      document.getElementById(propertyGreen[i]).addEventListener('click',function() {makeGreen2(propertyGreen[i],innerPropertyGreen[i]);},false);
     })(i)
  }
for (i=0;i<propertyBlue.length;i++){
    (function(i){
      document.getElementById(propertyBlue[i]).addEventListener('click',function() {makeGreen3(propertyBlue[i],innerPropertyBlue[i]);},false);
     })(i)
  }
}



//} //end of first page functions


function onceClicked() {
  if (timesCompleted == 0){
  animate(document.getElementById('firstPage'),"opacity","",1,0,800);
  }
  
  document.getElementById('submitButton').style.boxShadow = "0px 0px 0px";
  document.getElementById('submitButton').style.top = '6px';
    //Optional object 'sets' to be added  (can probably compile drug variable and name into one object)

  var drugSelection = [];
  for (i=0;i<innerPropertyBlue.length;i++){
    if (document.getElementById(innerPropertyBlue[i]).checked === true){
      drugSelection = drugSelection.concat(drugDrug[i]);
    }
  }

    //Selection of properties to be tested on
    
        //Creates array with numbers 0 to # of properties to be tested
  var propertySelection = [];
  var propertyIdNumber = new Array();
      for (i=0;i<innerPropertyGreen.length;i++) {
          propertyIdNumber[i] = i;
      }
  for (i=0;i<innerPropertyGreen.length;i++){
    if (document.getElementById(innerPropertyGreen[i]).checked === true){
      propertySelection.push(propertyIdNumber[i]);
    }
  };
    //Requires user to select at least one property and at least one object set
  if (propertySelection.length === 0 || drugSelection.length === 0) {
      alert('Must select at least one property and objec :/');
      window.location.reload();
  };

    //Load Javascript for questions page
 loadThis(drugSelection,propertySelection);

    //Fade options page out and questions page in
          //use this if I want to change back to CSS animation
  //document.getElementById('firstPage').className += " changeClass";
  
  setTimeout('document.getElementById("outside").style.display = "block";',50);
  setTimeout('document.getElementById("outside").style.opacity = "1";', 1000);
};
 
 
  //Javascript for Questions page
function loadThis(drugList,propSelect) {

      //Sets properties to be used in questions
  var selectedProperties = propSelect;
      //Sets drugs to be used in questions
  var drugs = drugList;
 
  //shortcut
    var modal = document.getElementById('myModal');
    var modalContent = document.getElementById('modal-content');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var beatGame = document.getElementById('beatGame');
    var otherOption = document.getElementById('otherOption');
    var pathwayMap = document.getElementById('pathwayMap');
    var table = document.getElementById("cheatsheetTable");


    //With this, once you click on the 'beat game' div it fades in (glitch), bc of the animated opacity. Could turn this into its own function without the click, but for some reason the function will only work in click format. Get to work as function alone somehow.
btn.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1";
    
    animate(modalContent,"opacity","",0,1,400);
    beatGame.style.opacity = '0';
    modalContent.style.display = 'block';
    pathwayMap.style.display='none';
    beatGame.style.display='none';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    setTimeout('document.getElementById("myModal").style.display = "none";',200);
    setTimeout('document.getElementById("modalContent").style.opacity = "0";',200);
    animate(modal,"opacity","",1,0,200);
}
 
// When the user clicks anywhere outside of the modal, close it  will consider removing this cause if beat game then click outside it'll undo.
window.onclick = function(event) {
    if (event.target == modal) {
        span.click();
    }
}

beatGame.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1";
    
    pathwayMap.style.display='none';
    beatGame.style.display='block';
    animate(beatGame,"opacity","",0,1,400);
    modalContent.style.display = "none";
}
closeBeatGame.onclick = function() {
    setTimeout('document.getElementById("myModal").style.display = "none";',200);
    setTimeout('document.getElementById("beatGame").style.opacity = "0";',200);
    animate(modal,"opacity","",1,0,200);
    
    bar.style.width = '0%';
    tableFormingCounter = 1;
    timesCompleted += 1;
    onceClicked();
}
  

    //For setting the correct answer in a random option slot
  var correctDrugOrder = ['drug1', 'drug2', 'drug3', 'drug4'];
  var checkDrug = ['drug11', 'drug12', 'drug13', 'drug14'];
  var checkDrug2 = ['drug111', 'drug222', 'drug333', 'drug444'];


    //Create Array with numbers 0 to # of drugs
  var pickDrug = new Array();
  for (i=0;i<drugs.length;i++) {
    pickDrug[i] = i;
  }


        //For making the cheatsheet table
    //Makes title row
    for (i=0;i<propertyStuff.length;i++){
      document.getElementById("propertyRow").insertCell(i).innerHTML = '<b>'+ propertyStuff[i] +'</b>';
    }
    
    var someArray = ['name'];
    for(i=1;i<propertyStuff.length;i++){
      someArray[i] = proop[i-1];
    }
    for (i=1;i<drugList.length+1;i++){
      var row = table.insertRow(i);
      for(k=0;k<propertyStuff.length;k++){
        row.insertCell(k).innerHTML = drugList[i-1][someArray[k]];
      }
    }



    //Creates initial question
  newQuestion(selectedProperties);

    //Shortcut and initial green bar value
  var bar = document.getElementById('greenBar');
  var widthCounter = 0;


    //Shortcut function for reducing width counter
  function reduceCounter() {
    if (widthCounter>0){
      widthCounter -= 10;
    }
  };

     //function that pulses color if you answer incorrectly
function ifWrong (fish){
  var badBoy = document.getElementById(fish);
  // -> removing the class
  badBoy.classList.remove("ifWrong");
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  badBoy.offsetWidth = badBoy.offsetWidth;
  // -> and re-adding the class
  badBoy.classList.add("ifWrong");
}

    //Key controls function
  document.body.onkeydown = function(e){
  
      //Shift key to submit. if false, shows correct description. if true, reloads page
    if(e.keyCode == 16){
        if(beatGame.style.opacity!=0 && modal.style.display=="block" && otherOption.style.backgroundColor!="white"){
          window.location.reload();
        }
        else if(beatGame.style.opacity!=0 && modal.style.display=="block" && otherOption.style.backgroundColor!="#99FFBE"){
          closeBeatGame.click();
          widthCounter=0;
        }
        
        else if(document.getElementById(checkDrug[rando20]).checked === true){
            //Animates elements to make them fade in
          var drugElements = ['description','des','drug1','drug2','drug3','drug4','drug11','drug12','drug13','drug14'];
          for(i=0;i<drugElements.length;i++){
            animate(document.getElementById(drugElements[i]),"opacity","",0,1,1000);
          }
          newQuestion(selectedProperties);
         
          widthCounter += 10;
          if (widthCounter == 100){
            beatGame.click();}
        }
        else if (document.getElementById(checkDrug[others2[0]]).checked === true){
          ifWrong(checkDrug2[others2[0]]);
          reduceCounter();
        }
        else if (document.getElementById(checkDrug[others2[1]]).checked === true){
          ifWrong(checkDrug2[others2[1]]);
          reduceCounter();
        }
        else {
          ifWrong(checkDrug2[others2[2]]);
          reduceCounter();
        }
         
          //Update width of green bar
        bar.style.width = (widthCounter) + '%';
      
    }
    
      //Left,up,down,right arrow keys select options 1,2,3, or 4.
    if(e.keyCode == 37){
      if(beatGame.style.opacity!=0 && modal.style.display=="block"){
        document.getElementById('closeBeatGame').style.backgroundColor='#99FFBE';
        document.getElementById('otherOption').style.backgroundColor='white';
      }
      else if (modal.style.display=="block" && modalContent.style.opacity!=0){
        modalContent.style.opacity=0;
        pathwayMap.style.opacity=1;
        modalContent.style.display='none';
        pathwayMap.style.display='block';
      }
      else{
        document.getElementById('drug11').click();
        document.getElementById('drug222').style.backgroundColor='white';
        document.getElementById('drug111').style.backgroundColor='#99FFBE';
        document.getElementById('drug333').style.backgroundColor='white';
        document.getElementById('drug444').style.backgroundColor='white';
      }
    }
    
    else if(e.keyCode == 38){
        document.getElementById('drug12').click();
        document.getElementById('drug222').style.backgroundColor='#99FFBE';
        document.getElementById('drug111').style.backgroundColor='white';
        document.getElementById('drug333').style.backgroundColor='white';
        document.getElementById('drug444').style.backgroundColor='white';
    }
    else if(e.keyCode == 40){
        document.getElementById('drug13').click();
        document.getElementById('drug222').style.backgroundColor='white';
        document.getElementById('drug111').style.backgroundColor='white';
        document.getElementById('drug333').style.backgroundColor='#99FFBE';
        document.getElementById('drug444').style.backgroundColor='white';
    }
    else if(e.keyCode == 39){
      if(beatGame.style.opacity!=0 && modal.style.display=="block"){
        document.getElementById('otherOption').style.backgroundColor='#99FFBE';
        document.getElementById('closeBeatGame').style.backgroundColor='white';
      }
      else if (modal.style.display=="block" && pathwayMap.style.opacity!=0){
        pathwayMap.style.opacity=0;
        modalContent.style.opacity=1;
        pathwayMap.style.display='none';
        modalContent.style.display='block';
      }
      else{
        document.getElementById('drug14').click();
        document.getElementById('drug222').style.backgroundColor='white';
        document.getElementById('drug111').style.backgroundColor='white';
        document.getElementById('drug333').style.backgroundColor='white';
        document.getElementById('drug444').style.backgroundColor='#99FFBE';
      }
    }
    
  if(e.keyCode == 191){
      if(modal.style.display !='block'){
        btn.click();
      }
      else{
        span.click();
      }
    }
/*
    if(e.keyCode === 191){
      //if(
        //document.body.scrollTop == 0){
      window.scrollTo(0,1000);
      //}
      //else{
      //  window.scrollTo(0,0);
      //}
    }
 */
     if(e.keyCode == 13){
      if(modal.style.display !='block'){
        beatGame.click();
      }
      else{
        closeBeatGame.click();
      }
    }

  } //End key-control function


  //Shuffle array function
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
    while (0 !== currentIndex) {
       // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
        // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;}
      return array;
  }


    //Create a new question (randomize description/options)
  function newQuestion(property1){
 
      //Picks a random option slot for the answer to be placed in
    var rando2 =Math.floor((Math.random() *4));

      //Finds out which remaining slots are open
    var others = [];
    if (rando2 === 0){
      others = [1,2,3];}
    else if (rando2 == 1){
      others = [0,2,3];}
    else if (rando2 == 2){
      others = [0,1,3];}
    else {others = [0,1,2];}
    
    //Shuffle list of numbers (0 to # of drugs in bentley) 0,1,2,3,4
    shuffle(pickDrug);
    
     //Random number generator for picking random drugs and description
    var rando1 = pickDrug[0];
    var rando11 =pickDrug[1];
    var rando12 =pickDrug[2];
    var rando13 =pickDrug[3];
      //if 2 correct answers, changes repeat to next drug in list 'denoted by index drugNumCounter'
    var drugNumCounter = 4;
    
      //Creates array of drug (property, name, index) and shuffles them
    function propertizObject(pig){
      var oink = [];
      for (i=0;i<proop.length;i++){
        oink[i] = drugs[pig][proop[i]];
      }
      return oink;
    }
    
    var propertiz = {
      name: propDesc,
      prop: propertizObject(rando1),
      prop1: propertizObject(rando11),
      prop2: propertizObject(rando12),
      prop3: propertizObject(rando13),
      number: property1 };

    shuffle(propertiz.number);

      //Sets description at top and lists drug names in the options panel
    document.getElementById("description").innerHTML= propertiz.name[propertiz.number[0]];
   
/*Sets question heading*/
    
        //choose if setting object image as question heading
    //document.getElementById("des").innerHTML= "<img src=" + drugs[rando1].name + " height='100%' border='1px solid black'>";
    
      //choose if setting object name as question heading
    document.getElementById("des").innerHTML= propertiz.prop[propertiz.number[0]];
    
    
    
    document.getElementById('spaceToCenter').innerHTML = "Number of Times Completed </br></br>"+ timesCompleted;
    
    
    var goThruThis = [propertiz.prop1[propertiz.number[0]],propertiz.prop2[propertiz.number[0]],propertiz.prop3[propertiz.number[0]]];

    //Prevents showing 2 correct answers.
     //Need to have 3 while loops instead of 1 while loop within a for loop bc randoNumbers elements cant be accessed from index #s
     while (propertiz.prop1[propertiz.number[0]] == propertiz.prop[propertiz.number[0]]) {
          rando11 = pickDrug[drugNumCounter /*Math.floor((Math.random() *pickDrug.length))*/];
          drugNumCounter += drugNumCounter;
          propertiz.prop1 = [drugs[rando11].precursor,drugs[rando11].madeInto,drugs[rando11].forwardEnzyme];
          //goThruThis = [propertiz.prop1[propertiz.number[0]],propertiz.prop2[propertiz.number[0]],propertiz.prop3[propertiz.number[0]]];
        }
     while (propertiz.prop2[propertiz.number[0]] == propertiz.prop[propertiz.number[0]]) {
          rando12 = pickDrug[drugNumCounter];
          drugNumCounter += drugNumCounter;
          propertiz.prop2 = [drugs[rando12].precursor,drugs[rando12].madeInto,drugs[rando12].forwardEnzyme];
          //goThruThis = [propertiz.prop1[propertiz.number[0]],propertiz.prop2[propertiz.number[0]],propertiz.prop3[propertiz.number[0]]];
        }
     while (propertiz.prop3[propertiz.number[0]] == propertiz.prop[propertiz.number[0]]) {
          rando13 = pickDrug[drugNumCounter];
          drugNumCounter += drugNumCounter;
          propertiz.prop3 = [drugs[rando13].precursor,drugs[rando13].madeInto,drugs[rando13].forwardEnzyme];
          //goThruThis = [propertiz.prop1[propertiz.number[0]],propertiz.prop2[propertiz.number[0]],propertiz.prop3[propertiz.number[0]]];
        }
       
/*Sets multiple choice options*/

      if (askP.checked == true){
        document.getElementById("des").innerHTML= propertiz.prop[propertiz.number[0]];
        
        document.getElementById(correctDrugOrder[rando2]).innerHTML= drugs[rando1].name;
        document.getElementById(correctDrugOrder[others[0]]).innerHTML= drugs[rando11].name;
        document.getElementById(correctDrugOrder[others[1]]).innerHTML= drugs[rando12].name;
        document.getElementById(correctDrugOrder[others[2]]).innerHTML= drugs[rando13].name;
      }
      else if (askO.checked == true){
        
      //  document.getElementById("des").innerHTML= "<img src=" + drugs[rando1].name + " height='100%' border='1px solid black'>";
      document.getElementById("des").innerHTML= drugs[rando1].name;
        
        document.getElementById(correctDrugOrder[rando2]).innerHTML= propertiz.prop[propertiz.number[0]];
        document.getElementById(correctDrugOrder[others[0]]).innerHTML= propertiz.prop1[propertiz.number[0]];
        document.getElementById(correctDrugOrder[others[1]]).innerHTML= propertiz.prop2[propertiz.number[0]];
        document.getElementById(correctDrugOrder[others[2]]).innerHTML= propertiz.prop3[propertiz.number[0]];
      }



      
      //choose this if setting properties as multiple choice options

/*
    document.getElementById(correctDrugOrder[rando2]).innerHTML= propertiz.prop[propertiz.number[0]];
    document.getElementById(correctDrugOrder[others[0]]).innerHTML= propertiz.prop1[propertiz.number[0]];
    document.getElementById(correctDrugOrder[others[1]]).innerHTML= propertiz.prop2[propertiz.number[0]];
    document.getElementById(correctDrugOrder[others[2]]).innerHTML= propertiz.prop3[propertiz.number[0]];
  */
 /*
    //choose this if setting object names as multiple choice options
    document.getElementById("des").innerHTML= propertiz.prop[propertiz.number[0]];
    
    document.getElementById(correctDrugOrder[rando2]).innerHTML= drugs[rando1].name;
    document.getElementById(correctDrugOrder[others[0]]).innerHTML= drugs[rando11].name;
    document.getElementById(correctDrugOrder[others[1]]).innerHTML= drugs[rando12].name;
    document.getElementById(correctDrugOrder[others[2]]).innerHTML= drugs[rando13].name;

*/
    
    rando20 = rando2
    others2 = others
    return rando20
    return others2
  };


} //End of 'loadThis' function
