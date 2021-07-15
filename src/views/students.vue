<template >
  <studentsComponents v-for="student in students" :key="student.id" :student_prop="student"/>
</template>

<script>
import student_api from '/services/StudentService.js'
import studentsComponents from '../components/students_component.vue'
export default {
  name: 'students',
    components:{
        studentsComponents
    },
  data() {
    return {
      students: null
    }
  },
  created() {
    student_api
      .getStudents()
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
