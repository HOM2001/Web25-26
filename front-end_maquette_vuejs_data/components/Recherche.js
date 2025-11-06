export default {
    name: 'Search', // Nom du composant
    props : {
        page       : {
            type        : String,
            required    : true ,
        },
        articles: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
            keyword:"",
            selectedCategory:"",
            selectedArticle:null
        };

    },
    computed: {
        filterArticles() {
            const kw = this.keyword.toLowerCase();
            const cat = this.selectedCategory.toLowerCase();
            return this.articles.filter(article => {
            const matchT =
                article.title.toLowerCase().includes(kw) ||
                article.more.toLowerCase().includes(kw) ||
                article.body.toLowerCase().includes(kw);
            const matchCat = cat ? article.category.toLowerCase() === cat : true;
            return matchT && matchCat;
        });
        }
    },
    methods:{
        showArticles(article){
            this.selectedArticle = article;
        },
        hideArticle(){
            this.selectedArticle = null;
        }


    },
    template : `   
   <main class="search-page">
  <h2>Recherche d'articles</h2>

  <div class="search-layout">
    <!-- Formulaire -->
    <aside class="search-form">
      <input v-model="keyword" placeholder="Mot-clé..." />
      <select v-model="selectedCategory">
        <option value="">Toutes catégories</option>
        <option value="Développement Web">Développement Web</option>
        <option value="Design">Design</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Backend">Backend</option>
        <option value="Outils">Outils</option>
        </select>
    </aside>

    <!-- Résultats -->
    <section class="search-results">
      <p v-if="filterArticles.length === 0">Aucun article trouvé.</p>

      <article
        v-for="article in filterArticles"
        :key="article.id"
        @click="showArticle(article)"
      >
        <h3>{{ article.title }}</h3>
        <p>{{ article.more }}</p>
       <p> </p>
      </article>

      <!-- Détail -->
      <div v-if="selectedArticle">
        <h3>{{ selectedArticle.title }}</h3>
        <p>{{ selectedArticle.body }}</p>
        <button @click="hideArticle()">Fermer</button>
      </div>
    </section>
  </div>
</main>
    `,

}