/**
 *
 * @param {string} tagName
 * @param {object} attributes
 * @return {HTMLElement}
 */
export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName)
    for(const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute, value)
    }

    return element
}



/**
 *
 * @param {Array}desAlbums
 * @param {HTMLElement}laListe
 */
export function injectElements(desAlbums, laListe) {
    for (let value of Object.values(desAlbums)) {
        let liListe = createElement('li')
        liListe.innerText = `${value.title} - ${value.vue}`
        laListe.append(liListe)
    }
}
export function renewTag(tagName) {
    const laListe = document.querySelector(tagName)
    if (laListe !== null) {
        laListe.remove()
    }
    return createElement(tagName)
}