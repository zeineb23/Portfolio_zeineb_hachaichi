const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener('submit', (e) => {
    Email.send({
        SecureToken: "7fcaf761-1227-4b46-b498-70361a8407bc",
        To: "zeineb.hachaichi2306@gmail.com",
        From: "zeineb.hachaichi2306@gmail.com",
        Subject: "New project",
        Body: `
            First Name: ${first.value}\n
            Last Name: ${last.value}\n
            Email: ${email.value}\n
            State: ${state.value}\n
            City: ${city.value}\n
            Zip: ${zip.value}\n
            Project: ${project.value}\n
        `
    }).then(
      message => alert(message)
  );
});
