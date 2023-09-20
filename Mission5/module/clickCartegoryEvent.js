export function clickCartegoryEvent() {
    
    const categoryList = document.querySelector('.category-list');
    const categoryItems = categoryList.querySelectorAll('.category-item');

    categoryList.addEventListener('click', (event) => {
        if (event.target.classList.contains('category-item')) {
            // 모든 카테고리 아이템의 클래스를 'category-item'으로 초기화
            categoryItems.forEach(item => {
                item.classList.remove('active');
            });
            // 클릭한 요소의 클래스를 'category-item active'로 변경
            event.target.classList.add('active');
            }
        });
}