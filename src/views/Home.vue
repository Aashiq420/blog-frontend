<template>
  <div class="home_container" v-if="homeContainer">
    <h2 class="heading">Hot Topics</h2>
    <div class="carousel">
       <q-carousel
        animated
        arrows
        navigation
        infinite
      >
        <q-carousel-slide v-for="blog in blogs" :key="blog.id" :name="blog.id" :img-src="blog.blog_image" ></q-carousel-slide>
      </q-carousel>
    </div>

    <div class="blogs">
      <h3 class="heading">Browse blogs</h3>
      <q-list>
        <q-item v-for="blog in blogs" :key="blog.id">
          <div class="blog-card">
            <div class="thumbnail">
              <img
                class="blog-img"
                :src="blog.blog_image"
              />
            </div>
            <div class="blog-data">
              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-large blogTitle">
                    {{ blog.blog_title }}
                    </span>
                    <br />
                  <span class="text-grey-8 blog-poster">
                    <!-- by {{ this.users[blog.user_id-1].username }} -->
                  </span>
                </q-item-label>
                <q-separator />
                <br />
                <q-item-label caption lines="3">
                  <p class="blog-text">
                    {{ blog.blog_content }}
                  </p>
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
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
      blog: null,
      blogs: [""],
      users: [""],
      homeContainer: true,
    };
  },
  created() {
    //implement async await
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
          this.blogs = json;
        })
        .catch((err) => console.log("Error: "+err));
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
          this.users = json;
          console.log(this.users[this.blogs[7+1].user_id].username)
        })
        .catch((err) => console.log("Error: "+err));
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
  width: 80%;
  padding-left: 20%;
}

.blog-img {
  max-width: 90%;
  max-height: 90%;
  margin: 0;
  padding: 0;
  border-radius: 5px;
}

.blog-card {
  width: 100%;
  margin-bottom: 1vh;
  background-color: rgba(14, 125, 252, 0.2);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 22px 70px 4px;
}

.blogTitle {
  font-size: 19px;
  margin-bottom: 15px; 
}

.blog-poster {
  font-size: 15px;
}

.blog-text {
  font-size: 12px;
  margin-top: 15px; 
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