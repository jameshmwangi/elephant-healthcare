import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [ 
  {path: 'homepage' ,component:HomepageComponent},
  {path: 'about-us' ,component:AboutUsComponent},
  {path: 'contact-us',component:ContactUsComponent},
  {path:'sign-in-page',component:SignInPageComponent},
  {path:'sign-up-page',component:SignUpPageComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
