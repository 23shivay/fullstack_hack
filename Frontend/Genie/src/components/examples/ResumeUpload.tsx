import ResumeUpload from '../ResumeUpload';

export default function ResumeUploadExample() {
  return (
    <div className="max-w-2xl">
      <ResumeUpload
        onUpload={(file) => console.log('File uploaded:', file.name)}
      />
    </div>
  );
}
