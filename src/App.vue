<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input standout="bg-teal text-white" v-model="text" label="Username/Email" />

      <q-input standout="bg-teal text-white" v-model="text" label="Password" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',
  data () {
      return {
        text: ''
      }
    },
  methods: {
     
  },
  components: {
  },

  setup () {
    return {
    }
  }
}
</script>
