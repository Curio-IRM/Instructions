import React, { useState } from 'react';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';

function Upload() {
  const [isOpen, setIsOpen] = useState(false);

  const fields = [
    {
      label: "Name",
      key: "name",
      alternateMatches: ["first name", "first"],
      fieldType: { type: "input" },
      example: "Stephanie",
      validations: [
        {
          rule: "required",
          errorMessage: "Name is required",
          level: "error",
        },
      ],
    },
  ];

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (data, file) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Importer</button>
      {isOpen && (
        <ReactSpreadsheetImport
          isOpen={isOpen}
          onClose={handleClose}
          onSubmit={handleSubmit}
          fields={fields}
        />
      )}
    </div>
  );
}

export default Upload;
