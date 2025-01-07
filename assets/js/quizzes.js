function VerifyAnswer(correctAnswer, formID) {
    const form = document.getElementById(formID);
    const formData = new FormData(form);
    let answer = "";
    for (const [key, value] of formData.entries()) {
        answer = value;
    }
    console.log(document.getElementById(correctAnswer).nextSibling.nextSibling.id);
    document.getElementById(correctAnswer).nextSibling.nextSibling.innerHTML += " <span class=\"nf quizIndicatorCorrect\">󰸞</span>";
    if (answer != correctAnswer) {
        document.getElementById(answer).nextSibling.nextSibling.innerHTML += "  <span class=\"nf quizIndicatorWrong\"></span>";
    }
}

var all = document.getElementsByTagName("form");
for(var i = 0, max = all.length; i < max; i++) 
{
    let formEle = all[i];
    let buttonEle = formEle.getElementsByTagName("button")[0];
    let correctAnswer = buttonEle.value;
    buttonEle.addEventListener(
        "click",
        function () {
            VerifyAnswer(correctAnswer, formEle.id)
        },
        { once: true, }
    );
}
