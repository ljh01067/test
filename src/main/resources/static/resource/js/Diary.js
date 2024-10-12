/*등록한파일 미리보기*/
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const fileBtn = document.getElementById('fileBtn');

// Show image preview when a file is selected
fileInput.addEventListener('change', (event) => {
    handleFile(event.target.files);
});

// Simulate clicking the file input when the upload button is clicked
fileBtn.addEventListener('click', () => {
    fileInput.click();
});

// Handle drag-and-drop for the preview area
imagePreview.addEventListener('dragover', (event) => {
    event.preventDefault();
    imagePreview.classList.add('bg-gray-200');
});

imagePreview.addEventListener('dragleave', () => {
    imagePreview.classList.remove('bg-gray-200');
});

imagePreview.addEventListener('drop', (event) => {
    event.preventDefault();
    imagePreview.classList.remove('bg-gray-200');
    const files = event.dataTransfer.files;
    handleFile(files);
});

function handleFile(files) {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" class="w-full h-full object-cover">`;
        };

        reader.readAsDataURL(file);
    }
}
