import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    files: ['src/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true })],
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        threshold: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
};
