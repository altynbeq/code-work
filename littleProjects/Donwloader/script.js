const urlInput = document.querySelector('input'),
    dwnldBttn = document.querySelector('button');

dwnldBttn.addEventListener('click', e => {
    e.preventDefault();
    dwnldBttn.innerText = "Downloading.."
    fetchFile(urlInput.value)
});

function fetchFile(url) {
    fetch(url).then(res => res.blob().then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = 'filename'
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        dwnldBttn.innerText = 'Download File'
    }))
}