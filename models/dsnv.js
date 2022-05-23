function DanhSachNV() {
    this.arr = [];

    this.themNV = function (nv) {
        this.arr.push(nv);
    };

    this.timViTriNV = function (taiKhoan) {
        /**
         *  Tìm vị trí
         * 0. Tạo biến index = -1
         * 1. Duyệt mảng arr
         * 2. Nếu taiKhoan === object.taiKhoan
         * => Cập nhật lại giá trị mới cho biến index
         */
        var index = -1;
        this.arr.forEach(function (item, i) {
            if (item.taiKhoan === taiKhoan) {
                index = i;
            }
        });
        return index;
    };

    this.xoaNV = function (taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this.suaNV = function (taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.capNhatNV = function (nv) {
        var index = this.timViTriNV(nv.taiKhoan);
        if (index !== -1) {
            this.arr[index] = nv;
        }
    };
    this.timKiemNV = function (keyword) {
        /**
         * 0. Tạo mangTimKiem = []
         * 1. Duyệt mảng arr
         * 2. Nếu item.loaiNV trùng với keyword
         * ==> them nv được tìm thấy vào mangTimKiem
         * 3. Trả về mangTimKiem
         */
        var mangTimKiem = [];
        this.arr.forEach(function (item) {
            if (item.loaiNV.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                mangTimKiem.push(item);
            }
        })
        return mangTimKiem;
    };
}
