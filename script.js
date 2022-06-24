let currentQuestion = 0;
let rightQuestions = 0;
let selectedQuiz = questions_html;

function init() {
  document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
  document.getElementById('all-questions').innerHTML = selectedQuiz.length;

  showQuestion();
  popOver();
}

function changeQuiz(select) {
  selectedQuiz = select;
  replay();
}

function activeHTML(select) {
  addActive('html');
  removeActive('handball');
  removeActive('allgemein');
  console.log(select);
  changeQuiz(select);
}

function activeHandball(select) {
  removeActive('html');
  addActive('handball');
  removeActive('allgemein');
  console.log(select);
  changeQuiz(select);
}

function activeAllgemein(select) {
  removeActive('html');
  removeActive('handball');
  addActive('allgemein');
  console.log(select);
  changeQuiz(select);
}

function removeActive(id) {
  document.getElementById(id).classList.remove('active');
}

function addActive(id) {
  document.getElementById(id).classList.add('active');
}

function showQuestion() {
  let question = selectedQuiz[currentQuestion];
  document.getElementById('question').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
  document.getElementById('nextBtn').disabled = true;
}

function answer(selection) {
  let right_answer = selectedQuiz[currentQuestion]['right_answer'];
  let idOfRightAnswer = 'answer_' + right_answer;
  if (selection.match(right_answer)) {
    document
      .getElementById(selection)
      .parentNode.classList.add('right-answer-card');
    document
      .getElementById('strong-' + selection)
      .classList.add('right-answer');
    rightQuestions++;
  } else {
    document
      .getElementById(selection)
      .parentNode.classList.add('wrong-answer-card');
    document
      .getElementById('strong-' + selection)
      .classList.add('wrong-answer');
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add('right-answer-card');
    document
      .getElementById('strong-' + idOfRightAnswer)
      .classList.add('right-answer');
  }
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= selectedQuiz.length) {
    document.getElementById('endscreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('all-questions-endscreen').innerHTML =
      selectedQuiz.length;
    document.getElementById('all-right-questions').innerHTML = rightQuestions;
  } else {
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
    showQuestion();
    resetAnswerButtons();
  }
  percent();
}

function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById('answer_' + i)
      .parentNode.classList.remove('right-answer-card');
    document
      .getElementById('answer_' + i)
      .parentNode.classList.remove('wrong-answer-card');
    document
      .getElementById('strong-answer_' + i)
      .classList.remove('right-answer');
    document
      .getElementById('strong-answer_' + i)
      .classList.remove('wrong-answer');
  }
}

function percent() {
  let percent = (currentQuestion / selectedQuiz.length) * 100;

  document.getElementById('progress').style = `width: ${percent}%`;
}

function replay() {
  currentQuestion = 0;
  rightQuestions = 0;
  document.getElementById('endscreen').style = 'display: none';
  document.getElementById('questionBody').style = '';
  document.getElementById('all-questions-endscreen').innerHTML =
    selectedQuiz.length;
  resetAnswerButtons();
  init();
  percent();
}

function popOver() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
}
