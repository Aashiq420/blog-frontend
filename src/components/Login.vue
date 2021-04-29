<template>
<div>
   <q-btn label="Login" color="primary"
    @click="medium = true" />
     <q-dialog
      v-model="medium"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="formhead">
            <div class="text-h6">Login</div>
                  <q-btn flat label="Close" v-close-popup />
</div>
          

        </q-card-section>

        <q-card-section class="q-pt-none">
<div class="q-pa-md" style="width:300px; height: 200px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md fixed-center "
      style="width:inherit"
    >
      <q-input
        filled
        v-model="name"
        label="Email *"
       
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please Enter Email']"
      />

      <q-input
        square outlined
         v-model="password" 
         label="Password"
         lazy-rules
        :rules="[ val => val && val.length > 0 || 'Invalid Password']"
      
       
      />


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />

      </div>
    </q-form>

  </div>       
   </q-card-section>

        <q-card-actions align="top-right" class="bg-white text-teal">
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
</template>

<script>
export default {
  name:"Login",
  data () {
    return {
      name: null,
      password: null,
      accept: false,
      medium:false
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
      this.name = null
      this.email= null
      this.password = null
     
    }
  }
}
</script>

<style>
template{
  align-content: center;
}
.formhead{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}
</style>