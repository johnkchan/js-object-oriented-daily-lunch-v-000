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
        return deliver.id === this.deliverId;
      }.bind(this)
    );
  }
  
  customers() {
    return store.customers.filter(
      function(delivery) {
        return deliver.id === this.deliverId;
      }.bind(this)
    );
  }
  
  meals() {
    
  }
}

class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerID;
    this.name = name;
    this.neighborhoodId = neighborhood.id;
    
    store.customers.push(this);
  }
  
  deliveries() {
    
  }
  
  meals() {
    
  }
  
  totalSpent() {
    
  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealID;
    this.title = title;
    this.price = price;
    
    store.meals.push(this);
  }
  
  delivers() {
    
  }
  
  customers() {
    
  }
  
  byPrice() {
    
  }
}

class Deliver {
  constructor(meal, neighborhood, customer) {
    this.id = ++deliveryId;
    this.mealId = meal.id;
    this.neighborhoodId = neighborhood.id;
    this.customerId = customer.id;
  }
  
  meal() {
    
  }
  
  customer() {
    
  }
  
  neighborhood() {
    
  }
}