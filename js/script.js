document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Menu Mobile ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Alterna ícone entre hamburguer e X
            const icon = mobileBtn.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fecha o menu ao clicar em um link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });


    // --- Lógica de Digitação (Typewriter) ---
    const codeElement = document.getElementById('typewriter');
    // O texto que será digitado (simulando uma classe PHP/JS)
    const codeText = `class Developer {
  constructor() {
    this.name = "Marcos 'BK'";
    this.stack = ["PHP", "JS", "SQL"];
    this.focus = "Real Solutions";
  }

  deploy() {
    console.log("Sistema no Ar!");
  }
}`;

    let index = 0;

    function typeCode() {
        if (index < codeText.length) {
            codeElement.innerHTML += codeText.charAt(index);
            index++;
            
            // Velocidade aleatória para parecer digitação humana (30ms a 100ms)
            setTimeout(typeCode, Math.random() * 70 + 30);
        }
    }

    // Inicia a digitação com um pequeno delay
    setTimeout(typeCode, 1000);
});