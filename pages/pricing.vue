<template>
    <div class="bg-gray-900">
    <div class="relative px-6 pt-14 lg:static lg:px-8">
        
    <div class="pricing-page">
      <h1 class="mt-20px text-white">Pricing</h1>
      <p class="text-white" >Choose a pricing plan that fits your needs</p>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h2>Basic</h2>
          <p class="price">$99/month</p>
          <ul>
            <li>Up to 5 projects</li>
            <li>1GB storage</li>
            <li>Basic support</li>
          </ul>
          <button class="btn">Choose Plan</button>
        </div>
        <div class="pricing-card">
          <h2>Pro</h2>
          <p class="price">$199/month</p>
          <ul>
            <li>Up to 10 projects</li>
            <li>5GB storage</li>
            <li>Premium support</li>
          </ul>
          <button class="btn">Choose Plan</button>
        </div>
        <div class="pricing-card">
          <h2>Enterprise</h2>
          <p class="price">$499/month</p>
          <ul>
            <li>Unlimited projects</li>
            <li>50GB storage</li>
            <li>24/7 support</li>
          </ul>
          <button class="btn">Choose Plan</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    
    
  </template>
  
  <style >
.pricing-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  margin-top: 50px;

  
}

.pricing-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

.pricing-card {
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 40px;
  margin-bottom: 50px;
  transition: transform 0.3s ease-in-out;
}

.pricing-card:hover {
  transform: translateY(-10px);
}

.pricing-card h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.pricing-card .price {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
}

.pricing-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.pricing-card ul li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.btn {
  display: inline-block;
  background-color: #1a73e8;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: hover;
}

</style>