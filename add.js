var firstNo = document.getElementById("first-no"),
    secondNo = document.getElementById("second-no"),
    addButton = document.getElementById("add-button"),
    answerBox =document.getElementById("answer") ;


 var displayAnswer = function displayAnswer(){
     return  parseFloat(firstNo.value) + parseFloat(secondNo.value);
 }


 addButton.addEventListener("click", function()
{
    var newResult = displayAnswer();
    answerBox.innerText = newResult;
});