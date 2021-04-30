<template>
<q-layout view="hHr LpR fFf">
    <q-header elevated class="bg-dark text-white" height-hint="200">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://g20languageb.files.wordpress.com/2018/10/images-2.jpeg?w=305&h=304">
          </q-avatar>
          Blog Haven
        </q-toolbar-title>
      <q-tabs align="left">
        <q-route-tab to="/home" label="Home" />
        <!-- <q-route-tab to="/signup" label="sign-up" /> -->
        <!-- <q-route-tab to="/login" label="Login" /> -->

        
        <q-route-tab to="/myprofile" label="Profile" />
        <q-route-tab><login><Login/></login></q-route-tab>
       
       </q-tabs>
     </q-toolbar>

      
    </q-header>

    <q-drawer v-model="left" side="left" overlay elevated>
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
      right: false
    }
  }
}
</script>