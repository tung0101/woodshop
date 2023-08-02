let keyLocalStorage = "danhsachitemGiohang";
// Lấy danh sách giỏ hàng từ localstorage
function layDanhSachItemGioHang(){
    let danhSachItemGiohang = new Array();
    let jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorage);
    
    if(jsonDanhSachItemGioHang != null)
    danhSachItemGiohang = JSON.parse(jsonDanhSachItemGioHang);

    return danhSachItemGiohang;
}
// Tạo ra 1 object lưu thông tin truyền vào
function TaoDoiTuongItemGioHang(idSanPham,name, soLuong, price, img,giamgia){
    let itemGioHang = new Object();
    
    itemGioHang.id = idSanPham;
    itemGioHang.soluong = soLuong;
    itemGioHang.price = price;
    itemGioHang.img = img;
    itemGioHang.name = name;
    itemGioHang.giamgia = giamgia;

    return itemGioHang;
}
// Lưu danh sách sp vào localstorage
function luuDanhSachItemGioHangVaoLocalStorage(danhsachItemGioHang){
    var jsonDanhSachItemGioHang = JSON.stringify(danhsachItemGioHang);

    localStorage.setItem(keyLocalStorage, jsonDanhSachItemGioHang);
}
// Ngăn chặn sự kiện nổi bọt
let button = document.querySelectorAll('.buttons');
button.forEach((el)=>{
    el.addEventListener('click',(ev)=>{
        ev.stopPropagation();
        ev.preventDefault();
    })
})
//Thong bao so luong hang da mua

// Bấn nút để hàm thực thi,đưa dữ liệu lên localstorage
let j = 1;
function addToCart(idSanPham,name, soLuong, price, img,giamgia){
    console.log(123);
    let danhSachItemGiohang = layDanhSachItemGioHang();
    
      let coTonTaiTrongDanhSachItemGioHang = false;

      for(let i = 0;i < danhSachItemGiohang.length; i++){

          let itemGioHangHienTai = danhSachItemGiohang[i];

          if(itemGioHangHienTai.id == idSanPham){
              danhSachItemGiohang[i].soluong++;
              coTonTaiTrongDanhSachItemGioHang = true;
          }
      }

      if(coTonTaiTrongDanhSachItemGioHang == false){
          let itemGioHang = TaoDoiTuongItemGioHang(idSanPham,name, 1,price , img, giamgia);
          danhSachItemGiohang.push(itemGioHang);
      }
      luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGiohang);

      document.querySelector('.buy-success').classList.remove('hide')

      setTimeout(()=>{
        document.querySelector('.buy-success').classList.add('hide')
      },1000)

      let soluong = 0
    danhSachItemGiohang.forEach(el => {
    soluong += el.soluong;
    })
    if(danhSachItemGiohang != null){
    console.log(234);
    document.querySelector('.number-buy').innerText = soluong;
}
}
let danhSachItemGioHang = layDanhSachItemGioHang();
let soluong = 0
danhSachItemGioHang.forEach(el => {
    soluong += el.soluong;
})
if(danhSachItemGioHang != null){
    document.querySelector('.number-buy').innerText = soluong;
}
