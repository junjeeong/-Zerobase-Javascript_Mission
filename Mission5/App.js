import { makeNewsNav } from "./module/newsNav.js"
import { clickCartegoryEvent } from "./module/clickCartegoryEvent.js";
import { makeNewsListComponent } from "./module/newList.js";
import { loadInitialNews } from "./module/initialNews.js";
import { getNewsItems } from "./module/newsItems.js";

// 페이지가 로드되면 실행되는 함수
document.addEventListener("DOMContentLoaded", function (){
    // Nav 컴포넌트 생성
    makeNewsNav();
    
    // 카테고리 누를 때마다 active 변경하기
    clickCartegoryEvent();
    
    // NewsList 컴포넌트 생성
    makeNewsListComponent();

    //초기 전체 Newslist 불러오기
    loadInitialNews();
    
    // 카테고리 별 뉴스 가져오기
    getNewsItems();

});