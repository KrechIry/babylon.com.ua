//login
document.addEventListener('DOMContentLoaded', function() {
  const teacherCheckbox = document.getElementById('teacher');
  const studentCheckbox = document.getElementById('student');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submitButton');
  const closeButton = document.getElementById('closeButton');

  // Ensure only one checkbox can be checked at a time
  teacherCheckbox.addEventListener('change', function() {
    if (this.checked) {
      studentCheckbox.checked = false;
    }
  });

  studentCheckbox.addEventListener('change', function() {
    if (this.checked) {
      teacherCheckbox.checked = false;
    }
  });

  // Handle form submission
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const role = teacherCheckbox.checked ? 'Викладач' : (studentCheckbox.checked ? 'Студент' : 'Не вибрано');

    if (!email || !password || role === 'Не вибрано') {
      alert('Будь ласка, заповніть всі поля та виберіть роль.');
      return;
    }

    console.log('Форма відправлена:', { email, password, role });
    // Here you would typically send this data to your server
    alert('Форма успішно відправлена!');
  });

  // Handle close button
  closeButton.addEventListener('click', function() {
    // Here you would typically close the modal or redirect
    console.log('Закрити форму');
    alert('Форма закрита');
  });
});


//registration
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const closeButton = document.querySelector('.vector');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    // Here you would typically send the data to a server
    alert('Форму відправлено!');
  });

  closeButton.addEventListener('click', function() {
    // Here you would typically close the modal or navigate away
    alert('Закриття форми');
  });
});
//index

