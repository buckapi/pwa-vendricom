import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { graphqlProvider } from './graphql.provider';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { NgxSpinnerModule,NgxSpinnerService } from 'ngx-spinner';
// bootstrapApplication(AppComponent, {
//   providers: [
//     {
//       provide: GALLERY_CONFIG,
//       useValue: {
//         autoHeight: true,
//         imageSize: 'cover'
//       } as GalleryConfig
//     }
//   ]
// })

// Definir la configuración de la galería
const galleryConfig: GalleryConfig = {
  // Ejemplo de opciones; usa las que sean relevantes para tu caso
  // thumbnails: false,
  dots: true,
  imageSize: 'cover'
};

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    NgxSpinnerService,
    
    NgxSpinnerModule,
    provideHttpClient(),
    graphqlProvider,
    {
      provide: GALLERY_CONFIG,
      useValue: galleryConfig
    }, provideHttpClient(), graphqlProvider
  ],
  // ... cualquier otra configuración necesaria
};

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), provideHttpClient(), graphqlProvider]
// };
