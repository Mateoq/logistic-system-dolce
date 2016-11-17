import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions.
import * as packageReceptionActions from '../actions/package-reception-actions';

// Components.
import {
  SelectBox,
  CheckBox,
} from '../components/';

class PackageReception extends Component {
  static propTypes = {
    actions: PropTypes.shape().isRequired,
    campaigns: PropTypes.arrayOf(PropTypes.object),
    campaignSelected: PropTypes.string,
    selectAll: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.onCampaignSelection = this.onCampaignSelection.bind(this);
    this.onToggleSelectAll = this.onToggleSelectAll.bind(this);
  }

  onCampaignSelection(event) {
    const campaignCode = event.target.value;
    const selectedCampaign = (campaignCode === 'none') ?
      null :
      this.props.campaigns.find(campaign => (campaign.code === campaignCode));
    this.props.actions.selectCampaign(selectedCampaign);
  }

  onToggleSelectAll() {
    this.props.actions.toggleSelectAll();
  }

  render() {
    const {
      campaigns,
      selectAll,
      campaignSelected,
    } = this.props;

    const options = campaigns.map(item => ({
      text: item.campaignName,
      value: item.code,
    }));
    return (
      <div className="u-pillar-box--large package-reception-container">
        <h2 className="c-heading">Recepción de paquetes</h2>
        <div className="o-grid o-grid--no-gutter">
          <div className="o-grid__cell o-grid__cell--width-20">
            <SelectBox
              name={'campaigns_selector'}
              placeholder={'Seleccionar Campaña'}
              options={options}
              selected={campaignSelected}
              onChange={this.onCampaignSelection}
            />
          </div>
          <div className="o-grid__cell o-grid__cell--width-15 o-grid__cell--offset-50">
            <CheckBox
              name="select_all"
              checked={selectAll}
              onChange={this.onToggleSelectAll}
            >
              Seleccionar Todos
            </CheckBox>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state.packageReception }),
  dispatch => ({
    actions: bindActionCreators({ ...packageReceptionActions }, dispatch),
  })
)(PackageReception);
