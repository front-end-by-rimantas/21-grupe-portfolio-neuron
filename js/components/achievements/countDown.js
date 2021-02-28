function countDown(data) {
    const DOMList = document.querySelectorAll('.number-count');
    for (const item of DOMList) {
        let number = item.innerText;
        let count = item.innerText - Math.min((item.innerText / 100) * 20, 100);
        const timer = setInterval(function () {
            item.innerText = count++;
            if (count >= number) {
                item.innerText = count;
                clearInterval(timer);
            }
        }, 20);
    }
}
export { countDown };
