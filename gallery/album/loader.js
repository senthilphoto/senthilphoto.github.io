function init() {
    fetch("list.json")
        .then(res => res.json())
        .then(json => {
            document.title = `${json.title} | Album by Senthil Kumar Photography`;
            json.images.forEach(src => {
                let img = document.createElement("img");
                img.src = src;
                document.body.appendChild(img);
                img.addEventListener("click", () => window.location = img.src);
            });
        }).catch(err => document.body.innerText += err.message);
}

document.addEventListener("DOMContentLoaded", init);