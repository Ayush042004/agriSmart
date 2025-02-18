import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [diseaseName, setDiseaseName] = useState(null);  // Store disease name
    const [diseaseInfo, setDiseaseInfo] = useState(null);  // Store disease info
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please upload a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setError(null); // Reset error state before submitting

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setPrediction(response.data.disease);
            setDiseaseName(response.data.disease);  // Set disease name after prediction
        } catch (err) {
            console.error('Error:', err);
            setError(err.response ? err.response.data.error : err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchDiseaseInfo = async () => {
        try {
            const response = await fetch('http://localhost:5001/get_disease_info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ disease_name: diseaseName })
            });

            const data = await response.json();
            if (response.ok) {
                setDiseaseInfo(data);
                setError('');
            } else {
                setDiseaseInfo(null);
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to fetch disease information');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Upload Image for Crop Disease Prediction
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="border border-gray-300 p-2 rounded-md text-sm"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                {prediction && (
                    <div className="mt-4 text-center">
                        <p className="text-green-700 font-semibold">
                            Predicted Disease: {prediction}
                        </p>
                        <button
                            onClick={fetchDiseaseInfo}
                            className="mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            More Information
                        </button>
                    </div>
                )}

                {diseaseInfo && (
                    <div className="mt-4 text-left bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-bold">Disease Information:</h3>
                        <pre>{JSON.stringify(diseaseInfo, null, 2)}</pre>
                    </div>
                )}

                {error && (
                    <p className="mt-4 text-red-600 text-center">
                        Error: {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUpload;