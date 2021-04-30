<template>
   <q-btn label="Sign-Up" color="primary"
    @click="large = true" />
     <q-dialog
      v-model="large"
    >
      <q-card style="width:  -webkit-fill-available;height: -webkit-fill-available">
        <q-card-section>
          <div class="text-h6">Sign-up</div>
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
        v-model="name"
        label="Username *"
        hint="Enter a Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please Enter Username']"
      />
      <q-input
        filled
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Enter email']"
      />

      <q-input
        square outlined
         v-model="password" 
         placeholder="Password"
         lazy-rules
        :rules="[ val => val && val.length > 0 || 'Password']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn flat label="Close" v-close-popup />

      </div>
    </q-form>

  </div>        </q-card-section>

        <!-- <q-card-actions align="top-right" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions> -->
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name:"Login",
  data () {
    return {
      name: null,
      email: null,
      password:null,
      accept: false,
      large:false,
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        alert('You need to accept the license and terms first'
)
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {          
        alert('submitted')
        if (confirm){
          window.location.href='http://localhost:8080/myprofile'

        }

        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onReset () {
      this.name = null
      this.email = null
      this.password=null
      this.accept = false
    }
  }
}
</script>

<style>


</style>