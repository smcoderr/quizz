let container = document.querySelector(".container");

let quizzes = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<javascrip>",
    c: "<js>",
    correctAnswer: "a",
  },
  {
    question:
      "Where is the correct place to insert a JavaScript?",
    a: "Both <head> and <body> are correct",
    b: "The <body> section",
    c: " The <head> section",
    correctAnswer: "c",
  },
];
let inputId = 1;
let mark = 0;

quizzes.forEach((element, index) => {
  let quizContainer = document.createElement("div");
  quizContainer.setAttribute("class", "quiz-container");

  let form = document.createElement("form");

  let question = document.createElement("h2");
  question.innerHTML = element.question;
  form.appendChild(question);

  let ul = document.createElement("ul");

  ["a", "b", "c"].forEach((option) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("class", "quiz-option");
    input.setAttribute("name", `quiz-option${index}`);
    input.setAttribute("id", `${option}`);
    let label = document.createElement("label");
    label.setAttribute("for", `quiz-${index}-${option}`);
    label.innerText = element[option];

    li.appendChild(input);
    li.appendChild(label);
    ul.appendChild(li);

    //get User Answer
    
  });
  form.appendChild(ul);

  let button = document.createElement("button");
  button.innerText = "submit";
  form.appendChild(button);
  quizContainer.appendChild(form);
  container.appendChild(quizContainer);


  let answers = document.querySelectorAll('.quiz-option')

  function getUserAnswer() {
    let userAnswer;
    answers.forEach(function(answer) {
      if (answer.checked) {
        userAnswer = answer.id
      }
    })
    return userAnswer
  }


  function checkSubmit(event) {
    event.preventDefault();
    //get the answer
    let userAnswer = getUserAnswer()
    if(userAnswer == element.correctAnswer) {
      mark = mark + 1;
      // alert('success')
    }else {
      mark = mark - 1;
      // alert('sorry')
    }
    let displayMarks = document.querySelector('p')
    displayMarks.innerText = 'mark:'+mark;

    let finish = document.getElementById('finish')
    

    function showMark() {
      let p = document.querySelector('p')
      p.style.display = 'block'
      finish.style.display = 'none'
    }


    finish.addEventListener('click', showMark)
  }
  button.addEventListener("click", checkSubmit);
});
