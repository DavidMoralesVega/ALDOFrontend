export function isFileExtensionValid(file: File, acceptedExtensions: string): boolean {
	const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
	const acceptedExtensionsArray = acceptedExtensions
		.split(',')
		.map((ext) => ext.trim().toLowerCase());
	// console.log('acceptedExtensionsArray', acceptedExtensionsArray);

	// console.log('calidate extension', acceptedExtensionsArray.includes(fileExtension));

	return acceptedExtensionsArray.includes(fileExtension);
}

export function isFileSizeValid(file: File, maxSize: number): boolean {
	const fileSizeInMB = file.size / (1024 * 1024);
	return fileSizeInMB <= maxSize;
}
