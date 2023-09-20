import { makeDOMWithProperties } from "./dom.js";

export const makeNewsListComponent = () => {
    const newsListContainer = makeDOMWithProperties('div', {
        className: 'news-list-container'
    });

    const newsListArticle = makeDOMWithProperties('article', {
        className: 'news-list'
    });

    root.appendChild(newsListContainer);
    newsListContainer.appendChild(newsListArticle);

    return;
};