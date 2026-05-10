/* ══════════════════════════════════════════════
     WARNA — sesuai CSS variables project
  ══════════════════════════════════════════════ */
const CLR = {
  aktif: "#2563eb" /* --blue-color   */,
  proposal: "#198754" /* --primary-color */,
  hasil: "#d97706" /* --amber-color   */,
  sidang: "#334155" /* --slate-color   */,
};

/* ══════════════════════════════════════════════
     DATA DUMMY
     Ganti dengan data dari API/database kamu.
     Struktur tiap objek:
       name     : nama fakultas (string)
       prodi    : nama-nama program studi (array string)
       bar      : jumlah per prodi per status (object of arrays)
       tahun    : data tren per tahun (object with labels + arrays)
  ══════════════════════════════════════════════ */
const faculties = [
  {
    name: "Teknik",
    prodi: ["Informatika", "Sipil", "Elektro", "Mesin"],
    bar: {
      aktif: [31, 18, 12, 9],
      proposal: [18, 11, 8, 6],
      hasil: [12, 8, 5, 4],
      sidang: [7, 5, 3, 2],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [15, 22, 29, 31, 33],
      proposal: [9, 13, 17, 18, 20],
      hasil: [5, 8, 11, 12, 13],
      sidang: [3, 5, 6, 7, 8],
    },
  },
  {
    name: "Ekonomi",
    prodi: ["Manajemen", "Akuntansi", "Eko. Pembangunan"],
    bar: {
      aktif: [24, 18, 14],
      proposal: [16, 12, 9],
      hasil: [10, 7, 5],
      sidang: [6, 4, 3],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [12, 18, 22, 24, 26],
      proposal: [8, 11, 14, 16, 17],
      hasil: [4, 6, 8, 10, 11],
      sidang: [2, 3, 5, 6, 6],
    },
  },
  {
    name: "FKIP",
    prodi: ["Pend. Matematika", "Pend. Bahasa", "Pend. IPA"],
    bar: {
      aktif: [21, 16, 10],
      proposal: [14, 10, 7],
      hasil: [9, 6, 4],
      sidang: [5, 4, 2],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [10, 15, 19, 21, 22],
      proposal: [6, 9, 12, 14, 15],
      hasil: [3, 5, 7, 9, 10],
      sidang: [2, 3, 4, 5, 5],
    },
  },
  {
    name: "Hukum",
    prodi: ["Ilmu Hukum", "Hukum Bisnis"],
    bar: {
      aktif: [18, 14],
      proposal: [13, 9],
      hasil: [8, 5],
      sidang: [5, 3],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [8, 12, 16, 18, 19],
      proposal: [5, 8, 11, 13, 14],
      hasil: [3, 4, 6, 8, 9],
      sidang: [1, 2, 3, 5, 5],
    },
  },
  {
    name: "Pertanian",
    prodi: ["Agroteknologi", "Agribisnis", "Kehutanan"],
    bar: {
      aktif: [17, 13, 8],
      proposal: [10, 8, 5],
      hasil: [7, 5, 3],
      sidang: [4, 2, 2],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [7, 11, 15, 17, 18],
      proposal: [4, 7, 9, 10, 11],
      hasil: [2, 4, 6, 7, 7],
      sidang: [1, 2, 3, 4, 4],
    },
  },
  {
    name: "FIB",
    prodi: ["Sastra Indonesia", "Sejarah", "Antropologi"],
    bar: {
      aktif: [13, 9, 6],
      proposal: [9, 6, 4],
      hasil: [7, 4, 3],
      sidang: [4, 2, 2],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [6, 9, 11, 13, 14],
      proposal: [4, 6, 8, 9, 10],
      hasil: [2, 3, 5, 7, 7],
      sidang: [1, 2, 3, 4, 4],
    },
  },
  {
    name: "Perikanan",
    prodi: ["Budidaya Perairan", "Tek. Pangan"],
    bar: {
      aktif: [11, 9],
      proposal: [8, 6],
      hasil: [6, 4],
      sidang: [4, 3],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [5, 7, 9, 11, 12],
      proposal: [3, 5, 7, 8, 9],
      hasil: [2, 3, 4, 6, 6],
      sidang: [1, 2, 3, 4, 4],
    },
  },
  {
    name: "Kedokteran",
    prodi: ["Pend. Dokter", "Farmasi"],
    bar: {
      aktif: [7, 5],
      proposal: [5, 4],
      hasil: [4, 3],
      sidang: [3, 2],
    },
    tahun: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      aktif: [3, 5, 6, 7, 8],
      proposal: [2, 3, 4, 5, 5],
      hasil: [1, 2, 3, 4, 4],
      sidang: [1, 1, 2, 3, 3],
    },
  },
];

/* ══════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════ */
let activeFac = 0;
let barInst = null;
let lineInst = null;
let resizeTimer = null;

/* ══════════════════════════════════════════════
     BUILD TOMBOL PILIH FAKULTAS
  ══════════════════════════════════════════════ */
