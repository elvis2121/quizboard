var user_input =[];
var answers = ['compiled language','12','prompt','vowel','Modular JavaScript'];
var score = 0;
var res1,res2,res3,res4,res5,marks,grade;

function addition(val1,val2,val3,val4,val5){
  return(val1+val2+val3+val4+val5);
}



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
    
    marks =addition(res1,res2,res3,res4,res5);
    
    if (marks>=80) {
    grade= "EXCELLENT";      
  }if (marks>=50 && marks<80) {
    grade= "FAIR";      
  }if (marks<50) {
    grade="POOR";      
  } 
  
  
});  

});

    
    
    
  if(user_input[0] === answers[0]){
    res1=20;
  }else {
    res1=0;
  }
  if (user_input[1]===answers[1]) {
    res2=20;      
  }else {
    res2=0;
  }
  if (user_input[2]=== answers[2]) {
    res3=20;      
  }else {
    res3=0;
  }
  if (user_input[3] === answers[3]) {
    res4=20;
    
  }else {
    res4 = 0;
  }
  if (user_input[4]=== answers[4]) {
    res5=20;
  }else {
    res5=0;
  }