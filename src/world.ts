import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { handleSmoothLookAt, smoothLookAt } from "./three-misc.ts";

// * Types

/**
 * Settings for the camera
 */
export type CameraShot = {
    position: THREE.Vector3;
    lookAt: THREE.Vector3;
};

export function newCameraShot(
    position: THREE.Vector3,
    lookAt: THREE.Vector3
) {
    return {
        position,
        lookAt,
    } as CameraShot;
}

export type CameraShots = {
    chest: CameraShot;
    chest_open: CameraShot;
    sign: CameraShot;
    sign_open: CameraShot;
    command: CameraShot;
    command_open: CameraShot;
};

// * Variables

var gltfLoader: GLTFLoader;

// Scene
var canvasElement: Element;
var scene: THREE.Scene;
var renderer: THREE.WebGLRenderer;

// Camera
var camera: THREE.PerspectiveCamera;
var cameraShots: CameraShots;
var activeCameraShot: keyof CameraShots;

// 3D Models
var chest: THREE.Group<THREE.Object3DEventMap> | undefined;
var sign: THREE.Group<THREE.Object3DEventMap> | undefined;
var commandBlock: THREE.Group<THREE.Object3DEventMap> | undefined;
var grassBlocks: THREE.Group<THREE.Object3DEventMap>[] = [];

// Light
var ambientLight: THREE.AmbientLight;
var directionalLight: THREE.DirectionalLight;

// Selection Outline
// TODO
var normalMouse: THREE.Vector2;
var raycaster: THREE.Raycaster;
var composer: EffectComposer;
var outline: OutlinePass;
var selectedObjects: THREE.Object3D[] = [];
var INTERSECTED: THREE.Object3D | null;

// Parallax
var doParallax: boolean;
var prevMousePos: THREE.Vector2;
const parallaxDampener = 500;

// * Setup

/**
 * Sets up all elements of the 3D scene, starts event listeners and the animation loop.
 */
export function setupWorld() {
    gltfLoader = new GLTFLoader();

    getCanvasElement();
    setupScene();
    setupRenderer();

    setupCamera();

    setup3DModels();

    setupLight();

    normalMouse = new THREE.Vector2(0, 0);
    raycaster = new THREE.Raycaster();
    composer = new EffectComposer(renderer);
    setupSelectionOutline();

    doParallax = true;
    prevMousePos = new THREE.Vector2(0, 0);

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, true);
    window.addEventListener("contextmenu", openChest, true);
    window.addEventListener("click", openChest, true);

    // TODO: Remove
    const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    const boxMaterial = new THREE.MeshBasicMaterial();
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(40, 10, 40);
    scene.add( box );

    animate();
}

function getCanvasElement() {
    const c = document.querySelector("#mainscene");
    if (c === null) {
        throw Error("Couldn't find canvas element 'mainscene'");
    }
    canvasElement = c;
}

function setupScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.CubeTextureLoader()
        .setPath("/cubeMaps/")
        .load([
            "forest-px.png",
            "forest-nx.png",
            "forest-py.png",
            "forest-ny.png",
            "forest-pz.png",
            "forest-nz.png",
        ]);
}

function setupCamera() {
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        200
    );
    camera.position.set(20, 22, 20);

    cameraShots = {
        chest: newCameraShot(camera.position.clone(), new THREE.Vector3(0, 10, 0)),
        chest_open: newCameraShot(new THREE.Vector3(10, 24, 10), new THREE.Vector3(0, 10, 0)),
        sign: newCameraShot(camera.position.clone(), new THREE.Vector3(40, 10, 0)),
        sign_open: newCameraShot(new THREE.Vector3(30, 24, 10), new THREE.Vector3(40, 10, 0)),
        command: newCameraShot(camera.position.clone(), new THREE.Vector3(40, 10, 40)),
        command_open: newCameraShot(new THREE.Vector3(30, 24, 30), new THREE.Vector3(40, 10, 40)),
    };

    camera.lookAt(cameraShots.chest.lookAt)
    activeCameraShot = "chest";
}

