import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// icons:
import { ReactComponent as CameraIcon } from '../../../assets/icons/camera.svg'

interface AvatarProps {
  isSquare: boolean
}

const Wrapper = styled.div<AvatarProps>`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #bfbfbf;

  input {
    display: none;
  }
  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  }
`
const Photo: React.FC<AvatarProps> = ({ isSquare }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [selectedFile])

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSelectedFile(event.target.files[0])
  //   }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const selectedFiles = files as FileList
    setSelectedFile(selectedFiles?.[0])
  }
  return (
    <Wrapper isSquare={isSquare}>
      <input id="Avatar" type="file" value="" onChange={handleChange} />

      <label htmlFor="Avatar">
        {preview ? (
          <div
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: 'cover',
            }}
          />
        ) : (
          <CameraIcon />
        )}
      </label>
    </Wrapper>
  )
}

export default Photo
