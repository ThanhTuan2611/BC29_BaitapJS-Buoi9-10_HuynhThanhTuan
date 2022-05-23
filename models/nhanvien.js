function NhanVien(_taiKhoan, _tenNV, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
   // Khởi tạo lớp đối tượng
   this.taiKhoan = _taiKhoan;
   this.tenNV = _tenNV;
   this.email = _email;
   this.matKhau = _matKhau;
   this.ngayLam = _ngayLam;
   this.luongCB = _luongCB;
   this.chucVu = _chucVu;
   this.gioLam = _gioLam;
   this.tongLuong = 0;
   this.loaiNV = "";

   this.tinhTongLuong = function () {
      if (this.chucVu === "Sếp") {
         this.tongLuong = this.luongCB * 3;
      } else if (this.chucVu === "Trưởng phòng") {
         this.tongLuong = this.luongCB * 2;
      } else {
         this.tongLuong = this.luongCB;
      }
   };

   this.xepLoaiNV = function () {
      if (this.gioLam >= 192) {
         this.loaiNV = "Nhân viên xuất sắc";
      } else if (this.gioLam < 192 && this.gioLam >= 176) {
         this.loaiNV = "Nhân viên giỏi";
      } else if (this.gioLam < 176 && this.gioLam >= 160) {
         this.loaiNV = "Nhân viên khá";
      } else {
         this.loaiNV = "Nhân viên trung bình";
      }
   };
}