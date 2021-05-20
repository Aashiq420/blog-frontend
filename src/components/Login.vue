<template>
  <div>
    <q-btn label="Login" color="primary" @click="medium = true" />
    <q-dialog v-model="medium">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="formhead">
            <div class="text-h6">Login</div>
            <q-btn flat icon="fas fa-times" v-close-popup />
          </div>
        </q-card-section>

        <!-- <q-card-section class="q-pt-none" style="background-color:red"> -->
        <div class="q-pa-md" style="width: 300px; height: 200px">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md fixed-center"
          >
            <q-input
              filled
              v-model="email"
              label="Email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please Enter Email',
              ]"
            />
            <q-input
              square
              outlined
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Invalid Password']"
            />
            <div>
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
                @click.prevent="handleLogin()"
              />
              <q-btn
                :icon="'fas fa-redo-alt'"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm reset"
              />
              <SignUp />
            </div>
          </q-form>
        </div>
        <!-- </q-card-section> -->

        <q-card-actions align="top-right" class="bg-white text-teal">
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import SignUp from "./SignUp";
import Home from "../views/Home";

export default {
  name: "Login",
  components: {
    SignUp,
  },
  data() {
    return {
      email: null,
      password: null,
      medium: false,
    };
  },

  methods: {
    close() {
      if (this.medium == true) {
        this.medium == false;
      } else {
        this.medium == true;
      }
    },
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
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
      this.email = null;
      this.password = null;
    },
    handleLogin() {
      console.log("click");
      const url = "http://localhost:3000/auth";
      fetch(url, {
        method: "POST", //get post put delete, default GET
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          console.log("login authentication passed");
          const url2 = "http://localhost:3000/users";
          fetch(url2, {
            mode: "cors", //if FE and BE are on diffeent hosts/url
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((res) => {
              let user = res.filter((user) => {
                return user.email === this.email;
              });
              console.log(user);
            });
          //API response gets returned
          // console.log(users)
          // console.log(this.email, this.password)
          //this.blogs = json
          // let user = users.filter(user => {
          //   return user.username === this.email && user.password === this.password
          // })
          // console.log(user)
        });
    },
  },
};
</script>

<style>
template {
  align-content: center;
}
.formhead {
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 2px; */
}

.reset {
  margin-right: 8px;
}
</style>