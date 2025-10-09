function tinhLuong() {
  let luong = parseFloat(document.getElementById("luong").value);
  let heso = parseFloat(document.getElementById("heso").value);

  if (isNaN(luong) || isNaN(heso)) {
    alert("Vui lòng nhập đầy đủ số liệu!");
    return;
  }

  let luongthang = luong * heso;
  document.getElementById("luongthang").value = luongthang.toFixed(0);
}
