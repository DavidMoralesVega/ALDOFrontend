import { Component, Input, inject, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ZUploadFacade } from '../facades/file-upload.facade';
import { Observable, Subscription, Observer } from 'rxjs';
import { CreateFileUploadDto, FileUpload, ZUpload } from '../z';
import { ZI_Response } from 'src/app/core/entities';

@Component({
	selector: 'z-file-upload',
	templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
	public isFiles: boolean = false;
	files: any[] = [];

	// webcam START

	public isWebCam: boolean = false;
	WIDTH = 640;
	HEIGHT = 480;

	@ViewChild('video')
	public video!: ElementRef;

	@ViewChild('canvas')
	public canvas!: ElementRef;
	captures: string[] = [];
	error: any;
	isCaptured: boolean | undefined;
	base64TrimmedURL!: string;
	base64DefaultURL!: string;
	generatedImage!: string;
	windowOPen!: boolean;
	selectedFiles?: any;
	currentFileUpload?: FileUpload;
	percentage = 0;
	// webcam END

	public readonly create$: Observable<{
		createFileUploadDto: FormData;
		exception: undefined;
		isLoading: boolean;
		response: ZI_Response<ZUpload>;
	}>;

	private subscriptors: Subscription[] = [];

	private readonly matDialogRef = inject(MatDialogRef<FileUploadComponent>);
	private readonly zUploadFacade = inject(ZUploadFacade);

	constructor(@Inject(MAT_DIALOG_DATA) public readonly createFileUploadDto: CreateFileUploadDto) {
		this.create$ = this.zUploadFacade.create$;
	}

	/**
	 * on file drop handler
	 */
	onFileDropped($event: any) {
		this.isFiles = true;
		this.prepareFilesList($event);
	}

	/**
	 * handle file from browsing
	 */
	fileBrowseHandler($event: any) {
		this.isFiles = true;
		this.prepareFilesList($event.target.files);
	}

	/**
	 * Delete file from files list
	 * @param index (File index)
	 */
	deleteFile(index: number) {
		this.files.splice(index, 1);
	}

	/* Simulate the upload process	 */
	uploadFilesSimulator(index: number) {
		setTimeout(() => {
			if (index === this.files.length) {
				return;
			} else {
				const progressInterval = setInterval(() => {
					if (this.files[index].progress === 100) {
						clearInterval(progressInterval);
						this.uploadFilesSimulator(index + 1);
					} else {
						this.files[index].progress += 5;
					}
				}, 200);
			}
		}, 1000);
	}

	/**
	 * Convert Files list to normal array list
	 * @param files (Files List)
	 */
	prepareFilesList(files: Array<any>) {
		// this.onUpload.emit(this.files);

		for (const item of files) {
			item.progress = 0;
			this.files.push(item);
			console.log('image', files);
		}

		this.uploadFilesSimulator(0);

		this.uploadFilesServer();
	}

	uploadFilesServer() {
		const uploadFiles = new FormData();
		this.files.forEach((file: any) => {
			uploadFiles.append('files', file);
		});
		uploadFiles.append('directory', this.createFileUploadDto.directory);
		uploadFiles.append('maxSize', this.createFileUploadDto.maxSize);
		uploadFiles.append('acceptedExtensions', this.createFileUploadDto.acceptedExtensions);

		this.zUploadFacade.create(uploadFiles);

		this.subscriptors.push(
			this.create$.subscribe({
				next: (z: { isLoading: boolean; response: ZI_Response<ZUpload> }) => {
					if (!z.isLoading) {
						this.matDialogRef.close(z.response);
					}
				}
			})
		);
	}

	/**
	 * format bytes
	 * @param bytes (File size in bytes)
	 * @param decimals (Decimals point)
	 */
	formatBytes(bytes: any, decimals: any) {
		if (bytes === 0) {
			return '0 Bytes';
		}
		const k = 1024;
		const dm = decimals <= 0 ? 0 : decimals || 2;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}

	// WEBCAM START
	async ngAfterViewInit() {
		await this.setupDevices();
	}

	async setupDevices() {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true
				});
				if (stream) {
					this.video.nativeElement.srcObject = stream;
					this.video.nativeElement.play();
					this.error = null;
				} else {
					this.error = 'You have no output video device';
				}
			} catch (e) {
				console.log('webcam', e);

				this.error = e;
			}
		}
		console.log('webcam', this.error);
	}

	drawImageToCanvas(image: any) {
		this.canvas.nativeElement.getContext('2d').drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
	}

	getImage(imageUrl: string) {
		this.windowOPen = true;
		this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
			this.base64TrimmedURL = base64Data;
			return this.createBlobImageFileAndShow();
		});
	}

	getBase64ImageFromURL(url: string): Observable<string> {
		return Observable.create((observer: Observer<string>) => {
			// create an image object
			let img = new Image();
			img.crossOrigin = 'Anonymous';
			img.src = url;
			if (!img.complete) {
				// This will call another method that will create image from url
				img.onload = () => {
					observer.next(this.getBase64Image(img));
					observer.complete();
				};
				img.onerror = (err) => {
					observer.error(err);
				};
			} else {
				observer.next(this.getBase64Image(img));
				observer.complete();
			}
		});
	}
	/* Method to create base64Data Url from fetched image */
	getBase64Image(img: HTMLImageElement): string {
		// We create a HTML canvas object that will create a 2d image
		var canvas: HTMLCanvasElement = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;
		let ctx: any = canvas.getContext('2d');
		// This will draw image
		ctx.drawImage(img, 0, 0);
		// Convert the drawn image to Data URL
		let dataURL: string = canvas.toDataURL('image/png');
		this.base64DefaultURL = dataURL;
		return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
	}

	async createBlobImageFileAndShow() {
		this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob: Blob) => {
			const imageBlob: Blob = blob;
			const imageName: string = this.generateName();
			const imageFile: File = new File([imageBlob], imageName, {
				type: 'image/jpeg'
			});

			this.selectedFiles = imageFile;
			this.files.push(imageFile);

			this.generatedImage = window.URL.createObjectURL(imageFile);
			// on demo image not open window

			return this.generatedImage;
		});
	}

	/**Method to Generate a Name for the Image */
	generateName(): string {
		const date: number = new Date().valueOf();
		let text: string = '';
		const possibleText: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
		}
		// Replace extension according to your media type like this
		return date + '.' + text + '.jpeg';
	}

	/* Method to convert Base64Data Url as Image Blob */
	dataURItoBlob(dataURI: string): Observable<Blob> {
		return Observable.create((observer: Observer<Blob>) => {
			const byteString: string = window.atob(dataURI);
			const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
			const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
			for (let i = 0; i < byteString.length; i++) {
				int8Array[i] = byteString.charCodeAt(i);
			}
			const blob = new Blob([int8Array], { type: 'image/jpeg' });
			observer.next(blob);
			observer.complete();
		});
	}

	enabledWebCam(state: boolean) {
		this.isWebCam = state;

		if (!state) {
			this.files = [];
		}
	}

	removeCurrent() {
		this.isCaptured = false;
	}

	async capture() {
		this.drawImageToCanvas(this.video.nativeElement);
		let ImageBase = this.canvas.nativeElement.toDataURL('image/png');
		this.captures.push(ImageBase);

		this.getImage(ImageBase);

		// this.selectedFiles = this.canvas.nativeElement.toDataURL("image/png");

		this.isCaptured = true;
		this.isWebCam = true;
	}

	confirmSendPhoto() {
		this.isFiles = true;
		this.uploadFilesServer();
	}
}
