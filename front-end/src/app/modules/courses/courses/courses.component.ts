import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  public courses$: Observable<Course[]>;
  public displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.listAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos');
        return of([]);
      })
    );
  }
  public onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  public onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activateRoute });
  }
}
