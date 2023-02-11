import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'omni',
  description: 'About & Welcome message',
  run: async (toolbox) => {
    const { print } = toolbox

    print.success('Welcome to your CLI')
  },
}

module.exports = command
