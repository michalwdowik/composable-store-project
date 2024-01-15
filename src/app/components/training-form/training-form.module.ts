import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TrainingFormComponent } from './training-form.component'
import { CourseSelectorComponent } from './course-selector/course-selector.component'
import { SitePoliciesComponent } from './site-policies/site-policies.component'
import { ServiceCenterComponent } from './service-center/service-center.component'
import { ParagraphComponent } from './paragraph/paragraph.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FormComponent } from './form/form.component'
import { CmsConfig, ConfigModule } from '@spartacus/core'
import { CustomLayoutModule } from 'src/app/custom-layout/custom-layout.module'
import { AngularMaterialModule } from 'src/app/angular-material/angular-material/angular-material.module'

@NgModule({
  declarations: [
    TrainingFormComponent,
    CourseSelectorComponent,
    SitePoliciesComponent,
    NavbarComponent,
    ServiceCenterComponent,
    FormComponent,
    CourseSelectorComponent,
    ParagraphComponent,
  ],
  imports: [
    CommonModule,
    CustomLayoutModule,
    CustomLayoutModule,
    AngularMaterialModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SwagelokTrainingRequestFormComponent: {
          component: TrainingFormComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class TrainingFormModule {}
