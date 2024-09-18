const chartData = {
    labels: ["BigShrimp", "MediumShrimp", "SmallShrimp"],
    data: [30, 25, 45]
}
const myChart = document.querySelector(".my-chart")
new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                labels: "Shrimp pie",
                data: chartData.data
            }
        ] 
    }
}); 