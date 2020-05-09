import { Course } from '../model/course';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from '../action-types';

export interface CoursesState extends EntityState<Course> {
}

export const adapter = createEntityAdapter<Course>();

export const initialCourseState = adapter.getInitialState();

export const coursesReducer = createReducer(
    initialCourseState,
    on(
        CourseActions.allCoursesLoaded,
        (state, action) => adapter.addAll(action.courses, state)
    )
);

export const { selectAll } = adapter.getSelectors();
