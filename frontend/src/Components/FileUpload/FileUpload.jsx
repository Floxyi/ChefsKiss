import React from 'react'
import CameraIcon from '@Icons/CameraIcon'
import PlusIcon from '@Icons/PlusIcon'

const FileUpload = ({ onFileChange, previews }) => {
    return (
        <div className="flex flex-row w-full gap-2">
            <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                multiple
                style={{ display: 'none' }}
                id="fileInput"
            />
            <label
                htmlFor="fileInput"
                className="w-[120px] h-[90px] border-[5px] border-dashed rounded-xl border-primary-dark flex justify-center items-center relative mt-2 mr-3 cursor-pointer"
            >
                <div className="self-center text-primary-dark">
                    <CameraIcon />
                </div>
                <div className="absolute top-0 right-0 m-1 text-primary-dark">
                    <PlusIcon />
                </div>
            </label>
            <div className="flex flex-wrap mt-2 gap-4">
                {previews.length > 0 &&
                    previews.map((preview, index) => (
                        <img
                            className="h-[90px] border-4 border-primary-dark rounded-lg"
                            key={index}
                            src={preview}
                            alt={`Preview ${index}`}
                        />
                    ))}
            </div>
        </div>
    )
}

export default FileUpload
