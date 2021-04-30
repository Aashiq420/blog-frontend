<template>
  <div class="q-pa-md" style="width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md "
    >
      <q-input
        filled
        v-model="title"
        label="Blog Title"
        
        lazy-rules
      />

      <q-input
        filled
        type="textarea"
        v-model="text"
      
        lazy-rules
        
      />
       <q-file
        style="max-width:inherit"
        v-model="filesImages"
        filled
        
        label="Add Image"
        multiple
        accept=".jpg, image/*"
        @rejected="onRejected"
      /> 

      <div>
        <q-btn label="Post" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>

export default {
  data () {
    return {
      text: null,
      text: null,

    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.tile = null
      this.text = null
    }
  }
}
</script>

<style>

</style>

