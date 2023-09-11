function StarRating($container) {
    //해당 요소에 class 'star-rating-container' 추가
    $container.classList.add('star-rating-container');

    //link태그 추가 (**주의 script태그 위쪽에)
    const newLink = document.createElement('link');
    newLink.href = 'star-rating/theme.css';
    newLink.rel = 'stylesheet';
    
    const linkElements = document.head.querySelectorAll('link');

    const lastLink = linkElements[linkElements.length - 1];
    lastLink.parentNode.insertBefore(newLink, lastLink.nextSibling);

    //rating star 띄우기
    let number_star = $container.getAttribute("data-max-rating");
    
    for(let i = 0; i< number_star; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('bx', 'bxs-star');
        $container.appendChild(starIcon);
        
        starIcon.addEventListener('click', clickStar);
        starIcon.addEventListener('mouseover', hoverStar);

        function clickStar(e) {
            e.target.classList.add('selected');
        }
    
        function hoverStar(e) {
            e.target.classList.add('hovered');
        }
    }
}

export default StarRating;