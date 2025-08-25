document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 'subjects productivity guide',
            title: 'Produtividade Essencial',
            description: 'Organize sua vida e arrase nos estudos!',
            price: 'R$ 29,90',
            image: 'images/produtividade.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/QlA9k7L',
            trending: true
        },
        {
            id: 'healthy recipes guide',
            title: 'Receitas Saudáveis',
            description: 'Comidas práticas pra sua vibe fit!',
            price: 'R$ 19,90',
            image: 'images/Saude.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/sdee28v',
            trending: true
        },
        {
            id: 'python for beginners guide',
            title: 'Python para Iniciantes',
            description: 'Aprenda a codar do zero, na prática!',
            price: 'R$ 32,50',
            image: 'images/python.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/LA8mYNf'
        },
        {
            id: 'military disapproval guide',
            title: 'Reprovação no Exército',
            description: 'Dicas pra mandar bem na seleção!',
            price: 'R$ 24,90',
            image: 'images/reprovado.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/FqbaUXs'
        },
        {
            id: 'Marketing Digital',
            title: 'Marketing Digital',
            description: 'Aprenda estratégias e ferramentas para impulsionar seu negócio online',
            price: 'R$ 29,90',
            image: 'images/Marketing.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/00DbxIY'
        },
        {
            id: 'Como Usar IA para Ganhar Dinheiro',
            title: 'IA Futuro',
            description: 'Guia para Alavancar Sua Vida Profissional Usando IA',
            price: 'R$ 29,90',
            image: 'images/IA.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/N25hZF5'
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
            <a href="${product.kiwifyLink}" class="buy-btn" target="_blank" rel="noopener">Pegar Agora</a>
        `;
        productGrid.appendChild(productCard);
    });

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



