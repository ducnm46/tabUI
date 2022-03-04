const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
// console.log(tabs);
const panes = $$('.pane-item');
// console.log(panes);

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
// console.log($('.tabs .line'));

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        console.log(tab);
        $('.tab-item.active').classList.remove('active');
        $('.pane-item.active').classList.remove('active');

        tab.classList.add('active');
        pane.classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }

})