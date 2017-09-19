let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt === '') {
      setHiddenFields();
    }
}

//implement new functions here

function setHiddenFields() {
  answer = Math.floor(Math.random());
  attempt = 0;

  while(answer.length < 4) {
    answer.toString();
    answer += '0';
  }
}

function setMessage(theMessage) {
  message.innerHTML = theMessage;
}
