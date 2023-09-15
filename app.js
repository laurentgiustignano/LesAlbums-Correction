import {injectElements, renewTag} from "./functions/dom.js";
import {mesDatas} from "./datas.js";

const wrapper = document.querySelector('#albumsAvecVues')
const loader = document.createElement('p')
let albumsAvecVues = []
loader.innerText = 'Chargement en cours...'
wrapper.append(loader)


/**
 * Sélectionne les albums avec les meilleures vues
 */
function top3() {
    const laListe = renewTag('ul');
    wrapper.append(laListe)

    const debutTop3 = 0
    const finTop3 = 3

    const albumsTries = Array.from(albumsAvecVues)
        .sort((album1, album2) => album2.vue - album1.vue)
        .slice(debutTop3, finTop3)

    injectElements(albumsTries, laListe);
}

/**
 * Affiche les albums avec plus de 9000 vues
 */
function bestOf() {
    const laListe = renewTag('ul');
    wrapper.append(laListe)

    const albumsFiltres = albumsAvecVues
        .filter((album) => {
            const NombreDeVues = 9000;
            return album.vue >= NombreDeVues;
        })

    injectElements(albumsFiltres, laListe);
}


/**
 *
 * @param desAlbums
 * @return {*}
 */
function ajouterVues(desAlbums) {
    return desAlbums.map((albums) => {
        return {...albums, vue: Math.floor(Math.random() * 100 + 1) * 100} // Vue entre 100 et 10000
    })
}


function tous() {
    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(albumsAvecVues, laListe);
}


const albums = [...mesDatas]

if (albums.length > 0) {

    loader.remove() // le chargement a réussi.

    document.querySelector('#top3').addEventListener('click', top3)
    document.querySelector('#bestof').addEventListener('click', bestOf)
    document.querySelector('#tous').addEventListener('click', tous)

    albumsAvecVues = ajouterVues(albums)

}
else {

    loader.innerText = "Impossible de contacter la ressource distante"
    loader.style.color = 'red'
}
