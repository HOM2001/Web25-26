// Définir le composant Header

export default {

    name: 'Header', // Nom du composant

    template : `   
          <header class="header">
            <h1>
                {{ title }}
            </h1>
          </header>
    `,

    props : {
        title       : {
            type        : String,
            required    : true ,
        },

    }

}