<template>
    <h1>gamu</h1>

  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src

import EventCard from '../components/EventCard.vue';
import service from '/services/EventService.js';
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events:null,
    }
  },
  created(){
    service.getEvent()
    .then((response)=>{
      this.events = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
</script>
<style scoped>
.events{
  display:flex;
  flex-direction: column;
  align-items: center;
}
h4{
  font-size: 20px;
}
</style>
