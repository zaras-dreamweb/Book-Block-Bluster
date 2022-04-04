import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs bg-gradient-to-r from-blue-500 to-gray-400  mt-20 pt-20 pb-20 h-full'>
            <h1 className='text-4xl text-blue-900'>What is context API?</h1>
            <p className='text-white font-serif text-xl'>Context API is a state in react. Through this state, one can share and transfer data or information more easily from one component to another, across the entire app. It is an alternative of ‘pop drilling’. Mainly context API is used when we want to pass same data to more than one place. We can create and use context API in react applications directly importing it from react.</p>
            <h1 className='text-4xl text-blue-900 pt-10'>What is Semantic tag?</h1>
            <p className='text-white font-serif text-xl'>Semantic tags are basically HTML tags. They are also the core of Html page. They clearly express their meaning and its purpose to both the developer and the browser. The tags themselves help to understand how they will look on a page on use. details,footer,header, are some examples of semantic tags.</p>
            <h1 className='text-4xl text-blue-900 pt-10'>What is the difference between inline, block and inline block?</h1>
            <p className='text-white font-serif text-xl'>Inline: If we display an elements as inline it will not have any height property, but will have width property. Also an inline element always starts in the same line with others, as it displays in a line.
                Block: Block elements always starts in a new line, and takes the full available width of the horizontal space.
                Inline-block: Displaying an element as inline-block, allows the element to have both height and width property.
            </p>


        </div>
    );
};

export default Blogs;