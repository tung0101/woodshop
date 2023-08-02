// import{laySanPhamTheoTen,layDanhSachItemGioHang,luuDanhSachItemGioHangVaoLocalStorage} from './cart.js'
$(document).ready(function ($) {
    $('.list-img').magnificPopup({
        type: 'image',
        delegate: 'img',
        gallery: {
            // options for gallery
            enabled: true
        }
    });
});

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

//Chấm điểm bằng sao
let star = document.querySelectorAll('.star1');
star.forEach((el, i) => {
    el.addEventListener('click', () => {
        for (let j = 0; j <= i; j++) {
            star[j].style.color = '#c89551'
        }
        for (let x = i + 1; x <= 5; x++) {
            star[x].style.color = 'black';
        }
    })
})
//reponsive
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.responsive-navbar').classList.toggle('hide')
})
console.log(document.querySelector('.navbar-toggler'));

function laySanPhamTheoTen(name) {
    let sanPham = new Object();

    let danhSachSanPham = layGioHangTuLocalStorage();

    for (let i = 0; i < danhSachSanPham.length; i++) {
        let sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.name == name) {
            sanPham = sanPhamHienTai;
        }
    }
    return sanPham;
}

