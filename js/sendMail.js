//body
const body = document.querySelector('body')
//form elements
const sendFormButton = document.querySelector('#sendMail');
const mailContentInput = document.querySelector('#mailContent');
const yourMailInput = document.querySelector('#yourMail');
const yourNameInput = document.querySelector('#yourName');
//modal
const modalContainer = document.querySelector('.modal__container');
const closeModalButton = document.querySelector('.mainBody__dismiss');
//alert color
const warningColor = 'hsla(0, 100%, 41%, 0.7)'

sendMail = (variables) =>{
  window.emailjs.send('gmail', 'template_RN0dJqfx', variables).then(res => {
    console.log('Email successfully sent!')
  }).catch(err => {
    toggleModal()
  })
}

toggleModal = () =>{
  modalContainer.classList.toggle('displayModal');
  console.log(body.style.overflow);
  body.style.overflow === 'hidden' ? body.style.overflow = '' : body.style.overflow = 'hidden';
}


checkValues = (e) =>{
  if(!yourMailInput.value){
    yourMailInput.style.backgroundColor = warningColor;
  }else{
    yourMailInput.style.backgroundColor = '';
  }
  
  if(!mailContentInput.value){
    mailContentInput.style.backgroundColor = warningColor;
  }else{
    mailContentInput.style.backgroundColor = ''
  }

  if(!yourNameInput.value){
    yourNameInput.style.backgroundColor = warningColor;
  }else{
    yourNameInput.style.backgroundColor = ''
  }
  
  if(yourMailInput.value && mailContentInput.value && yourNameInput){
    const body = {
      to_name: yourNameInput.value,
      message_html: mailContentInput.value,
      from_name: yourMailInput.value,
      // reply_to: this.state.email
    }
    sendMail(body)
  }

  e.preventDefault()
}

sendFormButton.addEventListener('click', checkValues);
closeModalButton.addEventListener('click', toggleModal)