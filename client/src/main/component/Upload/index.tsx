import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import PageContainer from '../common/PageContainer';
import { uploadFile } from '../../redux/feature/upload/uploadSlice';
import SVG from '../../resource/image/svg';

const FileInput = styled.input`
  outline: 2px dashed #ADD8E6;
  margin: 20px 0;
  padding: 85px 0 85px 40%;
  text-align: center;
  width: 100%;
`;

const Caption = styled.p`
  margin-bottom: 40px;
`;

const SupportedBanks = styled.div`

`;

const BankLogo = styled(ReactSVG)`
  svg {
    width: 200px;
  }
  margin-top: 5px;
`;

const checkMimeType = (file: File) => {
  const allowedType = 'text/csv';

  return file.type === allowedType;
}

const Upload: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = event.target.files;

    if (fileList && fileList.length) {
      const file = fileList[0];
      if (checkMimeType(file)) {
        setSelectedFile(fileList[0]);
      }
    }
  }

  const handleUploadFile = () => {
    if (selectedFile) {
      dispatch(uploadFile(selectedFile));
    }
  }

  return (
    <PageContainer>
      <Caption>Pick up your Bank Statement CSV-file.</Caption>

      <SupportedBanks>Currently supported banks:
        <BankLogo src={SVG.monobank} />
      </SupportedBanks>

      <div>
        <FileInput
          type="file"
          onChange={handleSelectFile}
        />
      </div>

      <button
        type="button"
        onClick={handleUploadFile}
      >
        Upload
      </button>
    </PageContainer>
  );
};

export default Upload;