function setupRenderer() {
    renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function setup3DModels() {
    gltfLoader.load("models/chest.gltf", (s) => {
        chest = s.scene;
        chest.scale.set(10, 10, 10);
        chest.position.set(0, 10, 0);
        chest.rotation.set(0, Math.PI, 0);
        chest.name = "Chest";
        scene.add(chest);
    });

    gltfLoader.load("models/sign.glb", (s) => {
        sign = s.scene;
        sign.scale.set(10, 10, 10);
        sign.position.set(40, 10, 0);
        sign.name = "Sign";
        scene.add(sign);
    });

    gltfLoader.load("models/command_block.gltf", (s) => {
        commandBlock = s.scene;
        commandBlock.scale.set(10, 10, 10);
        commandBlock.position.set(40, 10, 40);
        commandBlock.name = "Command Block";
        scene.add(commandBlock);
    });

    gltfLoader.load("models/grass_block.gltf", (s) => {
        const grassBlock = s.scene;
        grassBlock.scale.set(10, 10, 10);
        grassBlock.position.set(0, 0, 0);
        grassBlock.name = "Grass Block";

        grassBlocks.push(grassBlock.clone());
        grassBlocks.push(grassBlock.clone().translateX(40));
        grassBlocks.push(grassBlock.clone().translateX(40).translateZ(40));

        grassBlocks.forEach((gb) => {
            scene.add(gb);
        });
    });
}

function setupLight() {
    ambientLight = new THREE.AmbientLight();
    directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(-50, 50, -20);
    scene.add(ambientLight, directionalLight);
}

function setupSelectionOutline() {
    const renderPass = new RenderPass(scene, camera);

    composer.addPass(renderPass);

    outline = new OutlinePass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        scene,
        camera
    );
    outline.edgeThickness = 2.0;
    outline.edgeStrength = 3.0;
    outline.visibleEdgeColor.set(0xffffff);

    composer.addPass(outline);
}

// * Selection Outline

function addSelectedObjects(object: THREE.Object3D) {
    if (selectedObjects.length > 0) {
        selectedObjects.pop();
    }
    selectedObjects.push(object);
}

function intersection() {
    raycaster.setFromCamera(normalMouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, false);

    if (intersects.length > 0) {
        if (
            INTERSECTED != intersects[0].object &&
            intersects[0].object.type === "Group"
        ) {
            INTERSECTED = intersects[0].object;
            addSelectedObjects(INTERSECTED);
            outline.selectedObjects = selectedObjects;
        } else {
            INTERSECTED = null;
        }
    }
}

// * Functions

export function switchToShot(shot: keyof CameraShots) {
    activeCameraShot = shot;
}

// * Animation Loop

function animate() {
    requestAnimationFrame(animate);

    const shot = cameraShots[activeCameraShot];

    camera.position.lerp(
        shot.position.clone(),
        0.05
    );

    if (shot.lookAt !== undefined) {
        smoothLookAt(camera, shot.lookAt);
    }

    handleSmoothLookAt(camera);

    renderer.render(scene, camera);
}

// * Event Handlers

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event: MouseEvent) {
    // Parallax
    if (doParallax) {
        let changeX = event.x - prevMousePos.x;
        let changeY = event.y - prevMousePos.y;
        camera.position.x += changeX / parallaxDampener;
        camera.position.y -= changeY / parallaxDampener;
        prevMousePos.set(event.x, event.y);
    }

    // Selection Outline
    normalMouse.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );

    intersection();
}

let chestOpened = false;
function openChest(event: MouseEvent) {
    if (!chestOpened) {
        event.preventDefault();
        chestOpened = true;
        doParallax = false;

        const chestSound = new Audio("sounds/chest-opening.wav");
        chestSound.play();

        activeCameraShot = "chest_open";

        setTimeout(() => {
            document.getElementById("inv-holder")!.style.display = "block";
        }, 500);
    }
}
