function Carousel() {
    return (
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            
          <img src="images/carousel-img2.jpg" class="d-block w-100" alt="..." id="img1" />
        
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Your Burger <br/> Your Taste</h1>
                <p>
                  Choose Your Favorite Ingredients
                </p>
                <p>
                  <a class="btn btn-lg btn-warning" href="#">
                    Build Your Burger
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img src="images/carousel-img3.jpg" class="d-block w-100" alt="..." />
  
            <div class="container">
              <div class="carousel-caption">
              <h1>Your Burger <br/>Your Taste </h1>
                <p>
                Choose Your Favorite Ingredients
                </p>
                <p>
                  <a class="btn btn-lg btn-warning  " href="#">
                  Build Your Burger
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img src="images/carousel-img1.jpg" class="d-block w-100" alt="..." />
  
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Your Burger <br/>Your Taste </h1>
                <p>
                Choose Your Favorite Ingredients
                </p>
                <p>
                  <a class="btn btn-lg btn-warning" href="#">
                    Build Your Burger
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default Carousel;
  