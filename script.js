document.addEventListener("DOMContentLoaded", () => {

    /* ================= HEADER ================= */

    const header = document.querySelector(".header");

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    /* ================= ANIMAÇÕES ================= */

    const animatedElements = document.querySelectorAll(
        ".section, .service-card, .plan-card, .product-card, .cut-card, .space-card, .instagram-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });


    /* ================= LINKS INTERNOS ================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ================= PARALLAX HERO ================= */

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition < window.innerHeight) {
                heroImage.style.transform =
                    `translateY(${scrollPosition * 0.15}px)`;
            }

        });

    }


    /* =====================================================
       WHATSAPP — MENSAGENS AUTOMÁTICAS
       ===================================================== */

    const whatsappNumber = "5541991020242";

    function abrirWhatsApp(mensagem) {

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    }


    /* ================= BOTÕES DE SERVIÇOS ================= */

    document.querySelectorAll(".service-card a").forEach((button) => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const card = this.closest(".service-card");
            const nomeServico = card.querySelector("h3").textContent.trim();

            const mensagens = {

                "Corte Masculino":
                    "Olá! Gostaria de saber se tem horário disponível para Corte Masculino.",

                "Barba":
                    "Olá! Gostaria de saber se tem horário disponível para fazer a Barba.",

                "Sobrancelha":
                    "Olá! Gostaria de saber se tem horário disponível para fazer a Sobrancelha.",

                "Corte + Barba":
                    "Olá! Gostaria de saber se tem horário disponível para Corte + Barba.",

                "Corte + Barba + Sobrancelha":
                    "Olá! Gostaria de saber se tem horário disponível para Corte + Barba + Sobrancelha."

            };

            const mensagem =
                mensagens[nomeServico] ||
                `Olá! Gostaria de saber mais informações sobre o serviço ${nomeServico}.`;

            abrirWhatsApp(mensagem);

        });

    });


    /* ================= BOTÕES DOS PLANOS ================= */

    document.querySelectorAll(".plan-card a").forEach((button) => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const card = this.closest(".plan-card");
            const nomePlano = card.querySelector("h3").textContent.trim();

            const mensagem =
                `Olá! Gostaria de saber mais informações e verificar a disponibilidade do plano ${nomePlano}.`;

            abrirWhatsApp(mensagem);

        });

    });


    /* ================= BOTÕES DOS PRODUTOS ================= */

    document.querySelectorAll(".product-card .product-button").forEach((button) => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const card = this.closest(".product-card");
            const nomeProduto = card.querySelector("h3").textContent.trim();
            const preco = card.querySelector(".product-bottom strong").textContent.trim();

            const mensagem =
                `Olá! Gostaria de comprar o ${nomeProduto} (${preco}). Poderia me passar mais informações?`;

            abrirWhatsApp(mensagem);

        });

    });


    /* ================= BOTÕES GERAIS DE AGENDAMENTO ================= */

    const mensagemAgendamento =
        "Olá! Gostaria de saber se tem horário disponível para agendar um atendimento.";

    document.querySelectorAll(
        ".header-button, .hero-buttons .btn-primary, .cta .btn-primary"
    ).forEach((button) => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            abrirWhatsApp(mensagemAgendamento);

        });

    });


    /* ================= ANO AUTOMÁTICO ================= */

    const footerText = document.querySelector(".footer p");

    if (footerText) {

        footerText.textContent =
            `© ${new Date().getFullYear()} Lion House BarberShop. Todos os direitos reservados.`;

    }

});