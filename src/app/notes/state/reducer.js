import { loadNotesRequest, addNoteRequest, deleteNoteRequest } from "./service";

const ns = "notes/";
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;
export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTE_SUCCESS = `${ns}ADD_NOTE_SUCCESS`;
export const DELETE_NOTE = `${ns}DELETE_NOTE`;
export const DELETE_NOTE_SUCCESS = `${ns}DELETE_NOTE_SUCCESS`;

export function loadNotes() {
  return {
    type: LOAD_NOTES,
    noteOperation: {
      request: loadNotesRequest(),
      success: loadNotesSuccess
    }
  };
}

function loadNotesSuccess(notes) {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes
  };
}

export function addNote(text) {
  console.log("addNote: ", text);
  return {
    type: ADD_NOTE,
    noteOperation: {
      request: addNoteRequest(text),
      success: addNoteSuccess
    }
  };
}
function addNoteSuccess(note) {
  console.log("note success Input: ", note);
  return {
    type: ADD_NOTE_SUCCESS,
    newNote: note
  };
}
export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    noteOperation: {
      request: deleteNoteRequest(noteId),
      success: deleteNoteSuccess
    }
  };
}
function deleteNoteSuccess() {
  return {
    type: DELETE_NOTE_SUCCESS
    // TODO: THIS
  };
}
const initialState = {
  notes: {}
};

export default function reducer(state = initialState, action) {
  console.log("Action: ", action);
  switch (action.type) {
    case LOAD_NOTES:
      return state;
    case LOAD_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.notes
      };
    case ADD_NOTE:
      return state;
    case ADD_NOTE_SUCCESS:
      console.warn("ADD NOTE SUCCESS REDUCER ", state.notes, "\n\nXXXX");
      return { ...state };
    case DELETE_NOTE:
      return {
        ...state,
        notes: action.notes // TODO: IS THIS CORRECT???? -> Does service return new note list...
      };
    case DELETE_NOTE_SUCCESS:
      return state;
    default:
      return state;
  }
}
