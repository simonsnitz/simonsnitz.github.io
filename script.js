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

  // Pass variables to questions page as GET parameters
  // TODO: urlencode the parameters

  params = {
    'drugSelection': drugSelection,
    'propertySelection': propertySelection,
    'askPChecked': askP.checked,
    'askOChecked': askO.checked
  }

  queryString = Object.keys(params).map(key => key + '=' + JSON.stringify(params[key])).join('&')

  window.location = 'questions.html' + '?' + queryString
};
