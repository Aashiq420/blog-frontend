<template>
  <div class="q-pa-md" style="width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="blogTitle" label="Blog Title" lazy-rules />

      <q-input filled type="textarea" v-model="blogText" lazy-rules />
      <q-file
        style="max-width: inherit"
        v-model="blogImage"
        filled
        label="Add Image"
        multiple
        accept=".jpg, .png, image/*"
        max-file-size="1000000"
        @rejected="onRejected"
      />

      <div>
        <q-btn label="Post" type="submit" color="primary" />
        <q-btn
          :icon="'fas fa-redo-alt'"
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
      blogImage: null,
      userid: null,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.tile = null;
      this.text = null;
    },
    createBlog() {
      const url = "http://localhost:3000/blogs";
      fetch(url, {
        method: "POST", //get post put delete, default GET
        body: JSON.stringify({
          username: this.name,
          email: this.email,
          password: this.password,
          image: this.image,
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
</style>

