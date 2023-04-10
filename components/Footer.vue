<template>
  <footer class="site-footer">
    <div class="container">
      <h3 class="footer-heading">Our Clients Say</h3>
      <p class="footer-text">
        Below are just two of the many testimonies our clients<br />
        share about us. At Sha Housing & Construction,<br />
        Customer satisfaction is always prioritized!
      </p>
      <div class="testimonial-section">
        <div class="testimonial">
          <div class="testimonial-content">
            <img
              src="/customerreview.jpg"
              alt="Client 1"
              class="testimonial-img"
            />
            <p class="testimonial-text">
              Their team was professional, knowledgeable, and always kept me
              informed throughout the project. Choosing Sha Housing &
              Construction for my project was the best decision I could have
              made.
            </p>
          </div>
        </div>
        <div class="testimonial">
          <div class="testimonial-content">
            <img
              src="/customerreview2.jpg"
              alt="Client 2"
              class="testimonial-img"
            />
            <p class="testimonial-text">
              I had an amazing experience working with Sha Housing &
              Construction! I am so happy with the final result and would highly
              recommend their services to anyone looking for top-quality
              construction work
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-icons">
      <div class="icon-container">
        <div class="icon-wrapper">
          <img class="icon" src="/findus.svg" alt="address" />
          <div class="text">Locate Us</div>
          <p class="description">
            Kasoa Timber Market Adjacent<br />
            to the Police Station-C/R
          </p>
        </div>
        <div class="icon-wrapper">
          <img class="icon" src="/call.svg" alt="phone" />
          <div class="text">Call Us</div>
          <p class="description">0242544821/0553390759</p>
        </div>
        <div class="icon-wrapper">
          <img class="icon" src="/Messages.svg" alt="email" />
          <div class="text">Email</div>
          <p class="description">sagbornitor10@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* .icon { */
/* filter: saturate(50%) hue-rotate(150deg); */
/* width: 37px; */
/* height: 37px; */
/* } */

.site-footer {
  background-color: #f2f2f2;
  padding: 50px 0;
  text-align: center;
}

.footer-heading {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

.footer-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
  margin-left: 25px;
  margin-right: 25px;
}

.testimonial-section {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.testimonial {
  flex-basis: 45%;
  max-width: 400px;
}

.testimonial-img {
  border-radius: 50px;
  display: block;
  height: 90px;
  margin: 0 auto 20px;
  width: 90px;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
  text-align: left;
  margin-left: 10px;
}
.testimonial-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.footer-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.icon-container {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper img {
  width: 35px;
  height: 35px;
}

.text {
  text-align: center;
  margin-top: 8px;
}

.description {
  text-align: center;
  margin-top: 4px;
  font-size: 14px;
  color: #888;
}
</style>
