import { ElementType, ReactNode } from "react";

// Define the types for the props
interface TabsProps {
    children: ReactNode;  // Type for children, which could be any valid React child (JSX, strings, etc.)
    buttons: ReactNode;   // Type for buttons, assuming it's JSX or a React component, like <TabButton />
    buttonsContainer: ElementType;  // Type for the buttonsContainer, could be a string or React component
}

export default function Tabs({ children, buttons, buttonsContainer = 'menu' }: TabsProps) {

    const ButtonContainer = buttonsContainer;
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}