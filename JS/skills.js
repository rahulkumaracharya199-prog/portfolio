const skills = [
    {
        title: "HTML",
        description: "Semantic markup, accessibility, SEO-friendly structure.",
        image: "Images/Skills/1.svg"
    },
    {
        title: "CSS",
        description: "Responsive layouts, Flexbox, Grid, animations.",
        image: "Images/Skills/2.svg"
    },
    {
        title: "Tailwind CSS",
        description: "Utility-first styling, rapid UI development.",
        image: "Images/Skills/3.svg"
    },
    {
        title: "JavaScript",
        description: "DOM manipulation, ES6+, async programming.",
        image: "Images/Skills/4.svg"
    },
    {
        title: "React",
        description: "Components, hooks, state management.",
        image: "Images/Skills/5.svg"
    },
    {
        title: "Firebase",
        description: "Authentication, Firestore, hosting basics.",
        image: "Images/Skills/6.svg"
    },
    {
        title: "Git",
        description: "Version control, branching, merging, collaborative workflows.",
        image: "Images/Skills/7.svg"
    },
    {
        title: "GitHub",
        description: "Repository hosting, pull requests, issue tracking, CI/CD.",
        image: "Images/Skills/8.svg"
    },
    {
        title: "C Language",
        description: "Algorithms, data structures, low-level programming.",
        image: "Images/Skills/9.svg"
    },
    {
        title: "Python",
        description: "Data analysis, web scraping, automation, Django.",
        image: "Images/Skills/10.svg"
    },
    {
        title: "Django",
        description: "Full-stack development, RESTful APIs, ORM, deployment.",
        image: "Images/Skills/11.svg"
    }
];

const container = document.getElementById("skills-container");

skills.forEach(skill => {
    container.innerHTML += `
        <div class="bg-slate-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition duration-300">
            <div class="flex gap-1 items-center mb-2">
                <h3 class="text-xl font-semibold text-sky-400">
                    ${skill.title}
                </h3>
                <img src="${skill.image}" alt="${skill.title}" class="w-6 h-6 object-cover" />
            </div>
            <p class="text-gray-400">
                ${skill.description}
            </p>
        </div>
    `;
});


/* Mobile Menu */

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
