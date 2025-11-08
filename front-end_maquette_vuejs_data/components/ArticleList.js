export default {
    name: "ArticleList",

    template: `
  <main class="article-list" v-show="page === 'home' || page === 'articles'">
  <!-- ✅ Titre -->
  <h3>{{ nombreArticles }} articles disponibles</h3>

  <!-- ✅ PAGE D'ACCUEIL -->
  <div v-if="page === 'home' && !selectedArticle">
    <!-- ⭐ Article phare -->
    <section class="article-phare">
      <h2>{{ articleMain.title }}</h2>
      <img :src="'./media/' + articleMain.image" alt="illustration" />
      <p>{{ articleMain.body }}</p>
      <div class="meta">
        <p><strong>Auteur :</strong> {{ articleMain.author }}</p>
        <p><strong>Lecture :</strong> {{ articleMain.readingTime }} min</p>
        <p><strong>Catégorie :</strong> {{ articleMain.category }}</p>
      </div>
    </section>

    <!-- 🔷 Articles principaux -->
    <section class="articles-principaux">
      <article
        v-for="article in articlesPrincipaux"
        :key="article.id"
        class="article-principal"
        @click="showArticle(article)"
      >
        <h3>{{ article.title }}</h3>
        <img :src="'./media/' + article.image" alt="illustration" />
        <p>{{ article.resume }}</p>
      </article>
    </section>

    <!-- 🔹 Articles secondaires -->
    <section class="articles-secondaires">
      <ul>
        <li
          v-for="article in articlesSecondaire"
          :key="article.id"
          class="article-secondaire"
          @click="showArticle(article)"
        >
          {{ article.title }}
        </li>
      </ul>
    </section>
  </div>

  <!-- ✅ ARTICLE DÉTAILLÉ EN HOME -->
  <section v-if="page === 'home' && selectedArticle" class="article-full-view">
    <h2>{{ selectedArticle.title }}</h2>
    <img :src="'./media/' + selectedArticle.image" alt="illustration" />
    <p>{{ selectedArticle.body }}</p>
    <div class="meta">
      <p><strong>Auteur :</strong> {{ selectedArticle.author }}</p>
      <p><strong>Catégorie :</strong> {{ selectedArticle.category }}</p>
    </div>
    <button @click="hideArticle" class="back-btn">Retour à l’accueil</button>
  </section>

  <!-- ✅ PAGE ARTICLES -->
  <section v-if="page === 'articles'" class="articles grid-layout">
    <article
      v-for="article in articles"
      :key="article.id"
      @mouseover="hoveredId = article.id"
      @mouseout="hoveredId = null"
      @click="showArticle(article)"
      :class="{
        'article-card': true,
        'article-hover': hoveredId === article.id,
        'article-open': selectedArticle?.id === article.id
      }"
    >
      <h2>{{ article.title }}</h2>
      <p class="article-resume">{{ article.resume }}</p>

      <!-- 🖱️ Métadonnées au survol -->
      <div v-if="hoveredId === article.id" class="article-meta">
        <p><strong>ID :</strong> {{ article.id }}</p>
        <p><strong>Auteur :</strong> {{ article.author }}</p>
        <p><strong>Lecture :</strong> {{ article.readingTime }} min</p>
        <p><strong>Catégorie :</strong> {{ article.category }}</p>
      </div>

      <!-- 🖱️ Contenu complet au clic -->
      <div v-if="selectedArticle?.id === article.id" class="article-detail">
        <p><em>{{ article.author }}</em></p>
        <img :src="'./media/' + article.image" alt="illustration" />
        <p>{{ article.body }}</p>
      </div>
    </article>
  </section>
</main>
  `,

    props: {
        page: {
            type: String,
            required: true
        },
        mode: {
            type: String,
            default: "home"
        },
        articles: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            mainArticles: 8,
            selectedArticle: null,
            hoveredId: null
        };
    },

    computed: {
        articleMain(){
            console.log("Article main ", this.articles[0])
            return this.articles[0];
        },
        articlesPrincipaux(){
            console.log("Article principaux ", this.articles.slice(1,4))

            return this.articles.slice(1,4)
        },
        articlesSecondaire(){
            console.log("Article secondaires ", this.articles.slice(4,8))

            return this.articles.slice(4,8);
        },
        nombreArticles() {
            return this.mode === "home" ? this.mainArticles : this.articles.length;
        },
        media_path() {
            return this.selectedArticle ? `./media/${this.selectedArticle.image}` : "";
        }
    },

    methods: {
        showArticle(article) {
            if (this.selectedArticle?.id === article.id) {
                this.hideArticle();
            } else {
                this.selectedArticle = article;
            }
        },
        hideArticle() {
            this.selectedArticle = null;
        }
    }
};