import { cn } from '@/lib/utils'
import * as React from 'react'

interface ImagePropsType extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    height: number;
    width: number;
    alt: string;
}

const Image: React.FC<ImagePropsType> = ({ className='', src, alt, height, width, loading = 'lazy', ...props }) => {
    return (
        <img
            src={src}
            className={cn(className)}
            alt={alt ? alt : 'image'}
            loading={loading}
            height={height} width={width}
            {...props}
        />
    )
}

export default Image