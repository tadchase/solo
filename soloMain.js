//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "Quis, Quid, and Questions!";
    var game2Title = get("answerTwo").innerHTML = "More Quis, Quid, and Questions!";
    var game3Title = get("answerThree").innerHTML = "To be or not to be! It's <q>ESSE!</q>";
    var game4Title = get("answerFour").innerHTML = "Agreeable Subjects!";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "SOLO";}

function gameTitle() {get("startButton").innerHTML = "Select your Game!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games
    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();
	
//This is the data for the four games
	var questions = [["Quid tu vides?", "Equum videt.", "Equus me videt.", "Ego equum video.", "Equus me videt.", "3", "What do you see?"], ["Quis in caelo volat?", "Equus", "Avis", "Canis", "Piscis", "2", "Who flies in the sky?"], ["Quid dicit ovis?", "Baa", "Moo", "Chirp", "Meow", "1", "What does a sheep say?"],["PORTATE, servi, CENAM ex culina.", "The food is carried.", "They carry the food.","Carry the food!", "You will carry the food.","3","Think plural imperative!"],["Montēs in Hispaniā sunt BIG.", "magnus", "magnī", "magnōs", "magna", "2", "Montēs are masculine, plural, and nominative!"],["Canis in viā lentē ambulavit.", "The dog walks slowly in the street", "The dog walked slowly into the street.", "The dog walked slowly in the street", "The slow dog walked slowly in the street.", "3", "In + the ABLATIVE = IN; In + ACCUSATIVE = INTO."],["VOS avēs in caelo spectare potestis.", "You", "We", "Your", "They", "1", "Look at the verb ending to double check your answer!"]];
	
	var questions1 = [["Quis in agrō laborat?", "nauta", "agricola", "poeta", "mercator", "2", "Who works in the field?"], ["Quid sub mari habitat?", "Equus", "Avis", "Canis", "Piscis", "4", "What lives under the sea?"], ["Quid dicit bovis?", "Baa", "Moo", "Chirp", "Meow", "2", "Bovis is a cow!"]];

	 var questions2 = [["Cogitō ergo SUM. I think therefore", "I am", "you are", "he is", "we are", "1", "Do you exist if you think?!"], ["Es paratus", "I am prepared", "He is prepared", "Be prepared", "We are prepared", "3", "The motto of the Boy Scouts"], ["Est laeta.", "He is happy.", "She is happy.", "You are happy.", "We are happy.", "2", "What is the gender of laeta?"],["Esse", "Be", "You are", "They are", "To be", "4", "To be or not to be, that is the question!"]];

	 var questions3 = [["Quid _____ vides?", "ego", "tu", "nos", "vos", "2", "It rhymes with YOU!"],["______ sumus laeti!", "Ego", "Tu", "Nos", "Vos", "3", "WE are happy!"]]; 



//This function resets the questions so that they can be selected again.
function resetQuestions(){

	var questions = [["Quid tu vides?", "Equum videt.", "Equus me videt.", "Ego equum video.", "Equus me videt.", "3", "What do you see?"], ["Quis in caelo volat?", "Equus", "Avis", "Canis", "Piscis", "2", "Who flies in the sky?"], ["Quid dicit ovis?", "Baa", "Moo", "Chirp", "Meow", "1", "What does a sheep say?"],["PORTATE, servi, CENAM ex culina.", "The food is carried.", "They carry the food.","Carry the food!", "You will carry the food.","3","Think plural imperative!"],["Montēs in Hispaniā sunt BIG.", "magnus", "magnī", "magnōs", "magna", "2", "Montēs are masculine, plural, and nominative!"],["Canis in viā lentē ambulavit.", "The dog walks slowly in the street", "The dog walked slowly into the street.", "The dog walked slowly in the street", "The slow dog walked slowly in the street.", "3", "In + the ABLATIVE = IN; In + ACCUSATIVE = INTO."],["VOS avēs in caelo spectare potestis.", "You", "We", "Your", "They", "1", "Look at the verb ending to double check your answer!"]];
	
	var questions1 = [["Quis in agrō laborat?", "nauta", "agricola", "poeta", "mercator", "2", "Who works in the field?"], ["Quid sub mari habitat?", "Equus", "Avis", "Canis", "Piscis", "4", "What lives under the sea?"], ["Quid dicit bovis?", "Baa", "Moo", "Chirp", "Meow", "2", "Bovis is a cow!"]];

	 var questions2 = [["Cogitō ergo SUM. I think therefore", "I am", "you are", "he is", "we are", "1", "Do you exist if you think?!"], ["Es paratus", "I am prepared", "He is prepared", "Be prepared", "We are prepared", "3", "The motto of the Boy Scouts"], ["Est laeta.", "He is happy.", "She is happy.", "You are happy.", "We are happy.", "2", "What is the gender of laeta?"],["Esse", "Be", "You are", "They are", "To be", "4", "To be or not to be, that is the question!"]];

	 var questions3 = [["Quid _____ vides?", "ego", "tu", "nos", "vos", "2", "It rhymes with YOU!"],["______ sumus laeti!", "Ego", "Tu", "Nos", "Vos", "3", "WE are happy!"]]; 

}







//Random index for Shuffle
	 var randomIndex = 0;

	 //var randIndex = 0;

	

    
	 

function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;
    	 


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }


    
//Timer variables
	var timeleft = 15;
	var countdown = setInterval(x,1000);
    
  

 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}



