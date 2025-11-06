export default {

    name: "ArticleList",

    template: `
     <main class="article-list" v-show="page === 'home' || page === 'articles'">
  <h3>{{ nombreArticles }} articles disponibles</h3>

  <section :class="['articles', mode === 'articles' ? 'grid-layout' : '']">
    <article
      v-for="article in mode === 'home' ? articles.slice(0, maxArticles) : articles"
      :key="article.id"
      @mouseover="hoveredId = article.id"
      @mouseout="hoveredId = null"
      @click="mode === 'articles' ? showArticle(article) : null"
      :class="{
        'article-card': true,
        'article-hover': hoveredId === article.id
      }"
    >
      <h2>{{ article.title }}</h2>
      <p class="article-resume">{{ article.resume }}</p>

      <div v-if="mode === 'home'">
        <div v-if="selectedArticle && selectedArticle.id === article.id" class="article-detail">
          <p><em>{{ article.author }}</em></p>
          <img :src="media_path" alt="illustration" />
          <p>{{ article.body }}</p>
          <button @click.stop="hideArticle()" class="close-btn">Fermer</button>
        </div>
        <div v-else>
          <button @click.stop="showArticle(article)" class="read-more-btn">Lire plus</button>
        </div>
      </div>

      <div v-if="mode === 'articles' && selectedArticle && selectedArticle.id === article.id" class="article-detail">
        <p><em>{{ article.author }}</em></p>
        <img :src="media_path" alt="illustration" />
        <p>{{ article.body }}</p>
        <button @click.stop="hideArticle()" class="close-btn">Fermer</button>
      </div>
    </article>
  </section>
</main>
  
    `,

    props: {
        page: {
            type: String,
            required: true,
        },
        mode: {
            type: String,
            default: 'home',
        },
        articles:{
            type: Array,
            required: true
        }
    },

    data() {
        return {
            "maxArticles": 10,
            "articlesRestant": 10,
            "selectedArticle": null,
            "title": "Maquette Site de Presse / Listing",
            "hoveredId": null,


        };
    },


    computed: {
        nombreArticles() {
            return this.mode === 'home'
                ? this.maxArticles
                : this.articles.length;


    },
        media_path() {
            return `./media/${this.selectedArticle.image}`
        },
    },

    methods: {

            showArticle(article) {
                console.log("Lire article " + article.id)
                this.selectedArticle = article
                // Si l'article est déjà affiché, ne rien faire
               // if (this.selectedArticle?.id === article.id) return

                // Si on a encore des articles disponibles
              //  if (this.articlesRestant > 0) {
                //    this.selectedArticle = article
                  //  this.articlesRestant--
                //} else {
                  //  console.log("Plus d'articles disponibles")
               // }
            },

            hideArticle() {
                if (this.selectedArticle) {
                    console.log("Cacher article " + this.selectedArticle.id)
                    this.selectedArticle = null

                    // Remonter le compteur si on est en dessous du max
                   // if (this.articlesRestant < this.maxArticles) {
                    //    this.articlesRestant++
                    //}
                }

        }

    },

};

