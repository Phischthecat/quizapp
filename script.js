let currentQuestion = 0;
let rightQuestions = 0;
let selectedQuiz = questions_html;
let AUDIO_success = new Audio('./audio/right.mp3');
let AUDIO_fail = new Audio('./audio/wrong.mp3');
let AUDIO_winner = new Audio('./audio/winner.mp3');

function init() {
  document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
  document.getElementById('all-questions').innerHTML = selectedQuiz.length;

  showQuestion();
}

function changeQuiz(select) {
  selectedQuiz = select;
  replay();
}

function activeHTML(select) {
  addActive('html');
  removeActive('handball');
  removeActive('allgemein');
  changeQuiz(select);
}

function activeHandball(select) {
  removeActive('html');
  addActive('handball');
  removeActive('allgemein');
  changeQuiz(select);
}

function activeAllgemein(select) {
  removeActive('html');
  removeActive('handball');
  addActive('allgemein');
  changeQuiz(select);
}

function showQuestion() {
  let question = selectedQuiz[currentQuestion];
  loadQuestion('question', question);
  for (let i = 1; i <= 4; i++) {
    loadQuestion('answer_' + i, question);
  }
  document.getElementById('nextBtn').disabled = true;
}

function answer(selection) {
  let right_answer = selectedQuiz[currentQuestion]['right_answer'];
  let idOfRightAnswer = 'answer_' + right_answer;
  if (selection.match(right_answer)) {
    rightAnswer(selection);
  } else {
    wrongAnswer(selection, idOfRightAnswer);
  }
  addStyle('overlay', 'display: block');
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= selectedQuiz.length) {
    showEndscreen();
  } else {
    addStyle('overlay', 'display: none');
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

function replay() {
  currentQuestion = 0;
  rightQuestions = 0;
  addStyle('endscreen', 'display: none');
  addStyle('overlay', 'display: none');
  addStyle('questionBody', '');
  document.getElementById('all-questions-endscreen').innerHTML =
    selectedQuiz.length;
  resetAnswerButtons();
  init();
  percent();
}

function loadQuestion(id, question) {
  document.getElementById(id).innerHTML = question[id];
}

function rightAnswer(selection) {
  document
    .getElementById(selection)
    .parentNode.classList.add('right-answer-card');
  document.getElementById('strong-' + selection).classList.add('right-answer');
  AUDIO_success.play();
  rightQuestions++;
}

function wrongAnswer(selection, idOfRightAnswer) {
  document
    .getElementById(selection)
    .parentNode.classList.add('wrong-answer-card');
  document.getElementById('strong-' + selection).classList.add('wrong-answer');
  document
    .getElementById(idOfRightAnswer)
    .parentNode.classList.add('right-answer-card');
  document
    .getElementById('strong-' + idOfRightAnswer)
    .classList.add('right-answer');
  AUDIO_fail.play();
}

function showEndscreen() {
  addStyle('endscreen', '');
  addStyle('questionBody', 'display: none');
  document.getElementById('all-questions-endscreen').innerHTML =
    selectedQuiz.length;
  document.getElementById('all-right-questions').innerHTML = rightQuestions;
  AUDIO_winner.play();
  popOver();
}

function percent() {
  let percent = ((currentQuestion + 1) / selectedQuiz.length) * 100;

  document.getElementById('progress').style = `width: ${percent}%`;
}

function addStyle(id, style) {
  document.getElementById(id).style = style;
}

function removeActive(id) {
  document.getElementById(id).classList.remove('active');
}

function addActive(id) {
  document.getElementById(id).classList.add('active');
}

function popOver() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
  const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus',
  });
}
