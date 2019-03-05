
const ns = "notes/";
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;
export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTE_SUCCESS = `${ns}ADD_NOTE_SUCCESS`;
export const DELETE_NOTE = `${ns}DELETE_NOTE`;
export const DELETE_NOTE_SUCCESS = `${ns}DELETE_NOTE_SUCCESS`;
export const UPDATE_NEWNOTE = `${ns}UPDATE_NEWNOTE`;

const tm = "theme/";
export const TOGGLE_THEME = `${tm}TOGGLE_THEME`;



const initialState = {
  notes: [],
  newNote: "",
  lightTheme: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NOTES:
      return state;
    case LOAD_NOTES_SUCCESS:
      return {
        ...state,
        notes: Object.keys(action.notes).map(key => {
          return action.notes[key];
        }) // Convert to array as a nested object failes to re render due to shallwo comparison.
      };
    case ADD_NOTE:
      return state;
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        newNote: "",
        notes: [...state.notes, action.newNote]
        // Convert to array as a nested object failes to re render due to shallwo comparison.
      };
    case DELETE_NOTE:
      return state;
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        newNote: ""
      };
    case UPDATE_NEWNOTE:
      return {
        ...state,
        newNote: action.newNote
      };
    case TOGGLE_THEME:
      return {
        ...state,
        lightTheme: action.lightTheme
      };
    default:
      return state;
  }
}
