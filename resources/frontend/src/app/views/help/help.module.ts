import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    declarations: [HelpComponent],
    imports: [
        SharedModule,
        PdfViewerModule,
        HelpRoutingModule
    ]
})
export class HelpModule { }