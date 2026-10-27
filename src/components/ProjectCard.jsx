import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({title, description, image, tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-60 object-cover' />
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-200 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {tech.map((item, index) =>(
                    <span key={index} className='px-3 py-1 bg-ddark-200 rounded-full text-sm'>{item}</span>
                ))}
            </div>
            <div className='flex gap-2'>
                <Link className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Demo</Link>
                <Link className='flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300'>Code</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard