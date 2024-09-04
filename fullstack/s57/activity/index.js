const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

function updateFullName() {
  const fullName = `${txtFirstName.value} ${txtLastName.value}`;
  spanFullName.innerHTML = fullName;
}

txtFirstName.addEventListener('keyup', updateFullName);
txtLastName.addEventListener('keyup', updateFullName);
