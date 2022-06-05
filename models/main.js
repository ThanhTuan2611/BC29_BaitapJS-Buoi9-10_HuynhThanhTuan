var danhSachNV = new DanhSachNV();


var validation = new Validation();


getLocalStorage();


// Hàm DOM
function getEle(id) {
  return document.getElementById(id);
}


// Hàm lấy thông tin nhân viên
function layThongTinNV(isEdit) {
  // DOM tới các thẻ input để lấy giá trị
  var _taiKhoan = getEle("tknv").value;
  var _tenNV = getEle("name").value;
  var _email = getEle("email").value;
  var _matKhau = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCB = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;



  // flag
  var isValid = true;


  // Check validation
  // Tài Khoản
  isValid &= validation.kiemTraRong(_taiKhoan, "tbTKNV", "(*) Vui lòng không bỏ trống") && validation.kiemTraDoDaiKyTu(_taiKhoan, "tbTKNV", 4, 6, "(*) Vui lòng nhập từ 4-6 ký số") && validation.kiemTraKySo(_taiKhoan, "tbTKNV", "(*) Vui lòng nhập ký số");
  if (!isEdit) {
    isValid &= validation.kiemTraTaiKhoanDaTonTai(
      _taiKhoan, 'tbTKNV', '(*) Mã nhân viên đã tồn tại vui lòng nhập mã khác', danhSachNV.arr
    )
  }

  // Tên Nhân Viên
  isValid &= validation.kiemTraRong(_tenNV, "tbTen", "(*) Vui lòng không bỏ trống") && validation.kiemTraChuoiKiTu(_tenNV, "tbTen", "(*) Vui lòng không nhập chữ số");

  // Email
  isValid &= validation.kiemTraRong(_email, "tbEmail", "(*) Vui lòng không bỏ trống") && validation.kiemTraEmail(_email, "tbEmail", "(*) Vui lòng nhập đúng định dạng email vd: abc@gmail.com");

  // Mật Khẩu
  isValid &= validation.kiemTraRong(_matKhau, "tbMatKhau", "(*) Vui lòng không bỏ trống") && validation.kiemTraDoDaiKyTu(_matKhau, "tbMatKhau", 6, 10, "(*) Vui lòng nhập từ 6-10 ký tự") && validation.kiemTraMatKhau(_matKhau, "tbMatKhau", "(*) Vui lòng nhập đúng phương thức (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

  // Ngày Làm
  isValid &= validation.kiemTraRong(_ngayLam, "tbNgay", "(*) Vui lòng không bỏ trống");

  // Lương CB
  isValid &= validation.kiemTraRong(_luongCB, "tbLuongCB", "(*) Vui lòng không bỏ trống") && validation.kiemTraLuongCB(_luongCB, "tbLuongCB", 1000000, "(*) Vui lòng nhập đúng số lương từ 1.000.000 - 20.000.000");

  // Chức vụ
  isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "(*) Vui lòng chọn chức vụ của bạn")

  //Giờ làm
  isValid &= validation.kiemTraRong(_gioLam, "tbGiolam", "(*) Vui lòng không bỏ trống") && validation.kiemTraGioLam(_gioLam, "tbGiolam", 80, 200, "(*) Vui lòng nhập chính xác số giờ làm trong tháng từ 80 - 200");


  // check isValid
  if (!isValid) return;


  // Tạo đối lượng nhân viên
  var nhanVien = new NhanVien(
    _taiKhoan,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );


  // Tính tổng lương
  nhanVien.tinhTongLuong();
  nhanVien.xepLoaiNV();
  return nhanVien;
}


// Thêm nhân viên
getEle("btnThemNV").onclick = function () {
  var nhanVien = layThongTinNV();
  if (nhanVien) {
    // Thêm nhân viên in ra table
    danhSachNV.themNV(nhanVien);
    taoBang(danhSachNV.arr);
    setLocalStorage();
  }
};


function taoBang(data) {
  var content = "";
  data.forEach(function (item) {
    content += `
      <tr>
        <td>${item.taiKhoan}</td>
        <td>${item.tenNV}</td>
        <td>${item.email}</td>
        <td>${item.ngayLam}</td>
        <td>${item.chucVu}</td>
        <td>${item.tongLuong}</td>
        <td>${item.loaiNV}</td>
        <td>
          <button class= "btn btn-info" style= "margin: 4px 0" data-toggle="modal" data-target="#myModal" onclick ="suaNV ('${item.taiKhoan}') ">Sửa</button>
          <button class= "btn btn-danger" style= "margin: 4px 0" onclick="xoaNV ('${item.taiKhoan}')">Xóa</button>
        </td>
      </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML = content;
}


// Xóa nhân viên
function xoaNV(id) {
  danhSachNV.xoaNV(id);
  taoBang(danhSachNV.arr);
  setLocalStorage();
}


// Sửa nhân viên
function suaNV(id) {
  var nv = danhSachNV.suaNV(id);
  if (nv) {
    // DOM tới các thẻ input show value
    getEle("tknv").value = nv.taiKhoan;
    getEle("name").value = nv.tenNV;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCB;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;

    // Hiển thị btn Cập nhật
    getEle("btnCapNhat").style.display = "block";

    // disable input taiKhoan
    getEle("tknv").disabled = true;
  }
}


// Cập nhật nhân viên
getEle("btnCapNhat").onclick = function () {
  var nhanVien = layThongTinNV(true);
  danhSachNV.capNhatNV(nhanVien);
  taoBang(danhSachNV.arr);
  setLocalStorage();
}


// Tìm nhân viên
// cách 1: gõ là tự tìm
// getEle("searchName").addEventListener("keyup", function () {
//   var keyword = getEle("searchName").value;
//   var mangTimKiem = danhSachNV.timKiemNV(keyword);
//   taoBang(mangTimKiem);
// });

// cách 2: ấn vào nút tìm kiếm mới tìm
getEle("btnTimNV").onclick = function () {
  var keyword = getEle("searchName").value;
  var mangTimKiem = danhSachNV.timKiemNV(keyword);
  taoBang(mangTimKiem);
}






// Lưu dữ liệu trên trình duyệt
function setLocalStorage() {
  // Convert from JSON to String
  var dataString = JSON.stringify(danhSachNV.arr);
  // Lưu xuống localStorage
  localStorage.setItem("Danh sách nhân viên", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("Danh sách nhân viên")) {
    // Lấy dữ liệu từ localStorage
    var dataString = localStorage.getItem("Danh sách nhân viên");
    // Convert from String to JSON
    var dataJson = JSON.parse(dataString);
    danhSachNV.arr = dataJson;
    taoBang(danhSachNV.arr);
  }
}
