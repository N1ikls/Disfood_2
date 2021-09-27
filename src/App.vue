<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap");
body {
  margin: 0;
  font-size: 15px;
  line-height: 20px;
}
.v-application--wrap {
  background: #e5e5e5;
}
</style>
