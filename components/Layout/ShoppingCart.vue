<template>


  <v-menu v-model="showCart" :close-on-content-click="false" eager
          content-class="menu-content"
          offset-y>
    <template v-slot:activator="{on,attrs}">
      <v-btn v-bind="attrs" v-on="on" icon depressed outlined color="grey" class="rounded">
        <v-icon color="blue">mdi-cart</v-icon>
      </v-btn>
    </template>
    <v-card width="244px" outlined rounded="lg" class="pa-4">
      <div class="d-flex justify-space-between">
        <div>سبد خرید</div>
        <div>3 مورد</div>
      </div>
      <div>
        <v-alert border="left" colored-border style="border-color: #348eda">

          باتری تقویت شده برا گوشی سامسونگ
        </v-alert>
        <div class="d-flex justify-space-between" style="font-size: 14px">
          <div>3200000 تومان</div>
          <div style="color: #9b9b9b">
            <v-icon color="#9b9b9b">mdi-plus</v-icon>
            2عدد
            <v-icon color="#9b9b9b">mdi-minus</v-icon>
          </div>
          <div>
            <v-icon color="#9b9b9b">
              mdi-delete
            </v-icon>
          </div>
        </div>
      </div>
      <div>
        <v-alert border="left" colored-border style="border-color: #348eda">

          باتری تقویت شده برا گوشی سامسونگ
        </v-alert>
        <div class="d-flex justify-space-between" style="font-size: 14px">
          <div>3200000 تومان</div>
          <div style="color: #9b9b9b">
            <v-icon color="#9b9b9b">mdi-plus</v-icon>
            2عدد
            <v-icon color="#9b9b9b">mdi-minus</v-icon>
          </div>
          <div>
            <v-icon color="#9b9b9b">
              mdi-delete
            </v-icon>
          </div>
        </div>
      </div>
      <div>
        <v-alert border="left" colored-border style="border-color: #348eda">

          باتری تقویت شده برا گوشی سامسونگ
        </v-alert>
        <div class="d-flex justify-space-between" style="font-size: 14px">
          <div>3200000 تومان</div>
          <div style="color: #9b9b9b">
            <v-icon color="#9b9b9b">mdi-plus</v-icon>
            2عدد
            <v-icon color="#9b9b9b">mdi-minus</v-icon>
          </div>
          <div>
            <v-icon color="#9b9b9b">
              mdi-delete
            </v-icon>
          </div>
        </div>
      </div>

    </v-card>

  </v-menu>


</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: "ShoppingCart",
  data() {
    return {
      showCart: false
    }
  }
})
</script>

<style lang='css' scoped>
.menu-content {
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

>>> .v-alert__border--left {
  border-color: #0066ff;
}

.v-alert {
  font-size: 14px;
  color: #9b9b9b;
}
</style>
