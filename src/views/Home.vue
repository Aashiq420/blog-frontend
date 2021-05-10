<template>
  <div class="home container">
    <h2 class="heading">Hot Topics</h2>
    <div class="car">
      <q-carousel style="width: 80%" class="carousel" animated v-model="slide" navigation infinite :autoplay="autoplay"
        arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = true"
        @mouseleave="autoplay = true">
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-top custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        <q-carousel-slide :name="5" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        <q-carousel-slide :name="6" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        <q-carousel-slide :name="7" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        <q-carousel-slide :name="8" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>

    <div class="blogs">
      <h3 class="heading">Browse blogs</h3>
      <q-list>
        <q-item v-for="blog in blogs" :key="blog.id">
          <div class="blog-card">
            <div class="thumbnail">
              <img class="blog-img" src="https://cdn.quasar.dev/img/mountains.jpg" />
            </div>
            <div class="blog-data">
              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-large blog-title">{{
                    blog.blog_title
                  }}</span><br />
                  <span class="text-grey-8 blog-poster">
                    by {{ users[blog.user_id - 1].username }}</span>
                </q-item-label>
                <q-separator />
                <br />
                <q-item-label caption lines="3">
                  <p class="blog-text">
                    {{ blog.blog_content }}
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
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 1,
        autoplay: 5000,
        blogs: [],
        users: [],
      };
    },
    created() {
      this.handleGetBlogs();
      this.handleGetUsers();
    },
    methods: {
      handleGetBlogs() {
        const url = "http://localhost:3000/blogs";
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
          });
      },
      handleGetUsers() {
        const url = "http://localhost:3000/users";
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
            this.users = json;
            //console.log(this.users)
          });
      },
    },
  };
</script>

<style>
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .blog {
    display: grid;
  }

  .carousel {
    right: 10%;
    left: 10%;
  }

  .blog-img {
    max-width: 90%;
    max-height: 90%;
    margin: 0;
    padding: 0;
    border-radius: 5px;
  }

  .blog-card {
    background-color: rgba(14, 125, 252, 0.2);
    border-radius: 5px;
    padding: 15px;
    display: flex;
  }

  .blog-title {
    font-size: 19px;
  }

  .blog-poster {
    font-size: 15px;
  }

  .blog-text {
    font-size: 12px;
  }

  .blog-data {
    width: 85%;
  }

  .thumbnail {
    width: 15%;
  }

  .heading {
    text-align: center;
  }
</style>