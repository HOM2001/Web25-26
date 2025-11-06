

export default {
    name: 'About', // Nom du composant

    template : `   
          <main v-show="this.page == 'about'">
            <h1>Livrable "front-end"</h1>
            <ul>
                <li>
                   Page d'accueil : 10 articles disponibles (les 10 premiers ) <br>
                   Cliquer sur bouton lire plus pour déployer l'article et fermer pour le fermer
                </li>      
                <br>      
                <li>
               Page d'accueil : Liste de tous les articles disponibles ( 25 ) sur 2 colonnes <br>
               Cliquer sur le cadre pour lire l'article.
               </li>
               <br>
               <li>
               Page recherche : permet de rechercher des articles par mot et catégorie ( pour l'instant titre et more )
</li>
            </ul>
          </main>
    `,

    props : {
        page       : {
            type        : String,
            required    : true ,
        },
    }
}

