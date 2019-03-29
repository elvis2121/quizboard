var user_input =[];
var answers = ['compiled language','12','prompt','vowel','Modular JavaScript'];
var score = 0;
var res1,res2,res3,res4,res5,marks,grade;


$(document).ready(function() {
  $(".results").hide();
  $("#submit_button").click(function () {
    answer1 = $("input[name='question1']:checked").val();
    user_input.push(answer1);
    
    answer2 =$("input[name='question2']:checked").val();
    user_input.push(answer2);
    
    answer3 =$("input[name='question3']:checked").val();
    user_input.push(answer3);
    
    answer4 =$("input[name='question4']:checked").val();
    user_input.push(answer4);
    
    answer5 =$("input[name='question5']:checked").val();
    user_input.push(answer5);