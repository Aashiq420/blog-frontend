<template>
  <div class="container">
    <DeleteBlog v-if="inception" />
    <div class="row">
      <div class="col-sm-6">
        <div class="user-card">
          <div class="thumbnail">
            <img class="blog-img" :src="usersBlogs[0].image" />
          </div>
          <h4>@{{ usersBlogs[0].username }}</h4>

          <h5>Joined: {{ getUserDate(usersBlogs[0].date_started) }}</h5>
        </div>
      </div>
      <div class="col-sm-6">
        <div
          class="q-pa-md q-gutter-y-md column items-start"
          style="align-items: center"
        >
          <q-btn
            push
            label="Create Blog"
            icon="fas fa-plus-square"
            @click="toggleCreate"
            class="add-btn"
          />
          <CreateBlog v-if="create" />
          <EditBlog v-if="edit" />
        </div>
      </div>
    </div>

    <div>
      <div class="my-blogs">
        <h1>Posts</h1>
        <q-item v-for="usersBlog in usersBlogs" :key="usersBlog.id">
          <div class="blog-card" data-aos="zoom-in">
            <div class="thumbnail">
              <img class="blog-img" :src="usersBlog.blog_image" />
            </div>
            <div class="blog-data">
              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-large blog-title">
                    {{ usersBlog.blog_title }}
                  </span>
                  <br />
                  <span class="text-grey-8 blog-poster">
                    by {{ usersBlog.username }} ·
                    {{ getBlogDate(usersBlog.date_blogCreated) }}
                  </span>
                  <br />
                  <span class="text-grey-8 blog-topic">
                    topic: {{ usersBlog.blog_topic }}
                  </span>
                </q-item-label>
                <q-separator />
                <br />
                <q-item-label caption lines="3">
                  <p class="blog-text">
                    <!-- {{ usersBlog.blog_content}} -->
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere sit ipsa saepe fugit magnam, optio repellendus vitae
                    minima rerum accusantium facilis delectus dolorum.
                    Consequatur officia minus nulla numquam, adipisci, porro
                    error culpa ullam aliquid unde consequuntur reprehenderit ab
                    eius, amet perferendis quaerat repellendus necessitatibus
                    rerum? Iure tempora in, nobis ipsam nulla at. Blanditiis
                    dicta placeat maxime dolore aliquam officia, impedit tempora
                    quidem ea, illum quas fuga voluptatem cum eos eius magni
                    laudantium omnis corrupti, facilis deleniti! Rerum quae
                    voluptas harum sit ad aliquid consequatur est deserunt iure,
                    voluptatum accusantium dignissimos quis quo itaque earum
                    aspernatur delectus atque! Odit, atque non.
                  </p>
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <div class="votes">
                    <q-btn
                      flat
                      color="primary"
                      icon="fas fa-thumbs-up"
                      label="60"
                    />
                    |
                    <span class="cursor-pointer" @click="handleGetBlog(usersBlog.id)">
                      Read more</span
                    >
                  </div>

                  <div class="btn-holder">
                    <q-btn push icon="fas fa-edit" @click="toggleEdit" />
                    <q-btn push icon="fas fa-trash-alt" @click="small = true" />
                  </div>
                </q-item-label>
              </q-item-section>
            </div>
          </div>
          <!-- blog readme -->
          <q-dialog v-model="medium">
            <q-card class="my-card" flat bordered>
              <q-img :src="usersBlog.blog_image"></q-img>

              <q-card-section>
                <div class="text-overline text-grey-9">
                  {{ usersBlog.username }}
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">
                  {{ usersBlog.blog_title }}
                </div>
                <div class="text-caption text-grey">
                  {{ usersBlog.blog_content }}
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Like"></q-btn>
                <q-btn flat color="primary" label="14"></q-btn>

                <q-space></q-space>

                <q-btn
                  color="grey"
                  flat
                  dense
                  label="comments"
                  @click="expanded = !expanded"
                ></q-btn>
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator></q-separator>
                  <q-card-section class="text-subitle2">
                    <div class="text-caption text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <hr />
                    </div>
                    <div class="text-caption text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <hr />
                    </div>
                    <div class="text-caption text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <hr />
                    </div>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </q-dialog>
          <!-- blog readme end  -->

          <!-- delete blog -->
          <q-dialog v-model="small">
            <q-card style="width: 300px">
              <q-card-section>
                <div class="text-h6">Delete Account</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Are you sure you want to delete your account?
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-card-actions align="center">
                  <q-btn
                    flat
                    label="YES"
                    align="left"
                    v-close-popup
                    class="bg-white text-red"
                  ></q-btn>
                  <q-btn
                    flat
                    label="NO"
                    align="right"
                    v-close-popup
                    class="bg-white text-teal"
                  ></q-btn>
                </q-card-actions>
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script>
AOS.init({
  duration: 1200,
});

