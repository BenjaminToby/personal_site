import * as THREE from "three";

export default function threeJsAnimations() {
    const animationWrapper = document.getElementById("homepage-animation-wrapper");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, animationWrapper.clientWidth / animationWrapper.clientHeight, 0.1, 1000);

    const light = new THREE.PointLight(0xff0000, 1, 200);
    light.position.set(-1, -1, 5);

    const ambientLight = new THREE.AmbientLight("#adb2d3");
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(animationWrapper.clientWidth, animationWrapper.clientHeight);
    animationWrapper.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();

    const material = new THREE.MeshPhongMaterial({
        // light
        // specular: "rgb(30, 33, 68)",
        // intermediate
        color: "rgb(30, 33, 68)",
        // dark
        // emissive: "rgb(30, 33, 68)",
        shininess: 50,
        wireframe: true,
        // map: THREE.ImageUtils.loadTexture("http://i.imgur.com/xCE2Br4.jpg?1"),
    });
    const cube = new THREE.Mesh(geometry, material);

    const material2 = new THREE.MeshPhongMaterial({
        // light
        // specular: "rgb(30, 33, 68)",
        // intermediate
        color: "#1668e4",
        // dark
        // emissive: "rgb(30, 33, 68)",
        shininess: 50,
        wireframe: false,
        // map: THREE.ImageUtils.loadTexture("http://i.imgur.com/xCE2Br4.jpg?1"),
    });
    const cube2 = new THREE.Mesh(geometry, material2);
    cube2.position.x = window.innerWidth > 500 ? 1.5 : -0.5;
    cube2.position.y = window.innerWidth > 500 ? 1.5 : 1.8;
    cube2.position.z = -1;
    cube2.scale.x = 0.3;
    cube2.scale.y = 0.3;
    cube2.scale.z = 0.3;

    const material3 = new THREE.MeshPhongMaterial({
        // light
        // specular: "rgb(30, 33, 68)",
        // intermediate
        color: "rgb(53, 65, 194)",
        // dark
        // emissive: "rgb(30, 33, 68)",
        shininess: 50,
        wireframe: false,
        // map: THREE.ImageUtils.loadTexture("http://i.imgur.com/xCE2Br4.jpg?1"),
    });
    const cube3 = new THREE.Mesh(geometry, material3);

    scene.add(cube);
    scene.add(cube2);
    scene.add(cube3);
    scene.add(ambientLight);
    scene.add(light);
    scene.add(pointLight);
    scene.add(pointLightHelper);

    cube3.position.x = -1.5;
    cube3.position.y = -1.5;
    cube3.position.z = -1;
    cube3.scale.x = 0.2;
    cube3.scale.y = 0.2;
    cube3.scale.z = 0.2;

    camera.position.z = 2;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.x += 0.002;
        cube.rotation.y += 0.002;

        cube2.rotation.x += 0.005;
        cube2.rotation.y += 0.005;

        cube3.rotation.x += 0.01;
        cube3.rotation.y += 0.01;

        scene.rotation.z += 0.0003;
    }

    animate();

    window.addEventListener("mousemove", (e) => {
        let relMouseX = e.x - window.innerWidth / 2;
        let relMouseY = e.y - window.innerHeight / 2;
        // console.log("X pos: ", relMouseX);
        // console.log("Y pos: ", relMouseY);
        // console.log(e.y);
        relMouseX < 0 ? (cube.rotation.x += 0.003) : (cube.rotation.x += 0.003);
        relMouseY > 0 ? (cube.rotation.y += 0.003) : (cube.rotation.y += 0.003);

        relMouseX < 0 ? (cube2.position.x += 0.001) : (cube2.position.x -= 0.001);
        relMouseY > 0 ? (cube2.position.y += 0.001) : (cube2.position.y -= 0.001);

        relMouseX < 0 ? (cube3.position.x += 0.0007) : (cube3.position.x -= 0.0007);
        relMouseY > 0 ? (cube3.position.y += 0.0007) : (cube3.position.y -= 0.0007);
    });

    window.addEventListener("resize", (e) => {
        renderer.setSize(animationWrapper.clientWidth, window.innerHeight);
    });

    window.addEventListener("scroll", (e) => {
        if (window.scrollY > 100) {
            scene.remove(cube2);
            scene.remove(cube3);
        } else {
            scene.add(cube2);
            scene.add(cube3);
        }
    });
}
