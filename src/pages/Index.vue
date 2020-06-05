<template>
  <Layout>
    <g-image alt="" src="" width="" />
    <div class="pt-24">

	<div class="container pb-20 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
		<!--Left Col-->
		<div class="flex flex-col w-full md:w-2/5 justify-center justify-between text-center md:text-left pb-10">
			<p class="uppercase tracking-loose w-full text-primary">code. design. inspire.</p>
			<h1 class="py-4 text-5xl font-bold leading-tight w-full text-primary">Hi, I'm Connor!</h1>
			<p class="leading-normal text-2xl pb-8 w-full text-primary">Salesforce Administrator. <br> Web Developer. <br> Maker.</p>
			<g-link class="text-2xl justify-center" to="/blog"><button class="bg-primary text-white font-bold  hover:bg-darkgray rounded-full my-6 py-4 px-8 shadow-lg ">Blog</button></g-link>
		</div>
		<!--Right Col-->
		<div class="w-full md:w-3/5 py-6 text-center">
			<img class="w-full md:w-5/5 z-50" src="../images/undraw_feeling_proud_qne1.svg">
      
		</div>
    </div>
    </div>
  <section class="container mx-auto pt-6">
    <h1 class="text-2xl font-bold text-primary text-center">Projects</h1>
    <div>
       <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center justify-between">
        <div class="bg-white lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full">
                  <img src="../images/Udemy image.jpg" alt="" >
                </div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-2xl font-bold text-primary">Udemy Gridsome Course</h2>
                <p class="mt-4 text-darkgray">Have you ever wanted to build a blog or portfolio site, but didn't know what tech stack to use? This course is for you! I'll walk you through step-by-step, line-by-line, from zero to fully functional blog site.</p>
                <div class="mt-8">
                    <a href="https://www.udemy.com/gridsome" class="bg-primary text-white hover:bg-darkgray rounded-full px-5 py-3 font-semibold rounded">View</a>
                </div>
            </div>
        </div>
    </div> 
</div>
   <div>
       <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center flex-wrap">
        <div class="bg-white lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg flex-wrap">
             <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 flex-wrap">
                <h2 class="text-2xl font-bold text-primary">Coming Soon!</h2>
                <p class="mt-4 text-darkgray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                <div class="mt-8">
                    <a href="#" class="bg-primary text-white hover:bg-darkgray rounded-full px-5 py-3 font-semibold rounded">View</a>
                </div>
            </div>
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full">
                  <img class="" src="../images/undraw_under_construction_46pa.svg" alt="" >
                </div>
            </div>
        </div>
    </div> 
</div>
  </section>	
	
  

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
