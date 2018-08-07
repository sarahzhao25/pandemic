import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Icon, Button } from 'semantic-ui-react';
import { treatDisease, getActionsRemaining, getNextTurn, getCurrentTurn, getOnClick, getOwnCity, tooManyCards } from '../../utils';

export const TreatButton = ({ ownCity, disease = '', actionsRemaining, nextTurn, checkClicked, currentTurn, tooManyCards }) => {
  const treat = () => treatDisease({ ownCity, actionsRemaining, nextTurn }, disease.toString());
  return (
    <Button
      className="action-button treat-button"
      disabled={!disease}
      onClick={() => checkClicked(getOnClick(actionsRemaining, currentTurn, treat, tooManyCards))}
    >
      <Icon className="treat-icon action-icon" name="medkit" size="big" />
      <div className="treat-text action-text">Treat</div>
    </Button>
  );
};

export const mapStateToProps = (state) => {
  return {
    ownCity: getOwnCity(state),
    actionsRemaining: getActionsRemaining(state),
    nextTurn: getNextTurn(state),
    currentTurn: getCurrentTurn(state),
    tooManyCards: tooManyCards(state)
  };
};

export default compose(
  firestoreConnect(),
  connect(mapStateToProps)
)(TreatButton);
