<template>
  <v-container fluid>
    <div class="d-flex mt-12 mb-6" style="margin-right: 5%">
      <v-btn color="white" class="green" icon x-large>
        <v-icon x-large>mdi-whatsapp</v-icon>
      </v-btn>
      <div class="mt-auto">پیشنهاد ویژه</div>
    </div>

    <v-container style="background-color: #e5efff">
      <v-row>
        <v-col cols="3" v-for="(product,i) in list" :key="i">
          <v-card width="100%" height="100%" class="pa-5 elevation-0"
                  style="border: #e5efff 1.5px solid;border-radius: 10px ">
            <v-img max-height="100%" width="100%" :src="product.image" contain eager></v-img>
            <div style="font-size: 16px" class="mt-4">{{ product.title }}</div>
            <div class="d-flex justify-space-between mt-5">
              <v-chip color="#fff7e5" class="orange--text rounded-lg">
                ظرفیت
                {{ product.limit }}
              </v-chip>

              <v-chip color="red" class="white--text   rounded-lg ">
                تخفیف
                {{ product.discount }}
              </v-chip>
            </div>
            <div class="d-flex justify-space-between mt-5">
              <div>

                <div class="text-md-body-1 grey--text text-decoration-line-through">
                  {{ product.priceBefore }}
                  تومان
                </div>
                <div class="text-md-h6">
                  {{ product.price }}
                  تومان
                </div>
              </div>

              <div class="pt-6 primary--text " style="font-size: 14px">
                <span>جزییات بیشتر</span>
                <v-icon color="primary">mdi-chevron-left</v-icon>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: "SpecialOffer",
  data() {
    return {
      list: [
        {
          title: 'powerBear باتری تقویت شده گوشی',
          image: 'images/HomePage/offer.png',
          limit: '3320mAh',
          price: '320000',
          priceBefore: '390000',
          discount: '18%'
        },
        {
          title: 'powerBear باتری تقویت شده گوشی',
          image: 'images/HomePage/offer.png',
          limit: '3320mAh',
          price: '320000',
          priceBefore: '390000',
          discount: '18%'
        },
        {
          title: 'powerBear باتری تقویت شده گوشی',
          image: 'images/HomePage/offer.png',
          limit: '3320mAh',
          price: '320000',
          priceBefore: '390000',
          discount: '18%'
        },
        {
          title: 'powerBear باتری تقویت شده گوشی',
          image: 'images/HomePage/offer.png',
          limit: '3320mAh',
          price: '320000',
          priceBefore: '390000',
          discount: '18%'
        },

      ]
    }
  }
})
</script>


