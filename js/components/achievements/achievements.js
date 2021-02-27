function achievements(data) {

    //validation

    //logic
    const { selector, list } = data
    let HTML = "";
    const DOM = document.querySelector(selector)


    for (const item of list) {
        HTML += `<div class="col-12 col-md-6 col-lg-3 achievement-block">
                    <div class="img-blob">
                        <img src="./img/achievements-blob.png" alt="">
                    </div>
                    <div class="achievement-text">
                        <div class="number-count">${item.achievNumber}</div>
                        <h4>${item.achievTitle}</h4>
                    </div>
                </div>
`
    }
    DOM.innerHTML = HTML

    //post validation

    //return resul

}

export { achievements };


// const DOM = document.querySelector(selector);
// let number = parseInt(DOM.innerText);

// const timer = setInterval(function () {
//     DOM.innerText = number--;
//     if (number < 0) {
//         DOM.innerText = "Finito";
//         clearInterval(timer);
//     }
// }, 10);
