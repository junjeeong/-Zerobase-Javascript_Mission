import { makeDOMWithProperties } from "./dom.js";

export const makeNewsNav = () => {
    const root = document.getElementById('root');
    const navContainer = makeDOMWithProperties('div', {
        className: 'category-list'
    });
    const navUl = document.createElement('ul');
    const categories = ['전체', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술'];

    categories.forEach((category, index) => {
        const li = document.createElement('li');
        li.id = category;
        li.className = 'category-item' + (index === 0 ? ' active' : ''); // 첫 번째 항목을 활성화
        li.innerHTML = category;
        navUl.appendChild(li);
    });

    root.appendChild(navContainer);
    navContainer.appendChild(navUl);

    return;
};
