// function validation

export function validEmail(e, el) {
   const userEmail = document.getElementById('email');

   const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

   if (!EMAIL_REGEXP.test(String(e.target.value).toLocaleLowerCase())) {
      el('Email – повинен містити: мінімум 3 символи, собачку, мінімум 2 символи, крапку та мінімум 2 символи')
      userEmail.style.borderColor = 'red';
      userEmail.style.boxShadow = '0px 0px 5px 3px red';
   } else {
      el('')
      userEmail.style.borderColor = 'green';
      userEmail.style.boxShadow = '0px 0px 5px 3px #348c34fc';
   }
};

export function validPassword(e, el) {
   const userPassword = document.getElementById('password');

   const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z]).{8,40}$/gm;

   if (!PASSWORD_REGEXP.test(e.target.value)) {
      el('Пароль повинен містити мінімум 8 символів, велику і маленьку літеру (лат.)')
      userPassword.style.borderColor = 'red';
      userPassword.style.boxShadow = '0px 0px 5px 3px red';
   } else {
      el('')
      userPassword.style.borderColor = 'green';
      userPassword.style.boxShadow = '0px 0px 5px 3px #348c34fc';
   }
};

export function validFirstName(e, el) {
   const userFirstName = document.getElementById('firstName');

   const firtName = e.target.value;

   if (firtName !== ' ' && firtName.length < 3) {
      el(`Ім'я повинно містити не менше трьох символів`)
      userFirstName.style.borderColor = 'red';
      userFirstName.style.boxShadow = '0px 0px 5px 3px red';
   } else {
      el('')
      userFirstName.style.borderColor = 'green';
      userFirstName.style.boxShadow = '0px 0px 5px 3px #348c34fc';
   }
}

export function validLastName(e, el) {
   const userLastName = document.getElementById('lastName');

   const lastName = e.target.value;

   if (lastName !== ' ' && lastName.length < 3) {
      el('Прізвище повинно містити не менше трьох символів')
      userLastName.style.borderColor = 'red';
      userLastName.style.boxShadow = '0px 0px 5px 3px red';
   } else {
      el('')
      userLastName.style.borderColor = 'green';
      userLastName.style.boxShadow = '0px 0px 5px 3px #348c34fc';
   }
}

export const blurHandle = (e, elDitry) => {
   switch (e.target.name) {
      case 'userEmail':
         elDitry(true)
         break
      case 'userPassword':
         elDitry(true)
         break
      case 'firstName':
         elDitry(true)
         break
      case 'lastName':
         elDitry(true)
         break
   }
}

// function add User in array

export function addUser(e) {

   e.preventDefault();

   console.log(e.target);

   const user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      userEmail: e.target.userEmail.value,
      userPassword: e.target.userPassword.value,
   }

   localStorage.setItem('user', JSON.stringify(user))

   e.target.firstName.value = '';
   e.target.lastName.value = '';
   e.target.userEmail.value = '';
   e.target.userPassword.value = '';

   document.location = '/autorisation'
}

//function valid form from local Storage

export function dataVerification(e, email, password, remember) {
   e.preventDefault();

   const userEmail = (JSON.parse(localStorage.getItem('user'))) || ''
   const userPassword = (JSON.parse(localStorage.getItem('user'))) || ''

   if (email === '' || email !== userEmail.userEmail || password !== userPassword.userPassword) {
      alert('Вибачте, такий email і пароль не зареєстровані. Зареєструйтесь та повторіть спробу');
   } else {
      const saveMe = remember

      localStorage.setItem('remember', JSON.stringify(saveMe))
      document.location = '/user'
   }
}





