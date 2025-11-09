export default{
    name:"Login",
    data(){
        return{
            name:"",
            password:"",
            error:""
        }
    },
    props:{
        fontColor:{
            type : String,
        }
    },
    methods:{
      checkLogin(){
          if(!this.name || !this.password){
              this.error = "Veuillez remplir tous les champs."
              return
          }
          if(this.name.toLowerCase() === "owaiss" && this.password.toLowerCase() === "owaiss123"){
              this.$emit("login-success", this.name.toUpperCase());

              this.error = "";
          }else{
              this.error = "Identifiants incorrects.";
          }
      }
    },


    template: `
    <main class="login-page" :style="mainStyle" :style="{ color: fontColor }">
      <h2>Connexion</h2>
      <form @submit.prevent="checkLogin" class="login-form">
        <label>Nom :</label>
        <input type="text" v-model="name" placeholder="" />

        <label>Mot de passe :</label>
        <input type="password" v-model="password" placeholder="" />

        <button type="submit">Se connecter</button>

        <p v-if="error" class="login-error">{{ error }}</p>
      </form>
    </main>
  `

}