import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'angular-search-github-api'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular-search-github-api');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular-search-github-api app is running!');
  // });

  it('should filter the specific keywords in the list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const input: any = { target: { value: 'grit' }};
    // const result = app.applyFilter(input);
    const result = app.testingFilter('grit');

    // const newResult = result.map((e: any) => { return e = Object.values(e).join(' ')})
    // const extraNewResult = newResult.join('');
    console.log(' result' , result);
    // console.log(' newResult' , newResult);
    // console.log(' extraNewResult' , extraNewResult);
    expect(result).toBe(true);
  });
});
