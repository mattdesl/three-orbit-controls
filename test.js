var createApp = require('canvas-testbed')
var load = require('scriptjs')

var path = 'bower_components/three.js/build/three.js'
load(path, function() {
    var THREE = window.THREE
    var OrbitControls = require('./')(THREE)

    createApp(render, start, { 
        context: 'webgl',
        onResize: resize
    })

    var renderer,
        scene,
        camera,
        controls

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

    function resize(width, height) {
        if (!renderer)
            return

        renderer.setViewport(0, 0, width, height)
        camera.aspect = width/height
        camera.updateProjectionMatrix()
    }
})


    