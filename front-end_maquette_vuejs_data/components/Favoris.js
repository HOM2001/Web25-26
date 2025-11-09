export default{
    name : "Favorite",
    props:{
        articles: {
            type: Array,
            required: true,
        },
        fontColor:{
            type : String,
        }
    },
    data(){
        return {
            selectedId: [],
            showFavorite : false,
            lastSelected : null
        };
    },
    computed:{
      selectedArticles(){
          return this.articles.filter(art => this.selectedId.includes((art.id)))
      },

    },
    methods: {
        addFavorite(id) {
            if (this.selectedId.includes(id)) {
                this.selectedId = this.selectedId.filter(i => i !== id);
            } else {
                this.selectedId.push(id);
                this.lastSelected = id;
            }
            localStorage.setItem("favoris", JSON.stringify(this.selectedId))
        },
        loadFavorite() {
            const stored = localStorage.getItem("favoris")
            if (stored) {
                this.selectedId = JSON.parse(stored);
            }
        },
        goToList(){
            this.showFavorite = false;
        },
        goToFavorites(){
            if(this.selectedId.length> 0){
                this.showFavorite = true;
            }
        }
    },
    mounted(){
            this.loadFavorite();

    },
    template: `
    <main class="favoris-page" :style="mainStyle" :style="{ color: fontColor }"
>
      <div class="favorites-bar" v-if="selectedId.length > 0 && !showFavorite">
        <button @click="goToFavorites">
          🛒 Voir mes favoris ({{ selectedId.length }})
        </button>
      </div>

    <section v-if="!showFavorite" class="article-table">
  <h2>Articles disponibles</h2>
  <table>
    <thead>
      <tr>
        <th>✔</th>
        <th>numéro</th>
        <th>Titre</th>
        <th>Auteur</th>
        <th>Lecture</th>
        <th>Catégorie</th>
        <th>Résumé</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(article, index) in articles" :key="article.id">
        <td>
          <input
            type="checkbox"
            :checked="selectedId.includes(article.id)"
            @change="addFavorite(article.id)"
          />
        </td>
        <td>{{ index + 1 }}</td>
        <td>{{ article.title }}</td>
        <td>{{ article.author }}</td>
        <td>{{ article.readingTime }} min</td>
        <td>{{ article.category }}</td>
        <td>{{ article.more }}</td>
      </tr>
    </tbody>
  </table>
</section>

      <section v-else class="favorites-list">
        <h2>Mes favoris</h2>
        <button @click="goToList">↩ Retour à la liste</button>

      

        <p v-if="selectedArticles.length === 0">Aucun favori sélectionné.</p>
        <ul>

          <li v-for="article in selectedArticles" :key="article.id">
            <h3>{{ article.title }}</h3>
            <p>{{ article.more }}</p>
            <button @click="addFavorite(article.id)">❌ Retirer</button>
          </li>
        </ul>
      </section>
    </main>
  `


}