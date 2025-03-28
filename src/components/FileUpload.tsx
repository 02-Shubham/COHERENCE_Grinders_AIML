
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface FileWithPreview extends File {
  preview?: string;
  id: string;
}

interface FileUploadProps {
  onFilesUploaded: (files: FileWithPreview[]) => void;
  multiple?: boolean;
  maxFiles?: number;
  acceptedFileTypes?: string[];
}

const FileUpload = ({ 
  onFilesUploaded, 
  multiple = false, 
  maxFiles = 5,
  acceptedFileTypes = ['.pdf', '.doc', '.docx', '.txt'] 
}: FileUploadProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!multiple && files.length > 0) {
      // Replace existing file if multiple is false
      setFiles([]);
    }

    if (multiple && files.length + acceptedFiles.length > maxFiles) {
      toast({
        title: "Maximum files exceeded",
        description: `You can only upload up to ${maxFiles} files.`,
        variant: "destructive"
      });
      return;
    }

    const newFiles = acceptedFiles.map(file => 
      Object.assign(file, {
        id: Math.random().toString(36).substring(2),
        preview: URL.createObjectURL(file)
      })
    );

    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, [files, multiple, maxFiles, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept: {
      'application/pdf': acceptedFileTypes.includes('.pdf') ? ['.pdf'] : [],
      'application/msword': acceptedFileTypes.includes('.doc') ? ['.doc'] : [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 
        acceptedFileTypes.includes('.docx') ? ['.docx'] : [],
      'text/plain': acceptedFileTypes.includes('.txt') ? ['.txt'] : []
    }
  });

  const removeFile = (id: string) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast({
        title: "No files to upload",
        description: "Please select at least one file.",
        variant: "destructive"
      });
      return;
    }

    // Simulate file upload with progress
    setIsUploading(true);
    setUploadProgress(0);

    // Fake upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Simulate completion after 3 seconds
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setIsUploading(false);
      onFilesUploaded(files);
      
      toast({
        title: "Upload Complete",
        description: `Successfully uploaded ${files.length} ${files.length === 1 ? 'file' : 'files'}.`,
        variant: "default"
      });
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'dropzone-active' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-4">
          <Upload className="h-12 w-12 text-primary/70" />
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-medium">Drag & Drop your resumes here</h3>
            <p className="text-sm text-muted-foreground">
              {multiple 
                ? `Upload up to ${maxFiles} files (${acceptedFileTypes.join(', ')} formats)`
                : `Upload a resume (${acceptedFileTypes.join(', ')} formats)`}
            </p>
          </div>
          <Button type="button" variant="outline" className="mt-4">
            Select Files
          </Button>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium">Selected Files</h4>
          <div className="space-y-2">
            {files.map((file) => (
              <div 
                key={file.id} 
                className="flex items-center justify-between bg-background border border-border rounded-lg p-3"
              >
                <div className="flex items-center space-x-3">
                  <File className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium truncate max-w-[200px]">
                    {file.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(0)} KB
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full h-7 w-7"
                  onClick={() => removeFile(file.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isUploading && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Uploading...</span>
            <span className="text-sm">{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} />
        </div>
      )}

      <Button 
        onClick={handleUpload} 
        disabled={files.length === 0 || isUploading}
        className="w-full mt-6"
      >
        {isUploading ? (
          <span className="flex items-center">Processing...</span>
        ) : uploadProgress === 100 ? (
          <span className="flex items-center">
            <Check className="mr-2 h-4 w-4" /> Uploaded
          </span>
        ) : (
          <span className="flex items-center">
            <Upload className="mr-2 h-4 w-4" /> Upload & Analyze
          </span>
        )}
      </Button>
    </div>
  );
};

export default FileUpload;
