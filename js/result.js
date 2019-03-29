
var user_Input =[];
var answers = ['compiled language','12','prompt','vowel','Modular JavaScript'];
var res1,res2,res3,res4,res5,marks,grade;

function addition(val1,val2,val3,val4,val5){
  return(val1+val2+val3+val4+val5);
}
// Business logic

    
    
    if(user_Input[0] === answers[0]){
      res1=20;
    }else {
      res1=0;
    }
    if (user_Input[1]===answers[1]) {
      res2=20;      
    }else {
      res2=0;
    }
    if (user_Input[2]=== answers[2]) {
      res3=20;      
    }else {
      res3=0;
    }
    if (user_Input[3] === answers[3]) {
      res4=20;
      
    }else {
      res4 = 0;
    }
    if (user_Input[4]=== answers[4]) {
      res5=20;
    }else {
      res5=0;
    }
    
    marks =addition(res1,res2,res3,res4,res5);
    
    if (marks>=80) {
      grade= "EXCELLENT";      
    }if (marks>=50 && marks<80) {
      grade= "FAIR";      
    }if (marks<50) {
      grade="POOR";      
    }     



// interface logic

$(document).ready(function() {
  $(".results").hide();
  $("#submit_button").click(function () {
    answer1 = $("input[name='question1']:checked").val();
    user_Input.push(answer1);
    
    answer2 =$("input[name='question2']:checked").val();
    user_Input.push(answer2);
    
    answer3 =$("input[name='question3']:checked").val();
    user_Input.push(answer3);
    
    answer4 =$("input[name='question4']:checked").val();
    user_Input.push(answer4);
    
    answer5 =$("input[name='question5']:checked").val();
    user_Input.push(answer5);
    
  }); 
});    

$(document).ready(function(){
  $("#submit_button").click(function() {
    $(".results").show();    
    $(".results").html("YOU HAVE SCORED: ".concat(marks) + "<br> WHICH IS GRADE: ".concat(grade));
    $(".results").animate({top: '850px',left:'400px'},"slow");
    
    function blink_text() {
      $('.results').fadeToggle(1500);
    }
    setInterval(blink_text, 1000);    
  });
});

$('#reset_button').click(function () {
		$('input[type="radio"]').prop('checked', false);
    location.reload();	
});