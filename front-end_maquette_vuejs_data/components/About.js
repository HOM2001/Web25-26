export default {
    name: 'About',
    props:{
        fontColor:{
            type : String,
        }
    },

    template: `
    <main class="about-page" :style="{ color: fontColor }"
>
      <h1 class="about-title">Livrable "front-end"</h1>
      <ul class="about-list">
        <li class="about-item">
          <p>
            <strong>Page d'accueil :</strong> 
            1 article phare ( titre + image + body + auteur et catégorie
            <br>
            3 articles principaux avec titre et image + 2 articles secondaire visibles + bouton voir plus ( max 10 articles total)
            <br>
            Quand on passe la souris sur un article sur le côté droit de la page il y a les données.
          </p>
        </li>

        <li class="about-item">
          <p>
            <strong>Page d'articles :</strong> Liste de tous les articles disponibles (25) sur 2 colonnes<br>
            Cliquer sur le cadre pour lire l'article
            <br>
            l'article est affiché au complet sur une nouvelle page avec un bouton pour revenir en arriere 
          </p>
        </li>

        <li class="about-item">
          <p>
            <strong>Page recherche :</strong> permet de rechercher des articles par mot-clé , catégorie , les auteurs 
            <br>
            et capacité de modifier le nombre d'articles à afficher tout ça en temps réel
          </p>
        </li>

        <li class="about-item">
          <p>
            <strong>Page de favoris :</strong> Tableau avec les titres, auteurs, lecture, catégorie et résumé des articles, et un checkbox pour cocher et l'ajouter aux favoris.<br>
            Quand on clique sur la checkbox, un panier apparaît avec l'article en favoris.
            <br>
            Quand on clique sur l'artion on a le titre de l'article et le body , 2 boutons disponibles un pour supprimer du panier et un autre pour revenir en arriere 
          </p>
        </li>
        <li>
        <p>
        <strong> Page login :</strong> Formulaire pour se connecter ( pour l'instant nom : Alain , mot de passe : Alain123) 
        <br>
        Lors de la connection, il y a un bouton dans le menu avec le nom de la personne connecté + un bouton de déconnection
        <br> 
        Le nom de personne est enregistré lors d'un raffraichissement de la page 
</p>
</li>
         <li>
         <p>
         <strong>Autre fonctionnalités :</strong> Dans le header on a les coordonnées de la souris 
</p>
</li>
      </ul>
    </main>
  `
}