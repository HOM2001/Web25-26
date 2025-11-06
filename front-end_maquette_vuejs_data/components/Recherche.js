export default {
    name: 'Search', // Nom du composant

    template : `   
          <main v-show="this.page == 'search'">
  <section id="search-section" aria-labelledby="search-title">
    <h2 id="search-title">Rechercher des articles</h2>

    <form @submit.prevent="$emit('search', { q, category, minTime, maxTime, sort })" @reset.prevent="resetForm">
      <div>
        <label for="q">Recherche</label>
        <input id="q" v-model="q" type="search" placeholder="Titre, contenu ou auteur" />
      </div>

      <div>
        <label for="category">Catégorie</label>
        <select id="category" v-model="category">
          <option value="">Toutes</option>
          <option value="Développement Web">Développement Web</option>
          <option value="Design">Design</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Backend">Backend</option>
          <option value="Outils">Outils</option>
        </select>
      </div>

      <div>
        <label for="minTime">Durée min (min)</label>
        <input id="minTime" v-model.number="minTime" type="number" min="0" />
      </div>

      <div>
        <label for="maxTime">Durée max (min)</label>
        <input id="maxTime" v-model.number="maxTime" type="number" min="0" />
      </div>

      <div>
        <label for="sort">Trier par</label>
        <select id="sort" v-model="sort">
          <option value="relevance">Pertinence</option>
          <option value="readingTimeAsc">Durée croissante</option>
          <option value="readingTimeDesc">Durée décroissante</option>
          <option value="titleAsc">Titre A→Z</option>
        </select>
      </div>

      <div style="margin-top:8px;">
        <button type="submit">Rechercher</button>
        <button type="reset">Réinitialiser</button>
      </div>
    </form>

    <div id="search-summary" aria-live="polite" v-if="summary">{{ summary }}</div>

    <section id="search-results" aria-label="Résultats de recherche">
      <slot name="results">
        <!-- slot par défaut : parent peut fournir l'affichage des résultats -->
      </slot>
    </section>
  </section>
 </main>
    `,


    props : {
        page       : {
            type        : String,
            required    : true ,
        },
    }
}