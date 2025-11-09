// Définir le composant Footer

export default {
    name: 'Menu', // Nom du composant
    props : {
        user: {
            type: String,
            default: null,
        },
        mainStyle:{
            type:Object
        },
        fontColor :{
            type : String,
        },
    data(){
            return {
                localColor:this.fontColor
            }
    },
        watch:{
            localColor(newColor){
                this.$emit("updateFontColor",newColor)
            }
        }
    },

    methods:{
      logout(){
          this.$emit("logout")
      },


    },
    template : ` 
  <main class="menu-main" :style="{ color: fontColor, border: borderStyle }">
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
        </main>
  <label>
    Choisir couleur de la police :
    <select v-model="localColor">
      <option value="black">Noir</option>
      <option value="blue">Bleu</option>
      <option value="red">Rouge</option>
    </select>
  </label>

  <label>
    Choisir épaisseur de la bordure :
    <select v-model="borderStyle">
      <option value="none">Aucune</option>
      <option value="thick">Epaisse</option>
      <option value="thin">Fine</option>
    </select>
  </label>
</div>

    `,
}
