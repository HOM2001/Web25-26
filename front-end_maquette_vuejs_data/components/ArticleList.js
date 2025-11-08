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
          @click="showArticle(article)"
          :class="{
            'article-card': true,
            'article-hover': hoveredId === article.id,
            'article-open': selectedArticle?.id === article.id
          }"
        >
          <h2>{{ article.title }}</h2>
          <p class="article-resume">{{ article.resume }}</p>
          <div v-if="hoveredId === article.id && mode === 'articles'" class="article-meta">
  <p><strong>ID :</strong> {{ article.id }}</p>
  <p><strong>Auteur :</strong> {{ article.author }}</p>
  <p><strong>Lecture :</strong> {{ article.readingTime }} min</p>
  <p><strong>Catégorie :</strong> {{ article.category }}</p>
</div>

          <div v-if="mode === 'home'">
            <div v-if="selectedArticle?.id === article.id" class="article-detail">
              <p><em>{{ article.author }}</em></p>
              <img :src="media_path" alt="illustration" />
              <p>{{ article.body }}</p>
              <button @click.stop="hideArticle()" class="close-btn">Fermer</button>
            </div>
            <div v-else>
              <button @click.stop="showArticle(article)" class="read-more-btn">Lire plus</button>
            </div>
          </div>

          <div v-if="mode === 'articles' && selectedArticle?.id === article.id" class="article-detail">
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
            maxArticles: 10,
            selectedArticle: null,
            hoveredId: null
        };
    },

    computed: {
        nombreArticles() {
            return this.mode === "home" ? this.maxArticles : this.articles.length;
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