const pieChartElement = document.getElementById("pieChart");
const barChartElement = document.getElementById("barChart");

if (pieChartElement) {
  new Chart(pieChartElement, {
    type: "doughnut",
    data: {
      labels: ["Pending", "Diterima", "Bimbingan"],
      datasets: [
        {
          data: [2, 46, 17],
          backgroundColor: ["#ffc107", "#198754", "#0dcaf0"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

if (barChartElement) {
  new Chart(barChartElement, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
      datasets: [
        {
          label: "Jumlah Proposal",
          data: [5, 8, 12, 6, 10, 7],
          borderRadius: 8,
          backgroundColor: "#2e7d32",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
