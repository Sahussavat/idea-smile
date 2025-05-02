<script setup>
</script>

<template>
<nav id="navbar-example2" class="navbar sticky-top navbar-expand-lg " style="background-color: white;">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <a class="navbar-brand" href="#news">
    <img src="../assets/images/idea-smile-logo.jpg" draggable="false" width="100" height="100" class="d-inline-block align-top" alt="">
  </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <!-- Collapsible wrapper -->
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        <!-- Left links -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#news" style="font-family: noto-regular; font-size: 20px;">หน้าหลัก</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#service" style="font-family: noto-regular; font-size: 20px;">บริการ</a>
          </li>
            
          
          <li class="nav-item">
            <a href="#doctors" class="nav-link" style="font-family: noto-regular; font-size: 20px;">คุณหมอ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="font-family: noto-regular; font-size: 20px;" href="#map">พิกัดคลินิก</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<style>
.navbar-nav .nav-link.active{
  color: #578FCA;  
}
.navbar-nav .nav-link:hover {
  color: #A1E3F9;
}
</style>