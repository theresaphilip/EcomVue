<template>
  <div>
    <section id="cart_items">
      <div class="container">
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody v-for="(item, i) in carts" :key="i">
              <tr>
                <td class="cart_product">
                  <a href="">
                    <img
                      :src="item.image"
                      width="200"
                      height="150"
                      alt="Card image cap"
                  /></a>
                </td>
                <td class="cart_price">
                  <p>{{ item.price }}</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a
                      class="cart_quantity_up"
                      href="javascript:void(0)"
                      @click="addItem(item)"
                    >
                      +
                    </a>
                    <input
                      class="cart_quantity_input"
                      type="text"
                      name="quantity"
                      v-model="item.quantity"
                      autocomplete="off"
                      size="2"
                    />
                    <a
                      class="cart_quantity_down"
                      href="javascript:void(0)"
                      @click="subItem(item)"
                    >
                      -
                    </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">
                    {{ item.price * item.quantity }}
                  </p>
                </td>
                <td class="cart_delete">
                  <a
                    class="cart_quantity_delete"
                    href="javascript:void(0)"
                    @click="removeCart(item)"
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return { carts: [] };
  },
  created() {
    this.viewCart();
  },
  methods: {
    viewCart() {
      if (localStorage.getItem("cart")) {
        this.carts = JSON.parse(localStorage.getItem("cart"));
      }
    },
    addItem(carts) {
      Object.assign(carts, {
        quantity: parseInt(carts.quantity) + 1,
      });
      localStorage.setItem("cart", JSON.stringify(this.carts));
    },
    subItem(carts) {
      Object.assign(carts, {
        quantity: parseInt(carts.quantity) - 1,
      });
      localStorage.setItem("cart", JSON.stringify(this.carts));
    },
    removeCart(item) {
      var del = this.carts.indexOf(item);
      this.carts.splice(del, 1);
      localStorage.setItem("cart", JSON.stringify(this.carts));
    },
  },
};
</script>

<style>
</style>