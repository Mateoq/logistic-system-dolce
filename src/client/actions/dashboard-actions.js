// Constants.
import {
  UPDATE_MAIN_GROUP_SELECTION,
  UPDATE_ZONE_SELECTION,
} from '../constants/actions';

export const updateMainGroup = group => ({
  type: UPDATE_MAIN_GROUP_SELECTION,
  group,
});

export const updateZone = zone => ({
  type: UPDATE_ZONE_SELECTION,
  zone,
});
