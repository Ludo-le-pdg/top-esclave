// Obtenir le modèle par son ID
const monModele = document.getElementById('monModele');

// Cloner le contenu du modèle
const clone = monModele.content.cloneNode(true);

// Insérer la copie dans le DOM (par exemple, dans un élément div avec l'ID "container")
document.getElementById('container').appendChild(clone);