<template>
  <div class="event-card" >
    <span
        >Name: {{ student_prop.name }} {{ student_prop.surname }}
      <div>
        {{ student_prop.gpa }}
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'students',
  props: {
    student_prop: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  
}
</style>