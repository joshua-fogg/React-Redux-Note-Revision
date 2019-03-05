import { loadNotesRequest, addNoteRequest, deleteNoteRequest } from "./service";
import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  UPDATE_NEWNOTE,
  TOGGLE_THEME
} from "./reducer";

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
  return {
    type: ADD_NOTE,
    noteOperation: {
      request: addNoteRequest(text),
      success: addNoteSuccess
    }
  };
}
function addNoteSuccess(note) {
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

function deleteNoteSuccess(...args) {
  return {
    type: DELETE_NOTE_SUCCESS,
    result: args
  };
}
export function updateNewNote(text) {
  return {
    type: UPDATE_NEWNOTE,
    newNote: text
  };
}

export function toggleTheme(bool) {
  return {
    type: TOGGLE_THEME,
    lightTheme: !bool
  };
}
