
  function submitForm(event) {
    event.preventDefault();
    document.getElementById('responseMsg').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('responseMsg').classList.add('hidden');
    }, 3000);
  }
  