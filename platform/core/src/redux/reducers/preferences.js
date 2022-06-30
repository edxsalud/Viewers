const defaultState = {
  windowLevelData: {
    1: { description: 'Tejidos Blandos', window: '550', level: '40' },
    2: { description: 'Pulmonar', window: '150', level: '-600' },
    3: { description: 'Higado', window: '150', level: '90' },
    4: { description: 'Huesos', window: '2500', level: '480' },
    5: { description: 'Cerebro', window: '80', level: '40' },
    6: { description: 'Abdomen', window: '350', level: '40' },
    7: { description: 'Plantilla_1', window: '5', level: '0' },
    8: { description: 'Plantilla_2', window: '5', level: '0' },
    9: { description: 'Plantilla_3', window: '5', level: '0' },
    10: { description: 'Plantilla_4', window: '5', level: '0' },
  },
  generalPreferences: {
    // language: 'en-US'
  },
};

const preferences = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_PREFERENCES': {
      return Object.assign({}, state, action.state);
    }
    default:
      return state;
  }
};

export { defaultState };
export default preferences;
