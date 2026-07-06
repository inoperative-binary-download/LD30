const downloadButton = document.getElementById('download-target');

downloadButton.addEventListener('click', function(event) {
    event.preventDefault();

    const downloadLink = document.createElement('a');

    downloadLink.href = 'inoperativebinary-0.1.0.jar';

    downloadLink.download = 'inoperativebinary-0.1.0.jar';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
});