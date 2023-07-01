import {
  CREATE_SUBJECT,
  UPDATE_SUBJECT,
  HAS_ERROR_SUBJECT,
  LIST_SUBJECTS,
  SET_META,
  SET_LOADING_SUBJECT,
  SubjectState,
  SubjectAction,
  REMOVE_SUBJECT,
} from "../actions/subject.actions";
import { Subject } from "../../type/subject";
import { Meta } from "../../type/meta";

const initialState: SubjectState = {
  subjects: [],
  isLoading: false,
  error: false,
  meta: {
    page: 0,
    page_size: 0,
    total_page: 0,
  },
};

const SubjectReducer = (
  state = initialState,
  action: SubjectAction
): SubjectState => {
  switch (action.type) {
    case SET_LOADING_SUBJECT:
      const loadingBoolean: boolean = action.payload;
      return {
        ...state,
        isLoading: loadingBoolean,
      };
    case HAS_ERROR_SUBJECT:
      const errorBoolean: boolean = action.payload;
      return {
        ...state,
        error: errorBoolean,
        isLoading: false,
      };
    case LIST_SUBJECTS:
      // make sure payload passed here is a list of Subject
      const listSubjectsData: Subject[] = action.payload;

      return {
        ...state,
        isLoading: false,
        subjects: listSubjectsData,
      };
    case SET_META:
      const metaData: Meta = action.payload;
      return {
        ...state,
        isLoading: false,
        meta: metaData,
      };

    case CREATE_SUBJECT:
      const subjectData: Subject = action.payload;
      state.subjects.unshift(subjectData);
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_SUBJECT:
      const subjectDataUpdate: Subject = action.payload;

      const index = state.subjects.findIndex(
        (x) => x.id === subjectDataUpdate.id
      );
      if (index > -1) {
        state.subjects[index] = subjectDataUpdate;
        return {
          ...state,

          isLoading: false,
        };
      } else {
        return {
          ...state,
          error: true,
          isLoading: false,
        };
      }

    case REMOVE_SUBJECT:
      const subjectId: string = action.payload;

      const indexSubject = state.subjects.findIndex((x) => x.id === subjectId);
      if (indexSubject > -1) {
        state.subjects.splice(indexSubject, 1);
        return {
          ...state,
          isLoading: false,
        };
      } else {
        return {
          ...state,
          error: true,
          isLoading: false,
        };
      }

    default:
      return state;
  }
};

export default SubjectReducer;
