export default {
    name: 'Search', // Nom du composant

    template : `   
          <main v-show="this.page == 'search'">
          
          </main>
    `,

    props : {
        page       : {
            type        : String,
            required    : true ,
        },
    }
}