// do something!

// Nav 컴포넌트 생성
const navContainer = document.getElementById('category-list');
const categories = ['전체보기', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술'];

const navUl = document.createElement('ul');
categories.forEach((category, index) => {
  const li = document.createElement('li');
  li.id = category.toLowerCase();
  li.className = 'category-item' + (index === 0 ? ' active' : ''); // 첫 번째 항목을 활성화
  li.textContent = category;
  navUl.appendChild(li);
});

navContainer.appendChild(navUl);

// NewsList 컴포넌트 생성
const newsListContainer = document.getElementById('news-list-container');

// 이 부분에서 뉴스 항목을 동적으로 추가할 수 있습니다.

// 예시로 하나의 뉴스 항목을 추가하는 코드
const newsItem = document.createElement('article');
newsItem.className = 'news-list';
newsItem.innerHTML = `
  <section class="news-item">
    <div class="thumbnail">
      <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
        <img
          src="https://image.ajunews.com/content/image/2022/02/20/20220220180523846963.jpg"
          alt="thumbnail" />
      </a>
    </div>
    <div class="contents">
      <h2>
        <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
          ​[뉴욕증시 주간전망] 러시아-우크라이나 긴장 속 변동성 지속 - 아주경제
        </a>
      </h2>
      <p>
        이번 주(21일~25일·현지시간) 뉴욕 증시는 러시아와 우크라이나 간 지정학적 긴장과 우크라이나 간 미국
        연방준비제도(Fed·연준)의 긴축 우려에 계속해서...
      </p>
    </div>
  </section>
`;

newsListContainer.appendChild(newsItem);
