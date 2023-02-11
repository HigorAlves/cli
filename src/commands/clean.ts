import { GluegunCommand } from 'gluegun'
import { getFolderPaths } from '../utils/getFolderPathsRecursive'
import { rmSync } from 'fs'

const command: GluegunCommand = {
  name: 'clean',
  description: 'Delete all folders with a given name',
  run: async (toolbox) => {
    const {
      filesystem,
      parameters,
      print: { error, success, info, warning },
    } = toolbox
    const rootPath = filesystem.path()
    const folderName = parameters.first

    if (!folderName) {
      error('Folder name must be specified')
      return
    }

    info(`Starting the process of deletion for all ${folderName}`)
    const folders = getFolderPaths(rootPath, folderName)

    if (folders.length <= 0) {
      warning(`There is no folder named ${folderName}`)
      return
    }

    folders.map((paths) => rmSync(paths, { recursive: true }))
    success(`${folderName} was deleted in every place!`)
  },
}

module.exports = command
