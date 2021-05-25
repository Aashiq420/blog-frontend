<template>
  <div class="q-pa-md addUser-form">
    <!-- <h1>Edit</h1> -->
    <div class="thumbnail">
      <img class="blog-img" :src="blogs[0].blog_image" />
    </div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        class="input"
        filled
        v-model="blogs[0].blog_title"
        label="Blog Title"
        lazy-rules
      >
        <!--{{blogs[0].blog_title}}-->
      </q-input>
      <q-select
        filled
        v-model="blogs[0].blog_topic"
        label="Topic"
        :options="options"
      />
      <q-input
        class="input"
        filled
        type="textarea"
        v-model="blogs[0].blog_content"
        lazy-rules
      />
      <q-file
        v-model="blogs[0].blog_image"
        filled
        label="Click here to select image"
        accept=".jpg, .png, image/*"
        @rejected="onRejected"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload" />
        </template>
      </q-file>
      <div>
        <q-btn label="Post" type="submit" color="primary" @click="createBlog" />
        <q-btn
          icon="fas fa-redo-alt"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [""],
      blogTitle: "",
      blogText: null,
      userid: "2",
      blogTopic: null,
      blog_image: null,
      options: [
        "Fashion",
        "Food",
        "Travel",
        "Music",
        "Lifestyle",
        "Sports",
        "Politcs",
        "Miscellaneous",
      ],
    };
  },
  created() {
    this.handleGetBlog();
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        console.log("worked");
        // this.$q.notify({
        //   color: "red-5",
        //   textColor: "white",
        //   icon: "warning",
        // });
      } else {
        console.log("error");
        // this.$q.notify({
        //   color: "green-4",
        //   textColor: "white",
        //   icon: "cloud_done",
        //   message: "Submitted",
        // });
      }
    },
    onReset() {
      this.tile = null;
      this.text = null;
    },
    handleGetBlog() {
      const url = "http://localhost:3000/blogs/1";
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
          console.log(this.blogs[0].blog_title);
        });
    },
    editBlog() {
      const blob = new Blob([this.blog_image], { type: "image" });
      const reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onload = () => {
        this.blog_image = reader.result;
        const url = `http://localhost:3000/blogs/1`;
        fetch(url, {
          method: "PUT", //get post put delete, default GET
          body: JSON.stringify({
            blog_title: this.blogTitle,
            blog_content: this.blogText,
            blog_topic: this.blogTopic,
            blog_image: this.blog_image,
            user_id: this.userid,
          }), //object containing data from vue from 2way data binding
          mode: "cors", //if FE and BE are on diffeent hosts/url
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
  },
};
</script>


<style>
</style>