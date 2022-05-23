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

    this.kiemTraDoDaiKyTu = function(value, errorId, min , max, mess){
        if(value.trim().length >= min && value.trim().length <= max){
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

      this.kiemTraEmail = function(value, errorId, mess){
        var letter = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        if(value.match(letter)){
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
}