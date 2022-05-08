<template>
  <v-container fluid

  >
    <v-text-field
      full-width
      v-model="searchQuery"
      @focus="panel=true" @focusout="panel=false"
      placeholder="     ...کالا و یا کلمه مورد نظر خود را تایپ کنید"
      color="#EFEFEF"
      persistent-placeholder
      prepend-inner-icon="mdi-magnify" height="50px" class="rounded-lg d-flex pt-4"
      outlined>
    </v-text-field>

    <v-card v-if="panel" outlined width="30%" rounded="xl" class="pa-4" style="position: absolute;left: 35%">
      <div class="d-flex justify-space-around pt-5">
        <v-chip>Iphone گوشی</v-chip>
        <v-chip>samsung گوشی</v-chip>
        <v-chip>xiaomi گوشی</v-chip>
        <v-chip>xiaomi گوشی</v-chip>
      </div>
      <div>
        <div class="d-flex
        mt-6
        px-6">
          <div>
            <span class="grey--text">نتایج جستجو برای:</span>
            {{ searchQuery }}
          </div>
          <div class="mr-auto grey--text">موارد یافته شده</div>
        </div>
      </div>

      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/images/HomePage/offer.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">گوشی سامسونگ مدل abc</v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>

          <v-btn class="mr-auto" icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/images/HomePage/offer.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">گوشی سامسونگ مدل abc</v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>

          <v-btn class="mr-auto" icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/images/HomePage/offer.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">گوشی سامسونگ مدل abc</v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>

          <v-btn class="mr-auto" icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/images/HomePage/offer.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">گوشی سامسونگ مدل abc</v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>

          <v-btn class="mr-auto" icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>

      <v-btn outlined color="grey" class="blue--text rounded-lg mx-auto mt-5" block>
        جستجوی پشرفته
      </v-btn>

    </v-card>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: "SearchField",
  data() {
    return {
      panel: false
      , searchQuery: null
    }
  }
})
</script>

<style lang='css' scoped>
</style>
