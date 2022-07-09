const url = 'https://api.cloudinary.com/v1_1/samtaylek/auto/upload';
const form = document.querySelector('#fileUpload');
// console.log(form);

form.onchange = async (e) => {
	const files = e.target.files;
	console.log(files);

	const formData = new FormData();

	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		formData.append('file', file);
		formData.append('upload_preset', 'cxqd6xsg');

		const response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
		document.getElementById('fileUrl').setAttribute('value', response.data.url);
	}
};

// form.addEventListener('onchange', async (e) => {
// 	// e.preventDefault();
// 	console.log('I am working');

// 	console.log(e.target.files);

// 	const files = document.querySelector('[type=file]').files;
// 	const formData = new FormData();

// 	// for (let i = 0; i < files.length; i++) {
// 	// 	let file = files[i];
// 	// 	formData.append('file', file);
// 	// 	formData.append('upload_preset', 'cxqd6xsg');

// 	// 	const response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

// 	// 	console.log(response.data.url);

// 	// 	document.getElementById('viewSubmission').setAttribute('href', response.data.url);
// 	// }
// });
