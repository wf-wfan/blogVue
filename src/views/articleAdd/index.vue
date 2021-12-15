<!-- 留言板 -->
<template>
    <div>
        <div class="container">
            <mavon-editor v-model="value"/>
        </div>
    </div>
</template>

<script>
export default {
    name :'ArticleAdd',
  components: { 
  },
  data() { // 选项 / 数据
    return {
        value: '',
    }
  },
  created() { // 生命周期函数

  },
  methods: { // 事件处理器

  }
}
</script>

<style scoped lang="less">
</style>
