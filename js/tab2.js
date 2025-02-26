import { peopleData } from "./peopleData.js";

document.addEventListener("DOMContentLoaded", () => {
  const dep2Sliders = document.querySelectorAll(".dep2-slider");
  const dep2Tabs = document.querySelectorAll(".tab li");

  const prevButton = document.querySelector(".swiper-button-prev");
  const nextButton = document.querySelector(".swiper-button-next");

  let currentTab = 0;
  let currentSwiper = null;

  initializeTab(currentTab);
  updateSlider(currentTab);

  dep2Tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      initializeTab(index);
      updateSlider(index);
    });
  });

  function initializeTab(index) {
    dep2Tabs.forEach((tab) => tab.classList.remove("active"));
    dep2Sliders.forEach((slider) => slider.classList.remove("active"));

    dep2Tabs[index].classList.add("active");
    dep2Sliders[index].classList.add("active");
  }

  function updateSlider(tabIndex) {
    // 현재 활성화된 슬라이더 찾기
    const activeSlider = dep2Sliders[tabIndex];
    if (!activeSlider) return;

    const wrapper = activeSlider.querySelector(".swiper-wrapper");
    if (!wrapper) {
      console.error("Swiper wrapper not found for slider", activeSlider);
      return;
    }

    // 기존 슬라이드 초기화
    wrapper.innerHTML = "";

    const filteredData = peopleData[`tab-${tabIndex + 1}`] || [];

    if (filteredData.length === 0) {
      wrapper.innerHTML = "<p class='no-data'>해당 카테고리의 데이터가 없습니다.</p>";
    } else {
      filteredData.forEach((person) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
          <a href="${person.profile_link}">
            <div class="img-wrap">
              <img src="${person.image}" alt="${person.name}">
            </div>
            <div class="txt-wrap">
              <h3>${person.name}</h3>
              <p class="txt">${person.title}</p>
              <p>${person.birth_date} ~ ${person.death_date}</p>
              <div>자세히 보기</div>
            </div>
          </a>
        `;
        wrapper.appendChild(slide);
      });
    }

    // 기존 Swiper 인스턴스 제거
    if (currentSwiper) {
      currentSwiper.destroy(true, true);
      currentSwiper = null;
    }

    // 새로운 Swiper 인스턴스 생성 (현재 활성화된 슬라이더에만 적용)
    currentSwiper = new Swiper(activeSlider, {
      slidesPerView: 5,
      loop: true,
      autoplay: { delay: 3000 },
      initialSlide: 0,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
});
