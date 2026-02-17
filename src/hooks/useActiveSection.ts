import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], offset: number = 100) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;
            let found = false;
            for (const section of sectionIds) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        found = true;
                        break;
                    }
                }
            }
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                setActiveSection(sectionIds[sectionIds.length - 1]);
            } else if (!found) {
                setActiveSection(sectionIds[0]);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
}