<template>
  
  <!-- Put the sections here -->
  <div class="layout">
  <header class="md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  
  <!-- Global navigation -->
  <nav>
  
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <g-link class="nav__link block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/">Home</g-link>
        
      </li>
      <li class="md:ml-4">
        <g-link class="nav__link border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/about/">About</g-link>
       
      </li>
    </ul>
  </nav>


  <!-- END Global navigation -->

  </header>
  
    <slot/>
     <footer class='mt-20 w-full text-center border-t border-grey p-4 pin-b  '>
            Copyright © Connor Reilly 2020
            <div class="justify-between hover-blue">
            <a href="https://github.com/reillyc3"> <font-awesome :icon="['fab', 'github']"/> </a>
            <a href="https://twitter.com/ConnorRReilly"><font-awesome :icon="['fab', 'twitter']"/></a>
            </div>
        </footer>
    </div>
 </div>
 

 
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

