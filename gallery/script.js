function init() {
    fetch("list.txt")
        .then(res => res.text())
        .then(text => {
            let arr = text.split("\n");
            arr.forEach((url) => {
                let img = new Image();
                img.setAttribute("loading", "lazy");
                img.src = url;
                img.addEventListener("click", () => window.location = url);
                document.body.appendChild(img);
            })
        });
}

document.addEventListener("DOMContentLoaded", init);