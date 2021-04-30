<template>
  <q-btn  label="Login" outline style="color: goldenrod;" @click="medium = true" />
  <q-dialog v-model="medium">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-pa-md" style="max-width: 400px">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              square
              outlined
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            /> 

            <q-input
              square
              outlined
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please Enter Age']"
            />

            <div>
              <q-btn label="Submit" type="submit" color="dark" />
              <q-btn
                label="Reset"
                type="reset"
                color="negative"
                flat
                class="q-ml-sm"
              />
            </div>
            <br />
          </q-form>
        </div>
        <div class="text-h6">Don't have an account?<a href="">Sign Up</a> Here.</div>
      </q-card-section>

      <q-card-actions align="top-right" class="bg-white text-danger">
        <q-btn flat label="Close" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: null,
      age: null,

      accept: false,
      medium: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
    },
  },
};
</script>

<style>
</style>