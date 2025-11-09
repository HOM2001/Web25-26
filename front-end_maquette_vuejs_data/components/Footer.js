// Définir le composant Footer

export default {
    name: 'Footer', // Nom du composant

    template : `   
          <div class="container">
              <footer class="align-items-center py-3 my-4 border-top">
                  <div class="">
                        <a aria-current="page" href="#" @click.prevent="$parent.showPage('home')">
                          <img src="media/Last news.png" alt="Last news" width="60" height="48">
                        </a>
                        <span class="text-body-secondary">© Groupe BootsTrappers : HAMID Owaiss / Amane Imane</span>
                  </div>
              </footer>
          </div>
    `,
}