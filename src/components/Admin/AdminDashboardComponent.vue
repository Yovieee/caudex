<template>
    <v-carousel
        height="91.111111vh"
        cycle
        interval="1500"
      >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </template>
<script>
import gambar1 from '../../assets/team/team (1).jpg'
import gambar2 from '../../assets/team/team (2).jpg'
import gambar3 from '../../assets/team/team (3).jpg'
import gambar4 from '../../assets/team/team (4).jpg'
  export default {
    name: "AdminDashboardComponent",
    data () {
      return {
        items: [
          {
            src: gambar1,
          },
          {
            src: gambar2,
          },
          {
            src: gambar3,
          },
          {
            src: gambar4,
          },
        ],
      }
    },
  }
</script>