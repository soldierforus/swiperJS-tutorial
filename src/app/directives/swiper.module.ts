import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwiperDirective } from "./swiper.directive";

@NgModule({
  declarations: [SwiperDirective],
  imports: [CommonModule],
  exports: [SwiperDirective]
})

export class DirectivesModule {}