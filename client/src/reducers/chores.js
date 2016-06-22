const chore = (state, action) => {
  switch (action.type) {
    case 'ADD_CHORE':
      return {
        name: action.name,
      };
    default:
      return state
  }
};

const sampleChores = [
  {
    name: 'kitchen',
  },
  {
    name: 'bathroom',
  },
];

const chores = (state = sampleChores, action) => {
  switch (action.type) {
    case 'ADD_CHORE':
      return [
        ...state,
        chore(undefined, action)
      ];
    default:
      return state;
  }
};

export default chores;
