<template>
  <q-layout view="hHr LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title> Blog Haven </q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/" :icon="'fas fa-users'" />
          <!-- <q-route-tab to="/signup" label="sign-up" /> -->
          <q-route-tab to="/about" :icon="'fas fa-info-circle'" exact/>
          <!-- <q-route-tab to="/login" label="Login" /> -->
          <q-route-tab v-if="loggedOn" to="/myprofile" :icon="'fas fa-user'" @click="window.location.href='http://localhost:8080/myprofile'"/>
          <q-route-tab v-if="!loggedOn"><login><Login /></login></q-route-tab>
          <q-route-tab v-else>
            <q-btn color="primary" label="Sign Out" @click.prevent="handleSignout()" />

          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="left" side="left" overlay elevated>
      <q-toolbar-title>
        <i class="fas fa-feather-alt"></i>
        Blog Haven
      </q-toolbar-title>
      <!-- drawer content -->
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>
              <sign-up>
                <SignUp />
              </sign-up>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- <q-drawer v-model="left" side="left" overlay elevated>

      <q-toolbar-title>
         <i class="fas fa-feather-alt"></i>
          Blog Haven 
        </q-toolbar-title>
        <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section><sign-up><SignUp/></sign-up></q-item-section>
      </q-item>
    </q-list>
        </div>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from "./components/Login";
import SignUp from "./components/SignUp";
export default {
  components: {
    login: Login,
    "sign-up": SignUp,
  },

  data() {
    return {
      user: null
    };
  },
  beforeMount() {
    this.user = localStorage.getItem("loggedUser")
    // console.log(this.user)
    if (this.user) {
      this.$store.commit('updateloggedOnStatus', true)
    }
    else {
      this.$store.commit('updateloggedOnStatus', false)
    }
  },
  methods: {
    handleSignout() {
      localStorage.removeItem('loggedUser')
      localStorage.removeItem('id')
      console.log('removed from localstorage')
      alert('User logged out successfully')
      window.location.href = 'http://localhost:8080/'
    }
  },
  
  computed: {
    loggedOn: {
      get() {
        return this.$store.state.loggedOn;
      },
      set(value) {
        this.$store.commit("updateloggedOnStatus", value);
      },
    },
    signedUp: {
      get() {
        return this.$store.state.signedUp;
      },
      set(value) {
        this.$store.commit("updatesignedUpStatus", value);
      },
    },
  },
};
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap");

* {
  font-family: "Original Surfer", cursive;
} */

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.col-sm-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

* {
  font-family: "Original Surfer", cursive;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
</style>