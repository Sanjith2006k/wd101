let uf = document.getElementById("usf");
const retrieveEntries = () => {
  let en = localStorage.getItem("user");
  if (en) {
    en = JSON.parse(en);
  } else {
    en = [];
  }
  return en;
};

let us = retrieveEntries();
const displayEntries = () => {
  const entries = retrieveEntries();
  const tableEntries = entries
    .map((entry) => {
      const namecell = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailcell = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordcell = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobcell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermscell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;

      const row = `<tr>${namecell}${emailcell}${passwordcell}${dobcell}${acceptTermscell}</tr>`;
      return row;
    })
    .join("\n");
  const table = `<table class="table-auto w-full"><tr>
    <th class="border px-4 py-2">Name</th>
    <th class="border px-4 py-2">Email</th>
    <th class="border px-4 py-2">Password</th>
    <th class="border px-4 py-2">Dob</th>
    <th class="border px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries}</table>`;
  let details = document.getElementById("user");
  details.innerHTML = table;
};

const saveusform = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;
  const entry = {
    name,
    email,
    password,
    dob,
    acceptTerms,
  };
  us.push(entry);
  localStorage.setItem("user", JSON.stringify(us));
  displayEntries();
};

uf.addEventListener("submit", saveusform);
displayEntries();



