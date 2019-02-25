/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
var html2;
var quotes = [ 
  { quote : 'Everything will be tokenized and connected by a blockchain one day.' , source: 'Fred Ehrsam ' , citation : 'University' , year : 1998} ,              
  { quote : 'Keep it Rollin ' ,  source : 'Korn' , citation : 'University' , year : 1998 }, 
  { quote : 'Bitcoin is a technological tour de force.' , source : ' Bill Gates ' , citation : 'University' , year : 1998} ,
  { quote : 'Lento pero seguro.' , source : ' David Aguirre ' , citation : 'University' , year : 1998 } 
                                                                                      ]
  

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
 var array ;
function getRandomQuote (array) {
  
  var randomNum = quotes[Math.floor((Math.random()*quotes.length))]
  return randomNum

 }

  function printQuote(message){
   getRandomQuote(array)
  var newQuote = getRandomQuote(array);

var html2 = '<p class ="quote">' + newQuote.quote + ' ' + '</p>';
      html2 += '<p class="source">' + newQuote.source +
      '<span class="citation">' + newQuote.citation + 
      '<span class="year">' + newQuote.year + '</span>'
      '</p>'
   document.getElementById('quote-box').innerHTML = html2;
  return html2}








/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.