export interface TextProps {
    size?:
      | "size13"
      | "size14"
      | "size15"
      | "size16"
      | "size18"
      | "size20"
      | "size28"
      | "size32"
      | "size42";
    weight?: "regular" | "medium" | "semiBold" | "bold";
    color?: string;
    family?: "heading" | "primary" | "secondary";
    children: React.ReactNode;
    marginTop?: string;
    marginBottom?: string; 
  }