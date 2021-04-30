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

    <h1>My Posts</h1>
    <div data-aos="zoom-in"><div class="my-blogs">
   <q-list>
      <q-item>
        <div class="blog-card">
          <div class="thumbnail">
            <img class="blog-img" src="https://cdn.quasar.dev/img/mountains.jpg">
          </div>
          <div class="blog-data"> 
            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-large blog-title" >This is the Blog Title</span><br>
                <span class="text-grey-8 blog-poster"> by John Doe</span>
              </q-item-label>
              <q-separator />
              <br>
              <q-item-label caption lines="3">
                <p class="blog-text ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit ipsa saepe fugit magnam, optio repellendus vitae minima rerum accusantium facilis delectus dolorum. Consequatur officia minus nulla numquam, adipisci, porro error culpa ullam aliquid unde consequuntur reprehenderit ab eius, amet perferendis quaerat repellendus necessitatibus rerum? Iure tempora in, nobis ipsam nulla at. Blanditiis dicta placeat maxime dolore aliquam officia, impedit tempora quidem ea, illum quas fuga voluptatem cum eos eius magni laudantium omnis corrupti, facilis deleniti! Rerum quae voluptas harum sit ad aliquid consequatur est deserunt iure, voluptatum accusantium dignissimos quis quo itaque earum aspernatur delectus atque! Odit, atque non.
                </p>
              </q-item-label>
              <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                <q-btn flat round color="primary" icon="fas fa-thumbs-up" /> |
                <span class="cursor-pointer">Read more</span>
                
              </q-item-label>
            </q-item-section>
          </div>
        </div>
      </q-item>
    </q-list>


</div></div>


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