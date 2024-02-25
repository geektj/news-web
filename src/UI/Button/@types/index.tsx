export interface ButtonProps{
    width?: string;
    height?: string;
    bgColor?: 'red' | 'white' | 'primary' ;
    borderRadius?: string;
    border?: string;
    // borderColor: 'red' | 'primary' | 'transparent'; 
    onClick?: () => void;
    children: React.ReactNode;
}