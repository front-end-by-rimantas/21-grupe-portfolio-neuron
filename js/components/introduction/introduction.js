function introduction(data) {
    //validation

    //logic
    const { selector, list } = data;
    const DOM = document.querySelector('.introduction > .introductionColumn');

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="introductionColumn">
                    <img src="${item.img}" alt="paveikslelis">
                    <h5>${item.h5}</h5>
                    <p>${item.p}</p>
                </div>`;
    }

    //post logic validation

    //rezult return

    DOM.innerHTML = HTML;

    return HTML;
}

export { introduction };
