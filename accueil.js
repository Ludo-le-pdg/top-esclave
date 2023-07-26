document.addEventListener("DOMContentLoaded", function() {
    let start = 0;
    const timerElement = document.getElementById("timerr");

    function diminerTemps(){
        timerElement.innerText = start;
        if(start === 10){
            start = 0;
        }
        start++;
        
    }

    setInterval(diminerTemps, 1000);

    let lienGrandeDistribution = document.querySelector('#liste1');

    // Ajoutez un gestionnaire d'événement pour le clic sur le lien
    lienGrandeDistribution.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    // Changez l'URL de la page
    window.location.href = "/nouvelle-page";
    });

});