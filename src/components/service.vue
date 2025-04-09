


<template>
    <div class="container">
        <div class="service-row-large row row-cols-3 fade-in-left" align="center">
            <div class="col" v-for="n in 6" style="padding: 2%;">
              <div class="card shadow" style="width: 100%;">
                
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
        </div>
      </div>
            </div>
        </div>
        <div class="service-row-mini row row-cols-1 fade-in-left" align="center">
            <div class="col" v-for="n in 6" style="padding: 2%;">
              <div class="card shadow" style="width: 100%;">
                
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
        </div>
      </div>
            </div>
        </div>
      </div>
</template>

<style>
@media only screen and (max-width: 600px) {
  .service-row-large {
    display: none;
  }

}

@media only screen and (min-width: 992px) {
  .service-row-mini {
    display: none;
  }

}
</style>