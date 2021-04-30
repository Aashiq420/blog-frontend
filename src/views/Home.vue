<template>
<div class="home">
  <h2 class="text-center relative-position">Hot Topics</h2>
  <div class="card">
  
  </div>

  <div class="blogs">
    <q-list>
      <q-item>
        <div class="blog-card">
          <div class="thumbnail">
            <img class="blog-img" src="data:image/jpeg;base64,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">
          </div>
          <div class="blog-data"> 
            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-large blog-title" >This is the Blog Title</span><br>
                <span class="text-grey-8 blog-poster"> by John Doe</span>
              </q-item-label>
              <q-separator  class="bg-white"/>
              <br>
              <q-item-label caption lines="3">
                <p class="blog-text ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit ipsa saepe fugit magnam, optio repellendus vitae minima rerum accusantium facilis delectus dolorum. Consequatur officia minus nulla numquam, adipisci, porro error culpa ullam aliquid unde consequuntur reprehenderit ab eius, amet perferendis quaerat repellendus necessitatibus rerum? Iure tempora in, nobis ipsam nulla at. Blanditiis dicta placeat maxime dolore aliquam officia, impedit tempora quidem ea, illum quas fuga voluptatem cum eos eius magni laudantium omnis corrupti, facilis deleniti! Rerum quae voluptas harum sit ad aliquid consequatur est deserunt iure, voluptatum accusantium dignissimos quis quo itaque earum aspernatur delectus atque! Odit, atque non.
                </p>
              </q-item-label>
              <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                <span class="cursor-pointer">Read more</span>
              </q-item-label>
            </q-item-section>
          </div>
        </div>
      </q-item>

      <q-item>
        <div class="blog-card">
          <div class="thumbnail">
            <img class="blog-img" src="data:image/jpeg;base64,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">
          </div>
          <div class="blog-data"> 
            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-large blog-title" >This is the Blog Title</span><br>
                <span class="text-grey-8 blog-poster"> by John Doe</span>
              </q-item-label>
              <q-separator  class="bg-white"/>
              <br>
              <q-item-label caption lines="3">
                <p class="blog-text ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit ipsa saepe fugit magnam, optio repellendus vitae minima rerum accusantium facilis delectus dolorum. Consequatur officia minus nulla numquam, adipisci, porro error culpa ullam aliquid unde consequuntur reprehenderit ab eius, amet perferendis quaerat repellendus necessitatibus rerum? Iure tempora in, nobis ipsam nulla at. Blanditiis dicta placeat maxime dolore aliquam officia, impedit tempora quidem ea, illum quas fuga voluptatem cum eos eius magni laudantium omnis corrupti, facilis deleniti! Rerum quae voluptas harum sit ad aliquid consequatur est deserunt iure, voluptatum accusantium dignissimos quis quo itaque earum aspernatur delectus atque! Odit, atque non.
                </p>
              </q-item-label>
              <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                <span class="cursor-pointer">Read more</span>
              </q-item-label>
            </q-item-section>
          </div>
        </div>
      </q-item>
      <q-item>
        <div class="blog-card">
          <div class="thumbnail">
            <img class="blog-img" src="data:image/jpeg;base64,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">
          </div>
          <div class="blog-data"> 
            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-large blog-title" >This is the Blog Title</span><br>
                <span class="text-grey-8 blog-poster"> by John Doe</span>
              </q-item-label>
              <q-separator  class="bg-white"/>
              <br>
              <q-item-label caption lines="3">
                <p class="blog-text ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit ipsa saepe fugit magnam, optio repellendus vitae minima rerum accusantium facilis delectus dolorum. Consequatur officia minus nulla numquam, adipisci, porro error culpa ullam aliquid unde consequuntur reprehenderit ab eius, amet perferendis quaerat repellendus necessitatibus rerum? Iure tempora in, nobis ipsam nulla at. Blanditiis dicta placeat maxime dolore aliquam officia, impedit tempora quidem ea, illum quas fuga voluptatem cum eos eius magni laudantium omnis corrupti, facilis deleniti! Rerum quae voluptas harum sit ad aliquid consequatur est deserunt iure, voluptatum accusantium dignissimos quis quo itaque earum aspernatur delectus atque! Odit, atque non.
                </p>
              </q-item-label>
              <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
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
      autoplay: 2000,
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
  color: antiquewhite;
  background-color: rgba(0, 0, 0, 0.952);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  width: 1000px;
  margin-left: 160px;
}
.blog-title {
  font-size: 19px;
    color: antiquewhite;
    padding: 2rem;
}
.blog-poster {
  font-size: 15px;
    color: antiquewhite;

}
.blog-text {
  font-size: 12px;
    color: antiquewhite;

}
.blog-data {
  width: 85%;
  }
.cursor-pointer {
  color: yellow;
}
.separator {
  color: antiquewhite;
}
.thumbnail {
  width: 15%;
}
</style>