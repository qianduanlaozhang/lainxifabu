const controller = new AbortController();
const signal = controller.signal;
const url = 'mp3';
const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', () => {
  controller.abort();
  console.log(signal)
  console.log('Download aborted');
});

function fetchVideo() {
  fetch(url, { signal })
    .then((response) => {
      console.log('Download complete', response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}

var comment = new Comment("Test");
console.log(comment)

const myDOMRect = new DOMRect(0,0,100,100);
console.log(myDOMRect)