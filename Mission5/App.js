import { makeNewsNav } from "./module/newsNav.js"
import { makeNewsListComponent } from "./module/newList.js";
import { getNewsItems } from "./module/newsItems.js";

// Nav 컴포넌트 생성
makeNewsNav();

// NewsList 컴포넌트 생성
makeNewsListComponent();

//뉴스리스트 newsAPI 활용해서 가져오기
getNewsItems();
