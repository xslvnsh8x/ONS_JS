<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: { text: String },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.button {
  width: 200px;
  height: 60px;
  border-radius: 7px;
  border: 1px solid $roofTerracotta;
  background: $concrete;
  font-size: 1.2rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all .2s ease-in;
&:hover {
   background: $roofTerracotta;
   color: $concrete;
 }
&:focus {
   outline: none;
   box-shadow: 0 0 0 3px rgba(166, 27, 27, 0.4);
 }
}
</style>
