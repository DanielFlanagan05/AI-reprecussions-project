document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const btns = [
      document.getElementById('homeBtn'),
      document.getElementById('example1Btn'),
      document.getElementById('example2Btn'),
      document.getElementById('referencesBtn'), // Add this line
    ];
  
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
  
        tabs.forEach(tab => {
          if (tab.id === e.target.getAttribute('href').substring(1)) {
            tab.style.display = 'block';
          } else {
            tab.style.display = 'none';
          }
        });
      });
    });
  });
  