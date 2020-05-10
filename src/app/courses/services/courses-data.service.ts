import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        config: DefaultDataServiceConfig
    ) {
        super('Course', http, httpUrlGenerator, config);
    }

    // getAll(): Observable<Course[]> {
    //     return this.http.get('/api/courses').pipe(
    //         map(res => res['payload'])
    //     );
    // }

    getAll(): Observable<Course[]> {
        return super.getAll().pipe(
            map(res => res['payload'])
        );
    }
}
