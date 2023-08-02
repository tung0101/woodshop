function layDanhSachDuoiLocalStorage() {
    let jsonDanhSachSanPham = localStorage.getItem("danhsachitemGiohang");

    let danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    console.log(danhSachSanPham);
    let html = '';
    for (let i = 0; i < danhSachSanPham.length; i++) {
        html += '                            <div class="order-info">\n' +
            '                                <div class="row align-items-center">\n' +
            '                                    <div class="col-3"><img src="' + danhSachSanPham[i].img + '" alt=""></div>\n' +
            '                                    <div class="col-9">' + danhSachSanPham[i].name + '</div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="price">\n' +
            '                                <div class="row">\n' +
            '                                    <div class="col-4">Giá:</div>\n' +
            '                                    <div class="col-8 text-end">' + danhSachSanPham[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ' + '</div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="soluong">\n' +
            '                                <div class="row">\n' +
            '                                    <div class="col-4">Số lượng:</div>\n' +
            '                                    <div class="col-8 text-end">' + danhSachSanPham[i].soluong + '</div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="discount">\n' +
            '                                <div class="row">\n' +
            '                                    <div class="col-4">Khuyến mại:</div>\n' +
            '                                    <div class="col-8 text-end">' + danhSachSanPham[i].giamgia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ' + '</div>\n' +
            '                                </div>\n' +
            '                            </div>    \n' +
            '                            <div class="tamtinh">\n' +
            '                                <div class="row">\n' +
            '                                    <div class="col-4">Tạm tính:</div>\n' +
            '                                    <div class="col-8 text-end order-price">' + ((danhSachSanPham[i].price - danhSachSanPham[i].giamgia) * danhSachSanPham[i].soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ' + '</div>\n' +
            '                                </div>\n' +
            '                            </div>  ';
    }
    document.querySelector(".order-intro").innerHTML = html;
}

layDanhSachDuoiLocalStorage();

let tongtien = document.querySelectorAll(".order-price");
let tong = 0;
tongtien.forEach(function (el) {
    tong += Number(el.textContent.replace('.', '').replace('.', '').replace('đ', ''));
})
document.querySelector(".tongtatca").textContent = tong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ';

//reponsive
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.responsive-navbar').classList.toggle('hide')
})

//transport
if (address_2 = localStorage.getItem('address_2_saved')) {
    $('select[name="calc_shipping_district"] option').each(function () {
        if ($(this).text() == address_2) {
            $(this).attr('selected', '')
        }
    })
    $('input.billing_address_2').attr('value', address_2)
}
if (district = localStorage.getItem('district')) {
    $('select[name="calc_shipping_district"]').html(district)
    $('select[name="calc_shipping_district"]').on('change', function () {
        var target = $(this).children('option:selected')
        target.attr('selected', '')
        $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
        address_2 = target.text()
        $('input.billing_address_2').attr('value', address_2)
        district = $('select[name="calc_shipping_district"]').html()
        localStorage.setItem('district', district)
        localStorage.setItem('address_2_saved', address_2)
    })
}
$('select[name="calc_shipping_provinces"]').each(function () {
    var $this = $(this),
        stc = ''
    c.forEach(function (i, e) {
        e += +1
        stc += '<option value=' + e + '>' + i + '</option>'
        $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
        if (address_1 = localStorage.getItem('address_1_saved')) {
            $('select[name="calc_shipping_provinces"] option').each(function () {
                if ($(this).text() == address_1) {
                    $(this).attr('selected', '')
                }
            })
            $('input.billing_address_1').attr('value', address_1)
        }
        $this.on('change', function (i) {
            i = $this.children('option:selected').index() - 1
            var str = '',
                r = $this.val()
            if (r != '') {
                arr[i].forEach(function (el) {
                    str += '<option value="' + el + '">' + el + '</option>'
                    $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>' + str)
                })
                var address_1 = $this.children('option:selected').text()
                var district = $('select[name="calc_shipping_district"]').html()
                localStorage.setItem('address_1_saved', address_1)
                localStorage.setItem('district', district)
                $('select[name="calc_shipping_district"]').on('change', function () {
                    var target = $(this).children('option:selected')
                    target.attr('selected', '')
                    $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
                    var address_2 = target.text()
                    $('input.billing_address_2').attr('value', address_2)
                    district = $('select[name="calc_shipping_district"]').html()
                    localStorage.setItem('district', district)
                    localStorage.setItem('address_2_saved', address_2)
                })
            } else {
                $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>')
                district = $('select[name="calc_shipping_district"]').html()
                localStorage.setItem('district', district)
                localStorage.removeItem('address_1_saved', address_1)
            }
        })
    })
})
//]]