function buildFacBtns() {
  const wrap = document.getElementById("facBtns");
  faculties.forEach((f, i) => {
    const btn = document.createElement("button");
    btn.className = "fac-btn" + (i === 0 ? " active" : "");
    btn.textContent = f.name;
    btn.addEventListener("click", () => {
      activeFac = i;
      document
        .querySelectorAll(".fac-btn")
        .forEach((b, j) => b.classList.toggle("active", j === i));
      document.getElementById("facTitle").textContent = f.name;
      renderAll();
    });
    wrap.appendChild(btn);
  });
}

/* ══════════════════════════════════════════════
     SHARED CHART OPTIONS HELPER
  ══════════════════════════════════════════════ */
function baseScales() {
  return {
    x: {
      grid: { display: false },
      ticks: {
        font: { size: 10, weight: "600" },
        color: "#64748b",
        autoSkip: false,
        maxRotation: 20,
      },
      border: { color: "#e2e8f0" },
    },
    y: {
      beginAtZero: true,
      grid: { color: "rgba(226,232,240,0.7)", lineWidth: 1 },
      ticks: { font: { size: 10 }, color: "#64748b" },
      border: { dash: [4, 4], color: "transparent" },
    },
  };
}

/* ══════════════════════════════════════════════
     RENDER GRAFIK BATANG
  ══════════════════════════════════════════════ */
function renderBar() {
  const fac = faculties[activeFac];

  const totals = {
    aktif: fac.bar.aktif.reduce((sum, val) => sum + val, 0),
    proposal: fac.bar.proposal.reduce((sum, val) => sum + val, 0),
    hasil: fac.bar.hasil.reduce((sum, val) => sum + val, 0),
    sidang: fac.bar.sidang.reduce((sum, val) => sum + val, 0),
  };

  if (barInst) barInst.destroy();

  barInst = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: ["Aktif", "Proposal", "Hasil", "Sidang"],
      datasets: [
        {
          label: fac.name,
          data: [totals.aktif, totals.proposal, totals.hasil, totals.sidang],
          backgroundColor: [
            CLR.aktif + "cc",
            CLR.proposal + "cc",
            CLR.hasil + "cc",
            CLR.sidang + "cc",
          ],
          borderColor: [CLR.aktif, CLR.proposal, CLR.hasil, CLR.sidang],
          borderWidth: 1.5,
          // borderRadius: 4, // Dihilangkan agar bar menyentuh dasar
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: baseScales(),
    },
  });
}

/* ══════════════════════════════════════════════
     RENDER GRAFIK LINE
  ══════════════════════════════════════════════ */
function renderLine() {
  const fac = faculties[activeFac];
  const src = fac.tahun;
  const dashes = [[], [6, 3], [3, 3], [8, 3, 2, 3]];
  const keys = ["aktif", "proposal", "hasil", "sidang"];
  const labels = {
    aktif: "Aktif",
    proposal: "Proposal",
    hasil: "Hasil",
    sidang: "Sidang",
  };

  const datasets = keys.map((k, i) => ({
    label: labels[k],
    data: src[k],
    borderColor: CLR[k],
    backgroundColor: CLR[k] + "1a",
    borderWidth: 2,
    borderDash: dashes[i],
    pointRadius: 3.5,
    pointHoverRadius: 5,
    pointBackgroundColor: CLR[k],
    fill: false,
    tension: 0.38,
  }));

  if (lineInst) lineInst.destroy();
  lineInst = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: { labels: src.labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        ...baseScales(),
        x: {
          ...baseScales().x,
          ticks: { ...baseScales().x.ticks, maxRotation: 30 },
        },
      },
    },
  });
}

function renderAll() {
  renderBar();
  renderLine();
}

function resizeCharts() {
  [barInst, lineInst].forEach((chart) => {
    if (chart) chart.resize();
  });
}

function scheduleChartResize() {
  clearTimeout(resizeTimer);
  requestAnimationFrame(resizeCharts);
  resizeTimer = setTimeout(resizeCharts, 160);
}

function updateNavbarState() {
  const navbar = document.querySelector(".navbar-custom");
  if (!navbar) return;
  navbar.classList.toggle("is-scrolled", window.scrollY > 8);
}

/* ══════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════ */
buildFacBtns();
renderAll();
updateNavbarState();
window.addEventListener("scroll", updateNavbarState, { passive: true });
window.addEventListener("resize", scheduleChartResize);
window.addEventListener("orientationchange", scheduleChartResize);

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      .forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});

// 1. Fungsi untuk menutup menu
function closeNavbar() {
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Pastikan menu sedang terbuka sebelum mencoba menutup
  if (navbarCollapse.classList.contains("show")) {
    const bsCollapse =
      bootstrap.Collapse.getInstance(navbarCollapse) ||
      new bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  }
}

// 2. Deteksi Scroll
// window.addEventListener("scroll", closeNavbar);

// 3. Deteksi Klik di Luar Menu
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar"); // Ganti dengan class pembungkus nav beneran jika perlu
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Jika yang diklik BUKAN bagian dari navbar DAN menu sedang terbuka
  if (
    !navbar.contains(event.target) &&
    navbarCollapse.classList.contains("show")
  ) {
    closeNavbar();
  }
});
