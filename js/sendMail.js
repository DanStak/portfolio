const form = document.querySelector('#sendMailForm');
const sendFormButton = document.querySelector('#sendMail');
const mailContentInput = document.querySelector('#mailContent');
const yourMailInput = document.querySelector('#yourMail');

checkValues = (e) =>{
  if(!yourMailInput.value){
    console.log('brak maila')
  }
  
  if(!mailContentInput.value){
    console.log('brak kontentu')
  }
  
  if(yourMailInput.value && mailContentInput.value){
    console.log('wysyłanie maila')
  }
  e.preventDefault()
}

sendFormButton.addEventListener('click', checkValues);
