
document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
    .then(() => {
      alert(Welcome, ${name}. You can vote.);
    })
    .catch(() => {
      alert(Oh sorry ${name}. You aren't old enough.);
    });
});