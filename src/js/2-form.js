const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";


const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (saved) {
  form.email.value = saved.email || "";
  form.message.value = saved.message || "";
}

form.addEventListener("input", () => {
  const data = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});


form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    email: form.email.value,
    message: form.message.value,
  };

  if (!data.email || !data.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});