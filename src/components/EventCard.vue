<template>
  <div class="event-card">
    <span
      >@{{ event.time }} on {{ event.date }}
      <h4>{{ event.title }}</h4>
    </span>
    <Category style="text-align:right; font-size:25px" :Category="event" />
  </div>
</template>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
<script>
import Category from './Category-Organizer.vue'
export default {
  name: 'EventCard',
  components:{
      Category
  },
  props: {
    event: {
        type: Object,
        required: true
      
    }
  },

    data() {
    //   return {
    //     categories: [
    //         {category: 'animal welfare',
    //         organizer: 'Kat Laydee'
    //         },
    //         {
    //             category: 'food',
    //              organizer: 'Fern Pollin'
    //         },
    //         {
    //             category: 'sustainability',
    //             organizer: 'Carey Wales'
    //         }
    //     ]
    //   }
    }
}
</script>
