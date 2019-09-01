<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
   <g-link class="navbar-brand" href="#">
          <img src="../assets/img/Logo.png" alt="Logo">
        </g-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <g-link class="nav-link" to="/">Home
                <span class="sr-only">(current)</span>
              </g-link>
        </li>
        <li class="nav-item">
         <g-link class="nav-link" to="/about">About</g-link>
        </li>
        <li class="nav-item">
         <g-link class="nav-link" to="/alerts">Alerts</g-link>
        </li>
        <li class="nav-item">
         <g-link class="nav-link" to="/news">News</g-link>
        </li>
        <li class="nav-item">
        <g-link class="nav-link" to="/signup">Sign Up</g-link>
        </li>
        <li class="nav-item">
           <g-link class="nav-link" to="/login">Log In</g-link>
       </li>
        <li class="nav-item">
           <g-link class="nav-link" to="/contact">Contact</g-link>
       </li>
      </ul>
	  <form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
				</form>
    </div>
  </div>
</nav>

</template>
<script>

 
</script>






   
   
