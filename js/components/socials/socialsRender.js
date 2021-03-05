function socialsRender(data) {
    //validation
    //logic
    const { selector, list } = data;
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of list) {
        HTML += `<a href="${item.href}" target="_blank" rel="noreferrer noopener" class="fa fa-${item.icon}"></a>`;
    }
    //result
    DOM.innerHTML = HTML;

    //post logic validation
    if (HTML === '') {
        return console.error('ERROR: no objects in the data list');
    }
}

export { socialsRender };
