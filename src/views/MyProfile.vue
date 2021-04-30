<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt">
          <div class="text-overline">Blogger Profile</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Luyanda</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://pbs.twimg.com/media/EA4hyg9WsAA0fQJ.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat>
          This is brought to you courtesy of
        </q-btn>
        <q-btn flat color="negative">
          Blog Haven
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 800px
  max-width: 800px
  height: 800px
  max-height: 500px
  margin-left: 300px
  margin-top: 50px

</style>