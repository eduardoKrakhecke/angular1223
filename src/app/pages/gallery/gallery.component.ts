import { Component } from '@angular/core';
import { PhotoService } from "@app/services/photo.service";
import { Photo } from "@app/models/photo";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  photos: Photo[] = []

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe((response: Photo[]) => {
      this.photos = response.slice(0,30)
    },
      (error: Error) => {
      console.error(error)
      }
    )
  }
}
