let keyLocalStorage = "danhsachitemGiohang";
  function layGioHangTuLocalStorage(){
      let gioHang = new Array();
  
     let jsonGioHang = localStorage.getItem("danhsachitemGiohang");
  
      if(jsonGioHang != null){
          gioHang = JSON.parse(jsonGioHang)
      }
      return gioHang;
  }
  
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
  
  
  function layDanhSachItemGioHang(){
      let danhSachItemGiohang = new Array();
      let jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorage);
      
      if(jsonDanhSachItemGioHang != null)
      danhSachItemGiohang = JSON.parse(jsonDanhSachItemGioHang);
  
      return danhSachItemGiohang;
  }
  export {layDanhSachItemGioHang}

  function luuDanhSachItemGioHangVaoLocalStorage(danhsachItemGioHang){
        var jsonDanhSachItemGioHang = JSON.stringify(danhsachItemGioHang);
  
        localStorage.setItem(keyLocalStorage, jsonDanhSachItemGioHang);
  }
  export {luuDanhSachItemGioHangVaoLocalStorage}
  ////////////////////////////////////////
  function laySanPhamTheoID(idSanPham){
      let sanPham = new Object();
  
      let danhSachSanPham = layGioHangTuLocalStorage();
  
      for(let i = 0;i < danhSachSanPham.length;i++){
          let sanPhamHienTai = danhSachSanPham[i];
          if(sanPhamHienTai.id == idSanPham){
              sanPham = sanPhamHienTai;
          }
      }
       return sanPham;
  }
  function layDanhSachSanPhamDuoiLocalStorage(){
      let jsonDanhSachSanPham = localStorage.getItem("danhsachitemGiohang");
  
      let danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
      return danhSachSanPham;
  }
  //Lấy dữ liệu từ localstorage va render ra trang web
          function hienThiDanhSachItemGioHang(){
              let danhSachItemGioHang = layGioHangTuLocalStorage();
                 
              let HTML = chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang);
              let nodeGioHang = document.querySelector(".tbody");
              nodeGioHang.innerHTML = HTML;
          }
          hienThiDanhSachItemGioHang();
  
          function chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang){
              let htmlTong = "";
              for(let i = 0;i < danhSachItemGioHang.length;i++){
                  htmlTong = htmlTong + chuyenDoiTuongItemGioHangSangHTML(danhSachItemGioHang[i])
              }
              return htmlTong;
          }
  
          function chuyenDoiTuongItemGioHangSangHTML(itemGioHang){
              
              let sanPham = laySanPhamTheoID(itemGioHang.id)
            let html = '                        <tr>\n'+
            '                            <td  data-label="" class="image"><img src="'+sanPham.img+'" alt=""></td>\n'+
            '                            <td  data-label="Tên" class="name"><p>'+sanPham.name+'</p></td>\n'+
            '                            <td  data-label="Giá gốc" class="price"><p>'+sanPham.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'+'</p></td>\n'+
            '                            <td  data-label="Giảm giá" class="discount justify-content-end"><p>'+sanPham.giamgia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'+'</p></td>\n'+
            '                            <td  data-label="Số lượng" class="quantity">\n'+
            '                                <div class="soluong d-flex align-items-center">\n'+
            '                                    <i class="fas fa-plus"></i>\n'+
            '                                    <input type="text" value="'+sanPham.soluong+'">\n'+
            '                                    <i class="fas fa-minus"></i>\n'+
            '                                </div>\n'+
            '                            </td>\n'+
            '                            <td  data-label="Tổng" class="total"><p>'+((sanPham.price - sanPham.giamgia) * sanPham.soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'+'</p></td> \n'+
            '                            <td  data-label="" class="delete"><i class="fas fa-times"></i></td>\n'+
            '                        </tr>';
             return html;
          }
  
  // Tang giam va xoa
  function laySanPhamTheoTen(name){
      let sanPham = new Object();
  
      let danhSachSanPham = layGioHangTuLocalStorage();
  
      for(let i = 0;i < danhSachSanPham.length;i++){
          let sanPhamHienTai = danhSachSanPham[i];
          if(sanPhamHienTai.name == name){
              sanPham = sanPhamHienTai;
          }
      }
       return sanPham;
  }
  export {laySanPhamTheoTen};
  
  let tang = document.querySelectorAll('.fa-plus');
  let giam = document.querySelectorAll('.fa-minus');
  let xoa = document.querySelectorAll('.xoa');
  let tongGiaGoc = document.querySelectorAll('.price');
  let tongKhuyenMai = document.querySelectorAll('.discount');
  let tongGia = document.querySelectorAll('.total');
  
  tang.forEach((el) => {
      el.addEventListener('click',(ev) => {
          ev.target.parentElement.parentElement.querySelector('input').value++;
          let x = laySanPhamTheoTen(ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText)
          
          let danhSachItemGiohang = layDanhSachItemGioHang();
          for(let i = 0;i < danhSachItemGiohang.length; i++){
  
              let itemGioHangHienTai = danhSachItemGiohang[i];
    
              if(itemGioHangHienTai.name == ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText){
                  danhSachItemGiohang[i].soluong++;
              }
          }
          luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGiohang);
  
          let price = Number(ev.target.parentElement.parentElement.parentElement.querySelector('.price').innerText.replace('.','').replace('.','').replace('đ',''));
          let discount = Number(ev.target.parentElement.parentElement.parentElement.querySelector('.discount').innerText.replace('.','').replace('.','').replace('đ',''));
          let soluong = Number(ev.target.parentElement.parentElement.querySelector('input').value.replace('.','').replace('.','').replace('đ',''))
          let total = ev.target.parentElement.parentElement.parentElement.querySelector('.total p');
          
          total.innerText = ((price - discount) * soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
          
          // tongGiaGoc.forEach(el => {
          //     sum += Number(el.innerText);
          // })
          // document.querySelector('.giagoc').innerText = sum;
          let sum = 0;
  
          tongGia.forEach(el => {
              sum += Number(el.innerText.replace('.','').replace('.','').replace('đ',''));
          })
          document.querySelector('.tongtien').innerText = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
          sum = 0;
      })
  
  })
  let x = 0
  tongGia.forEach(el => {
      x += Number(el.innerText.replace('.','').replace('.','').replace('đ',''));
  })
  document.querySelector('.tongtien').innerText = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
  
  giam.forEach((el) => {
      el.addEventListener('click',(ev) => {
          ev.target.parentElement.parentElement.querySelector('input').value--;
          let x = laySanPhamTheoTen(ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText)
          
          if(ev.target.parentElement.parentElement.querySelector('input').value == 0){
            let x = laySanPhamTheoTen(ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText)
            let danhSachItemGiohang = layDanhSachItemGioHang();
            for(let i = 0;i < danhSachItemGiohang.length; i++){
                let itemGioHangHienTai = danhSachItemGiohang[i];
                if(itemGioHangHienTai.name == ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText){
                    danhSachItemGiohang.splice(danhSachItemGiohang.indexOf(itemGioHangHienTai),1)
                }
            }
            luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGiohang);
            ev.target.parentElement.parentElement.parentElement.style.display = 'none';
          }

          let danhSachItemGiohang = layDanhSachItemGioHang();
          for(let i = 0;i < danhSachItemGiohang.length; i++){
  
              let itemGioHangHienTai = danhSachItemGiohang[i];
    
              if(itemGioHangHienTai.name == ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText){
                  danhSachItemGiohang[i].soluong--;
              }
          }
          luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGiohang);
  
          let price = Number(ev.target.parentElement.parentElement.parentElement.querySelector('.price').innerText.replace('.','').replace('.','').replace('đ',''));
          let discount = Number(ev.target.parentElement.parentElement.parentElement.querySelector('.discount').innerText.replace('.','').replace('.','').replace('đ',''));
          let soluong = Number(ev.target.parentElement.parentElement.querySelector('input').value.replace('.','').replace('.','').replace('đ',''))
          let total = ev.target.parentElement.parentElement.parentElement.querySelector('.total p');
          console.log(total);
          total.innerText = ((price - discount) * soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
          
          let sum = 0;
  
          tongGia.forEach(el => {
              sum += Number(el.innerText.replace('.','').replace('.','').replace('đ',''));
          })
          document.querySelector('.tongtien').innerText = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
          sum = 0;
      })
  })
  
  let xoaSanPham = document.querySelectorAll('.delete');
  xoaSanPham.forEach(el =>{
      el.addEventListener('click',(ev)=>{
          // ev.target.parentElement.parentElement.querySelector('input').value--;
          let x = laySanPhamTheoTen(ev.target.parentElement.parentElement.parentElement.querySelector('.name').innerText)
          let danhSachItemGiohang = layDanhSachItemGioHang();
          for(let i = 0;i < danhSachItemGiohang.length; i++){
              let itemGioHangHienTai = danhSachItemGiohang[i];
              if(itemGioHangHienTai.name == ev.target.parentElement.parentElement.querySelector('.name').innerText){
                  danhSachItemGiohang.splice(danhSachItemGiohang.indexOf(itemGioHangHienTai),1)
              }
          }
          luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGiohang);
          ev.target.parentElement.parentElement.style.display = 'none';
      })
  })
  
  //reponsive
  document.querySelector('.navbar-toggler').addEventListener('click',()=>{
      document.querySelector('.responsive-navbar').classList.toggle('hide')
    })
    console.log(document.querySelector('.navbar-toggler'));
  
    let danhSachItemGioHang = layDanhSachItemGioHang();
  let soluong = 0
  danhSachItemGioHang.forEach(el => {
      soluong += el.soluong;
  })
  if(danhSachItemGioHang != null){
      console.log(234);
      document.querySelector('.number-buy').innerText = soluong;
  }
  