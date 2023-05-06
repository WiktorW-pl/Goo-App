const boldBtn = document.querySelector<HTMLButtonElement>('#bold-btn')!;
const italicBtn = document.querySelector<HTMLButtonElement>('#italic-btn')!;
const underlineBtn = document.querySelector<HTMLButtonElement>('#underline-btn')!;
const colorBtn = document.querySelector<HTMLInputElement>('#color-btn')!;

const btnDownload = document.querySelector<HTMLButtonElement>('.btn-download')!;
const btnSubmit = document.querySelector<HTMLButtonElement>('.btn-pdf-submit')!;
const newBtn = document.querySelector<HTMLButtonElement>('#new-btn')!;
const pdfBtn = document.querySelector<HTMLButtonElement>('#pdf-btn')!;
const txtBtn = document.querySelector<HTMLButtonElement>('#txt-btn')!;

const input = document.querySelector<HTMLInputElement>('.text-tools__file-name-input')!;

const content = document.querySelector<HTMLElement>('#content')!;

boldBtn.addEventListener('click', () => {
  document.execCommand('bold');
});
italicBtn.addEventListener('click', () => {
  document.execCommand('italic');
});
underlineBtn.addEventListener('click', () => {
  document.execCommand('underline');
});
colorBtn.addEventListener('input', () => {
  document.execCommand('forecolor', false, colorBtn.value);
});

btnSubmit.addEventListener('click', () => {
  if (btnDownload.value === 'new') content.innerHTML = '';
  if (btnDownload.value === 'txt') {
    console.log('pobieram');
    const a = document.createElement('a');
    const blob = new Blob([content.innerText]);
    const dataUrl = URL.createObjectURL(blob);
    a.href = dataUrl;
    a.download = input.value + '.txt';
    a.click();
  }
  if (btnDownload.value === 'pdf') {
    html2pdf().from(content).save(input.value);
  }
});
