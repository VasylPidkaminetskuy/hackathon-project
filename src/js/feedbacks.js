import Swiper from 'swiper';
import 'swiper/css';

const users = [
  {
    img: './img/users/john.png',
    alt: 'john',
    feedback:
      '“ I’ve always struggled with meal prep. Now everything is planned, calorie-counted, and delivered right to my door. Huge time saver!”',
    username: 'John D.',
  },
  {
    img: '/img/users/ava.png',
    alt: 'ava',
    feedback:
      '“The meal plans are super easy to follow and delivery is always on time. I’ve saved so much time during the week.”',
    username: 'Ava A.',
  },
  {
    img: '/img/users/james.png',
    alt: 'james',
    feedback:
      '“I gained 6 kilograms of lean muscle in just two weeks. The fitness menu gives me exactly the calories and protein I need.”',
    username: 'James D.',
  },
  {
    img: '/img/users/olivia.png',
    alt: 'olivia',
    feedback:
      '“Meals are fresh, tasty, and perfectly portioned. I don’t have to think about cooking after work — it’s all ready for me.”',
    username: 'Olivia I.',
  },
  {
    img: '/img/users/samantha.png',
    alt: 'samantha',
    feedback:
      '“Lost 8 kilograms in three weeks without feeling hungry. The light plan makes dieting so much easier.”',
    username: 'Samantha A.',
  },
  {
    img: '/img/users/lusi.png',
    alt: 'lusi',
    feedback:
      '“The maintenance plan keeps me in shape year-round. No more random diets — just balanced eating that works.”',
    username: 'Lusi L.',
  },
  {
    img: '/img/users/james-o.png',
    alt: 'james-o',
    feedback:
      '“I don’t waste time cooking anymore. Everything comes ready and tastes like restaurant-quality meals.”',
    username: 'James O.',
  },
  {
    img: '/img/users/paul.png',
    alt: 'paul',
    feedback:
      '“As a busy dad, the family menu is a lifesaver. Kids love it too, and I know they eat balanced meals every day.”',
    username: 'Paul L.',
  },
  {
    img: '/img/users/luke.png',
    alt: 'luke',
    feedback:
      '“I finally stick to healthy eating because it’s simple. The variety each week keeps it exciting and never boring.”',
    username: 'Luke D.',
  },
  {
    img: '/img/users/katie.png',
    alt: 'katie',
    feedback:
      '“I save around 8 hours every week thanks to this service. No shopping, no cooking — just healthy meals ready to enjoy.”',
    username: 'Katie B.',
  },
];

document.querySelector('.list').innerHTML = users
  .map(
    u => `
  <li class="swiper-slide card">
    <div class="testimonial-image"><img src="${u.img}" alt="${u.alt}"/></div>
    <div class="testimonial-stars">★ ★ ★ ★ ★</div>
    <p class="person-feedback">${u.feedback}</p>
    <p class="name-of-person">${u.username}</p>
  </li>
`
  )
  .join('');

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3.4,
  spaceBetween: 24,
  loop: false,
});

const dots = document.querySelectorAll('.custom-pagination .dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    if (dot.dataset.index === 'first') swiper.slideTo(0);
    if (dot.dataset.index === 'last') swiper.slideTo(swiper.slides.length - 1);
    if (dot.dataset.index === 'middle')
      swiper.slideTo(Math.floor(swiper.slides.length / 2));
  });
});

const updateActive = () => {
  dots.forEach(d => d.classList.remove('active'));

  const maxTranslate = swiper.maxTranslate();
  const currentTranslate = swiper.translate;

  if (swiper.isBeginning) dots[0].classList.add('active');
  else if (Math.abs(currentTranslate - maxTranslate) < 1)
    dots[2].classList.add('active');
  else dots[1].classList.add('active');
};

swiper.on('slideChange', updateActive);
updateActive();
