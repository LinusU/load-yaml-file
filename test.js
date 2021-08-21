/* eslint-env mocha */

import assert from 'assert'
import { loadYamlFile, loadYamlFileSync } from './index.js'

describe('load-yaml-file', () => {
  it('loadYamlFile', async () => {
    const data = await loadYamlFile('foo.yml')
    assert.deepStrictEqual(data, { foo: true })
  })

  it('loadYamlFileSync', () => {
    const data = loadYamlFileSync('foo.yml')
    assert.deepStrictEqual(data, { foo: true })
  })
})
