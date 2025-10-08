window.onload = function() {
    let ngayGio = new Date()
    let ngay = ngayGio.getDate()
    let thang = ngayGio.getMonth() + 1
    let nam = ngayGio.getFullYear()
    let gio = ngayGio.getHours()
    let phut = ngayGio.getMinutes()
    let giay = ngayGio.getSeconds()
    alert("Ngay: " + ngay + "/" + thang + "/" + nam + " Gio: " + gio + ":" + phut + ":" + giay)
}
