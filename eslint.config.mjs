import lint from './src/index.mjs';

export default [...lint.configs.base, ...lint.configs.strict];
