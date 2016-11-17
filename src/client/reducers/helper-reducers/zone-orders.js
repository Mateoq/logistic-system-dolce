import { TOGGLE_ORDER } from '../../constants/actions';

export default {
  [TOGGLE_ORDER]: (state, { orderId }) => ({
    ...state,
    orders: state.orders.map((order) => {
      if (order.orderId === orderId) {
        return {
          ...order,
          received: !order.received,
        };
      }
      return order;
    }),
  }),
};
