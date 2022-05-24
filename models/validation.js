function Validation() {
  this.kiemTraRong = function (value, errorId, mess) {
    if (value === "") {
      //error
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    }
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";
    return true;
  };


  this.kiemTraChucVu = function (selectId, errorId, mess) {
    if (getEle(selectId).selectedIndex !== 0) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraKySo = function (value, errorId, mess) {
    var number = /^[0-9]+$/;
    if (number.test(value)) {
      // true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    // error
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraDoDaiKyTu = function (value, errorId, min, max, mess) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraChuoiKiTu = function (value, errorId, mess) {
    var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      // true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    // error
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  
  this.kiemTraEmail = function (value, errorId, mess) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(mailFormat)) {
      // true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    // error
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraMatKhau = function (value, errorId, mess) {
    var matKhau = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(matKhau)) {
      // true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    // error
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraTaiKhoanDaTonTai = function (value, errorId, mess, arr) {
    var isSatatus = true;
    arr.forEach(function (item) {
      if (item.taiKhoan === value) {
        // taiKhoan tồn tại
        isSatatus = false;
      }
    });
    if (isSatatus) {
      // true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraLuongCB = function (value, errorId, min, mess) {
    if (value >= min) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };


  this.kiemTraGioLam = function (value, errorId, min, max, mess) {
    if (value >= min && value <= max) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };
}