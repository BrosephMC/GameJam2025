//function to make the map
function makeMap() {
    
    //(x,z)

    // box - 0,0
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 0;
    box.checkCollisions = true;
    var wallMat = new BABYLON.StandardMaterial("Mat", scene);
    wallMat.diffuseTexture = new BABYLON.Texture("textures/decorative_wall_1-1K/1K-grunge_wall_2_basecolor.png", scene);
    box.material = wallMat

    // box - 0,2
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 8;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,3
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 12;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,4
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 16;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,5
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 20;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,6
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 24;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,7
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 28;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,8
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 32;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,9
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 36;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,10
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 40;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,11
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 44;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,12
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 48;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 0,13
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 0, box.position.z = 52;
    box.checkCollisions = true;
    box.material = wallMat

    // box - 1,0
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
    box.position.y = 1, box.position.x = 4, box.position.z = 0;
    box.checkCollisions = true;
    box.material = wallMat

     // box - 2,0
     var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
     box.position.y = 1, box.position.x = 8, box.position.z = 0;
     box.checkCollisions = true;
     box.material = wallMat

     // box - 3,0
     var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
     box.position.y = 1, box.position.x = 12, box.position.z = 0;
     box.checkCollisions = true;
     box.material = wallMat

      // box - 4,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 16, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 5,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 20, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 6,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 24, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 7,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 28, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 8,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 32, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 9,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 36, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 10,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 40, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

      // box - 11,0
      var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
      box.position.y = 1, box.position.x = 44, box.position.z = 0;
      box.checkCollisions = true;
      box.material = wallMat

       // box - 12,0
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 48, box.position.z = 0;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 13,0
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 0;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,1
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 4;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,2
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 8;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,3
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 12;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,4
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 16;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,5
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 20;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,6
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 24;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,7
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 28;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,8
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 32;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,9
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 36;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,10
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 40;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,11
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 44;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,12
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 48;
       box.checkCollisions = true;
       box.material = wallMat

       //box 13,13
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 52, box.position.z = 52;
       box.checkCollisions = true;
       box.material = wallMat

       //box 1,13
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 4, box.position.z = 52;
       box.checkCollisions = true;
       box.material = wallMat

       //box 2,13
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 8, box.position.z = 52;
       box.checkCollisions = true;
       box.material = wallMat

       //box 3,13
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 12, box.position.z = 52;
       box.checkCollisions = true;
       box.material = wallMat

       //box 4,13
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 16, box.position.z = 52;
       box.checkCollisions = true;
       box.material = wallMat

       //box 5,13
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 20, box.position.z = 52;
       box.checkCollisions = true;
       box.material = wallMat

        //box 6,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 24, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

        //box 7,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 28, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

        //box 8,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 32, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

        //box 9,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 36, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

        //box 10,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

        //box 11,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 44, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

        //box 12,13
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 48, box.position.z = 52;
        box.checkCollisions = true;
        box.material = wallMat

       // box - 4,1
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 16, box.position.z = 4;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 5,1
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 20, box.position.z = 4;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 9,1
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 36, box.position.z = 4;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 1,2
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 4, box.position.z = 8;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 2,2
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 8, box.position.z = 8;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 7,2
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 28, box.position.z = 8;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 9,2
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 36, box.position.z = 8;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 11,2
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 44, box.position.z = 8;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 2,3
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 4, box.position.z = 12;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 4,3
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 16, box.position.z = 12;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 5,3
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 20, box.position.z = 12;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 11,3
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 44, box.position.z = 12;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 2,4
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 8, box.position.z = 16;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 4,4
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 16, box.position.z = 16;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 5,4
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 20, box.position.z = 16;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 6,4
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 24, box.position.z = 16;
       box.checkCollisions = true;
       box.material = wallMat

       // box - 7,4
       var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
       box.position.y = 1, box.position.x = 28, box.position.z = 16;
       box.checkCollisions = true;
       box.material = wallMat

        // box - 8,4
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 32, box.position.z = 16;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 9,4
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 36, box.position.z = 16;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 10,4
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 16;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 4,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 16, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 5,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 20, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 6,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 24, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 7,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 28, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 9,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 36, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 10,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 11,5
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 44, box.position.z = 20;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 1,6
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 4, box.position.z = 24;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 2,6
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 8, box.position.z = 24;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 4,6
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 16, box.position.z = 24;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 4,6
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 16, box.position.z = 24;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 5,6
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 20, box.position.z = 24;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 6,6
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 24, box.position.z = 24;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 1,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 4, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 3,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 12, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 8,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 32, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 9,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 36, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 10,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 11,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 44, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 12,7
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 48, box.position.z = 28;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 3,8
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 12, box.position.z = 32;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 5,8
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 20, box.position.z = 32;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 6,8
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 24, box.position.z = 32;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 1,9
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 4, box.position.z = 36;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 3,9
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 12, box.position.z = 36;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 5,9
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 20, box.position.z = 36;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 8,9
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 32, box.position.z = 36;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 9,9
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 36, box.position.z = 36;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 10,9
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 36;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 1,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 4, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 4,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 16, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 5,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 20, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 6,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 24, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 7,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 28, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 8,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 32, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 10,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 12,10
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 48, box.position.z = 40;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 1,11
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 4, box.position.z = 44;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 2,11
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 8, box.position.z = 44;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 12,11
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 48, box.position.z = 44;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 4,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 16, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 5,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 20, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 6,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 24, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 7,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 28, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 8,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 32, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 9,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 36, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat

        // box - 10,12
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 4}, scene);
        box.position.y = 1, box.position.x = 40, box.position.z = 48;
        box.checkCollisions = true;
        box.material = wallMat


}