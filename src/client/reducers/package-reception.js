import { createReducer } from 'redux-create-reducer';

// Helper.
import ZoneOrders from './helper-reducers/zone-orders';

// Actions.
import {
  UPDATE_CAMPAIGNS,
  SELECT_CAMPAIGN,
  TOGGLE_SELECT_ALL,
  TOGGLE_ORDER,
} from '../constants/actions';

const initialState = {
  campaigns: [{
    campaignName: 'sample campaign',
    code: '1234',
    zones: [
      {
        id: '002',
        orders: [
          {
            orderId: 1156152,
            vendorId: 123456789,
            vendorName: 'Pepita Perez',
            received: false,
          },
        ],
      },
    ],
  }],
  campaignSelected: null,
  selectAll: false,
  campaignsTable: {
    titles: [
      'Zona',
      'Pedido No',
      'Cédula Asesora',
      'Recibido',
    ],
  },
};

const actionHandlers = {
  [UPDATE_CAMPAIGNS]: (state, { campaigns }) => ({
    ...state,
    campaigns,
  }),
  [SELECT_CAMPAIGN]: (state, { campaignSelected }) => ({
    ...state,
    campaignSelected,
  }),
  [TOGGLE_SELECT_ALL]: state => ({
    ...state,
    selectAll: !state.selectAll,
  }),
  [TOGGLE_ORDER]: (state, action) => ({
    ...state,
    campaignSelected: {
      ...state.campaignSelected,
      zones: state.campaignSelected.zones.map((zone) => {
        if (zone.id === action.zoneId) {
          return {
            ...zone,
            orders: ZoneOrders[action.type](zone, action),
          };
        }
        return zone;
      }),
    },
  }),
};

export default createReducer(initialState, actionHandlers);
