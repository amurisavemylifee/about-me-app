<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
/*=============== FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
/*=============== GLOBAL ===============*/
*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  line-height: 100%;
}
html {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  display: inline-block;
  color: inherit;
}
ul,
ol {
  list-style: circle;
}
li {
  margin-left: 25px;
}
button {
  color: inherit;
}
body {
  font-family: "Montserrat", sans-serif;
}
img {
  display: inline-block;
}
/*=============== CONTAINER ===============*/
.container {
  max-width: 676px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 15vh;
  box-sizing: border-box;
}

.title {
  display: inline-block;
  margin-top: 30px;
  color: #111111;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  width: 100%;
}
</style>
