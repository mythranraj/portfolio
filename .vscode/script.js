function submitForm() {
    const msg = document.getElementById('responseMsg');
    msg.classList.remove('hidden');
    setTimeout(() => {
      msg.classList.add('hidden');
    }, 3000);
  }
  