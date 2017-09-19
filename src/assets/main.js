let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
// let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');

    add functionality to guess function here
    if(answer === '' || attempt === '') {
      setHiddenFields();
    }

    if(validateInput(input.value) === false) {
      return false;
    }
    else {
      attempt++;
    }
}

//implement new functions here

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 9999) + 1;
  attempt = 0;

  while(answer.value.length < 4) {
    answer.value += '0';
  }
}

function setMessage(theMessage) {
  message.innerHTML = theMessage;
}

function validateInput(inputContent) {
  if (inputContent.length === 4) {
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
