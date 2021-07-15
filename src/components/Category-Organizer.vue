<style scoped>
.ctg {
  font-size: 35px;
  text-align: right;
}

</style>
<template class="ctg">
  <div>
    <span
      >on {{ Category.category }} by {{ Category.organizer }}
      
    </span>
  </div>
</template>
<script>

export default {
  name: 'category',
  props:{
      Category:{
          type:Object,
          required:true
      }
  }
//   data() {
//     return {
//       event: {
//         id: 622115017,
//         category: 'animal welfare',
//         title: 'cat adoption day',
//         descreiption: 'this is just a priciple',
//         location: 'Thailand',
//         date: '12 August 2000',
//         time: '12.00',
//         petsAllowed: 'cat dog',
//         organizer: 'gamu',
//         fav_charater: 'Power!!'
//       }
//     }
//   }
}
</script>
