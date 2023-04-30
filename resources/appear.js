var fadeClasses = ["fade-right", "fade-in", "fade-left", "fade-bottom"];

fadeClasses.forEach(item => {
    fadeInEl = Array.prototype.slice.call(document.getElementsByClassName(item))
    if(fadeInEl) {
        fadeInObserver = new IntersectionObserver(function ( entries, fadeInObserver) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return

                entry.target.classList.add("active");
                fadeInObserver.unobserve(entry.target);
            })
        }, {
            rootMargin: "0px 0px 0px 0px"
        })

        fadeInEl.forEach(fader => fadeInObserver.observe(fader))
    }
})





