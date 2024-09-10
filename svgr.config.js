//eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const outDir = './src/assets/icons'; // путь, до папки, где будут храниться преобразованные иконки

// Шаблон компонента с иконкой
const iconTemplate = (variables, {tpl, options}) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

// Шаблон файла index.js, который будет экспортировать все сгенерированные компоненты иконок
function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map(file => {
    const componentName = path.basename(file.path, path.extname(file.path));
    compoundExportEntries.push(componentName);

    return `import { default as ${componentName} } from './${componentName}';`;
  });

  return `${importEntries.join('\n')}

    export const Icons = {
      ${compoundExportEntries.join(',\n  ')}
    };
  `;
}

// Базовая настройка конфига
module.exports = {
  outDir,
  icon: true,
  typescript: true,
  replaceAttrValues: {
    "/^#([0-9A-F]{3,4}|[0-9A-F]{6,8})$/gi": "currentColor"
  },
  indexTemplate,
  template: iconTemplate,
  svgoConfig: {
    plugins: [
      'removeXMLNS',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      }
    ]
  }
};
