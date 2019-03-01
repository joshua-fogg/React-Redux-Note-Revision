import { loadNotesRequest, addNoteRequest } from './service';

const ns = 'notes/';
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;
export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTE_SUCCESS = `${ns}ADD_NOTE_SUCCESS`;

export function loadNotes() {
    return {
        type: LOAD_NOTES,
        noteOperation: {
            request: loadNotesRequest(),
            success: loadNotesSuccess
        }
    }
}

function loadNotesSuccess(notes) {
    return {
        type: LOAD_NOTES_SUCCESS,
        notes
    }
}

export function addNote() {
    return {
        type: ADD_NOTE,
        noteOperation: {
            request: addNoteRequest(),
            success: addNoteSuccess
        }
    }
}
function addNoteSuccess(note) {
    return {
        type: ADD_NOTE_SUCCESS,
        note
    }
}

const initialState = {
    notes: {}
}

export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type){
    case LOAD_NOTES:
        return state;
    case LOAD_NOTES_SUCCESS:
        return {
            ...state,
            notes: action.notes
        };
    default:
        return state;
    }
}
