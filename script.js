document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 'productivity',
            title: 'Produtividade Essencial',
            description: 'Desbloqueie hacks épicos pra dominar seu tempo e crushar metas!',
            price: 'R$ 29,90',
            image: 'images/produtividade.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/QlA9k7L',
            trending: true
        },
        {
            id: 'health',
            title: 'Receitas Saudáveis',
            description: 'Sabores insanos que te deixam fit e cheio de vibe positiva!',
            price: 'R$ 19,90',
            image: 'images/Saude.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/sdee28v',
            trending: true
        },
        {
            id: 'coding',
            title: 'Python para Iniciantes',
            description: 'Código como um ninja: do zero ao app que muda tudo!',
            price: 'R$ 38,50',
            image: 'images/python.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/LA8mYNf'
        },
        {
            id: 'military',
            title: 'Reprovação no Exército',
            description: 'Estratégias secretas pra arrasar na seleção e virar lenda!',
            price: 'R$ 24,90',
            image: 'images/reprovado.jpg',
            kiwifyLink: 'https://pay.kiwify.com.br/FqbaUXs'
        },
        {
            id: 'marketing',
            title: 'Marketing Digital',
            description: 'Táticas explosivas pra explodir seu negócio no digital!',
            price: 'R$ 29,90',
            image: 'images/Marketing.jpg',
            kiwifyLink: 'https://kiwify.com.br/seu-link-aqui-2'
        },
        {
            id: 'ai',
            title: 'IA Futuro',
            description: 'IA como superaliada: transforme sua carreira em ouro!',
            price: 'R$ 29,90',
            image: 'images/IA.jpg',
            kiwifyLink: 'https://kiwify.com.br/seu-link-aqui-2'
        }
    ];

    const productGrid = document.querySelector('.product-grid');
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        if (product.trending) productCard.classList.add('trending');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <a href="${product.kiwifyLink}" class="buy-btn" target="_blank" rel="noopener" data-product-id="${product.id}">Explodir Minha Vibe Agora!</a>
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

    // Quiz Logic
    const quizForm = document.getElementById('vibe-quiz');
    const quizResult = document.getElementById('quiz-result');
    const energySlider = quizForm.querySelector('input[name="energy"]');
    const energyValue = document.getElementById('energy-value');

    energySlider.addEventListener('input', (e) => {
        energyValue.textContent = e.target.value;
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(quizForm);
        const goal = formData.get('goal');
        const energy = formData.get('energy');

        if (!goal) {
            alert('Escolha seu goal principal!');
            return;
        }

        const recommendedProduct = products.find(p => p.id === goal);
        const discount = Math.floor(Math.random() * 20) + 5; // 5-25% discount
        const vibeMessage = energy > 7 ? 'Você tá on fire! Vamos amplificar isso!' :
                            energy > 4 ? 'Vibe equilibrada, hora de elevar!' :
                            'Energia baixa? Vamos recarregar com força!';

        quizResult.innerHTML = `
            <h3>${vibeMessage}</h3>
            <p>Recomendamos: <strong>${recommendedProduct.title}</strong></p>
            <p>${recommendedProduct.description}</p>
            <p>Preço especial pra você: <strong>${(parseFloat(recommendedProduct.price.replace('R$ ', '').replace(',', '.')) * (1 - discount/100)).toFixed(2).replace('.', ',')} ( ${discount}% OFF! )</strong></p>
            <a href="${recommendedProduct.kiwifyLink}" class="btn" target="_blank">Pegar com Desconto!</a>
        `;
        quizResult.style.display = 'block';
        quizResult.scrollIntoView({ behavior: 'smooth' });
        triggerConfetti();
    });

    // Chatbot Simulation
    const chatBubble = document.getElementById('chat-bubble');
    const chatModal = document.getElementById('chat-modal');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatBubble.addEventListener('click', () => {
        chatModal.style.display = chatModal.style.display === 'none' ? 'block' : 'none';
    });

    chatSend.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addChatMessage('Você: ' + userMessage, 'user');
        chatInput.value = '';

        // Simple bot responses
        setTimeout(() => {
            let botResponse = 'Hmm, interessante! Me conte mais.';
            if (userMessage.toLowerCase().includes('sim') || userMessage.toLowerCase().includes('recomend')) {
                botResponse = 'Perfeito! Qual sua vibe principal: produtividade, saúde, coding?';
            } else if (userMessage.toLowerCase().includes('produtividade')) {
                botResponse = 'O Guia de Produtividade é ideal! Clique aqui: ' + products[0].kiwifyLink;
            } else if (userMessage.toLowerCase().includes('saúde') || userMessage.toLowerCase().includes('receitas')) {
                botResponse = 'Experimente as Receitas Saudáveis! Link: ' + products[1].kiwifyLink;
            } // Add more responses as needed
            addChatMessage('Bot: ' + botResponse, 'bot');
        }, 1000);
    });

    function addChatMessage(text, className) {
        const message = document.createElement('p');
        message.textContent = text;
        message.className = className;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Confetti Effect
    const confettiCanvas = document.getElementById('confetti-canvas');
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    let confettiParticles = [];

    function createConfetti() {
        const colors = ['#FF4500', '#FFD700', '#FFE4B5'];
        return {
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 5 + 5,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        };
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiParticles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            p.y += p.speed;
            p.rotation += p.rotationSpeed;

            if (p.y > confettiCanvas.height) {
                p.y = -p.size;
                p.x = Math.random() * confettiCanvas.width;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    function triggerConfetti() {
        confettiCanvas.style.display = 'block';
        confettiParticles = Array.from({ length: 100 }, createConfetti);
        drawConfetti();
        setTimeout(() => {
            confettiCanvas.style.display = 'none';
        }, 5000);
    }

    // Trigger confetti on buy button click
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            triggerConfetti();
        });
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

    // Resize confetti canvas
    window.addEventListener('resize', () => {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    });
});
