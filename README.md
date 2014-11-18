# three-orbit-controls

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

ThreeJS OrbitControls as an npm module. See `test.js` (uses beefy and bower). 

```js
var THREE = require('three')
var OrbitControls = require('three-orbit-controls')(THREE)

function start(gl, width, height) {
    renderer = new THREE.WebGLRenderer({
        canvas: gl.canvas
    })
    renderer.setClearColor(0x000000, 1.0)

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(50, width/height, 1, 1000)
    camera.position.set(0, 1, -3)
    camera.lookAt(new THREE.Vector3())

    controls = new OrbitControls(camera)

    var geo = new THREE.BoxGeometry(1,1,1)
    var mat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
    var box = new THREE.Mesh(geo, mat)
    scene.add(box)
}

function render(gl, width, height) {
    renderer.render(scene, camera)
}
```

## Usage

[![NPM](https://nodei.co/npm/three-orbit-controls.png)](https://nodei.co/npm/three-orbit-controls/)

#### `OrbitControls = require('three-orbit-controls')(THREE)`

This module exports a function which accepts an instance of THREE, and returns an OrbitControls class. This allows you to use the module with CommonJS, globals, etc.

The returned function has the following constructor pattern:

```js
controls = new OrbitControls(camera[, domElement])
```

#### Versioning

Because of ThreeJS's versioning, the safest choice is to use `--save-exact` when installing this module (no tilde or caret). The minor version should line up with major ThreeJS releases, e.g. `0.69.0` => `r69`. Please submit a PR or issue if you notice any issues going forward. 