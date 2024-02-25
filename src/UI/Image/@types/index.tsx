export interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none';
}