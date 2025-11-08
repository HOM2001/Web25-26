// Définir le composant Footer

export default {
    name: 'Menu', // Nom du composant
    props : {
        user: {
            type: String,
            default: null,
        }
    },
    methods:{
      logout(){
          this.$emit("logout")
      }
    },
    template : `   
        <nav>
          <ul>
           <li><a href="#" @click.prevent="$parent.showPage('home')">Accueil</a></li>  |
            <li><a href="#" @click.prevent="$parent.showPage('articles')">Article</a></li> |
            <li><a href="#" @click.prevent="$parent.showPage('search')">Recherche</a></li>|
            <li><a href="#" @click.prevent="$parent.showPage('favorite')">Favoris</a></li>|
            <li><a href="#" @click.prevent="$parent.showPage('about')">À propos</a></li>|
            <li><a href="#" @click.prevent="$parent.showPage('login')">Log in</a></li>
            <li v-if="user" class="user-name">
        {{ user }}
        </li>
          <button v-if="user"  @click="logout" class="logout-btn">Déconnexion</button>
         </ul>
        </nav>
    `,
}
