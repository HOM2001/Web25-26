// Définir le composant Header

export default {

    name: 'PressHeader', // Nom du composant

    template: `   
          <header class="header">
            <h1>{{ title }} - Page : {{ $parent.currentPage }}</h1>
            <div class="mouse-coords">
  X: {{ x }} | Y: {{ y }}
</div>
          </header>
    `,

    props: {
        title: {
            type: String,
            required: true,
        },

    },
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    mounted() {
        window.addEventListener("mousemove", this.updateMouse);
    },
    beforeUnmount() {
        window.removeEventListener("mousemove", this.updateMouse);
    },

    methods: {
            updateMouse(e) {
                this.x = e.clientX;
                this.y = e.clientY;
            }


    }




}