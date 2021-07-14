player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+"-";
document.getElementById("player2name").innerHTML=player2_name+"-";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question torn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer torn-"+player2_name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();

    charAt1=word.charAt(1);
    lengthBy2=Math.floor(word.length/2);
    charAt2=word.charAt(lengthBy2);
    lengthMinus1=word.length-1;
    charAt3=word.charAt(lengthMinus1);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
}
function send()
{
    Number1=document.getElementById("number1").value;
    Number2=document.getElementById("number2").value;
    actua_answer=parseInt(numder1) * parseInt(numder1);
    question_number="<h4>"+Number1+"x"+Number2+"</h4>";input_box;
    check_button="<br> <br> <button class='btn btn-info'onclick='check()'>check</button>";
    question_number="<h4>"+Number1+"x"+Number2+"</h4>";
    input_box="<br>answer:cinput type='type'id='input_check_box'>";
    check button="<br> <br><button class='btn btn-info'onclick='cherk()'>check</button>;
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}