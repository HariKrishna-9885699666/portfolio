import { useState } from 'react';

const DEFAULT_RESUME_URL = '/resume/HariKrishna_Resume.pdf';

export const useResumeModal = (resumeUrl?: string | null) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    const openResumeModal = () => setIsResumeModalOpen(true);
    const closeResumeModal = () => setIsResumeModalOpen(false);

    return {
        isResumeModalOpen,
        openResumeModal,
        closeResumeModal,
        resumeUrl: resumeUrl || DEFAULT_RESUME_URL,
    };
};