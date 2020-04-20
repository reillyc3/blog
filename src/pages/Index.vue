<template>
  <Layout>
    <g-image alt="" src="" width="" />
    <div class="pt-24">

	<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
		<!--Left Col-->
		<div class="flex flex-col w-full md:w-2/5 justify-center justify-between items-start text-center md:text-left pb-10">
			<p class="uppercase tracking-loose w-full">code. design. inspire.</p>
			<h1 class="my-4 text-5xl font-bold leading-tight">Hi, I'm Connor!</h1>
			<p class="leading-normal text-2xl mb-8">Salesforce Admin by day, wannabe web developer by night.</p>
			<g-link to="/blog"><button class="mx-auto lg:mx-0 hover:bg-teal-700 bg-teal-400 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Blog</button></g-link>
		</div>
		<!--Right Col-->
		<div class="w-full md:w-3/5 py-6 text-center">
			<img class="w-full md:w-5/5 z-50" src="../images/undraw_feeling_proud_qne1.svg">
		</div>
    <section class="mt-20 pt-20 flex flex-col w-full justify-around md:flex-row items-center border-t-2">
    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
    <a class="" href="https://yourvadmin.com"> 
  <img class="w-full md:w-2/5 py-2" src="../images/vadmin.png" alt="V-Admin logo">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">V-Admin</div>
    <p class="text-gray-700 text-base">
      A virtual Saleforce Administration business that I started in 2019. 
    </p>
  </div>
  </a>
</div>

   <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full  md:w-2/5 py-2" src="../images/undraw_barbecue_3x93.svg" alt="V-Admin logo">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Something cool coming soon!</div>
    <p class="text-gray-700 text-base">
      Check back soon.
    </p>
  </div>
</div>
    </section>	
	</div>

</div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Connor Reilly'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
