// Définir le composant Header

export default {

    name: 'PressHeader', // Nom du composant

    template: `   
          <header class="header">
            <h1>{{ title }} - Page : {{ $parent.currentPage }}</h1>
            
          </header>
    `,

    props: {
        title: {
            type: String,
            required: true,
        },

    },




}