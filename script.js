document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 'subjects productivity guide',
            title: 'Produtividade Essencial',
            description: 'Organize sua vida e conquiste seus objetivos com técnicas práticas!',
            price: 'R$ 29,90',
            image: 'images/produtividade.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/QlA9k7L',
            trending: true
        },
        {
            id: 'healthy recipes guide',
            title: 'Receitas Saudáveis',
            description: 'Comidas deliciosas e fáceis pra você entrar na vibe fit!',
            price: 'R$ 19,90',
            image: 'images/Saude.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/sdee28v',
            trending: true
        },
        {
            id: 'python for beginners guide',
            title: 'Python para Iniciantes',
            description: 'Domine programação do zero e crie projetos incríveis!',
            price: 'R$ 38,50',
            image: 'images/python.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/LA8mYNf'
        },
        {
            id: 'military disapproval guide',
            title: 'Reprovação no Exército',
            description: 'Segredos pra arrasar na seleção militar com confiança!',
            price: 'R$ 24,90',
            image: 'images/reprovado.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/FqbaUXs'
        },
        {
            id: 'Marketing Digital',
            title: 'Marketing Digital',
            description: 'Estratégias poderosas pra bombar seu negócio online!',
            price: 'R$ 29,90',
            image: 'images/Marketing.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/00DbxIY'
        },
        {
            id: 'Como Usar IA para Ganhar Dinheiro',
            title: 'IA Futuro',
            description: 'Use a IA pra alavancar sua carreira e faturar alto!',
            price: 'R$ 29,90',
            image: 'images/IA.jpg',
            kiwifyLink: 'https://kiwify.com.br/seu-link-aqui-2'
        }
    ];

    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        if (product.trending) productCard.classList.add('trending');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <a href="${product.kiwifyLink}" class="buy-btn" target="_blank" rel="noopener">Garanta Já!</a>
        `;
        productGrid.appendChild(productCard);
    });

    // Countdown timer
    const timerElement = document.getElementById('timer');
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (distance < 0) {
            timerElement.textContent = 'Oferta Expirada!';
        } else {
            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
});

