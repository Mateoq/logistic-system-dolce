import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  UPDATE_MAIN_GROUP_SELECTION,
  UPDATE_ZONE_SELECTION,
} from '../constants/actions';

const dummyData = {
  groups: [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
  ],
  zones: [
    {
      group: 1,
      zones: [
        { id: 1, zone: '001' },
        { id: 2, zone: '002' },
      ],
    },
    {
      group: 2,
      zones: [
        { id: 1, zone: '001' },
        { id: 2, zone: '002' },
      ],
    },
  ],
  orders: [
    {
      zone: 2,
      orders: [
        {
          id: 15523656,
          vendorId: 123456789,
          vendorName: 'Pepita Perez',
          address: 'Cra 45 No 45-56',
          department: 'Antioquia',
          city: 'Medellin',
          population: 'Medellin',
          neighborhood: 'Laureles',
          state: 1,
        },
        {
          id: 15523656,
          vendorId: 123456789,
          vendorName: 'Pepita Perez',
          address: 'Cra 45 No 45-56',
          department: 'Antioquia',
          city: 'Medellin',
          population: 'Medellin',
          neighborhood: 'Laureles',
          state: 0,
        },
      ],
    },
    {
      zone: 1,
      orders: [
        {
          orderId: 15523656,
          vendorId: 123456789,
          vendorName: 'Pepita Perez',
          address: 'Cra 45 No 45-56',
          department: 'Antioquia',
          city: 'Medellin',
          population: 'Medellin',
          neighborhood: 'Laureles',
          state: 1,
        },
      ],
    },
  ],
};

const initialState = {
  data: dummyData,
  selectedGroup: null,
  selectedZone: null,
};

const actionHandlers = {
  [UPDATE_MAIN_GROUP_SELECTION]: (state, { group }) => ({
    ...state,
    selectedGroup: group,
  }),
  [UPDATE_ZONE_SELECTION]: (state, { zone }) => ({
    ...state,
    selectedZone: zone,
  }),
};

export default createReducer(initialState, actionHandlers);
