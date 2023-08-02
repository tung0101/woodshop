$('.service-slider').slick({
    autoplay: true,
    autoplaySpeed : 3000,
    pauseOnFocus: false,
    prevArrow: '<span class="left-icon"><i class="fas fa-angle-left"></i><span/>',
    nextArrow: '<span class="right-icon"><i class="fas fa-angle-right"></i><span/>',
    slidesToShow: 1,
    // centerMode: true,
    mobileFirst: true,
    responsive: [
    {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
        },
    },
    {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        },
    },
    ]
});

// slick slider cua tất cả sản phẩm
$('.slider').slick({
    // autoplay: true,
    // autoplaySpeed : 3000,
    pauseOnFocus: false,
    prevArrow: '<span class="left-icon"><i class="fas fa-angle-left"></i><span/>',
    nextArrow: '<span class="right-icon"><i class="fas fa-angle-right"></i><span/>',
    slidesToShow: 1,
    // centerMode: true,
    mobileFirst: true,
    responsive: [
    {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
        },
    },
    {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        },
    },
    ]
});
$('.nav-item').on('shown.bs.tab', function (e) {
  $('.slider').slick('refresh');
})
// slick slider cua sản phẩm khuyến mãi
$('.list').slick({
  autoplay : true,
  autoplaySpeed : 3000,
  slidesToShow : 1,
  // centerMode : true,
  mobileFirst : true,
  // asNavFor: '.nav',
  prevArrow: '<span class="left-icon"><i class="fas fa-angle-left"></i><span/>',
  nextArrow: '<span class="right-icon"><i class="fas fa-angle-right"></i><span/>',
  responsive : [
      {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
  ],
});

// slick slider của tin tức
$('.news-slider').slick({
  // autoplay: true,
  // autoplaySpeed : 3000,
  pauseOnFocus: false,
  prevArrow: '<span class="left-icon"><i class="fas fa-angle-left"></i><span/>',
  nextArrow: '<span class="right-icon"><i class="fas fa-angle-right"></i><span/>',
  slidesToShow: 1,
  // centerMode: true,
  mobileFirst: true,
  responsive: [
  {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
      },
  },
  {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      },
  },
  ]
});

// Đông hồ đếm ngược thời gian khuyến mãi
        let total = 300000;
        let timer = setInterval(() => {
          total--;
  
          s = total % 60;
          m = ((total - s) / 60) % 60;
          h = Math.floor(total / 3600);
          d = Math.floor(total / 86400)

            document.getElementById('day').innerText= String(d).padStart(2, "0");
            document.getElementById('hour').innerText= String(h).padStart(2, "0");
            document.getElementById('minute').innerText= String(m).padStart(2, "0");
            document.getElementById('second').innerText= String(s).padStart(2, "0");
          }, 1000);


// Back to top
const backtotop = document.querySelector('.backtotop');
console.log(123);
// Window scroll đến khoảng nào đó => hiện button
window.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop > 300) {
        backtotop.classList.remove('hide')
    } else {
        backtotop.classList.add('hide')
    }
})
// Bấm vào nút TOP thì quay về đầu trang
backtotop.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
})

//reponsive
document.querySelector('.navbar-toggler').addEventListener('click',()=>{
  document.querySelector('.responsive-navbar').classList.toggle('hide')
})
console.log(document.querySelector('.navbar-toggler'));