function stopTimer() {

	 
	clearInterval(countdown);
	 
	 
}

 

//This randomizes an array. The parameter array takes as its argument the questions.

function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}
	


  
function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){


 	startButton.onclick = function(){test()};
	startButton.innerHTML = game1Title;
    answerSetup();
    gameOverAudio();

}


function selectGame2(){

 	startButton.onclick = function(){test1()};
 	startButton.innerHTML = game2Title;
    answerSetup();
    gameOverAudio();
}

function selectGame3(){ 

 	startButton.onclick = function(){test2()};
 	startButton.innerHTML = game3Title;
    answerSetup();
    gameOverAudio();
}

function selectGame4(){

 	startButton.onclick = function(){test3()};
 	startButton.innerHTML = game4Title;
    answerSetup();
    gameOverAudio();
 }



   
   
    






function test(){



	countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);

	resetAnswerColors();

     enableButtons();
     


     responseButton.innerHTML = "Hint!";

     responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}
   
   
     var newArray = shuffle(questions);

 


 


	if (newArray.length == 0){


    	startButton.innerHTML = "Start a New Game!";

    	 
    
    	
		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;
		
		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";
		
		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};


		 resetQuestions();

		 

    	 
    } 

	var randomIndex  = Math.floor(Math.random() * newArray.length);



	let row = newArray[randomIndex];

		startButton.innerHTML = row[0];
		answerOne.innerHTML = row[1];
		answerTwo.innerHTML = row[2];
		answerThree.innerHTML = row[3];
		answerFour.innerHTML = row[4];
		correctAnswer = row[5];	
	 
	 var splicedItems = newArray.splice(randomIndex, 1); // this is how to remove an item

	 startButton.disabled = true;
	 responseButton.onclick = function(){hint()};
     
	
	  

	 function hint(){

	 	responseButton.disabled = true;
	  if (responseButton.value == 5) {

	 	responseButton.innerHTML = row[6];
	 	
	 }
	}



                            
}


function test1(){

	
	countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);

	resetAnswerColors();

     enableButtons();
     


     responseButton.innerHTML = "Hint!";

     responseButton.disabled = false;


	 var newArray = shuffle(questions1);

	 	 



	if (newArray.length == 0){

		 
		

    	startButton.innerHTML = "Start a New Game!";

    	 
    
    	
		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;
		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";
		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};


		 resetQuestions();

		 

    	 
    } 

	var randomIndex  = Math.floor(Math.random() * newArray.length);



	let row = newArray[randomIndex];

		startButton.innerHTML = row[0];
		answerOne.innerHTML = row[1];
		answerTwo.innerHTML = row[2];
		answerThree.innerHTML = row[3];
		answerFour.innerHTML = row[4];
		correctAnswer = row[5];	
	 
	 var splicedItems = newArray.splice(randomIndex, 1); // this is how to remove an item

	 startButton.disabled = true;
	 responseButton.onclick = function(){hint()};
     
	
	  

	 function hint(){

	 	responseButton.disabled = true;
	  if (responseButton.value == 5) {

	 	responseButton.innerHTML = row[6];
	 	
	 }
	}

                                
}


