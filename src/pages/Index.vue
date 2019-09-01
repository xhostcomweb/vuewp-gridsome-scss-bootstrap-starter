<template>
<Layout>
<header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <h1 class="masthead-heading mb-0">Avivo</h1>
        <h2 class="masthead-subheading mb-0">Vue Wordpress Bootstrap 4 Theme</h2>
        <a href="#" class="btn btn-primary btn-xl mt-5">Learn More</a>
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
</header>	
		

</Layout>
</template>
<script>
export default {
      head () {
        return {
          title: `Gridsome Vue Wordpress`,
          metaInfo: [
            {
              hid: 'description',
              name: 'description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:title',
              content: 'Gridsome Vue'
            },
            {
              property: 'og:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:type',
              content: 'post'
            },
            {
              name: 'twitter:title',
              content: 'Gridsome Vue'
            },
            {
              name: 'twitter:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            }
          ]
        }
      }
    }
</script>
<style>
.container {
width:100%;
}
</style>
