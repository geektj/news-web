export interface TabProps{
    label?: string;
    isActive?: boolean;
    onClick: () => void;
}

export interface TabListProps {
    activeTab: number;
    onTabClick: (index: number) => void;
    tabs: { label: string; key: string }[];
}

export interface TabsContainerProps{
    children: React.ReactNode;
}