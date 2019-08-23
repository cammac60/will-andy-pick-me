var userQ = document.querySelector('#inputbox');
var submitButton = document.getElementById('submission');
var clearButton = document.getElementById('clear');

submitButton.addEventListener('click', function() {
  var eightBallImg = document.getElementById('eight-ball');
  var userQuestionValue = userQ.value;
  clearButton.style.backgroundColor = '#DE4841';
  document.getElementById('question').innerText = userQuestionValue;
  eightBallImg.style.display = 'none';
});
