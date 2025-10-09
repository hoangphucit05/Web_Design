function xuatThu() {
  let d = parseInt(document.getElementById("ngay").value);
  let m = parseInt(document.getElementById("thang").value);
  let y = parseInt(document.getElementById("nam").value);

  if (!d || !m || !y) {
    document.getElementById("ketqua").innerText = "Vui lòng nhập đủ ngày, tháng, năm!";
    return;
  }

  let date = new Date(y, m - 1, d);
  let thu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  let kq = `${thu[date.getDay()]} Ngày ${d} tháng ${m} năm ${y}`;

  document.getElementById("ketqua").innerText = kq;
}
