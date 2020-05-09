import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CoursesEntityService } from './services/courses-entity.service';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
    constructor(private coursesService: CoursesEntityService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.coursesService.getAll().pipe(
            map(courses => !!courses)
        );
    }
}
