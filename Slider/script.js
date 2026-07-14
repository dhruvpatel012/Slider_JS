const slidesData = [
  {
    id: 1,
    title: "Santorini, Greece",
    description:
      "White-washed houses and blue domes overlooking the Aegean Sea at sunset.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
  },
  {
    id: 2,
    title: "Kyoto, Japan",
    description:
      "Walk through thousands of vermilion torii gates at Fushimi Inari Shrine.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
  },
  {
    id: 3,
    title: "Swiss Alps",
    description:
      "Snow-capped peaks and green valleys make this a hiker's dream destination.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
  },
  {
    id: 4,
    title: "Bali, Indonesia",
    description:
      "Lush rice terraces, calm beaches, and a warm island culture await you.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
  },
  {
    id: 5,
    title: "Iceland",
    description:
      "Waterfalls, glaciers, and the magical Northern Lights in one country.",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=80",
  },
];


const slidesTrack = document.querySelector("#slidesTrack");
const dotsContainer = document.querySelector("#dotsContainer");
const slideCounter = document.querySelector("#slideCounter");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const sliderContainer = document.querySelector("#sliderContainer");

/* ------ this variable keeps track of which slide is showing ------ */
/* index 0 = first slide, index 1 = second slide, and so on */
let currentIndex = 0;

/* ------ this variable will store our autoplay timer ------ */
let autoPlayTimer = null;

/* ------ 1. FUNCTION: CREATE SLIDES ------ */
function createSlides() {
  slidesData.forEach((slide, index) => {
    const slideHTML = `
      <div class="slide">
        <img src="${slide.image}" alt="${slide.title}">
        <div class="slide-text">
          <h2>${slide.title}</h2>
          <p>${slide.description}</p>
        </div>
      </div>
    `;

    /* ---- add this slide's HTML into the track ---- */
    slidesTrack.insertAdjacentHTML("beforeend", slideHTML);

    /* ---- also create a matching dot for this slide ---- */
    const dotHTML = `<button class="dot" data-index="${index}"></button>`;
    dotsContainer.insertAdjacentHTML("beforeend", dotHTML);
  });
}

/* ------ 2. FUNCTION: UPDATE SLIDER POSITION ------ */
function updateSlider() {
  /* ---- move the whole track so the current slide is visible ---- */
  /* example: if currentIndex is 2, we move the track left by 200% */
  slidesTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  /* ---- update which dot looks "active" ---- */
  /* first we grab all dots using querySelectorAll */
  const allDots = document.querySelectorAll(".dot");

  allDots.forEach((dot, index) => {
    /* classList.toggle adds the class only if condition is true */
    dot.classList.toggle("active", index === currentIndex);
  });

  /* ---- update the slide counter text, example: "3 / 5" ---- */
  slideCounter.textContent = `${currentIndex + 1} / ${slidesData.length}`;
}

/* ------ 3. FUNCTION: GO TO NEXT SLIDE ------ */
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateSlider();
}

/* ------ 4. FUNCTION: GO TO PREVIOUS SLIDE ------ */
function goToPrevSlide() {
  /* adding slidesData.length before the % avoids getting a negative number */
  currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateSlider();
}

/* ------ 5. FUNCTION: GO TO A SPECIFIC SLIDE (DOT CLICK) ------*/
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

/*------ 6. AUTOPLAY ------*/
function startAutoPlay() {
  autoPlayTimer = setInterval(goToNextSlide, 3000); 
}

function stopAutoPlay() {
  clearInterval(autoPlayTimer);
}

/* ------ 7. EVENT LISTENERS ------ */

/* ---- next button click ---- */
nextBtn.addEventListener("click", goToNextSlide);

/* ---- previous button click ---- */
prevBtn.addEventListener("click", goToPrevSlide);

/* ---- dot click (using event delegation) ---- */
/* instead of adding a listener to EVERY dot, we add ONE listener
   to the parent container and check which dot was clicked */
dotsContainer.addEventListener("click", (event) => {
  /* make sure the click actually happened on a dot, not empty space */
  if (event.target.classList.contains("dot")) {
    /* data-index was stored on the dot when we created it */
    const clickedIndex = Number(event.target.dataset.index);
    goToSlide(clickedIndex);
  }
});

/* ---- keyboard arrow key support ---- */
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    goToNextSlide();
  } else if (event.key === "ArrowLeft") {
    goToPrevSlide();
  }
});

/* ---- pause autoplay when mouse enters the slider ---- */
sliderContainer.addEventListener("mouseenter", stopAutoPlay);

/* ---- resume autoplay when mouse leaves the slider ---- */
sliderContainer.addEventListener("mouseleave", startAutoPlay);

/*  ------ INITIALIZE THE SLIDER ------ */
createSlides(); /* build slides + dots from slidesData */
updateSlider(); /* show the first slide + highlight first dot */
startAutoPlay(); /* start the bonus autoplay feature */
