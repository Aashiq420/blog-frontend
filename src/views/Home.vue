<template>
<div class="home">
  <h2 class="heading">Hot Topics</h2>
  <div class="car">
  <q-carousel style="width:60%"
        class="carousel"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" >
            <div class="absolute-bottom custom-caption">
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
  </div>
</div>
    
</template>
<script>
export default {
  data () {
    return {slide: 1,
      autoplay: 5000,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
.blog {
  display: grid;
}
.carousel {
  right: 20%;
  left: 20%;
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
  padding: 10px;
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