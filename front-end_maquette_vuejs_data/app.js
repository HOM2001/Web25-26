import { createApp } from "vue";

import ArticleList from "./components/ArticleList.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Search from "./components/Recherche.js"


createApp({

  name: "App",

  components: {
    'press-header' : Header,
    'press-menu' : Menu,
    'press-article': ArticleList,
    'press-footer' : Footer,
  },

  data() {
    return {
      currentPage: 'home', // Page par défaut
    }
  },

  methods: {
    showPage(page) {
      this.currentPage = page;
      // Optionnel : Mettre à jour l'URL (sans rechargement)
      // window.history.pushState({}, '', `#${page}`);
    },
  },

}).mount("#app");


