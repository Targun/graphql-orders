import { Customer, Order } from "../db";

// Add orders to customers on Query
const prepare = async function(doc){
  doc.orders = await Order.find({ customerId: doc._id }).exec()
  return doc;
}

// GraphQL Resolvers
export const resolvers = {
  Query: {
    getCustomers: async (root: any, {limit, offset}) => {
      return (await Customer.find({})
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .exec()).map(prepare)
    },
    getOrders: async (root: any, {limit, offset}) => {
      return (await Order.find({})
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .exec())
    },

    findOneCustomer: async (root: any, customer: any) => {
      return prepare(await Customer.findOne({ _id: customer.id }).exec())
    },
    findOneOrder: async (root: any, order: any) => {
      return (await Order.findOne({ _id: order.id }).exec())
    },
  },

  Mutation: {
    addCustomer: async (root: any, { customer }) => {
      const { ...rest } = customer;
      const newCustomer = new Customer({ ...rest });
      return (await newCustomer.save())
    },
    addOrder: async (root: any, { order }) => {
      const { ...rest } = order;
      const newOrder = new Order({ ...rest });
      return (await newOrder.save())
    },
  },
};
