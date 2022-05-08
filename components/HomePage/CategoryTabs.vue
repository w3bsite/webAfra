<template>
  <v-row>
    <v-col cols="3">
      <v-item-group v-model="SelectedItem" mandatory>
        <div v-for="(item,i) in categories" :key="i">
          <v-item v-slot="{ active, toggle }">
            <v-card

              :color="active ? 'primary' : ''"
              class="d-flex align-center mb-6
              elevation-0
              "
              style="filter: drop-shadow(0px 3px 20px #DDDDDD);"
              :class="active?'white--text':''"
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>

                <v-list-item>
                  <v-list-item-avatar rounded="lg" :class="active?'white--text':''">
                    <v-sheet color="#4e92ff" min-width="57px" min-height="57px" class="d-flex">
                      <v-icon class="ma-auto" color="white">{{ item.icon }}</v-icon>
                    </v-sheet>


                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title style="font-size: 16px" :class="active?'white--text':''">
                      {{ item.product }}
                    </v-list-item-title>
                    <v-list-item-subtitle :class="active?'white--text':''">
                      {{ item.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>


              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </div>
      </v-item-group>
    </v-col>
    <v-col cols="9">
      <v-window
        v-model="SelectedItem"

        vertical
      >
        <v-window-item
          v-for="(item,i) in categories" :key="i"
        >
          <v-card>
            <v-img min-width="100%" eager :src="item.img" contain></v-img>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
    <v-col cols="12">
      <v-app-bar class="promo elevation-0 rounded-lg">
        <div class="mr-8 white--text" style="font-size: 16px">جشنواره تابستانه استار موبو با جوایز و تخفیف ویژه</div>
        <div class="mr-auto ml-4 white--text">
          <span>صفحه جشنواره</span>
          <v-icon color="white">mdi-chevron-left</v-icon>
        </div>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'


export default Vue.extend({
  name: "CategoryTabs",
  data() {
    return {
      SelectedItem: 0,
      categories: [
        {
          product: 'باتری انواع دستگاه ها',
          description: 'موبایل ، تبلت ، ساعت هوشمند',
          icon: 'mdi-battery-charging-high',
          img: 'images/HomePage/Slider.png'
        },
        {
          product: 'قطعات سخت افزاری',
          description: 'موبایل ، تبلت ، ساعت هوشمند',
          icon: 'mdi-memory',

          img: 'images/HomePage/Slider.png'
        },
        {
          product: 'انواع لوازم جانبی',
          description: 'موبایل ، تبلت ، ساعت هوشمند',
          icon: 'mdi-headphones',
          img: 'images/HomePage/Slider.png'
        },]
    }
  }
})
</script>

<style lang='scss' scoped>
.promo {
  background-image: url("../../static/images/HomePage/Promo1.png");
  background-position: center;
  background-size: cover;
}
</style>
