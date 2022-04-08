# GraphQL Orders Example

### First you'll need a .env file for the MongoDB URI

### Project Stack

- `GraphQL`
- `NodeJS`
- `MongoDB`
- `ExpressJS`
- `Typescript`
- `Apollo Server`


#### Follow the next two commands and Apollo Server will host GraphQL Playground automaticallly at http://localhost:8080/graphql.

```
   npm install
   npm start
```

## RESOLVERS

### Add a new customer

```
mutation {
  addCustomer(
    customer: {
      name: "jeff"
      email: "jeff@example.com"
    }
  ){
    id
    name
    email
  }
}
```

### Add a new order

```
mutation {
  addOrder(order: {
    total: 20.75
    customerId: "625064f8848b8165b1f9e0c5"
  }){
    id
    total
  }
}
```

### Get all customers

```
query {
  getCustomers(limit:2 offset:2) {
    id
    name
    orders {
      id
      total
    }
  }
}
```

### Get all orders

```
query {
  getOrders(limit:2 offset:0) {
    id
    total
  }
}
```

### Find one customer

```
query {
  findOneCustomer(id:"625064f8848b8165b1f9e0c5"){
    id
    name
    orders {
      id
      total
    }
  }
}
```

### Find one order

```
query {
  findOneOrder(id:"62506516848b8165b1f9e0c7"){
    id
    total
  }
}
```
