function StarRating($container) {
    // 해달 요소에 class 'star-rating-container' 추가
    $container.classList.add('star-rating-container');
  
    // link 태그 추가 (**주의: script 태그 위쪽에)
    const newLink = document.createElement('link');
    newLink.href = 'star-rating/theme.css';
    newLink.rel = 'stylesheet';
  
    const linkElements = document.head.querySelectorAll('link');
    const lastLink = linkElements[linkElements.length - 1];
    lastLink.parentNode.insertBefore(newLink, lastLink.nextSibling);
  
    // 별 아이콘 생성 및 이벤트 핸들러 추가
    let numberStar = $container.getAttribute("data-max-rating");
    const starIcons = []; // 별 아이콘 요소들을 저장하는 배열
  
    for (let i = 0; i < numberStar; i++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('bx', 'bxs-star');
      $container.appendChild(starIcon);
  
      starIcons.push(starIcon); // 배열에 별 아이콘 추가
    
      starIcon.addEventListener('click', () => clickStar(i));
      starIcon.addEventListener('mouseover', ()=> hoverStar(i));
    }
  
    function clickStar(selectedIndex) {
      // 클릭한 별을 포함하여 그 이전 별 아이콘에 'selected' 클래스 추가
      for (let i = 0; i <= selectedIndex; i++) {
        starIcons[i].classList.add('selected');
      }
  
      // 클릭한 별 이후의 별 아이콘은 'selected' 클래스 제거
      for (let i = selectedIndex + 1; i < starIcons.length; i++) {
        starIcons[i].classList.remove('selected');
      }

        // 클릭한 별점을 변수에 저장
        const rating = selectedIndex + 1;
        // rating-change 이벤트를 생성하고 데이터를 설정
        const event = new CustomEvent('rating-change', {
        detail: rating
    });
        // 이벤트를 $container 요소에 전달
        $container.dispatchEvent(event);
    }
  
    function hoverStar(hoveredIndex) {
      // 마우스 오버한 별을 포함하여 그 이전 별 아이콘에 'hovered' 클래스 추가
      for (let i = 0; i <= hoveredIndex; i++) {
        starIcons[i].classList.add('hovered');
      }
  
      // 마우스 오버한 별 이후의 별 아이콘은 'hovered' 클래스 제거
      for (let i = hoveredIndex + 1; i < starIcons.length; i++) {
        starIcons[i].classList.remove('hovered');
      }
    }
}
  
  export default StarRating;
  