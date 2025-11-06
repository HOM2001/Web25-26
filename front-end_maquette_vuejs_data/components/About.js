

export default {
    name: 'About', // Nom du composant

    template : `   
          <main v-show="this.page == 'about'">
            <h1>Livrable "front-end"</h1>
            <ul>
                <li>
                   Page d'accueil : 10 articles disponibles (les 10 premiers )
                   Cliquer sur bouton lire plus pour déployer l'article et fermer pour le fermer
                </li>            
                <li>
               Page d'accueil : Liste de tous les articles disponibles ( 25 ) sur 2 colonnes 
               cliquer sur le cadre pour lire l'article.
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

