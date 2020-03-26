<template lang="pug">
  header.header
    .header__item.text-left
      img(src="../assets/images/profile.png")
      span Suryananda Aridantang
    .header__item.text-right(v-if="time !== null") 
      .padding-x-2em.display-inline-block.border-right-2px-black.margin-right-2em
        BellTickIcon
      span.vertical-middle
        p.color-blue-denim.weight-500 {{ time.format("HH:mm") }} 
        p {{ time.format("dddd, DD MMMM YYYY") }}

</template>

<script>
import BellTickIcon from "ROOT/assets/svgs/bell_tick";

import dayjs from "dayjs";

export default {
  name: "header_component",
  components: {
    BellTickIcon
  },
  data() {
    return {
      time: null,
      timeInterval: null
    };
  },
  methods: {
    updateTime() {
      this.time = dayjs(new Date());
    }
  },
  mounted() {
    this.timeInterval = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding-right: 2em;
  padding-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  display: table;
  background-color: $white-whisper;
  box-shadow: $shadow-bottom-22-black-015;
  position: fixed;
  top: 0;
  z-index: 3;
  &__item {
    font-size: $font-md;
    display: inline-block;
    width: 50%;
    display: table-cell;
    vertical-align: middle;
    & img {
      width: 50px;
      object-fit: contain;
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      margin-right: 1em;
      & + span {
        font-size: $font-md;
      }
    }
    & svg {
      width: 25px;
      vertical-align: middle;
      display: inline-block;
    }
    & p {
      font-size: $font-md;
    }
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
  .header {
    padding-right: 1em;
    padding-left: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &__item {
      & img {
        width: 40px;
      }
      & svg {
        width: 18px;
      }
    }
  }
}
</style>
