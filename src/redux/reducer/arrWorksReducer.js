const defaultArrWorks = [
  {
    id: 1, title: 'Simple App', detail: 'React Native', isDone: true, isShow: false,
  },
  {
    id: 2, title: 'Simple Redux', detail: 'React Native', isDone: true, isShow: false,
  },
  {
    id: 3, title: 'To Do', detail: 'React Native', isDone: false, isShow: false,
  },
  {
    id: 4, title: 'To Do List', detail: 'React Native', isDone: false, isShow: false,
  },
];

const arrWorksReducer = (state = defaultArrWorks, action) => {
  if (action.type === 'TOGGLE_DONE') {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return { ...e, isDone: !e.isDone };
    });
  }
  if (action.type === 'TOGGLE_SHOW') {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return { ...e, isShow: !e.isShow };
    });
  }
  if (action.type === 'ADD_WORK') {
    const list = state.sort((a, b) => (a.id < b.id) ? 1 : -1);
    return [{
      id: list.length === 0 ? 0 : list[0].id + 1,
      title: action.title,
      detail: action.detail,
      isDone: false,
      isShow: false,
    }].concat(state);
  }
  if (action.type === 'DELETE_WORK') {
    return state.filter(e => {
      if (e.id !== action.id) return true;
      return false;
    });
  }
  return state;
};

export default arrWorksReducer;
