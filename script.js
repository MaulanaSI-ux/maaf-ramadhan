function lanjut(){
  window.location.href = "halaman2.html";
}

function kembali(){
  window.location.href = "index.html";
}

const text = "Maafin aku ya Sarahh imupppp jangan diemin aku dong heheheh, bentar lagi kita udah mau puasa nihh hehehe. aku bakalan semangatin kamu pas lagi kuliah waktu puasa setiapp hariii.\n\naku buat web ini sebagai permintaan maaf aku ke kamu sarahhh. maafin akuuu yaaaawww 💛";

let i = 0;
function typeWriter() {
  const el = document.getElementById("typing");
  if (el && i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function maaf(){
  if (navigator.vibrate) navigator.vibrate(150);

  // Confetti kiri
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { x: 0 }
  });

  // Confetti kanan
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { x: 1 }
  });

  setTimeout(() => {
    alert("YEAY 🥹💛 Makasih udah maafin! Siap masuk Ramadan bareng~");
  }, 500);
}

function putar(){
  var musik = document.getElementById("musik");
  musik.play();
}

/* Tombol kabur */
const kabur = document.getElementById("kaburBtn");

if(kabur){
  kabur.addEventListener("mouseover", function(){
    kabur.style.position = "absolute";
    kabur.style.top = Math.random() * 80 + "%";
    kabur.style.left = Math.random() * 60 + "%";
  });
}