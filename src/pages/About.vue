<template>
  <Layout>
  <div class="container justify-center px-auto mx-auto flex flex-wrap items-center">
  <div class="justify-center px-auto mx-auto text-center">
    <h1 class="text-2xl leading-tight mb-6 mt-4 text-primary">About Me</h1>
    <!--
    <div class="text-5xl">
      <ul>
      <li><font-awesome :icon="['fab', 'salesforce']"/></li>
      <li><font-awesome :icon="['fab', 'html5']"/></li>
      </ul>
    </div>
    -->
    <div class=" text-darkgray"> 
    <p>I'm a Salesforce Administator at Fast Radius. Apart from being obsessed with all things Salesforce, I enjoy playing with new web technologies. 
    A big fan of the JAMStack, Ruby on Rails, and Tailwindcss.
    </p>
    <br>
    <p>When not customizing Salesforce, digging into analytics, or building a website, 
    I enjoy traveling, listening to music, and playing video games.
    </p>
    <br>
    <p>My passion for travel and helping people has taken me all over the world. 
    I spent three summers in Kenya while I was still in highschool, 
    volunteering in a rural community outside Nakuru. 
    In college, I spent a semester abroad in Ghana, and even took two trips to 
    Haiti to work with a network of pharmacies and clinics, utalizing technology to 
    improve how they invnetory medications. 
    </p>
    </div>
  </div>
  </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<page-query>
query Person {
 person: allContentfulPerson {
    edges {
      node {
        id,
        shortBio
      
      }
    }
  }

}
</page-query>
