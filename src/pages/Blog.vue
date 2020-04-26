<template>
  <Layout>
  <div class="container justify-center px-auto mx-auto flex flex-wrap flex-col md:flex-row items-center">
   <div class="mx-0 px-auto">
    <h1 class="text-5xl font-bold leading-tight mb-6 mt-4 text-center">Blog</h1>
    <ul>
      <li v-for="{ node } in $page.posts.edges" :key="node.id">
       <div class="max-auto-sm overflow-hidden shadow-lg p-20 m-4">
        <g-link class="text-3xl" :to="node.path"> {{node.title}}  </g-link>
        <p class="pt-5"> {{node.description}} </p>
        <p class="font-light pt-5 mb-0"> Posted on {{node.date}} </p>
        </div>
      </li>
    </ul>
    </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allContentfulBlogPost {
    edges {
      node {
        id,
        title,
        description,
        date (format: "MMMM DD, YYYY"),
        path
      
      }
    }
  }
}
</page-query>