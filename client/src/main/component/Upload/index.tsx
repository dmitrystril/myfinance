import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import Button from 'antd/es/button';
import { Upload as FileInput, Icon, message } from 'antd';

import PageContainer from '../common/PageContainer';
import SVG from '../../resource/image/svg';
import { uploadFile, clearUpdate } from '../../redux/feature/upload/uploadSlice';
import { AppState } from '../../redux/rootReducer';

const FileInputWrapper = styled.div`
  height: 300px;
  margin: 10px 0 15px 0;
`;

const Caption = styled.p`
  margin-bottom: 40px;
`;

const SupportedBanks = styled.div``;

const BankLogo = styled(ReactSVG)`
  margin-top: 5px;
  svg {
    width: 200px;
  }
`;

const isCorrectMimeType = (file: File) => {
  const allowedTypes = ['text/csv', 'application/vnd.ms-excel'];

  return allowedTypes.includes(file.type);
};

const Upload: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [isLoading, isUploaded] = useSelector(({upload}: AppState) => (
    [upload.isLoading, upload.isUploaded]
  ));

  useEffect(() => {
    if (isUploaded) {
      message.success('Statement uploaded successfully');
      setSelectedFile(null);
      dispatch(clearUpdate());
    }
  }, [dispatch, isUploaded]);

  const handleUploadFile = () => {
    if (selectedFile) {
      dispatch(uploadFile(selectedFile));
    }
  }

  const customRequest = ({ file }: { file: File}) => {
    if (!isCorrectMimeType(file)) {
      message.error('Invalid file type');
      return;
    }
    setSelectedFile(file);
  }

  return (
    <PageContainer header="Upload">
      <Caption>Pick up your Bank Statement CSV-file.</Caption>

      <SupportedBanks>Currently supported banks:
        <BankLogo src={SVG.monobank} />
      </SupportedBanks>

      <FileInputWrapper>
        <FileInput.Dragger
          name="file"
          accept=".csv, text/csv"
          customRequest={(options) => customRequest(options)}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            {selectedFile ? selectedFile.name : 'Click or drag file to this area to upload'}
          </p>
        </FileInput.Dragger>
      </FileInputWrapper>

      <Button
        type="primary"
        onClick={handleUploadFile}
        loading={isLoading}
        disabled={selectedFile === null || isUploaded}
      >
        {isLoading ? 'Uploading' : 'Upload statement'}
      </Button>
    </PageContainer>
  );
};

export default Upload;
