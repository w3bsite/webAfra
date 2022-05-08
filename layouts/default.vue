<template>
  <v-app>
    <!--    Navigation Drawer-->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      temporary
      app
    >

    </v-navigation-drawer>


    <!--    Top Appbar-->
    <v-system-bar class="system-bar px-14" color="primary" app>
      <span><v-icon>
        mdi-close
      </v-icon></span>
      <div class="mx-auto">
        جشنواره تابستانه دیجی کالا
      </div>
    </v-system-bar>

    <!-- Primary Toolbar-->
    <v-app-bar
      :clipped-left="clipped"
      height="112"
      color="#ffffff"
      flat
      fixed
      app

    >
      <v-container>
        <div class="appbar-list d-flex justify-space-between my-auto  ">
          <div class="brand-logo font-weight-light">
            <span class="grey--text">BRAND LOGO</span>
          </div>
          <!--      dropdown menu-->
          <div class="dropdown-button">
            <CategoryDropdownMenu></CategoryDropdownMenu>
          </div>

          <!--      search bar-->
          <div class="search-bar pr-14 d-flex   ">
            <SearchField></SearchField>
          </div>

          <!--      Phone number & Shopping cart-->
          <div class="d-flex
">
            <div class="grey--text">041 33554433</div>
            <v-icon color="blue" class="mr-2 ml-6">mdi-phone-in-talk</v-icon>
            <ShoppingCart></ShoppingCart>
          </div>

          <!--  Profile Button and User Name -->
          <div>
            <ProfileMenu></ProfileMenu>
          </div>
        </div>
      </v-container>


    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt/>
      </v-container>
    </v-main>


  </v-app>
</template>

<script>
import ProfileMenu from "@/components/Layout/ProfileMenu";
import CategoryDropdownMenu from "@/components/Layout/CategoryDropdownMenu";
import ShoppingCart from "@/components/Layout/ShoppingCart";
import SearchField from "@/components/Layout/SearchField";

export default {
  name: 'DefaultLayout',
  components: {SearchField, ShoppingCart, CategoryDropdownMenu, ProfileMenu},
  data() {
    return {

      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';


.system-bar {
  background-image: url("../assets/images/systemBar.png");
  background-position: center;
  background-size: cover;
}

.appbar-list {
  div {
    margin: auto;
  }
}


@media #{map-get($display-breakpoints, 'md-and-up')} {
  .brand-logo {
    font-size: 20px;
  }

  .search-bar {
    min-width: 414px;
  }


}

</style>
