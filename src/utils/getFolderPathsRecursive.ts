import { readdirSync } from 'fs'
import * as path from 'path'

export function getFolderPaths(rootPath: string, folderName: string) {
  let files = []
  readdirSync(rootPath, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const folderPath = path.join(rootPath, dirent.name)
      files = [...files, ...getFolderPaths(folderPath, folderName)]

      if (dirent.name === folderName) {
        files.push(folderPath)
      }
    })

  return files
}
