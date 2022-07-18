FetchLocalStorage();
IncomeExpense();

function FormValidation() {
  let Key = document.getElementById('text');
  let Value = document.getElementById('amount');

  if (Key.value == '' || Value.value == '') {
    alert('Please Fill the Text & Amount!');
  }
}

function ReadLocalStorage() {
  let Key = document.getElementById('text').value;
  let Value = document.getElementById('amount').value;
  localStorage.setItem(Key, Value);
  document.getElementById('text').value = '';
  document.getElementById('amount').value = '';
  FetchLocalStorage();
}

function FetchLocalStorage() {
  for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    if(value > 0) {
      document.querySelector("#list").innerHTML += `<li class="plus">${key} : ${value}</li>`;
    }
    else {
      document.querySelector("#list").innerHTML += `<li class="minus">${key} : ${value}</li>`;
    }
  }
}

function ClearLocalStorage() {
  localStorage.clear();
  document.querySelector("#list").innerHTML = '';
}

function IncomeExpense() {
  let Income = Expense = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    if (value > 0) {
      Income += parseInt(value);
    } else {
      Expense += parseInt(value);
    }
  }
  document.querySelector("#money-plus").innerHTML = `+${Income}`;
  document.querySelector("#money-minus").innerHTML = `${Expense}`;
  document.querySelector("#balance").innerHTML = `$${Income + Expense}`;
}
