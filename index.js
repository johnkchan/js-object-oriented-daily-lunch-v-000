// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name){
    this.id = ++neighborhoodId;
    this.name = name;
    
    store.neighborhoods.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.neighborhoodId === this.id;
      }.bind(this)
    );
  }
  
  customers() {
    return store.customers.filter(
      function(customer) {
        return customer.neighborhoodId === this.id;
      }.bind(this)
    );
  }
  
  meals() {
    
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    
    store.customers.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.customerId === this.id;
      }.bind(this)
    );
  }
  
  meals() {
    return store.meals.filter(
      function(meal) {
        return meal.customerId === this.id;
      }.bind(this)
    );    
  }
  
  totalSpent() {
    
  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    
    store.meals.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.mealId === this.id;
      }.bind(this)
    );       
  }
  
  customers() {
    return Array.from(new Set(store.customers.filter(
      function(customer) {
        return customer.mealId === this.id;
      }.bind(this)
    )));           
  }
  
  byPrice() {
    
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    
    store.deliveries.push(this);
  }
  
  meal() {
    
  }
  
  customer() {
    
  }
  
  neighborhood() {
    
  }
}