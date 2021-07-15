<template>
        <Category style="text-align:right" v-for="event in events" :key="event.id" :Category="event" />
</template>
<script>
 import Category from '../components/Category-Organizer.vue';
import service from '/services/EventService.js';
export default {
      name: 'Cat',
  components: {
    Category
  },
  data() {
    return {
      events: null,
    }
  },
  created(){
      service.getEvent().
      then((response)=>{
          this.events = response.data
      })
      .catch((error)=>{
          console.lod(error)
      })
  }
}
</script>