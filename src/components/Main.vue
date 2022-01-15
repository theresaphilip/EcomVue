<template>
  <section>
    <Slider />
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
              <div class="col-sm-4" v-for="(i, index) in arr" :key="index">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo">
                      <img
                        :src="i.images[0].image"
                        class="girl img-responsive"
                        alt=""
                      />
                      
                      <div class=" product-information">
                        <h2>&#8377; {{ i.attributes.price }}</h2>
                      <div> {{ i.name }}</div>
                        <ul >
                        <li>
                          <a href="#" @click="addCartBtn(i.pid,i.attributes.price,i.images[0].image)" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          ></li>
                            <li>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-plus-square"></i>Add to
                              wishlist</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--features_items-->
           
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Slider from "./includes/Slider.vue";
import Sidebar from "./includes/Sidebar.vue";
import { product } from "@/common/Service";
export default {
  name: "Main",
  components: {
    Slider,
    Sidebar,
  },
  data() {
    return {
      arr: [],
    };
  },
  created() {
    this.products();
  },
  methods: {
    products() {
      product()
        .then((res) => {
          this.arr = res.data.product;
          console.log(this.arr);
        })
        .catch((error) => {
          console.log("Something Wrong " + error);
        });
    },
     addCartBtn(id,price,image){
        this.$store.dispatch('addTocart',{ id:id,price:price,image:image ,quantity: 1});
    }
  },
};
</script>

<style>
</style>