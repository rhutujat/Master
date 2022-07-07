import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComploginComponent } from './complogin/complogin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { headerroutes } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistercompanyComponent } from './registercompany/registercompany.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{
  path : '',component:FirstpageComponent
},
{
  path : 'login' , component : LoginComponent
},
{
  path : 'complogin' , component :ComploginComponent
},
{
  path : 'login/header',component :HeaderComponent ,children :headerroutes
},
{
  path : 'login/registration' , component : RegistrationComponent
},
{
  path : 'complogin/compregistration' ,component : RegistercompanyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
