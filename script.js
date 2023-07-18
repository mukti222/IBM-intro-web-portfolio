function addRecommendation() {
  // Dapatkan pesan dari rekomendasi baru
  let recommendation = document.getElementById("new_recommendation");
  // Jika pengguna telah meninggalkan rekomendasi, tampilkan pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
  console.log("Rekomendasi baru ditambahkan");
  // Panggil showPopup di sini

   // Buat elemen 'recommendation' baru dan atur nilainya menjadi pesan pengguna
  var element = document.createElement("div");
  element.setAttribute("class","recommendation");
  element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
  // Tambahkan elemen ini ke akhir daftar rekomendasi
  document.getElementById("all_recommendations").appendChild(element); 

  // Atur ulang nilai textarea
  recommendation.value = "";

  
showPopup(true);
  }}


function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
