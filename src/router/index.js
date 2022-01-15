import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue';
import Login from '../components/Login.vue';
import Profile from '../components/Profile.vue';
import Cart from '../components/Cart.vue';
import Checkout from '../components/Checkout.vue';
import Productdetails from '../components/Productdetails.vue';
import Wishlist from '../components/Wishlist.vue'
import Register from '../components/Register.vue';
import Category from '../components/Category.vue'
import Updateprofile from '../components/Updateprofile.vue'
import Changepassword from '../components/Changepassword.vue'
import Cms from '../components/Cms.vue'

export default new Router({
    routes:[
        {
            path:'/',
            name:'Main',
            component:Main
        },
        {
            path:'/categorybyid/:id',
            name:'Category',
            component:Category
        },
        {
            path:'/cms/:id',
            name:'Cms',
            component:Cms
        },
        {
            path:'/contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/profile',
            name:'Profile',
            component:Profile
        },
        {
            path:'/editprofile',
            name:'Updateprofile',
            component:Updateprofile
        },
        {
            path:'/changepass',
            name:'Changepassword',
            component:Changepassword
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart
        },
        {
            path:'/checkout',
            name:'Checkout',
            component:Checkout
        },
        {
            path:'/productdetails/:id',
            name:'Productdetails',
            component:Productdetails
        },
        {
            path:'/wishlist',
            name:'Wishlist',
            component:Wishlist
        },
        {
            path:'/register',
            name:'Register',
            component:Register
        },
    ]
})