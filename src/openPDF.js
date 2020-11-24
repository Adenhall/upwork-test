export const openPDF = (pdf) => {
  console.log(pdf);
  let pdfWindow = window.open("");
  pdfWindow.document.write(
    "<html><head><title>" +
      "</title><style>body{margin: 0px;}iframe{border-width: 0px;}</style></head>"
  );
  pdfWindow.document.write(
    "<body><embed width='100%' height='100%' src='data:application/pdf;base64, " +
      encodeURI(pdf) +
      "#toolbar=0&navpanes=0&scrollbar=0'></embed></body></html>"
  );
};
