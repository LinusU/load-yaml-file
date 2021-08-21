import fs from 'graceful-fs'
import stripBom from 'strip-bom'
import yaml from 'js-yaml'

function parse (data) {
  return yaml.load(stripBom(data))
}

export async function loadYamlFile (path) {
  return parse(await fs.promises.readFile(path, 'utf8'))
}

export function loadYamlFileSync (path) {
  return parse(fs.readFileSync(path, 'utf8'))
}
