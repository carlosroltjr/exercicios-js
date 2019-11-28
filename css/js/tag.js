const cores = {
    p: '#388e3c'
    , div: '#1565c0'
    , span: '#e53935'
    , section: '#f67809'
    , ul: '#5e35b1'
    , ol: '#fbc02d'
    , header: '#d81b60'
    , nav: '#64dd17'
    , main: '#00acc1'
    , footer: '#304ffe'
    , form: '#9f6581'
    , body: '#25b6da'
    , padrao: '#616161'
    , get(tag) {
        return this[tag] ? this[tag] : this.padrao;
    }
}

document.querySelectorAll('.tag').forEach(el => {
    const nomeTag = el.tagName.toLowerCase();

    el.style.borderColor = cores.get(nomeTag);

    // Se o elemento não tiver nolabel na lista de classes dele...
    if (!el.classList.contains('nolabel')) {
        // crie o elemento 'label' dentro dos elementos que tem a classe 'tag'
        const label = document.createElement('label');
        label.style.backgroundColor = cores.get(nomeTag);
        label.innerHTML = nomeTag;
        // que vai ser inserido antes do primeiro elemento 
        // [0] dentro do elemento com a classe 'tag'
        el.insertBefore(label, el.childNodes[0]);
    }
});