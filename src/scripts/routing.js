

let elems = document.body.querySelectorAll('.header__page-button_left');
let contentElements = document.querySelectorAll('.content>div');


const router = {
    prevEl: null,
    prevBlock: null,
    rout(href) {

        for (const elem of elems) {
            let hrefAttr = elem.getAttribute('href');
            if (hrefAttr === href || hrefAttr === href + '/' || hrefAttr === href + '#/') {

                this.prevEl?.classList.remove('page-button_active');
                this.prevEl = elem;
                elem.classList.add('page-button_active');

                for (let block of contentElements) {
                    if (block.dataset.content === href || block.dataset.content === href + '/' || block.dataset.content === href + '#/') {
                        this.prevBlock?.classList.add('content_inactive');
                        this.prevBlock = block;
                        block.classList.remove('content_inactive');
                    }
                }
            }
        }
    }
}           

window.addEventListener('load', () => {
    router.rout(window.location.hash);
});

window.addEventListener('hashchange', () => {
    router.rout(window.location.hash);
});

for (let elem of elems) {
    elem.addEventListener('click', () => {
        router.rout(elem.getAttribute('href'));
    });
}