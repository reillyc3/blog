<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <div v-html="body" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulBlogPost (path: $path) {
    id,
    title,
    body,
    path
    
  }
}
</page-query>

<script>
  import MarkdownIt from "markdown-it";

  export default {
    computed: {
      body() {
        const md = new MarkdownIt();

        return md.render(this.$page.post.body);
      }
    }
  };
</script>