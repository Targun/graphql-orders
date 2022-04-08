import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Order {
    id: ID
    total: Float
    customerId: String
  }

  type Customer {
    id: ID
    name: String
    email: String
    orders: [Order]
  }

  input OrderInput {
    total: Float
    customerId: String
  }

  input CustomerInput {
    name: String
    email: String
  }

  type Query {
    getCustomers(limit: Int, offset: Int): [Customer]
    getOrders(limit: Int, offset: Int): [Order]
    findOneCustomer(id: String): Customer
    findOneOrder(id: String): Order
  }

  type Mutation {
    addCustomer(customer: CustomerInput): Customer
    addOrder(order: OrderInput): Order
  }
`;
