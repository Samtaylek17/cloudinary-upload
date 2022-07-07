// Add Cloud name to url
const url = 'https://api.cloudinary.com/v1_1/<your-cloud-name>/auto/upload';
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const files = document.querySelector('[type=file]').files;
	const formData = new FormData();

	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		formData.append('file', file);
		// Add your Upload preset here
		formData.append('upload_preset', 'your-upload-preset');

		const response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

		console.log(response.data.url);

		document.getElementById('viewSubmission').setAttribute('href', response.data.url);
	}
});
