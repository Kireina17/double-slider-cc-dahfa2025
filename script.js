// ===== Toggle slider (TIDAK DIUBAH) =====
const authBox  = document.getElementById("authBox");
const goLogin  = document.getElementById("goLogin");
const goSignup = document.getElementById("goSignup");

if (goSignup) goSignup.addEventListener("click", () => {
  authBox && authBox.classList.add("right-active");
});
if (goLogin) goLogin.addEventListener("click", () => {
  authBox && authBox.classList.remove("right-active");
});

// ===== Prevent reload (demo) =====
document.querySelectorAll("form").forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted 🚀");
  });
});

// ===== Meteor generator (tetap sama, dengan guard) =====
const shooting = document.querySelector(".shooting");
function createMeteor() {
  if (!shooting) return;
  const li = document.createElement("li");
  li.style.setProperty("--x", Math.random() * 100 + "vw");
  li.style.setProperty("--y", Math.random() * 50 + "vh");
  li.style.setProperty("--d", 4 + Math.random() * 3 + "s");
  li.style.setProperty("--delay", Math.random() * 5 + "s");
  shooting.appendChild(li);
  setTimeout(() => li.remove(), 8000);
}
if (shooting) setInterval(createMeteor, 2000);

// ===== Password strength bar (tetap sama, dengan guard) =====
const suPass = document.getElementById("su-pass");
const bar    = document.querySelector(".strength-bar div");

if (suPass && bar) {
  suPass.addEventListener("input", () => {
    const val = suPass.value;
    let strength = 0;
    if (val.length > 5) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[0-9]/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;

    const percent = (strength / 4) * 100;
    bar.style.width = percent + "%";
  });
}

/* (opsional) ripple kecil saat klik tombol – tidak mengubah perilaku */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const span = document.createElement("span");
    span.className = "ripple";
    const r = btn.getBoundingClientRect();
    span.style.left = (e.clientX - r.left) + "px";
    span.style.top  = (e.clientY - r.top)  + "px";
    btn.appendChild(span);
    setTimeout(() => span.remove(), 600);
  });
});


