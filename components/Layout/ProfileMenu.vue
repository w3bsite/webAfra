<template>
  <!--    Profile Menu-->
  <v-menu v-model="profileMenu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{on,attrs}">
      <!--        Menu Button-->
      <v-btn v-bind="attrs" v-on="on" color="blue" icon>
        <v-icon x-large>
          mdi-account-circle
        </v-icon>
      </v-btn>
      <span class="mr-1">پژمان فرجی</span>
    </template>
    <!--    Menu Content-->
    <div>
      <v-list class="px-2">
        <v-list-item-group v-model="selectedOption" color="primary" mandatory>
          <v-list-item
            @click="enterItem(item)"
            v-for="(item, i) in profileOptions"
            :key="i"

            :class="item.includes('خروج')?'red lighten-4 red--text':''"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon :class="item.includes('خروج')?'red lighten-4 red--text':''">mdi-chevron-left</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </div>
  </v-menu>


</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: "ProfileMenu",
  data() {
    return {
      profileMenu: false,
      selectedOption: null,
      activeItem: null,
      selectedClass: '',
      profileOptions: ['پروفایل', 'تاریخچه سفارشات', 'خروج از حساب',]
    }
  },
  methods: {
    enterItem(item: string) {
      item.includes('خروج') ? this.selectedClass = 'black' : 'green'
    }
  }
})
</script>

<style lang='css' scoped>
>>> .v-list-item-title, .v-item--active, .v-list-item--active, .v-list-item, .v-list-item::before {
  border-radius: 10px !important;
}
</style>
