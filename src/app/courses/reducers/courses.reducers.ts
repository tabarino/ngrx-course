import { compareCourses, Course } from '../model/course';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from '../action-types';

export interface CoursesState extends EntityState<Course> {
}

export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
    // If the name of your id is not the default id, you can use the selectId property
    // selectId: course => course.courseId
});

export const initialCourseState = adapter.getInitialState();

export const coursesReducer = createReducer(
    initialCourseState,
    on(
        CourseActions.allCoursesLoaded,
        (state, action) => adapter.addAll(action.courses, state)
    )
);

export const { selectAll } = adapter.getSelectors();
