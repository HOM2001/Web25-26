

export default {
    name: 'About', // Nom du composant

    template : `   
          <main v-show="this.page == 'about'">
            <h1>Livrable "front-end"</h1>
            <ul>
                <li>
                   Page d'article : Ajout de 10 articles pour tester 
                </li>            
                <li>
                 Page d'accueil :  ArticleList à modifier pour l'utliser dans accueil et article
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

