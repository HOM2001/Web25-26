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
 <!-- Menu de navigation-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <a class="navbar-brand" href="#">
          <img src="media/Last news.png" alt="Last news" width="120" height="96">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true"    aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse show" id="navbarNav" style="">
          <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" @click.prevent="$parent.showPage('home')">Accueil</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" @click.prevent="$parent.showPage('articles')">Article</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" @click.prevent="$parent.showPage('search')">Recherche</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" @click.prevent="$parent.showPage('favorite')">Favoris</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" @click.prevent="$parent.showPage('about')">À propos</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" @click.prevent="$parent.showPage('login')">Log in</a></li>
          <!-- Afficher nom use connecté -->
          <li class="nav-item" v-if="user" class="user-name">
          {{ user }}
          </li>
          <!-- Bouton de déconnection apres login  -->
          <button v-if="user"  @click="logout" class="logout-btn">Déconnexion</button>
          </ul>
        </div>
      </div>
    </nav>
        <!-- Option de présentations de la couleur de la police  -->
  <label>
    Choisir couleur de la police :
    <select v-model="localColor">
      <option value="black">Noir</option>
      <option value="blue">Bleu</option>
      <option value="red">Rouge</option>
    </select>
  </label>
<!-- Option de présentations de l'épaisseur de la bordure -->
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
