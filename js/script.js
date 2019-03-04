/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
David Aguirre 
******************************************/



/*** 
I created my array of objects as requested. I have included all of the elements required so that they show in the html2 variable.
***/
var html2;
var quotes = [ 
  { quote : 'That\'s one small step for [a] man, one giant leap for mankind.' , source: 'Neil Amstrong' , citation : 'Apollo 11 Moon landing ' , year : 1969 } ,              
  { quote : 'Oh, the humanity ' ,  source : 'Herb Morrison' , citation : 'Hinderburg crash' , year : 1937}, 
  { quote : 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.' , source : '         Satoshi Nakamoto' , citation : 'Bitcoin Genesis Block' , year : '2009' } ,
  { quote : 'Get up, stand up, Stand up for your rights. Get up, stand up, Don\'t give up the fight.' , source : ' Bob Marley ' , citation : 'Live! Album' , year : 1975 }, 
  { quote : 'I\'m gonna make him an offer he can\'t refuse.' , source : ' Marlon Brando' , citation : 'The Godfather' , year : 1972 }
                                                                                      ]
  

/***
  I created my getRandomQuote function.
  I am using the mathfloor (mathrandom) method in order to get the random selection based on the length of my previous array of objects.
***/
 var array ;
function getRandomQuote (array) {
  
  var randomNum = quotes[Math.floor((Math.random()*quotes.length))]
  return randomNum

 }

 /* This function prints accordingly to the suggested specifications. The documentbyId function is returning the html2 variable */

  function printQuote(message){
   getRandomQuote(array)
  var newQuote = getRandomQuote(array);

var html2 = '<p class ="quote">' + newQuote.quote + ' ' + '</p>';
      html2 += '<p class="source">' + newQuote.source +
      '<span class="citation">' + newQuote.citation + '</span>'
      '<span class="year">' + newQuote.year + '</span>'
      '</p>'
   document.getElementById('quote-box').innerHTML = html2;
  }












document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Thanks for reviewing my code.