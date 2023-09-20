export const loadInitialNews = () => {
    const newsArticle = document.getElementsByClassName('news-list')[0];
    const apiKey = 'fd0286c7f9e54526b99365fc19b6db04';
    const defaultCategory = '전체'; // '전체' 카테고리를 기본값으로 설정

    // 기본 카테고리의 뉴스를 가져오기 위한 URL
    const url = `https://newsapi.org/v2/everything?q=${defaultCategory}&apiKey=${apiKey}`;

    // '전체' 카테고리의 뉴스를 불러오기
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let articles = data.articles.slice(0, 5);
            articles.forEach(article => {
                let newsItem = document.createElement('section');
                newsItem.className = 'news-item';

                // 뉴스 썸네일 
                let thumbnail = document.createElement('div');
                thumbnail.className = 'thumbnail';

                // 뉴스 링크
                let a = document.createElement('a');
                a.href = article.url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';

                // 뉴스 썸네일 
                let thumbImg = document.createElement('img');
                thumbImg.src = article.urlToImage;
                if (!article.urlToImage) {
                    thumbImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
                }
                thumbImg.alt = 'thumbnail';

                // 뉴스 내용(제목+설명)
                let contents = document.createElement('div');
                contents.className = 'contents';

                // 뉴스 제목
                let title = document.createElement('h2');
                title.textContent = article.title;

                // 뉴스 설명
                let description = document.createElement('p');
                description.textContent = article.description;
                if (!description.textContent) {
                    description.textContent = '';
                }

                a.appendChild(thumbImg);
                thumbnail.appendChild(a);
                contents.appendChild(title);
                contents.appendChild(description);
                newsItem.appendChild(thumbnail);
                newsItem.appendChild(contents);
                newsArticle.appendChild(newsItem);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
