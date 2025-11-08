// Définir le composant Header

export default {

    name: 'PressHeader', // Nom du composant

    template: `   
          <header class="header">
            <h1>{{ title }} - Page : {{ $parent.currentPage }}</h1>
            <button @click="handleClick" class="toggle-btn">
                {{ showPrincipaux ? 'Masquer les articles principaux' : 'Afficher les articles principaux' }}
            </button>
            
          </header>
    `,

    props: {
        title: {
            type: String,
            required: true,
        },
        showPrincipaux: {
            type: Boolean,
            default: true,
        },
    },
        methods: {
            handleClick() {
                console.log("🟡 Bouton cliqué !");
                this.$emit("showHide-principaux");
            }

        }


}