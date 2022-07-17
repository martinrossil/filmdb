import { esbuildPlugin } from '@web/dev-server-esbuild';
import { defaultReporter, summaryReporter } from '@web/test-runner';

export default {
    files: ['src/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true })],
    reporters: [
        summaryReporter(),
        defaultReporter({
            reportTestResults: true,
            reportTestProgress: true
        })
    ],
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
