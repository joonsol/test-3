

const swiper = new Swiper(".dep2-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
});


// console.log("데이터 로드 완료:", peopleData);
const heroSlider = new Swiper(".hero-slider", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // 페이지네이션 클릭 가능하도록 설정
    },
    loop: true,

});


const newsSlider = new Swiper(".news-slider", {
    // slidesPerView: 1,
    direction: "vertical",
    navigation: {
        nextEl: ".news-slider .down",
        prevEl: ".news-slider .up",
        clickable: true, // 페이지네이션 클릭 가능하도록 설정
    },
    loop: true,
    // autoplay: true
});




$(function () {

    const $mainNav = $('.main-nav li a');
    const $subNav = $('.sub-nav-wrap');
    const $schGoBtn = $('.search-btn');
    const $schWrap = $('.search-wrap');
    const $schCBtn = $('.search-c-btn');

    // 검색 버튼 클릭 시 검색창 활성화
    $schGoBtn.on('click', function (event) {
        event.stopPropagation(); // 클릭 이벤트가 body로 전파되지 않도록 차단
        $schWrap.fadeIn(300).addClass('active');
    });

    // 검색창 닫기 버튼 클릭 시 닫기
    $schCBtn.on('click', function (event) {
        event.stopPropagation();
        $schWrap.fadeOut(300).removeClass('active');
    });

    // 검색창 외부 클릭 시 닫기
    $(document).on('click', function (event) {
        if (!$schWrap.is(event.target) && !$schWrap.has(event.target).length && !$schGoBtn.is(event.target)) {
            $schWrap.fadeOut(300).removeClass('active');
        }
    });

    // 내비게이션 hover 이벤트
    $mainNav.hover(function () {
        // $subNav.stop().slideDown(300);
    });

    // 마우스가 떠나면 일정 시간 후 닫힘
    $subNav.on('mouseleave', function () {
        setTimeout(function () {
            $subNav.stop().slideUp(300);
        }, 500);
    });

});
