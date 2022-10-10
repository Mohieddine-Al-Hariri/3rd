const container = document.querySelectorAll('#container');
const taskbar = document.querySelector('#taskbar');

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show", entry.isIntersecting);
    })
    },
{
    threshold: 0.25,
    }
);

container.forEach(cont =>{
    observer.observe(cont)
});
