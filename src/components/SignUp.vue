<template>

 <q-btn label="Close Icon" color="primary" @click="icon = true" />

 <q-dialog v-model="icon">
      <q-card style="height: -webkit-fill-available;width: -webkit-fill-available;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Sign-Up</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

          <q-card-section class="q-pt-none">
          <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md fixed-center"
    >
      <q-input
        filled
        v-model="username"
        label="Username *"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      

      <q-input
        square outlined
         v-model="password" 
         lazy-rules
        :rules="[ val => val && val.length > 0 || 'Rnter a Password']"
      
       
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />

      </div>
    </q-form>

  </div>   
   </q-card-section>
      </q-card>
    </q-dialog>
   
</template>

<script>
export default {
  data () {
    return {
      icon: false,
     
    }
  }
}
</script>
<script>
export default {
  name:"Sign-UP",
  data () {
    return {
      icon:false,
      username: null,
      email:null,
      password: null,

      accept: false,
      
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'

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
      this.username = null
      this.email=null
      this.password = null
      this.accept=false
     
    }
  }
}
</script>

<style>

</style>