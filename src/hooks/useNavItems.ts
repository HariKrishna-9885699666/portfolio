export interface NavItem {
    label: string;
    href: string;
    id: string;
}

export function useNavItems(): NavItem[] {
    return [
        { label: 'Home', href: '#home', id: 'home' },
        { label: 'About', href: '#about', id: 'about' },
        { label: 'Experience', href: '#experience', id: 'experience' },
        { label: 'Expertise', href: '#expertise', id: 'expertise' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ];
}