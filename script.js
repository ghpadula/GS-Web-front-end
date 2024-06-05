var ctxPH = document.getElementsByClassName("ph__chart");
new Chart(ctxPH, {
    type: 'bar',
    data: {
        labels: ["Vermelha do centro","Itamambuca","Pereque-Açu","Prumirim"],
        datasets: [{
            label: "pH atual",
            data: [6, 7, 8, 6],
            borderWidth: 2,
            backgroundColor: ["Red","Blue","Grey","White"],
        },
        {
            label: "pH adequado",
            data: [7, 7, 7, 7],
            borderWidth: 2,
            backgroundColor: "Green"
        }
    ]
    }
});

var ctxOX = document.getElementsByClassName("OX__chart");
new Chart(ctxOX, {
    type: 'bar',
    data: {
        labels: ["Vermelha do centro","Itamambuca","Pereque-Açu","Prumirim"],
        datasets: [{
            label: "Oxigênio atual",
            data: [7, 6, 8, 9],
            borderWidth: 2,
            backgroundColor: ["Red","Blue","Grey","White"],
        },
        {
            label: "Oxigênio adequado",
            data: [7,7,7,7],
            borderWidth: 2,
            backgroundColor: "Green"
        }
    ]

    }
})


