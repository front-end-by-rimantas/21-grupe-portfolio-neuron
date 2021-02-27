function achievements(data) {
    //validation
    if (data === undefined) {
        return 'No parameters found';
    }
    if (typeof data !== 'object' || Array.isArray(data)) {
        return 'Invalid parameter provided';
    }
    const allowedKeys = ['selector', 'list'];
    const keys = Object.keys(data);

    if (keys.length !== allowedKeys.length) {
        return 'Incorect number of keys';
    }
    for (const key of keys) {
        if (!allowedKeys.includes(key)) {
            return 'Incorect keys provided';
        }
    }
    if (data.selector === '' || data.selector === ' ') {
        return 'Selector has not been specified';
    }
    if (!Array.isArray(data.list) || data.list.length === 0) {
        return 'Empty list parameter provided';
    }

    //logic
    const { selector, list } = data;
    let HTML = '';
    const DOM = document.querySelector(selector);

    for (const item of list) {
        const achievNumber = Math.floor(item.achievNumber);
        if (
            typeof item === 'object' &&
            !Array.isArray(item) &&
            achievNumber &&
            typeof achievNumber === 'number' &&
            achievNumber !== '' &&
            achievNumber > 0 &&
            achievNumber !== 0 &&
            achievNumber.toString().length < 7 &&
            item.achievTitle &&
            typeof item.achievTitle === 'string' &&
            item.achievTitle !== '' &&
            item.achievTitle !== ' '
        ) {
            HTML += `<div class="col-12 col-md-6 col-lg-3 achievement-block">
            <div class="img-blob">
            <img src="./img/achievements-blob.png" alt="">
            </div>
            <div class="achievement-text">
            <div class="number-count">${achievNumber}</div>
            <h4>${item.achievTitle}</h4>
            </div>
            </div>`;
        }
    }
    //return resul

    DOM.innerHTML = HTML;

    //post validation

    if ((HTML = '')) {
        return 'No valid data parameters found';
    }
}
export { achievements };
