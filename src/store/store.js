import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        token:'',
       emailid:'',
       cart:JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
    },
    getters:{
        inCart: state => state.cart
     },
    mutations:{
        tokenemail(state,payload){
            return state.token=payload.id,state.emailid=payload.uid;
        },
        LOGOUT:(state)=>{
            state.token="",
            state.emailid="",
            window.localStorage.removeItem('token'),
            window.localStorage.removeItem('uid')
        },
        SET_CART:(state,data)=>{
            console.log(data);
            let flag = true;
            state.cart.forEach((element,index) => {
                if(element.id == data.id)
                {
                    state.cart[index].quantity = state.cart[index].quantity+1;
                    flag=false;
                }
            });
            if(flag)
            {
                state.cart.push(data);
            }
            localStorage.setItem('cart',JSON.stringify(state.cart));
        }
       
    },
    actions:{
        token(context,payload){
            context.commit('tokenemail',payload)
        },
        logout({commit}){
            commit('LOGOUT')
            this.$router.push("/login");
        },
        addTocart({commit},data){
            commit('SET_CART',data);
        }
        
    }
})


