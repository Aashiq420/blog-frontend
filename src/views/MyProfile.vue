<template>
  <div class="container">
    <DeleteBlog v-if="inception" />
    <div class="row">
      <div class="col-sm-6">
        <div class="user-card">
          <div class="thumbnail">
            <img class="blog-img" :src="this.user.image" />
          </div>
          <h4>@{{ this.user.username }}</h4>
          <h5>Joined: {{ getUserDate(this.user.date_started) }}</h5>
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
                  <span class="text-weight-large blog-title"
                    >{{ usersBlog.blog_title }} </span
                  ><br />
                  <span class="text-grey-8 blog-poster">
                    by {{ usersBlog.username }} ·
                    {{ getBlogDate(usersBlog.date_blogCreated) }}
                  </span>
                  <!-- · {{ blogMade() }} -->
                  <br />
                  <span class="text-grey-8 blog-topic">
                    topic: {{ usersBlog.blog_topic }}</span
                  >
                </q-item-label>
                <q-separator />
                <br />
                <q-item-label caption lines="3">
                  <p class="blog-text ellipsis">
                    {{ usersBlog.blog_content}}
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
                    <span class="cursor-pointer"> Read more</span>
                  </div>

                  <div class="btn-holder">
                    <q-btn push icon="fas fa-edit" @click="toggleEdit" />
                    <q-btn push icon="fas fa-trash-alt" @click="toggleDelete" />
                  </div>
                </q-item-label>
              </q-item-section>
            </div>
          </div>
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
      create: true,
      edit: false,
      // inception: false,
      filesImages: null,
      usersBlogs: [""],
      userid: null,
      user: [""],
    };
  },
  created() {
    this.handleGetUserBlogs();
    this.handleGetUser();
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
      this.userid = localStorage.getItem('id')
      console.log(this.userid)
      
      const url = `http://localhost:3000/blogs-of-user/${this.userid}`;
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
    handleGetUser() {
      console.log("getting user...")
      const url = `http://localhost:3000/users/${this.userid}`
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
          // console.log(json[0])
          this.user = json[0];
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
  },
};
</script>

<style>
.my-blogs h1 {
  text-align: center;
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
  width: 30%;
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
.blog-data {
  width: 70%;
}
.blog-card{
  width: 100%;
}
</style>