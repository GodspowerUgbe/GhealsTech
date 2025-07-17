const ctx = document.getElementById('projChart').getContext('2d');
if (ctx) {
  
    const grad = ctx.createLinearGradient(0,0,0,250);
    grad.addColorStop(0,'#504044' );
    grad.addColorStop(1, '#272472');
    // grad.addColorStop(0,'#d24141' );
    // grad.addColorStop(1, '#7312dd');
    
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'projects',
            data: [12, 19, 3, 5, 2, 3,6,5,0,3,30,12],
            borderColor:grad,
            borderRadius:20,
            backgroundColor:'violet',
            tension:0.5
          }]
      },
        options: {
        responsive:true,
        maintainAspectRatio:false,
          scales: {
            x:{
              grid: {
                display:false
              }
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });

}  
