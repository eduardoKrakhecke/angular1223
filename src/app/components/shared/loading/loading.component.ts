import { Component } from '@angular/core';
import { LoadingService } from "@app/components/shared/loading/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading$ = this.loadingService.loading$
  constructor(public loadingService: LoadingService) {}

}
