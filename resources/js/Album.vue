<template>
  <div class="album-box" id="album">
    <img class="poster" :src='album.poster' @click='openImageTo(album.poster)'>
    <div class="data">
      <p class="title">{{ album.title }}</p>
      <p class="author">@{{ album.author }}</p>
      <p class="genre" @click="searchFor(album.genre)">@{{ album.genre }}</p>
      <p class="year">@{{ album.year }}</p>
      <i class="heart fa-heart" :class="heartClass" @click='heartToggle()'/>
    </div>
  </div>
</template>

<script>

  export default {
    data() {

      return {

          heartClass: 'far'

      };
    },
    props: {

      album: Object
    },
    methods: {

      heartToggle() {

        this.heartClass = this.heartClass === 'fas' ? 'far' : 'fas';
      },
      searchFor(search) {
        this.$emit('input', search); //this.update(search)
        console.log(search);
      },
      openImageTo(url) {

        console.log("url", url);
        window.location.href = url;
      }
    }
  };

</script>