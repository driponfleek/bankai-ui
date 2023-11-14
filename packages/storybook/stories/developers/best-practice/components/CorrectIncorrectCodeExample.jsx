import PropTypes from 'prop-types';
import { CodeBlock } from '@driponfleek/bankai-lib-storybook';

const CorrectIncorrectCodeExample = (props) => {
    const { correctLabel, correctExample, incorrectLabel, incorrectExample } =
        props;
    const codeStr = `// ${correctLabel}\n${correctExample}\n\n// ${incorrectLabel}\n${incorrectExample}`;

    return <CodeBlock codeString={codeStr} />;
};

CorrectIncorrectCodeExample.defaultProps = {
    correctLabel: 'Correct',
    incorrectLabel: 'Incorrect',
};

CorrectIncorrectCodeExample.propTypes = {
    correctLabel: PropTypes.string,
    correctExample: PropTypes.string,
    incorrectExample: PropTypes.string,
    incorrectLabel: PropTypes.string,
};

export default CorrectIncorrectCodeExample;
