<template>
  <div class="event-card">
    <span
      >@{{ event.time }} on {{ event.date }}
      <h3>{{ event.title }}</h3>
    </span>
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
export default {
  name: 'EventCard',
  data() {
    return {
      event: {
        id: 622115017,
        category: 'animal welfare',
        title: 'cat adoption day',
        descreiption: 'this is just a priciple',
        location: 'Thailand',
        date: '12 August 2000',
        time: '12.00',
        petsAllowed: 'cat dog',
        organizer: 'gamu',
        fav_charater: 'Power!!'
      }
    }
  }
}
</script>
