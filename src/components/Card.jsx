import React from 'react'
import Button from '@mui/material/Button';

function Card({title, description, url}) {
  return (
    <div className="text-black bg-white cursor-pointer rounded-lg">
        <div className="flex flex-col">
            <div className="text-lg text-center bg-black text-white" >{title}</div>
            <div className="m-4">{description}</div>
            <div><a className={"flex justify-center px-3 py-3"} href={url} target="_blank" rel="noreferrer">
                <Button variant="contained" type="button" color="success"> View Code</Button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card