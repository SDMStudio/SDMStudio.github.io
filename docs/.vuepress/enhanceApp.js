// import 'bootstrap/scss/bootstrap.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// import VueMaterial from "vue-material";
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";
import VueParticles from 'vue-particles'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(VueParticles)
  // Vue.use(VueMaterial);
}