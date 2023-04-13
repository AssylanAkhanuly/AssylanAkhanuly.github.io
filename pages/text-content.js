const fillText = (title, desc) => {
    const titleEl = document.getElementById('text-title')
    const descEl = document.getElementById('text-desc')

    titleEl.innerText = title;
    descEl.innerText = desc
    descEl.scrollIntoView({
        behavior: "smooth"
    });
}