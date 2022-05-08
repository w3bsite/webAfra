<template>
  <div>
    <v-menu v-model="menu"
            z-index="20"
            :close-on-content-click="false"
            min-width="60%"
            max-width="100%"
            allow-overflow
            eager
            origin="bottom right"
            content-class="menu-content"
            offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
               v-on="on" depressed>
          <v-icon>
            mdi-menu
          </v-icon>
          <span class="mr-1">  دسته بندی</span>
          <v-icon
            right
            color="#9b9b9b"
          >
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </template>
      <div class="d-flex" v-if="categoryArray">
        <v-list style="border-left: #DDDDDD 1px solid" class="px-4" rounded>
          <v-list-item-group v-model="selectedCategory" color="primary" mandatory>
            <v-list-item
              v-for="(item, i) in categoryArray"
              :key="i"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-row>
          <v-col v-for="(subCategory,index) in categoryArray[selectedCategory].list " :key="index"
                 class="pa-8"
          >
            {{ subCategory.product }}
            <v-list>
              <v-list-item v-for="(item,i) in subCategory.list" :key="i">
                {{ item }}
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>


      </div>


    </v-menu>
  </div>


</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: "CategoryDropdownMenu",
  data() {
    return {
      menu: false,
      categorymenuGrope: 0,
      selectedCategory: 1,
      selectedItem: null,


    }
  },
  computed: {
    categoryArray() {
      return this.$store.state.HomePage.categoryArray
    },
  },
})
</script>

<style lang='scss' scoped>
.menu-content {
  margin-top: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
