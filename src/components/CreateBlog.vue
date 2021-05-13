<template>
  <div class="q-pa-md addUser-form">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        class="input"
        filled
        v-model="blogTitle"
        label="Blog Title"
        lazy-rules
      />
      <q-input
        class="input"
        filled
        type="textarea"
        v-model="blogText"
        lazy-rules
      />
      <q-file
        v-model="image"
        filled
        label="Add Image"
        multiple
        accept=".jpg, .png, image/*"
        max-file-size="1000000"
        @rejected="onRejected"
      />
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
      userid: "2",
      blogTopic: "misc",
      image: null,
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
      const url = "http://localhost:3000/blogs";
      console.log(this.blogTitle, this.blogText, this.image);
      fetch(url, {
        method: "POST", //get post put delete, default GET
        body: JSON.stringify({
          blog_content: this.blogText,
          blog_title: this.blogTitle,
          blog_topic: this.blogTopic,
          // image: this.image,
          user_id: this.userid,
        }), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //API response gets returned
          console.log(json);
        });
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
  padding-right: -20px;
}
</style>