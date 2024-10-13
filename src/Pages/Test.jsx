import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Form component
const MultiStepForm = () => {
    const [step, setStep] = useState(1); // Tracks the current step
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        checked: true,

    });

    // Handle form data change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [e.target.name]: type === 'checkbox' ? checked : value, });
    };

    // Move to the next step
    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    // Move to the previous step
    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    // Submit form (last step)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Submit form logic here (e.g., API call)
    };

    return (
        <div>
            <nav className='flex items-center justify-center m-2'>
                <a href="/" className='text-3xl font-semibold'>instate</a>
            </nav>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <section className="flex justify-center">
                            <div className="w-full md:w-1/2 p-4 flex flex-col idea_ip">
                                {/* Title Input */}
                                <div className="mb-4">
                                    <label htmlFor="ip_Title" className="block text-gray-700 font-medium mb-2">Title</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        type="text" id="ip_Title" name="title"
                                        onChange={handleChange} value={formData.title} placeholder="Enter your idea's title"
                                    />
                                </div>

                                {/* Description Input */}
                                <div className="mb-4">
                                    <label htmlFor="ip_Desc" className="block text-gray-700 font-medium mb-2">Description</label>
                                    <textarea
                                        className="w-full p-2 border rounded"
                                        id="ip_Desc" name="description" rows="5"
                                        onChange={handleChange} value={formData.description}
                                        placeholder="Describe your idea in detail"
                                    />
                                </div>

                                {/* Public/Private Toggle */}
                                <div className="flex items-center mb-4">
                                    <Switch id="toggle" checked={formData.checked} size="small" name="checked" onChange={handleChange} />
                                    <span className="ml-2 text-gray-700">{formData.checked ? "Public" : "Private"}</span>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <section className="flex flex-col items-center">
                            <div className="w-full md:w-1/2 p-4 flex flex-col">
                                <label htmlFor="rel_links" className="block text-gray-700 font-medium mb-2">Related Links</label>
                                <div className='flex mb-2 '>
                                    <input
                                        className="w-full p-2 border outline-none rounded"
                                        type="text"
                                        onChange={handleChange} value={formData.title} placeholder="https://"
                                    />
                                    <FormControl sx={{ minWidth: 180, outline: 0, border: 0 }} size="small">
                                        <Select sx={{ outline: 0, border: 0 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            value={10}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'Without label' }}

                                        >
                                            <MenuItem value={10}>GitHub</MenuItem>
                                            <MenuItem value={20}>Youtube</MenuItem>
                                            <MenuItem value={30}>Blog/Hashnode</MenuItem>
                                        </Select>
                                    </FormControl>
                                    
                                </div>
                                <div className='flex '>
                                    <input
                                        className="w-full p-2 border rounded outline-none"
                                        type="text"
                                        onChange={handleChange} value={formData.title} placeholder="https://"
                                    />
                                    <FormControl sx={{ minWidth: 180 }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            onChange={handleChange}
                                            value={30}
                                        >
                                            <MenuItem value={10}>GitHub</MenuItem>
                                            <MenuItem value={20}>Youtube</MenuItem>
                                            <MenuItem value={30}>Blog/Hashnode</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4 flex flex-col">
                            <h1 className='block text-gray-700 font-medium mb-2'>What do you expect from instate community?</h1>
                            </div>
                        </section>
                        
                    </div>
                )}

                {step === 3 && (
                    <div>

                    </div>
                )}

                {step === 4 && (
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div>
                    {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 4 && <button type="button" onClick={nextStep}>Next</button>}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
