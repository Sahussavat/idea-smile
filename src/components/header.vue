<script setup>
</script>

<template>
<nav id="navbar-example2" class="navbar sticky-top navbar-expand-lg " style="background-color: white;">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <a class="navbar-brand" href="#news">
    <img src="../assets/images/idea-smile-logo.jpg" width="100" height="100" class="d-inline-block align-top" alt="">
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
           
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#service" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  โปรแกรมทำฟัน
                </a>
                <ul class="dropdown-menu columns-3">
		            <div class="row">
			            <div class="col-sm-4">
                            <div style="margin: 5%;"><h4>ถอนฟัน</h4></div>
                            <div class="dropdown-divider"></div>
				            <ul class="multi-column-dropdown">
					            <li><a href="#">Action</a></li>
					            <li><a href="#">Another action</a></li>
					            <li><a href="#">Something else here</a></li>
					            <li class="divider"></li>
					            <li><a href="#">Separated link</a></li>
					            <li class="divider"></li>
					            <li><a href="#">One more separated link</a></li>
				            </ul>
			            </div>
			            <div class="col-sm-4">
                            <div style="margin: 5%;"><h4>อุดฟัน</h4></div>
                            <div class="dropdown-divider"></div>
				            <ul class="multi-column-dropdown">
					            <li><a href="#">Action</a></li>
					            <li><a href="#">Another action</a></li>
					            <li><a href="#">Something else here</a></li>
					            <li class="divider"></li>
					            <li><a href="#">Separated link</a></li>
					            <li class="divider"></li>
					            <li><a href="#">One more separated link</a></li>
				            </ul>
			            </div>
			            <div class="col-sm-4">
                            <div style="margin: 5%;"><h4>เปลี่ยนฟัน</h4></div>
                            <div class="dropdown-divider"></div>
				            <ul class="multi-column-dropdown">
					            <li><a href="#">Action</a></li>
					            <li><a href="#">Another action</a></li>
					            <li><a href="#">Something else here</a></li>
					            <li class="divider"></li>
					            <li><a href="#">Separated link</a></li>
					            <li class="divider"></li>
					            <li><a href="#">One more separated link</a></li>
				            </ul>
			            </div>
		            </div>
	            </ul>
              </li> -->
            
          
          <li class="nav-item">
            <a href="#doctors" class="nav-link" style="font-family: noto-regular; font-size: 20px;">คุณหมอ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="font-family: noto-regular; font-size: 20px;" href="#map">พิกัดคลินิก</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#footer">ติดต่อเรา</a>
          </li> -->
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