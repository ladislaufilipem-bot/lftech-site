/*=========================================================
    LF TECH v2.0
    script.js
=========================================================*/

// =======================
// MENU MOBILE
// =======================

const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (menu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

// Fecha menu ao clicar em um link
document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// =======================
// HEADER
// =======================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// =======================
// BOTÃO VOLTAR AO TOPO
// =======================

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =======================
// FAQ
// =======================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");
                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});

// =======================
// CONTADORES
// =======================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const speed = target / 70;

        const update = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// =======================
// SCROLL REVEAL
// =======================

const reveals = document.querySelectorAll(
    ".service-card, .stat-card, .timeline-item, .about-card, .contact-card, .faq-item"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s ease";

    revealObserver.observe(el);

});

// =======================
// EFEITO PARALLAX
// =======================

const background = document.querySelector(".background");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    if (background) {

        background.style.transform = `translateY(${offset * 0.15}px)`;

    }

});

// =======================
// ANIMAÇÃO DOS BOTÕES
// =======================

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

// =======================
// ANO AUTOMÁTICO (opcional)
// =======================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} LF Tech • Todos os direitos reservados.`;

}

console.log("🚀 LF Tech carregada com sucesso!");
