import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageTest: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const isRTL = currentLang === 'ar';

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {t('common.digital_maturity')} {t('common.portal')}
                        </h1>
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {currentLang === 'en' ? 'العربية' : 'English'}
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4 text-blue-900">
                                {t('login.title')}
                            </h2>
                            <p className="text-gray-700">
                                {t('login.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-900 mb-2">
                                    {t('dashboard.welcome')}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {t('dashboard.active_assessments')}
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-purple-900 mb-2">
                                    {t('assessment.pillar')}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {t('assessment.instructions')}
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">Current Settings:</h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Language:</strong> {currentLang.toUpperCase()}</li>
                                <li><strong>Direction:</strong> {isRTL ? 'RTL (Right-to-Left)' : 'LTR (Left-to-Right)'}</li>
                                <li><strong>HTML dir attribute:</strong> {document.documentElement.dir}</li>
                                <li><strong>HTML lang attribute:</strong> {document.documentElement.lang}</li>
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                                {t('common.back')}
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                {t('common.continue')}
                            </button>
                            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                {t('common.submit')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageTest;
