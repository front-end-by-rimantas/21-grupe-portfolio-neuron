/*function introduction(data) {
    //validation

    //logic
    const { selector, list } = data;
    const DOM = document.querySelector('.introduction');

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="column">
                    <i class="${item.img}"></i>
                    <h5>${item.h5}</h5>
                    <p>${item.p}</p>
                </div>`;
    }

    //post logic validation

    //rezult return

    DOM.insertAdjacentHTML('afterbegin', HTML);

    return HTML;
}

export { introduction };
