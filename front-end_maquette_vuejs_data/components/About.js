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
            <strong>Page d'accueil :</strong> 10 articles disponibles (les 10 premiers)<br>
            Cliquer sur le bouton "Lire plus" pour déployer l'article et "Fermer" pour le refermer.
          </p>
        </li>

        <li class="about-item">
          <p>
            <strong>Page d'accueil :</strong> Liste de tous les articles disponibles (25) sur 2 colonnes<br>
            Cliquer sur le cadre pour lire l'article.
          </p>
        </li>

        <li class="about-item">
          <p>
            <strong>Page recherche :</strong> permet de rechercher des articles par mot et catégorie (pour l'instant : titre et more).
          </p>
        </li>

        <li class="about-item">
          <p>
            <strong>Page de favoris :</strong> Tableau avec les titres, auteurs, lecture, catégorie et résumé des articles, et un checkbox pour cocher et l'ajouter aux favoris.<br>
            Quand on clique sur la checkbox, un panier apparaît avec l'article en favoris.
          </p>
        </li>
      </ul>
    </main>
  `
}