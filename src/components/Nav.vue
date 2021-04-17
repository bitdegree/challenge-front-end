<template>
  <nav v-if="!footer" class="navbar navbar-expand-lg py-4 px-0">
    <a class="navbar-brand mr-4" :class="{ 'text-secondary': !dark }" href="/"
      >Bloggy</a
    >
    <button
      class="navbar-toggler p-0"
      :class="{ 'navbar-dark': dark, 'navbar-light': !dark }"
      type="button"
      data-toggle="collapse"
      data-target="#collapsedNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsedNav">
      <div class="navbar-nav mr-auto">
        <div v-for="(item, index) in items" :key="index" class="nav-item">
          <router-link class="nav-link" :to="item.url">{{
            item.title
          }}</router-link>
        </div>
      </div>
    </div>
  </nav>
  <nav v-if="footer" class="footer py-4 text-center">
    <nav class="nav">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        class="nav-link"
        :to="item.url"
        >{{ item.title }}</router-link
      >
    </nav>
    <a class="navbar-brand ml-2" :class="{ 'text-gray': !dark }" href="/"
      >Bloggy</a
    >
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "#",
      },
      {
        title: "Contact",
        url: "#",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
a {
  font-weight: bold;
  color: $secondary;
  &:hover {
    color: $primary;
  }
  &.navbar-brand {
    color: $white;
  }
}
</style>
