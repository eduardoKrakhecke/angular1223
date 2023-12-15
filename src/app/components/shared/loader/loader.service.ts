import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: any;

  constructor(private loadingController: LoadingController) {}

  async showLoading(exibir: boolean) {
    if (exibir) {
      this.loading = await this.loadingController.create({
        message: 'Carregando dados ... ',
      });

      await this.loading.present();
    } else {
      if (this.loading) {
        await this.loading.dismiss();
      }
    }
  }
}