import moment from "moment";
import AOS from "aos";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
import DeleteBlog from "../components/DeleteBlog";

export default {
  components: {
    CreateBlog,
    EditBlog,
    DeleteBlog,
  },
  data() {
    return {
      expanded: false, // from readmore dialog/modal
      create: true,
      edit: false,
      // inception: false, // from delete blog component
      filesImages: null,
      usersBlogs: [""],
      medium: false,
      small: false,
    };
  },
  created() {
    this.handleGetUserBlogs();
  },
  methods: {
    getUserDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMMM Do YYYY");
    },
    getBlogDate: function (date2) {
      return moment(date2).startOf("hour").fromNow();
    },
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },
    handleGetUserBlogs() {
      const url = "http://localhost:3000/blogs-of-user/2";
      fetch(url, {
        //method: "GET", //get post put delete, default GET
        //body: JSON.stringify(), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //API response gets returned
          //console.log(json)
          this.usersBlogs = json;
        });
    },

    // handleGetBlog() {
    //   const url = `http://localhost:3000/blogs/${this.usersBlogs[0].id}`;
    //   fetch(url, {
    //     //method: "GET", //get post put delete, default GET
    //     //body: JSON.stringify(), //object containing data from vue from 2way data binding
    //     mode: "cors", //if FE and BE are on diffeent hosts/url
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => {
    //       //API response gets returned
    //       //console.log(json)
    //       this.blogs = json;
    //       console.log(this.blogs);
    //       var i;
    //       for (i = 0; i < this.usersBlogs.length; i++) {
    //         console.log(this.usersBlogs[i].id);
    //       }
    //     });
    // },
        handleGetBlog: function (data) {
      const url = `http://localhost:3000/blogs/${data}`;
      fetch(url, {
        //method: "GET", //get post put delete, default GET
        //body: JSON.stringify(), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //API response gets returned
          //console.log(json)
          this.blogs = json;
          console.log(this.blogs);
          // var i;
          // for (i = 0; i < this.usersBlogs.length; i++) {
          //   console.log(this.usersBlogs[i].id);
          // }
        });
    },

    toggleEdit() {
      (this.create = false), (this.edit = true), (this.inception = false);
    },
    toggleCreate() {
      (this.create = true), (this.edit = false), (this.inception = false);
    },
    toggleDelete() {
      (this.inception = true), (this.create = true), (this.edit = false);
    },
    handleLoggedUser() {
      const loggedUser = localStorage.getItem("loggedUser");
      const token = localStorage.getItem("token");
      if (loggedUser && token) {
      }
    },
  },
};
</script>

<style>
.my-blogs h1 {
  text-align: center;
}

.my-card {
  width: 100%;
  max-width: 350px;
}

.user-card {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 15px;
  text-align: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
}

.thumbnail {
  margin: auto;
  text-align: center;
}

.user-card img {
  border-radius: 50%;
}

.add-btn {
  align-self: stretch;
  margin-top: 20px;
}

.btn-holder {
  text-align: right;
  padding: 5px;
}

.btn-holder > * {
  margin-left: 10px;
}

.votes {
  text-align: left;
}

.readmore {
  width: 100%;
}

.blog-topic {
  margin-bottom: 15px;
}
</style>