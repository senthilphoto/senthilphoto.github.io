function init() {
    fetch("list.json")
        .then(res => res.json())
        .then(json => {
            Object.keys(json.sections)
                .sort((a, b) => {
                    return -1 * a.localeCompare(b);
                })
                .forEach(section => {
                    document.body.append(new SectionHeader(section));
                    let album_grid = document.createElement("div");
                    album_grid.classList.add("album-grid");
                    json.sections[section]
                        .forEach(item => {
                            album_grid.append(new AlbumItem(item))
                        })
                    document.body.appendChild(album_grid);
                })
        }).catch(err => document.body.innerHTML += err.message);
}

class SectionHeader {
    constructor(text) {
        let div = document.createElement("div");
        div.classList.add("section-heading");
        div.innerText = text;
        return div;
    }
}

class AlbumItem {
    constructor(item) {
        let album_item = document.createElement("a");
        album_item.classList.add("album");
        album_item.style.backgroundImage = `url(${item.thumb})`;
        album_item.setAttribute("href", item.path)
        let album_title = document.createElement("div");
        album_title.classList.add("album-title");
        album_title.innerText = item.name;
        album_item.appendChild(album_title);
        return album_item;
    }
}

document.addEventListener("DOMContentLoaded", init);