<template>
  <q-btn label="Register" color="primary" @click="large = true" />
  <q-dialog v-model="large">
    <q-card
      style="width: 400px ;height: 650px"
    >
      <q-card-section>
        <div class="text-h6">Register</div>
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
              :rules="[
                (val) => (val && val.length > 0) || 'Please Enter Username',
              ]"
            />
            <q-input
              filled
              v-model="email"
              label="Email *"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Enter Email']"
            />

            <q-input
              square
              outlined
              v-model="password"
              placeholder="Password *"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Password']"
            />

            <q-file
              v-model="image"
              filled
              label="Click here to select image"
              accept=".jpg, .png, image/*"
              max-file-size="1000000"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>

            <q-toggle v-model="accept" label="I accept the privacy policy" />
            <div>
              <q-btn
                label="submit"
                :icon="'fas fa-paper-plane'"
                type="submit"
                @click.prevent="addUser()"
                color="primary"
              />
              <q-btn
                icon="fas fa-redo-alt"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />

              <q-btn flat label="close" v-close-popup />
            </div>
          </q-form>
        </div>
      </q-card-section>

      <!-- <q-card-actions align="top-right" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions> -->
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      image: null,
      token: null,
      role: "user", //figure out way to do this better
      accept: false,
      large: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        alert("You need to accept the license and terms first");
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        alert("submitted");
        if (confirm) {
          window.location.href = "http://localhost:8080/myprofile";
        }
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
      this.email = null;
      this.password = null;
      this.image = null;
      this.accept = false;
    },
    addUser() {
      const blob = new Blob([this.image], { type: "image" });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        // console.log("file to base64 result:" + reader.result);
        this.image = reader.result;
        const url = "http://localhost:3000/users";
        fetch(url, {
          method: "POST", //get post put delete, default GET
          body: JSON.stringify({
            username: this.name,
            email: this.email,
            password: this.password,
            image: this.image,
            role: this.role,
          }), //object containing data from vue from 2way data binding
          mode: "cors", //if FE and BE are on diffeent hosts/url
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            this.token = json.token
            alert(`User ${this.name} has been created `)
            this.loginUser()
          })
          .catch((err) => console.log("error: "+err))
      };

      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
    loginUser() {
      const url = "http://localhost:3000/auth"
       fetch(url, {
          mode: "cors", //if FE and BE are on diffeent hosts/url
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": this.token
          },
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)//user logged in
          localStorage.setItem('loggedUser',JSON.stringify(json))
          this.$store.commit('updateloggedOnStatus', true)
          alert(`user ${this.name} is logged on`)
        })
        .catch((err) => console.log("error: "+err))
    }
  },
};
</script>

<style>
</style>