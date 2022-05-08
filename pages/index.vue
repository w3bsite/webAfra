<template>
  <div>
    <v-container>
      <CategoryTabs></CategoryTabs>
    </v-container>
    <v-container fluid>

      <SpecialOffer></SpecialOffer>
    </v-container>
  </div>


</template>

<script>
import CategoryTabs from "@/components/HomePage/CategoryTabs";
import SpecialOffer from "@/components/HomePage/SpecialOffer";

export default {
  name: 'IndexPage',
  components: {SpecialOffer, CategoryTabs}
}
</script>
