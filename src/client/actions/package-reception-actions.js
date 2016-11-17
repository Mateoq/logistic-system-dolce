// Constants.
import {
  UPDATE_CAMPAIGNS,
  SELECT_CAMPAIGN,
  TOGGLE_SELECT_ALL,
  TOGGLE_ORDER,
} from '../constants/actions';

export const updateCampaigns = campaigns => ({ type: UPDATE_CAMPAIGNS, campaigns });

export const selectCampaign = campaignSelected => ({ type: SELECT_CAMPAIGN, campaignSelected });

export const toggleSelectAll = () => ({ type: TOGGLE_SELECT_ALL });

export const toggleOrder = (zoneId, orderId) => ({
  type: TOGGLE_ORDER,
  zoneId,
  orderId,
});