function test2(){

	
	countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);

	resetAnswerColors();

     enableButtons();
     


     responseButton.innerHTML = "Hint!";

     responseButton.disabled = false;


	 var newArray = shuffle(questions2);

	 	 



	if (newArray.length == 0){

		 
		

    	startButton.innerHTML = "Start a New Game!";

    	 
    
    	
		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;
		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";
		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};


		 resetQuestions();

		 

    	 
    } 

	var randomIndex  = Math.floor(Math.random() * newArray.length);



	let row = newArray[randomIndex];

		startButton.innerHTML = row[0];
		answerOne.innerHTML = row[1];
		answerTwo.innerHTML = row[2];
		answerThree.innerHTML = row[3];
		answerFour.innerHTML = row[4];
		correctAnswer = row[5];	
	 
	 var splicedItems = newArray.splice(randomIndex, 1); // this is how to remove an item

	 startButton.disabled = true;
	 responseButton.onclick = function(){hint()};
     
	
	  

	 function hint(){

	 	responseButton.disabled = true;
	  if (responseButton.value == 5) {

	 	responseButton.innerHTML = row[6];
	 	
	 }
	}

                                
}


function test3(){

	
	countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);

	resetAnswerColors();

     enableButtons();
     


     responseButton.innerHTML = "Hint!";

     responseButton.disabled = false;


	 var newArray = shuffle(questions3);

	 	 



	if (newArray.length == 0){

		 
		

    	startButton.innerHTML = "Start a New Game!";

    	 
    
    	
		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;
		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";
		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};


		 resetQuestions();

		 

    	 
    } 

	var randomIndex  = Math.floor(Math.random() * newArray.length);



	let row = newArray[randomIndex];

		startButton.innerHTML = row[0];
		answerOne.innerHTML = row[1];
		answerTwo.innerHTML = row[2];
		answerThree.innerHTML = row[3];
		answerFour.innerHTML = row[4];
		correctAnswer = row[5];	
	 
	 var splicedItems = newArray.splice(randomIndex, 1); // this is how to remove an item

	 startButton.disabled = true;
	 responseButton.onclick = function(){hint()};
     
	
	  

	 function hint(){

	 	responseButton.disabled = true;
	  if (responseButton.value == 5) {

	 	responseButton.innerHTML = row[6];
	 	
	 }
	}

                                
}

 


   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}
   

 

function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}
 
function clickedStartButton(){

	startButton.onclick = countDownTimer();
}

function resetClickedAudioButtons(){

	    answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};

}


function clickedCorrectAnswerOneAudio() {

	if (correctAnswer += "1"){answerOne.onclick =  correctAnswerAudio();}
	answerOne.onclick = function(){clickedAnswerOne()};
}

function clickedCorrectAnswerTwoAudio() {

	if (correctAnswer += "2"){answerTwo.onclick =  correctAnswerAudio();}
	answerTwo.onclick = function(){clickedAnswerTwo()};
}

function clickedCorrectAnswerThreeAudio() {

	if (correctAnswer += "3"){answerThree.onclick =  correctAnswerAudio();}
	answerThree.onclick = function(){clickedAnswerThree()};
}

function clickedCorrectAnswerFourAudio() {

	if (correctAnswer += "4"){answerFour.onclick =  correctAnswerAudio();}
	answerFour.onclick = function(){clickedAnswerFour()};
}



function clickedWrongAnswerOneAudio() {

	if (correctAnswer !== "1"){answerOne.onclick =  wrongAnswerAudio();}
	answerOne.onclick = function(){clickedAnswerOne()};
}

function clickedWrongAnswerTwoAudio() {

	if (correctAnswer !== "2"){answerTwo.onclick =  wrongAnswerAudio();}
	answerTwo.onclick = function(){clickedAnswerTwo()};
}

function clickedWrongAnswerThreeAudio() {

	if (correctAnswer !== "3"){answerThree.onclick =  wrongAnswerAudio();}
	answerThree.onclick = function(){clickedAnswerThree()};
}

function clickedWrongAnswerFourAudio() {

	if (correctAnswer !== "4"){answerFour.onclick =  wrongAnswerAudio();}
	answerFour.onclick = function(){clickedAnswerFour()};
}


function clickedAnswerOne(){

	   


	if (correctAnswer == "1") {
		clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";
		
		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;
		 
		
		unHideResponseNext();
		 


	} else {
		
		clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";
		
	}	

}


function clickedAnswerTwo(){

	 

	if (correctAnswer == "2") {
		clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";
		
		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";	
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;
		 
		
		unHideResponseNext();
	

	} else {
		clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";
		
	}
}

function clickedAnswerThree(){

	 

	if (correctAnswer == "3") {
		clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";
		
		responseButton.style.color = "yellow";	
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;
		 
		
		unHideResponseNext();
		

	} else {
		
		clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";
		
	}

}

function clickedAnswerFour(){



	if (correctAnswer == "4") {
		clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";
		
		responseButton.style.color = "yellow";	
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;
		
		
		unHideResponseNext();
		

	} else {
		
		clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";
		
	}


}


