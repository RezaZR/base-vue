<template lang="pug">
  aside.sidebar
    nav.sidebar__list
      ul
        li 
          router-link(to="/")
            DashboardIcon
            span Overview
      ul
        li.sidebar__list__title Managements
        li
          router-link(to="/camera")
            CameraIcon
            span Camera
        li
          router-link(to="/report")
            FileIcon 
            span Report and Alert
      ul
        li.sidebar__list__title Systems
        li 
          router-link(to="/license")
            KeyIcon
            span License
        li
          router-link(to="/user")
            UserConfigIcon
            span User
        li
          a 
            QuestionMarkIcon
            span Help
      ul.margin-top-2em
        li
          router-link(to="/login")
            PowerIcon
            span Log Out
      
    
    .sidebar__logo
      router-link(to="/")
        MatadewaFullLogo

</template>

<script>
import MatadewaFullLogo from "ROOT/assets/svgs/matadewa_full_logo";
import DashboardIcon from "ROOT/assets/svgs/dashboard";
import CameraIcon from "ROOT/assets/svgs/camera";
import UserTwoIcon from "ROOT/assets/svgs/user_two";
import QuestionMarkIcon from "ROOT/assets/svgs/question_mark";
import KeyIcon from "ROOT/assets/svgs/key";
import FileIcon from "ROOT/assets/svgs/file";
import UserConfigIcon from "ROOT/assets/svgs/user_config";
import PowerIcon from "ROOT/assets/svgs/power";

export default {
  name: "sidebar_component",
  components: {
    MatadewaFullLogo,
    DashboardIcon,
    CameraIcon,
    UserTwoIcon,
    QuestionMarkIcon,
    KeyIcon,
    FileIcon,
    UserConfigIcon,
    PowerIcon
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 15%;
  height: calc(100% - 82px);
  display: inline-block;
  position: fixed;
  top: 82px;
  background: $gradient-pattens-whisper;
  padding-right: 1em;
  padding-left: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  box-shadow: $shadow-right-22-black-015;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 2;
  &__list {
    position: relative;
    ul {
      display: block;
      width: 100%;
      & li {
        font-size: $font-md;
        font-weight: 500;
        & a {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
          color: $black-075;
          width: 100%;
          & svg {
            width: 15px;
            height: 15px;
            fill: $black-075;
            display: inline-block;
            vertical-align: sub;
          }
          & span {
            margin-left: 1em;
          }
          &:hover {
            color: $black;
          }
        }
        &.sidebar__list__title {
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          font-size: $font-lg;
          font-weight: 500;
          color: $black-050;
          text-transform: uppercase;
          &:hover {
            color: $black-050;
          }
        }
        &:hover {
          color: $black;
          & a {
            & svg {
              fill: $blue-denim;
            }
          }
        }
      }
    }
  }
  &__logo {
    display: block;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 2em;
    transform: translateX(-50%);
    & svg {
      width: 125px;
      vertical-align: super;
      fill: $primary-color;
    }
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
  .sidebar {
    width: 17%;
    height: calc(100% - 56px);
    top: 56px;
    &__list {
      margin-top: 2em;
      & ul {
        & li {
          font-size: $font-sm;
          &.sidebar__list__title {
            margin-top: 1em;
            margin-bottom: 1em;
            font-size: $font-sm;
          }
        }
      }
    }
    &__logo {
      & svg {
        width: 115px;
      }
    }
  }
}
</style>
