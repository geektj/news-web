// import theme from "../../../assets/styles/theme";

export interface CardProps {
    width?: string;
    height?: string;
    boxShadow?: string;
    bgColor?: 'white' | 'grey' ;
    border?: string;
    borderRadius?: string;
    children: React.ReactNode;
}