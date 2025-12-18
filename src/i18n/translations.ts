export type Translations = {
    [key: string]: {
        en: string;
        ar: string;
    };
};

export const translations: Translations = {
    // Sidebar
    'sidebar.title': { en: 'DT Assessment', ar: 'تقييم التحول الرقمي' },
    'nav.overview': { en: 'Overview', ar: 'نظرة عامة' },
    'nav.cycles': { en: 'Assessment Cycles', ar: 'دورات التقييم' },
    'nav.users': { en: 'User Management', ar: 'إدارة المستخدمين' },
    'nav.reports': { en: 'Reports', ar: 'التقارير' },
    'nav.dashboard': { en: 'My Dashboard', ar: 'لوحة قيادتي' },
    'nav.assessment': { en: 'My Assessment', ar: 'تقييمي' },
    'nav.assessor_dashboard': { en: 'Assessor Dashboard', ar: 'لوحة المقيم' },
    'nav.reviews': { en: 'Pending Reviews', ar: 'مراجعات معلقة' },
    'nav.executive_dashboard': { en: 'Executive Dashboard', ar: 'اللوحة التنفيذية' },
    'nav.national_reports': { en: 'National Reports', ar: 'التقارير الوطنية' },
    'nav.jury_portal': { en: 'Jury Portal', ar: 'بوابة التحكيم' },
    'nav.nominations': { en: 'Awards Voting', ar: 'تصويت الجوائز' },
    'nav.version': { en: 'v1.0.0 Sprint 6', ar: 'إصدار 1.0.0' },

    // General
    'app.logout': { en: 'Logout', ar: 'تسجيل خروج' },
    'app.role': { en: 'Role', ar: 'الدور' },
};
