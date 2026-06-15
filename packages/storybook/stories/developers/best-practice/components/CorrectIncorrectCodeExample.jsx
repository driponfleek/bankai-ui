import { CodeBlock } from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {string} [props.correctLabel] - Label prepended as a comment above the correct code example
 * @param {string} [props.correctExample] - Code string for the correct example
 * @param {string} [props.incorrectLabel] - Label prepended as a comment above the incorrect code example
 * @param {string} [props.incorrectExample] - Code string for the incorrect example
 */
const CorrectIncorrectCodeExample = (props) => {
    const {
        correctLabel = 'Correct',
        correctExample,
        incorrectLabel = 'Incorrect',
        incorrectExample,
    } = props;
    const codeStr = `// ${correctLabel}\n${correctExample}\n\n// ${incorrectLabel}\n${incorrectExample}`;

    return <CodeBlock codeString={codeStr} />;
};

export default CorrectIncorrectCodeExample;
