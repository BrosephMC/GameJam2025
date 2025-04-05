//function to place noninteractible objects
function makeSpecObj(){

    // BABYLON.SceneLoader.ImportMesh("", "scenes/", "skull.babylon", scene, function (newMeshes) {
    BABYLON.SceneLoader.ImportMesh("", "CoffeeCart/", "CoffeeCart_01_1k.gltf", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        newMeshes[0].position.x = 4 
        newMeshes[0].position.z = 5;
        newMeshes[0].position.y = 5;
    });

    BABYLON.SceneLoader.ImportMesh("", "Chair/", "plastic_monobloc_chair_01_1k.gltf", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        newMeshes[0].position.x = 5;
        newMeshes[0].position.z = 5;
        newMeshes[0].position.y = 5;
    });

    BABYLON.SceneLoader.ImportMesh("", "Toilet/", "uploads_files_2406324_Toilet.gltf", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        newMeshes[0].position.x = 4;
        newMeshes[0].position.z = 12;
        newMeshes[0].position.y = 5;
    });

}