<template>
  <div class="q-pa-md addUser-form">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="thumbnail">
        <!-- <img class="blog-img" :src="blog_image" />
       {{ blog_image 
       }} -->
      </div>
      <q-input
        class="input"
        filled
        v-model="blogTitle"
        label="Blog Title"
        lazy-rules
      />
      <q-select filled v-model="blogTopic" label="Topic" :options="options" />
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
    createBlog() {
      this.userid = localStorage.getItem('id')
      const blob = new Blob([this.blog_image], { type: "image" });
      const reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onload = () => {
        // console.log("file to base64 result:" + reader.result);
        this.blog_image = reader.result;
        const url = "http://localhost:3000/blogs";
        fetch(url, {
          method: "POST", //get post put delete, default GET
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
        }).then((response) => response.json())
          .then((json) => {
            alert("Blog posted!")
            window.location.reload()
          })
        // .then((json) => {
        //   //API response gets returned
        //   console.log(json);
        //   console.log(this.blog_image);
        // });
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
  },
};
</script>

<style>
.addUser-form {
  width: 100%;
  box-sizing: border-box;
}

.input {
  box-sizing: border-box;
}
</style>


