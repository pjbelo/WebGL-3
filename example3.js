// https://threejs.org/docs/#api/en/materials/Material


var camera, scene, renderer;
var cube1, cube2, cube3, cube4, cube5;
var geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );

// MeshNormalMaterial
// A material that maps the normal vectors to RGB colors.
var material1 = new THREE.MeshNormalMaterial();

// MeshBasicMaterial
// A material for drawing geometries in a simple shaded (flat or wireframe) way.
// This material is not affected by lights.
var material2 = new THREE.MeshBasicMaterial({color: 0x2194ce });

// MeshLambertMaterial
// A material for non-shiny surfaces, without specular highlights.
var material3 = new THREE.MeshLambertMaterial({color: 0xffffff});

// MeshPhongMaterial
// A material for shiny surfaces with specular highlights.
var material4 = new THREE.MeshPhongMaterial({
    // light
    specular: '#ffffff',
    // intermediate
    color: '#aaaaaa',
    // dark
    emissive: '#333333',
    shininess: 100
});

// MeshBasicMaterial - Using textures
const loader = new THREE.TextureLoader();
const texture = loader.load("img/wood_pattern.png"); 
var material5 = new THREE.MeshBasicMaterial( { map: texture } );



init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	createCube1();
	createCube2();
	createCube3();
	createCube4();
	createCube5();

	createLight();

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth * .8, window.innerHeight * .8 );
	document.body.appendChild( renderer.domElement );

}


function createCube1() {
	cube1 = new THREE.Mesh( geometry, material1 );
	cube1.position.set(-0.4,0.2,0)
	scene.add( cube1 );
}

function createCube2() {
	cube2 = new THREE.Mesh( geometry, material2 );
	cube2.position.set(0,0.2,0)
	scene.add( cube2 );
}

function createCube3() {
	cube3 = new THREE.Mesh( geometry, material3 );
	cube3.position.set(0.4,0.2,0)
	scene.add( cube3 );
}

function createCube4() {
	cube4 = new THREE.Mesh( geometry, material4 );
	cube4.position.set(-0.2,-0.2,0)
	scene.add( cube4 );
}

function createCube5() {
	cube5 = new THREE.Mesh( geometry, material5 );
	cube5.position.set(0.2,-0.2,0)
	scene.add( cube5 );
}

function animate() {

	requestAnimationFrame( animate );
	cube1.rotation.x += 0.01;
	cube1.rotation.y += 0.02;
	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.02;	
	cube3.rotation.x += 0.01;
	cube3.rotation.y += 0.02;	
	cube4.rotation.x += 0.01;
	cube4.rotation.y += 0.02;	
	cube5.rotation.x += 0.01;
	cube5.rotation.y += 0.02;						
	renderer.render( scene, camera );

}


function createLight() {
    // create a point light
    var pointLight = new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 1;
    pointLight.position.y = 5;
    pointLight.position.z = 13;

    // add to the scene
    scene.add(pointLight);
}
