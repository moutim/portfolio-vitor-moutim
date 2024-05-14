import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CardSkillComponent } from './components/card-skill/card-skill.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from './services/translate/translate.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeBannerComponent,
    SkillsComponent,
    CardSkillComponent,
    ProjectsComponent,
    CardProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NavbarModule,
  ],
  providers: [
    provideAnimationsAsync(),
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
