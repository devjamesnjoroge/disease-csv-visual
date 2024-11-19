import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/dashboard/Loader';

function UploadCSV() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
        setError('Please select a file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        setLoading(true);
        setError('');

        const response = await fetch('https://sd.devjaymmy.me:8383/disease-api/analyze', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Error uploading file. Please try again.');
        }

        const responseText = await response.text();
        console.log('Raw Response Text:', responseText.slice(0, 200)); // Log first 200 chars

        const cleanedResponseText = responseText.trim(); // Clean the response

        // Log the cleaned response
        console.log('Cleaned Response Text:', cleanedResponseText);
        console.log(JSON.parse(responseText))

        try {
            const responseData = JSON.parse(cleanedResponseText);
            console.log('Parsed Response:', responseData);
            sessionStorage.setItem('uploadData', JSON.stringify(responseData));
            navigate('/dashboard/overview');
        } catch (err) {
            console.error('Failed to parse response as JSON:', err);
            setError('Server response is not valid JSON.');
            setLoading(false);
            return;
        }

        setLoading(false);
    } catch (err) {
        console.error("Upload error:", err);
        setError(err.message || 'Error uploading file. Please try again.');
        setLoading(false);
    }
};


  return (
    <div className="bg-accent p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-primary mb-4">Upload CSV File</h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <input type="file" onChange={handleFileChange} className="mb-4 text-text" />
          <button onClick={handleUpload} className="bg-primary text-secondary px-4 py-2 rounded-lg">
            Upload
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default UploadCSV;
