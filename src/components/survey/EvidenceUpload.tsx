import React from 'react';
import { Upload, X, FileText } from 'lucide-react';

interface EvidenceUploadProps {
    files: string[];
    onUpload: (files: string[]) => void;
}

const EvidenceUpload: React.FC<EvidenceUploadProps> = ({ files, onUpload }) => {
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        // In a real app, we would process File objects here
        // For mock, we just use random names
        const newFiles = ['Document_v1.pdf', 'Evidence_screenshot.png'];
        onUpload(newFiles);
    };

    const handleClick = () => {
        // Simulator
        const newFiles = ['Policy_Doc_2024.pdf'];
        onUpload(newFiles);
    }

    return (
        <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Evidence</h4>

            <div
                onClick={handleClick}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-al-adaam hover:bg-gray-50 transition-colors"
            >
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                    <span className="font-medium text-al-adaam">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">PDF, PNG, JPG up to 10MB</p>
            </div>

            {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                    {files.map((file, idx) => (
                        <li key={idx} className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md">
                            <div className="flex items-center">
                                <FileText className="w-4 h-4 text-sea mr-2" />
                                <span className="text-sm text-gray-700">{file}</span>
                            </div>
                            <button className="text-gray-400 hover:text-red-500">
                                <X className="w-4 h-4" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EvidenceUpload;
