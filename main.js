// ===============================
// CAMBIAR COLOR DEL HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "none";
    }

});


// ===============================
// MENÚ ACTIVO AL HACER SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// VALIDAR FORMULARIO
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const mensaje = form.querySelector("textarea").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {

        alert("Por favor completa todos los campos.");

        return;
    }

    alert("¡Gracias por tu mensaje! Te responderé lo antes posible.");

    form.reset();

});


// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

const blog = document.querySelector("#blog");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.3

});

blog.classList.add("hidden");
observer.observe(blog);