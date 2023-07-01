import { Meta } from "../../type/meta";
import { Subject } from "../../type/subject";

export interface SubjectState {
  subjects: Subject[];
  isLoading: boolean;
  error: boolean;
  meta: Meta;
}

export const LIST_SUBJECTS = "LIST_SUBJECTS";
export const CREATE_SUBJECT = "CREATE_SUBJECT";
export const UPDATE_SUBJECT = "UPDATE_SUBJECT";
export const SET_META = "SET_META";
export const SET_LOADING_SUBJECT = "SET_LOADING_SUBJECT";
export const HAS_ERROR_SUBJECT = "HAS_ERROR_SUBJECT";
export const REMOVE_SUBJECT = "REMOVE_SUBJECT";

export interface SetMetaInterface {
  type: typeof SET_META;
  payload: Meta; // payload
}

export interface SetLoadingSubjectInterface {
  type: typeof SET_LOADING_SUBJECT;
  payload: boolean; // payload
}

export interface HasErrorSubjectInterface {
  type: typeof HAS_ERROR_SUBJECT;
  payload: boolean; // payload
}

export interface ListSubjectsInterface {
  type: typeof LIST_SUBJECTS;
  payload: Subject[]; // list of Subjects to be shown
}

export interface CreateSubjectInterface {
  type: typeof CREATE_SUBJECT;
  payload: Subject; // payload Subject objet
}

export interface UpdateSubjectInterface {
  type: typeof UPDATE_SUBJECT;
  payload: Subject; // payload Subject object
}

export interface RemoveSubjectInterface {
  type: typeof REMOVE_SUBJECT;
  payload: string; // payload subjectId
}

export type SubjectAction =
  | SetLoadingSubjectInterface
  | HasErrorSubjectInterface
  | ListSubjectsInterface
  | CreateSubjectInterface
  | SetMetaInterface
  | UpdateSubjectInterface
  | RemoveSubjectInterface;

export function SetLoadingSubject(
  payload: boolean
): SetLoadingSubjectInterface {
  return { type: SET_LOADING_SUBJECT, payload };
}

export function HasErrorSubject(payload: boolean): HasErrorSubjectInterface {
  return { type: HAS_ERROR_SUBJECT, payload };
}

export function ListSubjects(payload: any): ListSubjectsInterface {
  return { type: LIST_SUBJECTS, payload }; // need to set Meta right after List all Subjects so that Meta data is matched in state
}

export function SetSubjectMeta(payload: Meta): SetMetaInterface {
  return { type: SET_META, payload }; // need to set Meta right after List all Subjects so that Meta data is matched in state
}

export function CreateSubject(payload: Subject): CreateSubjectInterface {
  return { type: CREATE_SUBJECT, payload };
}

export function UpdateSubject(payload: Subject): UpdateSubjectInterface {
  return { type: UPDATE_SUBJECT, payload };
}
export function RemoveSubject(payload: string): RemoveSubjectInterface {
  return { type: REMOVE_SUBJECT, payload };
}
