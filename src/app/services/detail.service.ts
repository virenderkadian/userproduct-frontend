import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent,HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { usersDetail } from '../usersDetail';
import { productsDetail } from '../productsDetail';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { usersDetailsf } from '../usersDetailsf';
import { productsDetails } from '../productsDetails';
import { adminDetail } from '../adminDetail';
import { Router } from '@angular/router';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public usersDetailsf:usersDetailsf[]
  public productsDetail:productsDetail[]=[]
  public adminDetail:adminDetail[]


  constructor(private http:HttpClient,private router: Router) { }

  login(email: string, password: string){
    // console.log('In AuthService -  login');
    return this.http.post<any>('http://localhost:8080/admin/login', 
      {email: email, password:password}, {headers})
      .pipe(catchError(this.handleError),
        map(userData => {
          sessionStorage.setItem("username", email);
          let tokenStr = "Bearer " + userData.token;
          console.log("Token---  " + tokenStr);
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      ); 
  }
  private handleError(httpError: HttpErrorResponse,) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    return throwError(message);
  }
  
  registerAdmin(adminDetail:adminDetail):Observable<any>{
    return this.http.post<any>('http://localhost:8080/admin/signup',adminDetail)
  }
  signup(user: adminDetail): Observable<any>{
    return this.http.post('http://localhost:8080/admin/signup', user, { headers, responseType: 'text'})
                    .pipe(catchError(this.handleError));
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean{
    return sessionStorage.getItem('username') !== null;
  }

  getuserDetail():Observable<usersDetailsf[]>{
    return this.http.get<usersDetailsf[]>('http://localhost:8080/user/display');
  }
  getproductDetail():Observable<productsDetails[]>{
    return this.http.get<productsDetails[]>('http://localhost:8080/product/display');
  }

  saveUser(Details: usersDetailsf): Observable<usersDetailsf> {
    return this.http.post<usersDetailsf>('http://localhost:8080/user/add',Details);
  }

  saveProduct(Details: productsDetails): Observable<productsDetails> {
    return this.http.post<productsDetails>('http://localhost:8080/product/add',Details);
  }
 
  searchUser(): Observable<any>{
    return this.http.get('http://localhost:8080/user/display').pipe(
      map((response:[])=>response.map(option=>option['userName']))
    )
  }
  searchProduct(): Observable<any>{
    return this.http.get('http://localhost:8080/product/display').pipe(
      map((response:[])=>response.map(option=>option['productName']))
    )
  }
}
 // public urluser:string="http://localhost:5000/usersDetail" ;
  // public urlproduct:string="http://localhost:5000/productsDetail";
 // getuserDetail():Observable<usersDetail[]>{
  //   return this.http.get<usersDetail[]>(this.urluser);
  // }
 
  // getproductDetail():Observable<productsDetail[]>{
  //   return this.http.get<productsDetail[]>(this.urlproduct);
  // }
  // adduserDetail(details:usersDetail):Observable<usersDetail>{
  //   console.log('Added',details)
  //   return this.http.post<usersDetail>(this.urluser,details,httpOptions)
  // }
  // addproductDetail(details:productsDetail):Observable<productsDetail>{
  //   console.log('Added',details)
  //   return this.http.post<productsDetail>(this.urlproduct,details,httpOptions)
  // }