import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ModalActions = ({ action, handleClose, selected, cancelDisabled, city, cpaction }) => {
  return (
    <div>
      <Button
        color='red'
        inverted
        onClick={handleClose}
        disabled={cancelDisabled}
      >
        <Icon name='remove' /> Cancel
      </Button>
      <Button
        color='green'
        inverted
        onClick={async () => {
          const completed = action(selected, city, cpaction);
          if (completed) handleClose();
        }}
        disabled={!selected || (Array.isArray(selected) && !selected.length)}
      >
        <Icon name='checkmark' /> Select
      </Button>
    </div>
  );
};

export default ModalActions;
