<template>
  <Layout>
    <div class="container py-10 px-auto mx-auto flex flex-wrap flex-col">
    <h1 class="text-2xl mb-2 text-center ">{{$page.post.title}}</h1>
    <p class="font-light text-sm text-center text-gray mb-6"> Posted on {{$page.post.date}} </p>
    <div class="text-left " v-html="body" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulBlogPost (path: $path) {
    id,
    title,
    body,
    date (format: "MMMM DD, YYYY"),
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