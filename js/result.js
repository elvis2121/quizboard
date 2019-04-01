
var user_Input =[];
var answers = ['compiled language','12','prompt','vowel','Modular JavaScript'];
var result1,result2,result3,result4,result5,marks,grade;

function addition(value1,value2,value3,value4,value5){
  return(value1+value2+value3+value4+value5);
}

// business logic

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
    
    if(user_Input[0] === answers[0]){
      result1=20;
    }else {
      result1=0;
    }
    if (user_Input[1]===answers[1]) {
      result2=20;      
    }else {
      result2=0;
    }
    if (user_Input[2]=== answers[2]) {
      result3=20;      
    }else {
      result3=0;
    }
    if (user_Input[3] === answers[3]) {
      result4=20;
      
    }else {
      result4 = 0;
    }
    if (user_Input[4]=== answers[4]) {
      result5=20;
    }else {
      result5=0;
    }
    
    marks =addition(result1,result2,result3,result4,result5);
    console.log(marks);
    
    if (marks>=80) {
      grade= "EXCELLENT";      
    }if (marks>=50 && marks<80) {
      grade= "FAIR";      
    }if (marks<50) {
      grade="POOR";      
    }     
    
  }); 
});    

// interface logic

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