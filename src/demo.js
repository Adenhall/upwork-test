import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { openPDF } from "./openPDF";
import { base64string } from "./pdf.js";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Demo() {
  const [showPDF, setShowPDF] = useState(false);
  const uint8View = new Uint8Array(_base64ToArrayBuffer(base64string));
  const onOpenPDF = () => {
    setShowPDF(!showPDF);
  };

  const myDoc = (
    <Document
      renderMode="svg"
      file={{
        data: uint8View,
      }}
      onLoadSuccess={async (pdf) => {
        console.log(pdf);
      }}
      onPassword={(updatePass) => {
        const password = "123456";
        updatePass(password);
      }}
    >
      <Page pageNumber={1} />
    </Document>
  );

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => onOpenPDF()}>
        Open PDF
      </Button>
      {showPDF ? myDoc : null}
    </>
  );
}

function _base64ToArrayBuffer(base64) {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
