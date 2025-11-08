export default {
    name: "ArticleList",

    template: `
  <main class="article-list" v-show="page === 'home' || page === 'articles'">
    <h3>{{ nombreArticles }} articles disponibles</h3>

    <!-- ✅ PAGE D'ACCUEIL -->
    <div v-if="page === 'home'" class="home-layout">
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

      <!-- 🔷 Articles principaux + secondaires -->
      <div class="articles-group">
        <section class="articles-principaux">
          <article
            v-for="article in articlesPrincipaux"
            :key="article.id"
            class="article-principal"
            @mouseover="setHovered(article.id)"
            @mouseout="hoveredId = null"
            :ref ="'article-' +article.id"
          >
            <h3>{{ article.title }}</h3>
            <img :src="'./media/' + article.image" alt="illustration" />
            <p>{{ article.resume }}</p>
          </article>
        </section>

        <section class="articles-secondaires">
          <ul>
            <li
              v-for="article in articlesSecondaires"
              :key="article.id"
              class="article-secondaire"
              @mouseover="setHovered(article.id)"
              @mouseout="hoveredId = null"
              :ref ="'article-' +article.id"
            >
              {{ article.title }}
            </li>
          </ul>
        </section>
      </div>

      <!-- 🖱️ Métadonnées au survol -->
      <aside v-if="hoveredId" class="article-meta-home" :style="{top: hoveredPos + 'px'}">
        <div v-for="article in extendedArticles" :key="article.id">
          <div v-if="article.id === hoveredId">
            <p><strong>Auteur :</strong> {{ article.author }}</p>
            <p><strong>Lecture :</strong> {{ article.readingTime }} min</p>
            <p><strong>Catégorie :</strong> {{ article.category }}</p>
            <p><strong>More :</strong> {{article.more}}</p>
          </div>
        </div>
      </aside>
    </div>

  <!-- ✅ Vue liste des articles -->
<section v-if="page === 'articles' && !selectedArticle" class="articles grid-layout">
  <article
    v-for="article in articles"
    :key="article.id"
    @mouseover="hoveredId = article.id"
    @mouseout="hoveredId = null"
    @click="showArticle(article)"
    :class="{
      'article-card': true,
      'article-hover': hoveredId === article.id
    }"
  >
    <h2>{{ article.title }}</h2>
    <p class="article-resume">{{ article.resume }}</p>
</section>

<!-- ✅ Vue article complet -->
<section v-if="page === 'articles' && selectedArticle" class="article-full-view">
  <h2>{{ selectedArticle.title }}</h2>
  <img :src="'./media/' + selectedArticle.image" alt="illustration" />
  <p>{{ selectedArticle.body }}</p>
  <div class="meta">
    <p><strong>Auteur :</strong> {{ selectedArticle.author }}</p>
    <p><strong>Catégorie :</strong> {{ selectedArticle.category }}</p>
  </div>
  <button @click="hideArticle" class="back-btn">Retour à la liste</button>
</section>

  </main>
  `,

    props: {
        page: { type: String, required: true },
        mode: { type: String, default: "home" },
        articles: { type: Array, required: true }
    },

    data() {
        return {
            mainArticles: 8,
            selectedArticle: null,
            hoveredId: null,
            hoveredPos: 0,
        };
    },

    computed: {
        extendedArticles() {
            return this.articles.slice(0,8);
        },
        articleMain() {
            return this.extendedArticles[0];
        },
        articlesPrincipaux() {
            return this.extendedArticles.slice(1, 4);
        },
        articlesSecondaires() {
            return this.extendedArticles.slice(4, 8);
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
            this.selectedArticle = article;
        },
        hideArticle() {
            this.selectedArticle = null;
        },
        setHovered(id, event) {
            this.hoveredId = id;
            this.$nextTick(() => {
                const el = this.$refs['article-' + id];
                if (el && el[0]) {
                    const rect = el[0].getBoundingClientRect();
                    this.hoveredPos = rect.top + window.scrollY;
                }
            });
        }
    }
};
