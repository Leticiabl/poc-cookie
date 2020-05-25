import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'poc-cookie';

   nomeCookie = "testString";
   testString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

   constructor(private cookieService: CookieService) {
   }

   addCookie() {
      this.cookieService.set(this.nomeCookie, this.testString);
   }

   verifyCookie() {
      const existe = this.cookieService.check(this.nomeCookie);
      if (existe) {
         alert(`Cookie existe`);
      } else {
         alert(`Cookie inexistente`);
      }
   }

   deleteCookie() {
      this.cookieService.delete(this.nomeCookie);
   }
}
