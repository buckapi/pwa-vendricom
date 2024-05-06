import { FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpRequest, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { Butler } from '@services/butler.service';
export class DemoFilePickerAdapter extends FilePickerAdapter {
  image:any="";
  constructor(
    private http: HttpClient,
    public _butler:Butler
  ) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    console.log("holaaa");
    const form = new FormData();
    form.append('file', fileItem.file);
    const api = 'https://db.buckapi.com:3333/api/containers/tixsImages/upload';
    const req = new HttpRequest('POST', api, form, {reportProgress: false});
    return this.http.request(req)
    .pipe(
      map( (res: HttpEvent<any>) => {
          if (res.type === HttpEventType.Response) {
            this._butler.newImage=true;
          this._butler.uploaderImages.push('https://www.buckapi.com/api/server/local-storage/tixsImages/'+res.body.result.files.file[0].name);
          this._butler.newUploaderImage=true;
          return res.body.id.toString();
        } else if (res.type ===  HttpEventType.UploadProgress && res.total  !== undefined) {
            const UploadProgress = +Math.round((100 * res.loaded) / res.total);
            return UploadProgress;
        }
      })
    );
   
  }
  public removeFile(fileItem: any): Observable<any> {
    console.log(fileItem);
    const removeApi = 'https://db.buckapi.com/api/containers/tixsImages/' + fileItem.id;
    return this.http.delete(removeApi);
  }
}