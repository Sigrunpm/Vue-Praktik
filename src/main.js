import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faBell, faMasksTheater, faGraduationCap, faBookOpen, faUserGraduate, faPalette, faMagnifyingGlass, faUserTie, faIcons, faSliders, faBook, faPen, faPhone, faEnvelope, faStar, faHeart, faUser, faArrowRight, faArrowDown, faXmark, faFile, faClipboard, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
 
library.add(faUserSecret, faBell, faMasksTheater, faGraduationCap, faBookOpen, faUserGraduate, faPalette, faMagnifyingGlass, faUserTie, faIcons, faSliders, faBook, faPen, faPhone, faEnvelope, faStar, faHeart, faUser, faArrowRight, faArrowDown, faXmark, faFile, faClipboard, faCircleInfo)