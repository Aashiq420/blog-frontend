<template>
    <div class="q-pa-md q-gutter-y-md column items-start" style="align-items: center;">
    <q-btn-group  push>
      <q-btn push label="Create Blog" icon="fas fa-plus-square" @click="toggleCreate"/>
      <q-btn push label="Edit Blog" icon="fas fa-edit"  @click="toggleEdit"/>
      <q-btn push label="Delete Blog" icon="fas fa-trash-alt" />
    </q-btn-group>
    
    <CreateBlog v-if="create"/>
    <EditPost v-if="edit"/>
    </div>

</template>

<script>
import CreateBlog from '../components/CreateBlog'
import EditPost from '../components/EditBlog'

export default {
    components:{
      CreateBlog,
      EditPost
    },
    data(){
      return {
        create: true,
        edit: false
      }
    },
    methods:{
      toggleEdit(){
        this.create = false,
        this.edit= true
      },
      toggleCreate(){
        this.create = true,
        this.edit= false
      }
    }  
  }

</script>

<style>

</style>