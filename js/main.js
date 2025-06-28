
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
