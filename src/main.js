import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




var inputValue = document.getElementsByClassName("auth-enter");

var onFocus = function() {
  this.parentElement.classList.add("active-input-box");
  this.previousElementSibling.classList.add("active-input");
};

var onBlur = function() {
  var value_login = this.value;
  if (value_login == 0) {
    this.parentElement.classList.remove("active-input-box");
    this.previousElementSibling.classList.remove("active-input");
  }
};

for (var i = 0; i < inputValue.length; i++) {
  inputValue[i].addEventListener("focus", onFocus, false);
  inputValue[i].addEventListener("blur", onBlur, false);
}
