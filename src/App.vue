<template>
<q-layout view="hHr LpR fFf">
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Blog Haven
        </q-toolbar-title>
        <q-tabs align="left">
        <q-route-tab to="/" :icon= '"fas fa-users"' />
        <!-- <q-route-tab to="/signup" label="sign-up" /> -->
        <q-route-tab to="/about" :icon= '"fas fa-info-circle"' />
        <!-- <q-route-tab to="/login" label="Login" /> -->
        <q-route-tab v-if="loggedOn" to="/myprofile" :icon= '"fas fa-user"' />
        <q-route-tab><login><Login/></login></q-route-tab>
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
        <q-item-section><sign-up><SignUp/></sign-up></q-item-section>
      </q-item>
    </q-list>
        </div>
    </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>

</q-layout>
</template>

<script>
import Login from './components/Login'
import SignUp from './components/SignUp'
export default {
  components:{
    "login": Login,
    "sign-up":SignUp
    
  },
 
   data () {
    return {
      left: false,
   
    }
  },
  computed:{
    loggedOn: {
      get(){
        return this.$store.state.loggedOn
      },
      set(value){
        this.$store.commit(' updateloggedOnStatus', value)
      }
    },
    signedUp: {
      get(){
        return this.$store.state.signedUp
      },
      set(value){
        this.$store.commit('updatesignedUpStatus', value)
      }
    },
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap');

*{
  
  font-family: 'Original Surfer', cursive;



}

</style>