var targetQuaternion: THREE.Quaternion;

export function handleSmoothLookAt(camera: THREE.Camera) {
    if (!targetQuaternion) {
        return;
    }

    camera.quaternion.slerp(targetQuaternion, 0.2);
}

export function smoothLookAt(camera: THREE.Camera, target: THREE.Vector3) {
    const startRotation = camera.quaternion.clone();

    camera.lookAt(target);
    targetQuaternion = camera.quaternion.clone();

    camera.quaternion.copy(startRotation);
}
