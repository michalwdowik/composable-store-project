import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfigModule } from '@spartacus/core'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        TrainingRequestFormPageTemplate: {
          slots: ['TrainingRequestContentSlot'],
        },
      },
    }),
  ],
})
export class CustomLayoutModule {}
