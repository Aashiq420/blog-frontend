<template>
  <div class="q-pa-md addUser-form">
    <!-- <h1>Edit</h1> -->
    <div class="thumbnail">
      <img class="blog-img" :src="blog_image" />
    </div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        class="input"
        filled
        v-model="blogTitle"
        label="Blog Title"
        lazy-rules
      >
        <!--{{blogs[0].blog_title}}-->
      </q-input>
      <q-select
        filled
        v-model="blogTopic"
        label="Topic"
        :options="options"
      />
      <q-input
        class="input"
        filled
        type="textarea"
        v-model="blogText"
        lazy-rules
      />
      <q-file
        v-model="blog_image"
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
        <q-btn label="Update" type="submit" color="primary" @click="editBlog" />
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
      blog: [""],
      blogTitle: null,
      blogText: null,
      userid: null,
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
      const blogid = localStorage.getItem('blogid')

      const url = `http://localhost:3000/blogs/${blogid}`;
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
          console.log(json)
          this.blogTitle = json[0].blog_title;
          this.blogTopic = json[0].blog_topic;
          this.blogText = json[0].blog_content;
          this.blog_image = json[0].blog_image;
          this.userid = json[0].user_id
          window.scrollTo(0, 0);

          // console.log(JSON.stringify(json.blog_title))
          // console.log(this.blogs[0].blog_title);
        });
    },
    editBlog() {
      const blob = new Blob([this.blog_image], { type: "image" });
      const reader = new FileReader();
      const blogid = localStorage.getItem('blogid')
      const userid = localStorage.getItem('id')

      reader.readAsDataURL(blob);
      reader.onload = () => {
        this.blog_image = reader.result;
        const url = `http://localhost:3000/blogs/${blogid}`;
        fetch(url, {
          method: "PUT", //get post put delete, default GET
          body: JSON.stringify({
            blog_title: this.blogTitle,
            blog_content: this.blogText,
            blog_topic: this.blogTopic,
            blog_image: this.blog_image,
            user_id: userid,
          }), 
          mode: "cors", //if FE and BE are on diffeent hosts/url
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json())
          .then((json) => console.log(json));
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