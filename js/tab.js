import { peopleData } from "./peopleData.js";


console.log(peopleData['tab-2']);



document.addEventListener('DOMContentLoaded', () => {
  const dep2Sliders = document.querySelectorAll(".dep2-slider");
  const dep2Tabs = document.querySelectorAll(".tab li");


  let crt = 0

  tabInit(crt)
  updateSlider(crt)
  dep2Tabs.forEach((tab, i) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault()
      tabInit(i)
      updateSlider(i)
    })
  })


  function tabInit(i) {

    dep2Tabs.forEach((tab) => {
      tab.classList.remove('active')
    })
    dep2Sliders.forEach((slider) => {
      slider.classList.remove('active')
    })
    dep2Tabs[i].classList.add('active')
    dep2Sliders[i].classList.add('active')

  }




  function updateSlider(tabIndex) {

    dep2Sliders.forEach((slider, i) => {

      const wrapper = slider.querySelector(".swiper-wrapper");
      if (!wrapper) {
        console.error("Swiper wrapper not found for slider", slider);
        return;
      }
      wrapper.innerHTML = ""; // 기존 슬라이드 내용 초기화
      // console.log("Filtered Data:", filteredData);




      const filteredData = peopleData[`tab-${tabIndex + 1}`] || [];

      if (filteredData.length === 0) {
        wrapper.innerHTML = "<p class='no-data'>해당 카테고리의 데이터가 없습니다.</p>";
      } else {
        filteredData.forEach((person) => {
          const slide = document.createElement("div")
          slide.classList.add('swiper-slide')
          slide.innerHTML = `
                                   <a herf="#">
                        <div class="img-wrap">
                          <img src="${person.image}" alt="${person.name}">
                        </div>
                        <div class="txt-wrap">
                            <h3>${person.name}</h3>
                            <p class="txt">${person.title}</p>
                            <p>${person.birth_date} ~ ${person.death_date}</p>
                            <div href="${person.profile_link}">자세히 보기</div>
                        </div>
                        </a>
            `


          wrapper.appendChild(slide)
        })
      }
      new Swiper(slider, {
        slidesPerView: 5,
        // spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        centeredSlides: false,
        loop: true,
        autoplay: true,
        initialSlide: 0
      });
    });

  }
})