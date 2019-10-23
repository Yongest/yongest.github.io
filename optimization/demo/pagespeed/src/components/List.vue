<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <img :src="item.image" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
const lists = Mock.mock({
  "users|10": [
    {
      "id|+1": 1,
      name: "@cname",
      city: "@city",
      image: "@image"
    }
  ]
});
export default {
  name: "List",
  data() {
    return {
      list: lists.users
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
