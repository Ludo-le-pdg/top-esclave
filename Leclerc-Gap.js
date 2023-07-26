window.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvdHJ6aGRtYmtzaHRvZnRvcWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4MzY2NDcsImV4cCI6MjAwNTQxMjY0N30.X6dQ5Arh0H-oemTjBIrzSml0OhtUTRmjba6kTR9CJJU';
    const tableUrl = 'https://potrzhdmbkshtoftoqlp.supabase.co/rest/v1/avis';

    const idEntrepriseFiltre = 1;

    const urlAvisFiltres = `${tableUrl}?id_entreprise=eq.${idEntrepriseFiltre}`;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function loadData(){
    fetch(urlAvisFiltres, {
        headers: {
        'apikey': apiKey,
    },
    })
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            console.log(data);
            // Création de l'élément div
            let divCom = document.createElement('div');
            divCom.classList.add('class-commentaire');
            divCom.style.backgroundColor = getRandomColor();

            // Création de l'élément p pour afficher la note
            let numNote = document.createElement('p');
            numNote.innerHTML = data[i].note + ' / 10';
            numNote.classList.add('class-note-commentaire');

            // Création de l'élément h6 pour afficher le pseudonyme
            let pseudoCom = document.createElement('h6');
            pseudoCom.innerHTML = data[i].pseudonyme;
            pseudoCom.style.display = 'inline';
            pseudoCom.style.margin = '0 auto';
            pseudoCom.style.fontSize = '18px';
 

            // Création de l'élément p pour afficher le commentaire
            let comCom = document.createElement('div');
            comCom.innerHTML = data[i].commentaire;
            comCom.classList.add('class-com-commentaire');

            // Création du conteneur pour numNote et pseudoCom
            let notePseudoContainer = document.createElement('div');
            notePseudoContainer.classList.add('class-note-pseudo');
            notePseudoContainer.appendChild(numNote);
            notePseudoContainer.appendChild(pseudoCom);

            // Ajout de tous les éléments au divCom
            divCom.appendChild(notePseudoContainer);
            divCom.appendChild(comCom);

            // Ajout de divCom à la liste des commentaires
            let listCom = document.getElementById('list-commentaire');
            listCom.appendChild(divCom);
        }

    })
    .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
    });
    }
    const commentaire = document.getElementById('form-commentaire');
    commentaire.addEventListener('submit', function(event){
        event.preventDefault();
        let pseudo = document.getElementById('pseudonyme').value;
        let note = document.getElementById('note-ent').value;
        let commentaire = document.getElementById('com').value;
    
        let avis = {
            id_entreprise: 1,
            pseudonyme: pseudo,
            note: note,
            commentaire: commentaire
        };
    
        fetch('https://potrzhdmbkshtoftoqlp.supabase.co/rest/v1/avis', {
            method: 'POST',
            headers: {
                'apikey': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(avis)
        });
        document.getElementById("list-commentaire").innerHTML = "";
        loadData();
    });
    loadData();

    
    });