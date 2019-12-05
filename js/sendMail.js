//body
const body = document.querySelector('body')
//form elements
const sendFormButton = document.querySelector('#sendMail');
let mailContentInput = document.querySelector('#mailContent');
let yourMailInput = document.querySelector('#yourMail');
let yourNameInput = document.querySelector('#yourName');
//modal
const modalContainer = document.querySelector('.modal__container');
const closeModalButton = document.querySelector('.mainBody__dismiss');
//alert color
const warningColor = 'hsla(0, 100%, 41%, 0.7)'
//alert message 
const allertMessage = document.querySelector('#errorMessage');
//button switch
const buttonText = document.querySelector('.sendText');
const buttonIndicator = document.querySelector('.eclipseContainer')

sendMail = (variables) =>{
  window.emailjs.send('gmail', 'template_RN0dJqfx', variables).then(res => {
    console.log(res, "response")
    allertMessage.classList.add('form__message--visible');
    yourMailInput.value = '';
    mailContentInput.value = '';
    yourNameInput.value = '';
    switchButton()
    this.setTimeout(()=>{
      allertMessage.classList.remove('form__message--visible');
    }, 5000)

  }).catch(err => {
    console.log(err, "error")
    switchButton()
    toggleModal()
  })
}

switchButton = () =>{
  buttonText.classList.toggle('invisibleSend');
  buttonIndicator.classList.toggle('visibleIndicator')
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
  
  if(yourMailInput.value && mailContentInput.value && yourNameInput.value){
    const body = {
      to_name: yourNameInput.value,
      message_html: mailContentInput.value,
      from_name: yourMailInput.value,
      // reply_to: this.state.email
    }
    switchButton()
    sendMail(body)
  }

  e.preventDefault()
}

sendFormButton.addEventListener('click', checkValues);
closeModalButton.addEventListener('click', toggleModal)