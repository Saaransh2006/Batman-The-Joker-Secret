var batman,joker,gameState,loading1,loading2,completed,bg,bgImg1,bgImg2,gun1,gun2,bgm1,gun2_selected,outro_song,deathstroke,image1;
var batmanImg,jokerImg,proceed,settings,proceedImg,settingsImg,robin,back,var3,gun1_selected,knife_selected,sprite5,variable3,land;
var bgImg3,menu,stage,gordon,batman1,joker1,batmanImg2,batarangImg,bombImg,batarang_selected,gameByImg,gameBy,jokerDead,end,image4;
var sprite6,batman2,bullet,batmanLife,jokerLife,jokerBulletGroup,state,batmanBlock,bulletImg,bulletImg2,reload1,reload2,Ah_sound;
var jokerGunSound,batmanGunSound,batmanGunSound2,reloaded,bulletImg3,sprite7,laugh,hit,click,whoosh,laugh2,specialAttack,var1,var2;
var bombImg2,batarangImg2,batman_specialSound,joker_specialSound,joker_specialAttack,jokerSpecial_var,batmanSpecial_var,batman1;
var completed2,sprite9,bulletGroup,pause,resume,cloud1,cloud2,cloud3,cloud1S,cloud2S,cloud3S,sprite11,variable,youWin,image3,image5;
var winImg,youLose,loseImg,impact,cloud4,cloud5,cloud6,cloud4S,cloud5S,cloud6S,jokerSpecialImg,explosion,newRobin,variable2,image2;
var newRobinImg2,newRobinImg1,bullet1,bullet2,robinGunSound,outro_song2,endImg,variable4,sprite12,variable5,variable6,image6;
var part1,profile;

function preload() {
    bgm1 = loadSound("sound/bgm1.mp3");
    outro_song = loadSound("sound/outro_song.m4a");
    outro_song2 = loadSound("sound/outro_song2.m4a");
    reload1 = loadSound("sound/reload2.m4a");
    reload2 = loadSound("sound/reload1.mp3");
    click = loadSound("sound/click.mp3");
    whoosh = loadSound("sound/whoosh.m4a");
    Ah_sound = loadSound("sound/Ah!.wav");
    hit = loadSound("sound/hit.wav");
    batman_specialSound = loadSound("sound/batman_specialSound.mp3");
    joker_specialSound = loadSound("sound/joker_specialSound.m4a");
    laugh = loadSound("sound/jokerLaugh.m4a");
    laugh2 = loadSound("sound/jokerLaugh2.m4a");
    jokerGunSound = loadSound("sound/jokerGunSound.m4a");
    batmanGunSound = loadSound("sound/batmanGunSound.mp3");
    batmanGunSound2 = loadSound("sound/batmanGunSound2.mp3");
    robinGunSound = loadSound("sound/robinGunSound.mp3");
    impact = loadSound("sound/impact.wav");
    explosion = loadSound("sound/explosion.wav");
    land = loadSound("sound/land.mp3");

    newRobinImg1 = loadImage("images/newRobin1.png");
    newRobinImg2 = loadImage("images/newRobin2.png");
    gameByImg = loadImage("images/gameBy.png");
    cloud1 = loadImage("images/cloud1.png");
    cloud2 = loadImage("images/cloud2.png");
    cloud3 = loadImage("images/cloud3.png");
    cloud4 = loadImage("images/cloud4.png");
    cloud5 = loadImage("images/cloud5.png");
    cloud6 = loadImage("images/cloud6.png");
    pause = loadImage("images/pause.png");
    winImg = loadImage("images/YouWin.png");
    loseImg = loadImage("images/YouLose.png");
    resume = loadImage("images/resume.png");
    bulletImg = loadImage("images/bullet.png");
    bulletImg2 = loadImage("images/bullets.png");
    bulletImg3 = loadImage("images/bullet2.png");
    loading1 = loadImage("images/loading1.png");
    loading2 = loadImage("images/loading2.png");
    completed = loadImage("images/completed.png");
    completed2 = loadImage("images/completed2.png");
    bgImg1 = loadImage("images/background1.png");
    bgImg2 = loadImage("images/background2.jpg");
    bgImg3 = loadImage("images/background3.jpg");
    gun1 = loadImage("images/gun1.png");
    gun2 = loadImage("images/gun2.png");
    batmanBlock = loadImage("images/batman_block.png");
    batmanImg = loadImage("images/batman_main.png");
    batmanImg2 = loadImage("images/batman_main2.png");
    jokerImg = loadImage("images/joker_main.png");
    jokerDead = loadImage("images/deadJoker.png");
    proceedImg = loadImage("images/Proceed.png");
    settingsImg = loadImage("images/settings.png");
    batarangImg = loadImage("images/batarang.png");
    batarangImg2 = loadImage("images/batarangs.png");
    bombImg = loadImage("images/bomb.png");
    bombImg2 = loadImage("images/bombs.png");
    jokerSpecialImg = loadImage("images/jokerSpecial.png");
    image1 = loadImage("images/image1.png");
    image2 = loadImage("images/image2.png");
    image3 = loadImage("images/image3.png");
    image4 = loadImage("images/image4.jpg");
    image5 = loadImage("images/image5.jpg");
    image6 = loadImage("images/image6.png");
    batman1 = loadImage("images/batman1.png");
    endImg = loadImage("images/end.png");
}

function setup() {
    createCanvas(1500,700);

    bgm1.loop();

    whoosh.setVolume(1.2);
    click.setVolume(0.3);
    batman_specialSound.setVolume(0.4);
    joker_specialSound.setVolume(0.3);
    jokerGunSound.setVolume(0.08);
    batmanGunSound.setVolume(0.15);
    batmanGunSound2.setVolume(0.2);
    Ah_sound.setVolume(0.5);
    hit.setVolume(0.55);
    laugh.setVolume(0.3);
    laugh2.setVolume(0.4);
    bgm1.setVolume(0.25);
    explosion.setVolume(0.4);
    land.setVolume(2);
    reload1.setVolume(0.45);

    gameState = "loading";
    state = "normal";
    reloaded = "true";
    var1 = 1;
    var2 = 1;
    var3 = 1;
    variable = 20;
    variable3 = 20;
    variable4 = 20;
    variable2 = 0.1;
    variable5 = 1;
    batmanLife = 1500;
    jokerLife = 1500;
    jokerSpecial_var = 2;
    batmanSpecial_var = 2;
    variable6 = 1;

    back = createButton("BACK");
    back.position(1450,20);
    back.mousePressed(goBack);
    menu = createButton("MENU");
    menu.position(1390,20);
    menu.mousePressed(goToMenu);

    newRobin = createSprite(-20,50,10,10);
    newRobin.visible = false;

    batman = createSprite(485,525,20,100);
    batman.visible = false;

    cloud1S = createSprite(1000,370,10,10);
    cloud1S.addImage(cloud1);
    cloud1S.visible = false;
    cloud1S.scale = 0.4;

    cloud2S = createSprite(400,370,10,10);
    cloud2S.addImage(cloud2);
    cloud2S.visible = false;
    cloud2S.scale = 0.4;

    cloud3S = createSprite(700,370,10,10);
    cloud3S.addImage(cloud3);
    cloud3S.visible = false;
    cloud3S.scale = 0.4;

    cloud4S = createSprite(400,370,10,10);
    cloud4S.addImage(cloud4);
    cloud4S.visible = false;
    cloud4S.scale = 0.4;

    cloud5S = createSprite(1200,370,10,10);
    cloud5S.addImage(cloud5);
    cloud5S.visible = false;
    cloud5S.scale = 0.55;

    cloud6S = createSprite(900,370,10,10);
    cloud6S.addImage(cloud6);
    cloud6S.visible = false;
    cloud6S.scale = 0.4;
    
    joker = createSprite(1100,550,20,100);
    joker.visible = false;
    joker.addImage(jokerImg);
    joker.scale = 0.23;

    proceed = createSprite(405,470,10,10);
    proceed.addImage(proceedImg);
    proceed.visible = false;
    proceed.scale = 0.3;
    
    settings = createSprite(1130,470,10,10);
    settings.addImage(settingsImg);
    settings.visible = false;
    settings.scale = 0.3;
    
    sprite4 = createSprite(675,350,20,20);
    sprite4.velocityX = -12;
    sprite4.visible = false;

    sprite5 = createSprite(700,350,20,20);
    sprite5.visible = false;
    sprite6 = createSprite(800,350,20,20);
    sprite6.visible = false;

    sprite7 = createSprite(1400,350,20,20);
    sprite7.visible = false;

    sprite11 = createSprite(1000,350,20,20);
    sprite11.visible = false;
    sprite12 = createSprite(1000,350,20,20);
    sprite12.visible = false;

    sprite9 = createSprite(1375,110,150,50);
    sprite9.visible = false;
    sprite9.addImage(pause);
    sprite9.scale = 0.25;

    gun1_selected = createSprite(200,120,270,90);
    gun1_selected.visible = false;
    gun2_selected = createSprite(550,120,270,90);
    gun2_selected.visible = false;

    batarang_selected = createSprite(200,320,270,125);
    batarang_selected.visible = false;
    knife_selected = createSprite(550,320,270,125);
    knife_selected.visible = false;

    bullet = createSprite(460,508,10,10);
    bullet.addImage(bulletImg2);
    bullet.scale = 0.1;
    bullet.visible = false;

    bullet1 = createSprite(650,520,10,10);
    bullet1.scale = 0.1;
    bullet1.addImage(bulletImg3);
    bullet1.visible = false;
    bullet2 = createSprite(620,526,10,10);
    bullet2.scale = 0.1;
    bullet2.addImage(bulletImg3);
    bullet2.visible = false;

    specialAttack = createSprite(300,525,10,10);
    specialAttack.visible = false;

    joker_specialAttack = createSprite(1100,525,50,50);
    joker_specialAttack.visible = false;
    joker_specialAttack.addImage(jokerSpecialImg);
    joker_specialAttack.scale = 0.03;

    youWin = createSprite(700,200,10,10);
    youWin.addImage(winImg);
    youWin.visible = false;
    youLose = createSprite(700,200,10,10);
    youLose.addImage(loseImg);
    youLose.visible = false;

    end = createSprite(750,130,10,10);
    end.addImage(endImg);
    end.visible = false;

    gameBy = createSprite(750,490,10,10);
    gameBy.addImage(gameByImg);
    gameBy.visible = false;

    part1 = createInput("https://community.whitehatjr.com/project/9ac76715-f93d-4255-a5c0-96b549f4fa1d");
    part1.position(790,649);

    profile = createInput("https://community.whitehatjr.com/profile/e834b39f-43e8-43d6-8900-e3094a440cfa");
    profile.position(50,470);

    jokerBulletGroup = createGroup();
    jokerBulletGroup2 = createGroup();
    bulletGroup = createGroup();
}

function draw() {
    if(gameState === "loading") {
        part1.show();
    }
    else {
        part1.hide();
    }

    if(gameState === "settings") {
        profile.show();
    }
    else {
        profile.hide();
    }

    if(batmanLife <= 25) {
        batmanLife = 25;
    }
    if(jokerLife <= 25 && sprite11.x < 1330) {
        jokerLife = 25;
    }

    if(variable < 1) {
        variable = 1;
    }
    if(variable2 > 0.2) {
        variable2 = 0.2;
    }
    if(variable3 < 0.6) {
        variable3 = 0.6;
    }
    if(variable4 < 0.8) {
        variable4 = 0.8;
    }

    if(sprite11.x <= 1410) {
        newRobin.scale = variable2;
        newRobin.addImage(newRobinImg1);
    }
    if(sprite11.x > 1410) {
        newRobin.scale = 0.22;
    }

    if(keyDown(RIGHT_ARROW) && gameState === "play") {
        batman.x =  batman.x+10;
    }
    if(keyDown(LEFT_ARROW) && gameState === "play") {
        batman.x =  batman.x-10;
    }

    if(batman.x > 670) {
        batman.x = 670;
    }
    if(batman.x < 435) {
        batman.x = 435;
    }

    if(var1 === 1) {
        if(gameState === "settings") {
           gun1_selected.visible = true;
           gun2_selected.visible = false;
        }
        else {
            gun1_selected.visible = false;
            gun2_selected.visible = false;
        }
        batman.addImage(batmanImg);
        batman.scale = 0.28;

        if(state === "blocked") {
            batman.setCollider("rectangle",0,0,650,1000);
        }
        else {
            batman.setCollider("rectangle",-200,0,650,1000);
        }
    }
    else if(var1 === 2) {
        if(gameState === "settings") {
            gun1_selected.visible = false;
            gun2_selected.visible = true;
        }
        else {
            gun1_selected.visible = false;
            gun2_selected.visible = false;
        }
        batman.addImage(batmanImg2);
        batman.scale = 0.28;

        if(state === "blocked") {
            batman.setCollider("rectangle",0,0,650,1000);
        }
        else {
            batman.setCollider("rectangle",-50,0,150,200);
        }
    }

    if(var2 === 1) {
        specialAttack.addImage(batarangImg2);
        specialAttack.scale = 0.07;
        if(gameState === "settings") {
            batarang_selected.visible = true;
            knife_selected.visible = false;
        }
        else {
            batarang_selected.visible = false;
            knife_selected.visible = false;
        }
        specialAttack.setCollider("rectangle",-1200,0,2000,2000);
    }
    else if(var2 === 2) {
        specialAttack.addImage(bombImg2);
        specialAttack.scale = 0.09;
        if(gameState === "settings") {
            batarang_selected.visible = false;
            knife_selected.visible = true;
        }
        else {
            batarang_selected.visible = false;
            knife_selected.visible = false;
        }
        specialAttack.setCollider("rectangle",-200,0,500,500);
    }

    if(sprite7.x > 1500 && gameState === "play") {
        sprite7.velocityX = 0;
        sprite7.x = 1400;
    }

    if(specialAttack.velocityX === 4 || joker_specialAttack.velocityX === -4) {
        bgm1.setVolume(0);
    }
    else {
        bgm1.setVolume(0.25);
    }

    if(gameState === "loading" || gameState === "menu" || gameState === "play" || gameState === "paused" || gameState === "end") {
        back.hide();
        menu.hide();
    }
    else {
        back.show();
        menu.show();
    }

    if(gameState === "settings") {
        menu.hide();
    }

    if(mousePressedOver(proceed)) {
        click.play();
        if(gameState === "menu") {
            gameState = "initial1";
        }
        if(gameState === "initial2") {
            gameState = "initial3";
        }
    }

    if(gameState === "menu") {
        if(mousePressedOver(settings)) {
            click.play();
            gameState = "settings";
            stage = 1;
        }
    }
    else if(gameState === "instructions") {
        if(mousePressedOver(settings)) {
            click.play();
            gameState = "settings";
            stage = 2;
        }
    }
    
    if(gameState === "loading") {
        bgm1.stop();

        var sprite3 = createSprite(750,350,1500,700);
        sprite3.lifetime = 3;
        sprite3.scale = 1.2;
        var sprite2 = createSprite(750,350,1500,700);
        sprite2.addImage(loading2);
        sprite2.lifetime = 3;
        sprite2.scale = 1.2;
        var sprite1 = createSprite(750,350,1500,700);
        sprite1.addImage(loading1);
        sprite1.lifetime = 3;
        sprite1.scale = 1.2;
        var sprite8 = createSprite(695,580,80,25);
        sprite8.lifetime = 2;
        sprite8.visible = false;
        if(mouseIsOver(sprite8)) {
            sprite3.addImage(completed2);
        }
        else {
            sprite3.addImage(completed);
        }

         //Destroying sprite 1 and 2 as per sprite4's x position.
        if(sprite4.x < 250) {
            sprite1.destroy();
        }
        if(sprite4.x < 0) {
            sprite2.destroy();
        }

        if(mouseWentDown("leftButton") && mouseIsOver(sprite8) && sprite4.x < 0) {
            click.play();
            gameState = "menu";
            sprite4.destroy();
            sprite3.destroy();
            bgm1.play();
        }
    }

    if(gameState === "menu") {
        background(bgImg1);
        proceed.x = 405;
        proceed.y = 470;
        proceed.scale = 0.3;
        settings.x = 1130;
        settings.y = 470;
        settings.scale = 0.3;
        settings.visible = true;
        proceed.visible = true;
    }

    if(gameState === "settings") {
        background(bgImg3);
        proceed.x = -300;
        settings.x = -1200;

        fill("lightGreen");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("1. Select Batman's primary weapon:",10,50);
        fill("white");
        text("2. Select Batman's special weapon:",10,220);
        fill("red");
        text("3. My WhitehatJr Community Profile link:",10,440);
        fill("black");
        text("[Click the 'BACK' button on the top-right",1100,650);
        text(" of the screen after making the changes]",1100,680);

        var gun1S = createSprite(200,120,10,10);
        gun1S.addImage(gun1);
        gun1S.lifetime = 2;
        gun1S.scale = 0.22;
        var gun2S = createSprite(545,120,10,10);
        gun2S.addImage(gun2);
        gun2S.lifetime = 2;
        gun2S.scale = 0.22;
        if(mouseIsOver(gun1S) && mouseWentDown("leftButton")) {
            click.play();
            var1 = 1;
        }
        if(mouseIsOver(gun2S) && mouseWentDown("leftButton")) {
            click.play();
            var1 = 2;
        }

        var batarangS = createSprite(200,320,10,10);
        batarangS.addImage(batarangImg);
        batarangS.lifetime = 2;
        batarangS.scale = 0.2;
        var bombS = createSprite(550,320,10,10);
        bombS.addImage(bombImg);
        bombS.lifetime = 2;
        bombS.scale = 0.4;
        if(mouseIsOver(batarangS) && mouseWentDown("leftButton")) {
            click.play();
            var2 = 1;
        }
        if(mouseIsOver(bombS) && mouseWentDown("leftButton")) {
            click.play();
            var2 = 2;
        }
    }

    if(gameState === "initial1") {
        background(bgImg3);
        image(batman1,-50,10);
        proceed.x = -300;
        settings.x = -1200;
        
        var proceed2 = createSprite(70,45,10,10);
        proceed2.addImage(proceedImg);
        proceed2.lifetime = 2;
        proceed2.scale = 0.2;
        if(mousePressedOver(proceed2)) {
            click.play();
            gameState = "initial2";
        }

        fill("lightGreen");
        textFont("cursive");
        textSize(20);
        textStyle(BOLD);
        text("Recap:",800,50);
        textStyle(NORMAL);
        text("Batman, Gotham city's superhero killed the Joker, a psychotic villain, a",800,80);
        text("few months back. In the present day, a new joker suddenly appears on",800,110);
        text("the streets of Gotham and kidnaps Batman's adopted son and his partner,",800,140);
        text("Robin. Meanwhile, the people of Gotham start fighting each other just",800,170);
        text("because some trust Batman, while some don't. Batman faces The New",800,200);
        text("Joker; but he ends up running away, leaving Batman in an injured state.",800,230);
        text("(Few days after the first fight, Batman finally finds the New Joker's",800,270);
        text("place)",800,300);
        fill("white");
        text("Batman(angrily): I'll not leave you this time!",800,330);
        text("(New Joker comes out, and Batman is shocked to see the him in Robin's",800,360);
        text("suit!)",800,390);
        text("Batman: What! Why are you wearing Robin's dress? Where's Robin!!!!",800,420);
        text("Joker(in Robin's voice): Everyone has their secrets, and this is mine!!!",800,450);
        text("HAHAHAHA!",800,480);
        text("Batman: Robin??? You are the new Joker? no no no..It's not possible..It's",800,510);
        text("a nightmare.",800,540);
        fill("red");
        text("Joker(removes the voice changer device): NO! I am not him. I am not",800,570);
        text("Richard Grayson, your Robin! I am his twin brother, Arthur Grayson!",800,600);
        text("Batman: Arthur? But Richard never told me about you. You are lying to me.",800,630);
        text("There's definitely a trick here.",800,660);
        text("Joker: NO!! Richard never told you the truth, but I will...",800,690);
    }

    if(gameState === "initial2") {
        background(bgImg3);
        image(image1,175,50);
        proceed.x = 70;
        proceed.y = 160;
        proceed.scale = 0.2;
        settings.x = -1200;

        fill("lightGreen");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("Joker: In our childhood, Richard supported your belief of bringing Justice",800,60)
        text("in Gotham. But I,.. I never belived in Justice for all. I supported The",800,90);
        text("Great Joker's belief that no one deserves justice in this society of bad,",800,120);
        text("corrupted people. When my parents and Richard came to know about this,",800,150);
        text("they threw me out of our house, saying that I have lost my mind. I was",800,180);
        text("deeply hurt by this incident. I decided to take revenge because I knew.. I",800,210);
        text("knew that Joker was not wrong, but Batman was.",800,240);
        fill("white");
        text("Since then, I have only thing in my mind... REVENGE!! I knew that my",800,290);
        text("brother, Richard had instigated my parents against me. And so, my only",800,320);
        text("mission was to kill Richard Grayson and The Batman. I wandered around",800,350);
        text("the streets of Gotham to find my master, The Great Joker. After days of",800,380);
        text("search, I finally found him and told him my painful story. You know what",800,410);
        text('he said, "WHY SO SERIOUS Arthur? Go, kill your parents and your',800,440);
        text('brother. Be free of them. Prove me that you are worthy to join me"',800,470);
        fill("red");
        text("And I did so!!! Yes Batman, I killed my parents. Then, The Joker secretly",800,520);
        text("trained me over all these years. At the same time, you found Richard and",800,550);
        text("adopted him; trained him to become the Robin. And I grew up to become",800,580);
        text("The New Joker! We were waiting for the right time to come... when I kill",800,610);
        text("you and Robin. And to our luck, that opportunity came.. when Richard finds",800,640);
        text("out that I AM STILL ALIVE!!! We had a fight... and I killed him...",800,670);
        text("HAHAHAHAHAHA",800,697);
    }

    if(gameState === "initial3") {
        background(bgImg3);
        image(image3,830,360);
        image(image2,130,-65);
        proceed.x = -300;
        settings.x = -1200;
        var proceed3 = createSprite(70,45,10,10);
        proceed3.addImage(proceedImg);
        proceed3.lifetime = 2;
        proceed3.scale = 0.2;
        if(mousePressedOver(proceed3)) {
            click.play();
            gameState = "instructions";
        }

        fill("lightGreen");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("Joker: Then I came to you, disguised as your Robin, in an injured",800,50);
        text("state. Everything was going according to our plan but then you KILLED",800,80);
        text("my master!!",800,110);
        text("Robin was never kidnapped... it was me who was pretending to be The",800,140);
        text("Robin. My brother Richard a.k.a. Robin was killed by me months back.",800,170);
        text("This is all you need know. This is THE JOKER'S SECRET!!!!",800,200);
        text("Today I will finally complete my revenge by killing you!!! HAAAHAAAAHA",800,230);
        text("Ready to Die, Batsy?",800,260);
        fill("white");
        text("Batman: You have done a huge mistake Arthur. Because of you and your",800,300);
        text("evil plans, Gotham's people are fighting each other. I will not spare",800,330);
        text("you this time. You will pay for your mistakes.",800,360);
    }

    if(gameState === "instructions") {
        background(bgImg3);
        proceed.x = -300;
        settings.x = 1250;
        settings.y = 340;
        settings.scale = 0.4
        var proceed4 = createSprite(1250,580,10,10);
        proceed4.addImage(proceedImg);
        proceed4.lifetime = 2;
        proceed4.scale = 0.4;
        if(mousePressedOver(proceed4)) {
            click.play();
            gameState = "play";
        }

        fill("red");
        textFont("forte");
        textSize(40);
        textStyle(NORMAL);
        text("Instructions:",600,40);
        textFont("cursive");
        textSize(20);
        textStyle(BOLD);
        text("Aim/Objective:",10,60);
        text("Controls:",10,245);
        textStyle(NORMAL);
        fill("lightGreen");
        text("~ You will be playing this game as Batman.",10,90)
        text("~ Reduce Joker's lifeline to '25' by using your primary and special attacks to win the game.",10,120);
        text("~ Batman and Joker both have a lifeline of 1500. You'll lose as soon as your lifeline reduces to 25.",10,150);
        text("~ Batman's and Joker's primary attacks are unlimited. However, both can use their special attacks only 2 times in the game.",10,180);
        text("~ Both primary attacks will reduce opponent's lifeline by 25. Both special attacks will reduce opponent's lifeline by 175.",10,210);
        fill("white");
        text("~ 'Enter' key to perform a primary attack.",10,275);
        text("~ 'Space' key to perform a special attack.",10,305);
        text("~ Your primary weapon needs to be reloaded after each primary attack. Press 'Shift' key to reload.",10,335);
        text("~ Press 'Ctrl'(Control) key to block Joker's primary attacks. You can't block Joker's special attacks.",10,365);
        text("~ Joker can automatically use his primary and special attacks in the game.",10,395);
        text("~ Click the 'Pause' button visible on the screen to pause the game. You can also the view the Controls",10,425);
        text("anytime when the game is paused.",10,455);
        fill("red");
        text("* Click the Settings button on the right of the screen to change Batman's Primary and Special attacks.",10,570);
        text("* Click the Proceed button to start with the game.",10,600);
    }
 
    if(gameState === "play") {
        background(bgImg2);
        proceed.x = -300;
        settings.x = -1200;
        batman.visible = true;
        joker.visible = true;
        sprite9.visible = true;
        if(specialAttack.velocityX === 0 && joker_specialAttack.velocityX === 0) {
            sprite9.x = 1375;
        }
        else {
            sprite9.x = 2000;
        }

        if(keyDown("ctrl")) {
            if(specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
                state = "blocked";
                batman.addImage(batmanBlock);
                batman.scale = 0.28;
            }
        }
        else {
            state = "normal";
            if(var1 === 1) {
                batman.addImage(batmanImg);
            }
            else if(var1 === 2) {
                batman.addImage(batmanImg2);
            }
        }

        if(state === "blocked") {
            bulletDodged();
        }

        if(sprite7.velocityX === 0 && sprite7.x === 1400 && specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
            jokerBullet();
        }

        if(batman.isTouching(jokerBulletGroup)) {
            jokerBulletGroup.destroyEach();
            if(state === "normal") {
                hit.play();
                laugh.play();
                batmanLife = batmanLife - 25;
            }
        }
        if(batman.isTouching(jokerBulletGroup2)) {
            jokerBulletGroup2.destroyEach();
            if(state === "normal") {
                hit.play();
                laugh.play();
                batmanLife = batmanLife - 25;
            }
        }

        if(keyWentDown("shift") && reloaded === "false") {
            if(specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
                reloaded = "true";
                reload1.play();
            }
        }

        if(keyWentDown("enter")  && state === "normal" && reloaded === "true") {
            if(specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
                reloaded = "false"
                bullet.visible = true;
                bullet.x = batman.x + 140;
                bullet.velocityX = 21;
                if(var1 === 1) {
                    batmanGunSound.play();
                }
                else if(var1 === 2) {
                    batmanGunSound2.play();
                }
            }
        }

        if(keyWentDown("space") && batmanSpecial_var > 0 && specialAttack.velocityX === 0) {
            batman_specialSound.play();
            specialAttack.visible = true;
            specialAttack.x = batman.x + 140;
            specialAttack.velocityX = 4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            laugh2.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
            if(var2 === 1) {
                whoosh.play();
            }
        }

        if(jokerLife === 800 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 775 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 700 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 675 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 600 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 575 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 500 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 475 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 400 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 375 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 300 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 275 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 200 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 175 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 75 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(specialAttack.velocityX === 4 ) {
            state = "special";
        }

        if(joker_specialAttack.velocityX === -4) {
            state = "joker_special";
        }

        if(specialAttack.isTouching(joker)) {
            Ah_sound.play();
            specialAttack.visible = false;
            specialAttack.velocityX = 0;
            specialAttack.x = batman.x + 140;
            jokerLife = jokerLife - 175;
            state = "normal";
            batmanSpecial_var = batmanSpecial_var - 1;
            if(var2 === 2) {
                explosion.play();
            }
        }

        if(joker_specialAttack.isTouching(batman)) {
            Ah_sound.play();
            joker_specialAttack.visible = false;
            joker_specialAttack.velocityX = 0;
            joker_specialAttack.x = joker.x - 140;
            batmanLife = batmanLife - 175;
            state = "normal";
            jokerSpecial_var = jokerSpecial_var - 1;
            explosion.play();
        }

        if(bullet.isTouching(joker)) {
            hit.play();
            bullet.visible = false;
            bullet.velocityX = 0;
            bullet.x = batman.x + 140;
            jokerLife = jokerLife - 25;
        }

        if(mouseIsOver(sprite9) && mouseWentDown("leftButton")) {
            gameState = "paused";
            bulletGroup.destroyEach();
            bullet.visible = false;
            click.play();
        }

        if(jokerLife === 25) {
            gameState = "end";
            joker_specialAttack.visible = false;
            joker_specialAttack.velocityX = 0;
            joker_specialAttack.x = joker.x - 140;
            specialAttack.visible = false;
            specialAttack.velocityX = 0;
            specialAttack.x = batman.x + 140;
            sprite11.velocityX = 1;
            Ah_sound.play();
            laugh.stop();
            bgm1.stop();
            batman_specialSound.stop();
            joker_specialSound.stop();
            whoosh.stop();
            laugh2.stop();
        }
        if(batmanLife === 25) {
            laugh2.setVolume(0.2);
            laugh2.play();
            gameState = "end";
            joker_specialAttack.visible = false;
            joker_specialAttack.velocityX = 0;
            joker_specialAttack.x = joker.x - 140;
            specialAttack.visible = false;
            specialAttack.velocityX = 0;
            specialAttack.x = batman.x + 140;
            sprite11.velocityX = 1;
            bgm1.stop();
            batman_specialSound.stop();
            joker_specialSound.stop();
            whoosh.stop();
            Ah_sound.play();
        }
    }

    if(gameState === "paused") {
        background(bgImg3);
        batman.visible = false;
        joker.visible = false;
        sprite9.visible = false;
        
        var sprite10 = createSprite(1375,610,150,50);
        sprite10.lifetime = 2;
        sprite10.addImage(resume);
        sprite10.scale = 0.25;    
        if(mouseIsOver(sprite10) && mouseWentDown("leftButton")) {
            gameState = "play";
            click.play();
        }

        fill("red");
        textFont("forte");
        textSize(90);
        textStyle(NORMAL);
        text("Game paused",480,100);
        fill("white");
        textSize(40);
        textFont("cursive");
        text("~ 'Enter' key to fire bullets (Primary attack) ",20,340);
        text("~ 'Shift' key to reload Batman's gun",20,390);
        text("~ 'Ctrl' (Control) key to block Joker's Primary attack",20,440);
        text("~ 'Space' key to use Batarangs/Knives (Special attack)",20,490);
        fill("lightGreen");
        textStyle(BOLD);
        textFont("segoe print");
        textSize(50);
        text("Controls:",10,260);
        fill("red");
        textStyle(NORMAL);
        textSize(20);
        textFont("cursive");
        text("~ Your gun (Primary weapon) needs to be reloaded after each use.",10,620);
        text("~ Special attacks can be used only 2 times. Primary attacks are unlimited.",10,650);
        text("~ Both primary attacks will reduce opponent's lifeline by 25. Both special attacks will reduce opponent's lifeline by 175.",10,680);
    }

    if(gameState === "end") {
        background(bgImg2);
        youWin.scale = variable;
        youLose.scale = variable;
        end.scale = variable3;
        gameBy.scale = variable4;

        if(sprite11.x > 1950) {
            if(keyDown("r")) {
                outro_song.stop();
                outro_song2.stop();
                laugh2.setVolume(0.4);
                gameState = "instructions";
                batman.setVelocity(0,0);
                joker.setVelocity(0,0);
                sprite11.setVelocity(0,0);
                sprite11.x = 1000;
                sprite12.setVelocity(0,0);
                sprite12.x = 1000;
                joker.x = 1100;
                joker.y = 550;
                joker.scale = 0.23;
                joker.addImage(jokerImg);
                batman.x = 485;
                batman.y = 525;
                newRobin.x = -20;
                newRobin.y = 50;
                state = "normal";
                reloaded = "true";
                variable = 20;
                variable3 = 20;
                variable4 = 20;
                variable2 = 0.1;
                variable5 = 1;
                batmanLife = 1500;
                jokerLife = 1500;
                jokerSpecial_var = 2;
                batmanSpecial_var = 2;
                gameBy.visible = false;
                youLose.visible = false;
                youWin.visible = false;
                end.visible = false;
                batman.visible = false;
                newRobin.visible = false;
                joker.visible = false;
                cloud1S.visible = false;
                cloud2S.visible = false;
                cloud3S.visible = false;
                cloud4S.visible = false;
                cloud5S.visible = false;
                cloud6S.visible = false;
                variable6 = 1;
                bgm1.play();
            }
        }

        if(sprite11.x >= 1690 && variable6 === 1 && variable5 === 2) {
            background("black");
            joker.visible = false;
            batman.visible = false;
            newRobin.visible = false;
            cloud4S.visible = false;
            cloud5S.visible = false;
            cloud6S.visible = false;
            youLose.visible = false;
            cloud1S.visible = false;
            cloud2S.visible = false;
            cloud3S.visible = false;
            youWin.visible = false;
            fill("white");
            textFont("cursive");
            textStyle(BOLD);
            textSize(25);
            if(batmanLife === 25) {
                text("Batman: Thank you for saving my life young lady. By the way, who are you ?... what's your name?",10,40);
            }
            else if(jokerLife === 0) {
                text("Batman: You have saved thousands of lives today young lady. By the way, who are you ?... what's your name?",10,40);
            }
            text("Batman: Robin was a true hero.. he will never be forgotten. And what are you doing here Stephanie? Arthur could",10,160);
            text("have hurt you...",10,190);
            text('Batman: You are very brave Stephanie! I appreciate your courage. And to reward you, I offer you the title of the new',10,340);
            text('"Robin"!. Are you ready for your new journey?',10,370);
            text("(Batman takes Stephanie Brown to the Batcave)",10,430);
            text("Welcome to the 'Bat-Family' Stephanie Brown a.k.a. 'The Robin'! Alfred, This is Stephanie, The New Robin....",10,460);
            text("(Batman narrates the whole incident to Alfred. [Alfred Pennyworth was a butler to Batman's father Thomas Wayne.",10,490);
            text("After the death of Batman's parents, he became Bruce Wayne's only guardian. He has a crucial role in Bruce Wayne's",10,520);
            text("journey to become the Batman])",10,550);
            text("(After knowing the truth from Batman and Stephanie, Commisioner Gordon unfolds the secrets of Joker in front of",10,580);
            text("the people of Gotham) Now, Gotham has a new hope, because they have a New 'Robin'!!",10,610);
            fill("lightBlue");
            text("Stephanie: Hello Batman! It's an honour for me to meet you! My name is Stephanie Brown. I was always a big admirer",10,70);
            text("of yours and Robin. I was present here hiding behind the tower when you and this New Joker were having talks. I am",10,100);
            text("very sorry about Robin's Death.",10,130);
            text("Stephanie: I was here to kill the New Joker. Few days ago, when he showed up himself in Gotham, I was present",10,220);
            text("there with my parents and my little brother. And he killed every single person present there, including my family in",10,250);
            text("front of me. Luckily, I survived. From then on I started searching him, in this costume which I have made by myself.",10,280);
            text("And today, I have avenged the death of every single person who died that day.",10,310);
            text('Stephanie: OH! Thank you for this honour!!! Sure, it will be my pleasure working with you as a team... as "The Robin"!!',10,400);

            if(sprite11.x >= 1720) {
                sprite11.velocityX = 0;
                text("(Press 'Enter' to continue)",10,640);
            }
        }

        if(sprite11.x >= 1690 && variable5 === 1) {
            sprite11.velocityX = 0;
            fill("white");
            textFont("cursive");
            textSize(27);
            textStyle(BOLD);
            text("Press 'Enter' to continue",560,100);
        }

        if(keyWentDown("enter") && variable6 === 1 && sprite11.x >= 1720) {
            variable6 = 2;
            sprite11.velocityX = 1;
        }

        if(keyWentDown("enter") && variable6 === 2 && sprite11.x >= 1800) {
            variable6 = 3;
            sprite11.velocityX = 1;
        }

        if(keyWentDown("enter") && variable5 === 1 && sprite11.x >= 1690) {
            variable5 = 2;
            sprite11.velocityX = 1;
        } 

        if(variable6 === 2) {
            background("black");
            if(batmanLife === 25) {
                fill("lightGreen");
                textFont("cursive");
                textStyle(BOLD);
                textSize(20);
                text("Few days after the Fight:",10,30);
                text("Commisioner Gordon: Batman, there is a news coming that Deathstroke has returned, how's it possible? he was killed by you a MONTH BACK!!",10,60);
                text("Batman: He wasn't killed by me Commissioner... Arthur, who was disguised as Robin, had shot him. At that time, I didn't know that he was not",10,90);
                text("Richard.. and so I assumed that Deathstroke was dead. I am damn sure now that he wasn't killed.. instead The New Joker fooled all of us.",10,120);
                text('Batman informs The New Robin about the threat. "We will take care of him. By the way, who the hell is this Deathstroke? And why are you so afraid',10,150);
                text('of him Batman?", she asks. Batman replies, "Deathstroke is someone from my past. Well, that is a long story, I will tell you some other day. For',10,180);
                text("now, we should go and save the city!!",10,210);
                text("Meanwhile, somewhere in South Korea..",10,240);
                text('Arthur Grayson visits Talia al Ghul, head of "The League of Shadows", a league of Ninja Assassins.',10,270);
                text("Joker: Talia al Ghul, daughter of the GREAT R'as al Gul, pleased to meet you.",10,300);
                text("Talia: What do you want from me Joker, aka Arthur Grayson?",10,330);
                text("Joker: Oh! So now everyone knows my real name.. HA!! Well, I have an offer.. you and your League of Shadows help me in the annihilation of Gotham",10,360);
                text("city and defeating the New Robin.. and I'll help you kill Batman. Deathstroke also will be helping us. We can't beat him and Robin alone.. but if",10,390);
                text("you, me and Deathstroke unite, no one can defeat us!!! HAHAHAHAHA!! Remember how Batman killed your father.. let's team up and avenge your",10,420);
                text("father's death!!!",10,450);
                text("Talia: Batman will die!!! I'll help you and Deathstroke, but remember, no tricks with me.. or you both will die too!!.... Bruce Wayne, you will",10,480);
                text("soon realise how it feels to lose someone close to you!!.. The Dark Knight will fall.. and that is my promise!!!",10,510);
            }

            if(jokerLife === 0) {
                fill("lightGreen");
                textFont("cursive");
                textStyle(BOLD);
                textSize(20);
                text("Few days after The New Joker's Death, Commissioner Gordon finds a letter for Batman on his desk. He gives it to Batman. Batman opens the letter,",10,30);
                text('"Bruce Wayne, aka "Batman", HAHA.. this is me, Arthur. Well, you must be having a question, how do I know your real name? A month back.. We',10,60);
                text("both were having a fight with Deathstroke, your old friend, who turned out to be your worst enemy. And you thought that I had killed him because",10,90);
                text("at that time I was disguised as Robin and you trusted me. But you were mistaken Bruce, I didn't kill him. It was all part of my plan!! Deathstroke",10,120);
                text("promised me that he will not interfere in my vengeance of killing the Batman; but will return to Gotham as soon as I kill you... to capture this",10,150);
                text("city. Before leaving, he told me your real name.  If you are reading this letter.. then you have probably killed me, Batman. You can take this",10,180);
                text('letter as a warning.. because this time he will be more prepared.. He will RISE again.. He is coming Bruce.. your DEATH is coming.. HAHAHAHAHA!!!',10,210);
                text('Told you I always have a backup plan!!"',10,240);
                text('Batman calls The New Robin and informs her about the threat. "We will take care of him. By the way, who the hell is this Deathstroke? And why are',10,270);
                text('you so afraid of him Batman?", she asks. Batman replies, "Deathstroke is someone from my past. Well, that is a long story, I will tell you some',10,300);
                text('other day. For now, we should go and save the city!!"',10,330);
            }
            if(sprite11.x >= 1800) {
                sprite11.velocityX = 0;
                fill("white");
                text("(Press 'Enter' to continue)",600,540);
            }
        }

        if(variable6 === 3) {
            background("black");
            end.visible = true;
            sprite12.velocityX = 1;
            variable3 = variable3 - 0.5;
            if(sprite12.x >= 1110) {
                variable4 = variable4 - 0.5;
                gameBy.visible = true;
                fill("white");
                textFont("cursive");
                textSize(20);
                textStyle(BOLD);
                text("(Press 'R' to restart)",650,660);
            }

            if(variable3 === 9) {
                impact.play();
            }
            if(variable4 === 9) {
                impact.play();
            }

            if(jokerLife === 0) {
                image(image4,1030,15);
                image(image5,10,15);
                end.x = 750;
                end.y = 130;
                gameBy.x = 750;
                gameBy.y = 490; 
            }
            if(batmanLife === 25) {
                image(image5,10,15);
                image(image6,510,15);
                end.x = 1250;
                end.y = 550;
                gameBy.x = 750;
                gameBy.y = 550;
            }
        }

        if(jokerLife === 25) {
            batman.x = 485;
            batman.y = 525;

            if(sprite11.x >= 1020) {
                variable = variable - 0.5;
            }
            if(sprite11.x === 1020) {
                youWin.visible = true;
            }
            if(sprite11.x === 1050) {
                cloud1S.visible = true;
                outro_song.play();
            }
            if(sprite11.x === 1290) {
                cloud2S.visible = true;
            }
            if(bullet1.isTouching(joker) || bullet2.isTouching(joker)) {
                Ah_sound.play();
                cloud3S.visible = true;
                bullet1.velocityX = 0;
                bullet2.velocityX = 0;
                bullet1.x = 650;
                bullet1.y = 520;
                bullet2.x = 620;
                bullet2.y = 526;
                bullet1.visible = false;
                bullet2.visible = false;
                jokerLife = jokerLife - 25;
                joker.addImage(jokerDead);
                joker.scale = 0.22;
                joker.y = 630;
                joker.x = 910;
            }
            if(sprite11.x === 1330) {
                newRobin.visible = true;
                newRobin.velocityX = 8;
                newRobin.velocityY = 6;
            }
            if(sprite11.x >= 1330) {
                variable2 = variable2 + 0.001;
            }
            if(sprite11.x === 1410) {
                land.play();
                newRobin.velocityX = 0;
                newRobin.velocityY = 0;
                newRobin.addImage(newRobinImg2);
                robinGunSound.play();
                bullet1.visible = true;
                bullet1.velocityX = 21;
                bullet2.visible = true;
                bullet2.velocityX = 21;
            }
            if(sprite11.x === 1420) {
                robinGunSound.play();
            }
            if(variable === 9) {
                impact.play();
            }
        }

        if(batmanLife === 25) {
            batman.x = 485;
            batman.y = 525;

            if(sprite11.x >= 1020) {
                variable = variable - 0.5;
            }
            if(sprite11.x === 1020) {
                youLose.visible = true;
            }
            if(sprite11.x === 1050) {
                cloud4S.visible = true;
                outro_song2.play();
            }
            if(sprite11.x === 1080) {
                cloud5S.visible = true;
            }
            if(bullet1.isTouching(joker) || bullet2.isTouching(joker)) {
                Ah_sound.play();
                cloud6S.visible = true;
                bullet1.velocityX = 0;
                bullet2.velocityX = 0;
                bullet1.x = 650;
                bullet1.y = 520;
                bullet2.x = 620;
                bullet2.y = 526;
                bullet1.visible = false;
                bullet2.visible = false;
                jokerLife = jokerLife - 25;
            }
            if(sprite11.x === 1330) {
                newRobin.visible = true;
                newRobin.velocityX = 8;
                newRobin.velocityY = 6;
            }
            if(sprite11.x >= 1330) {
                variable2 = variable2 + 0.001;
            }
            if(sprite11.x === 1410) {
                land.play();
                newRobin.velocityX = 0;
                newRobin.velocityY = 0;
                newRobin.addImage(newRobinImg2);
                robinGunSound.play();
                bullet1.visible = true;
                bullet1.velocityX = 21;
                bullet2.visible = true;
                bullet2.velocityX = 21;
            }
            if(sprite11.x === 1420) {
                robinGunSound.play();
            }
            if(sprite11.x === 1640) {
                joker.velocityY = 15;
                joker.velocityX = 5;
            }
            if(variable === 5) {
                impact.play();
            }
        }
        
        bulletGroup.destroyEach();
        bullet.visible = false;
        sprite9.visible = false;
        reload1.stop();
        reload2.stop();
    }

    drawSprites();

    if(gameState === "play") {
        textStyle(BOLD);
        textFont("cursive");
        textSize(20);
        fill("white");
        text("Batman's Special Attacks left: " + batmanSpecial_var,10,100);
        text("Joker's Special Attacks left: " + jokerSpecial_var,910,100);
        if(joker_specialAttack.velocityX === -4) {
            fill("red");
            textStyle(BOLD);
            textFont("segoe print");
            textSize(20);
            text("Joker is using his Special Attack!!",910,130);
        }
        if(specialAttack.velocityX === 4) {
            fill("lightGreen");
            textStyle(BOLD);
            textFont("segoe print");
            textSize(20);
            text("Batman is using his Special Attack!!",10,160);
        }
        if(reloaded === "false") {
            fill("red");
            textStyle(BOLD);
            textFont("cursive");
            textSize(20);
            text("Gun is unloaded. Reload your gun by pressing 'Shift' button.",10,130);
        }
    }

    if(gameState === "loading") {
        fill("red");
        textStyle(BOLD);
        textFont("cursive");
        textSize(20);
        text('This game is a continuation of "Batman: The Joker Rises". Please play the first part before continuing with this to understand the storyline.',40,630);
        text('Copy & Paste this link on your browser to play "Batman: The Joker Rises":',40,660);
        fill("lightGreen");
        text("Minimum 4 GB RAM is required for smooth functioning of this game and to avoid crashing. Use Headphones/Earphones for a better experience",40,690);
    }

    if(gameState === "play" || gameState === "end") {
        if(variable5 === 1) {
            textFont("forte");
            textSize(35);
            fill("red");
            text("Batman's lifeline: " + batmanLife,150,50);
            fill("lightGreen");
            text("Joker's lifeline: " + jokerLife,1050,50);
        }
    }
}

function goBack() {
    click.play();
    if(gameState === "initial1") {
        gameState = "menu";
    }
    if(gameState === "initial2") {
        gameState = "initial1";
    }
    if(gameState === "initial3") {
        gameState = "initial2";
    }
    if(gameState === "instructions") {
        gameState = "initial3";
    }
    if(gameState === "settings") {
        if(stage === 1) {
            gameState = "menu";
        }
        if(stage === 2) {
            gameState = "instructions";
        }
    }
}

function goToMenu() {
    click.play();
    gameState = "menu";
}

function jokerBullet() {
    if(frameCount % 7 === 0 && frameCount % 180 != 0) {
        var joker_bullet = createSprite(955,530,10,10);
        joker_bullet.addImage(bulletImg);
        joker_bullet.scale = 0.1;
        joker_bullet.velocityX = -21;
        joker_bullet.depth = joker.depth;
        joker.depth = joker.depth + 1;
        
        jokerGunSound.play();
        jokerBulletGroup.add(joker_bullet);
        bulletGroup.add(joker_bullet);
    }
    if(frameCount % 3 === 0 && frameCount % 14 != 0) {
        var joker_bullet2 = createSprite(1040,530,10,10);
        joker_bullet2.addImage(bulletImg);
        joker_bullet2.scale = 0.1;
        joker_bullet2.velocityX = -21;

        jokerBulletGroup2.add(joker_bullet2);
        bulletGroup.add(joker_bullet2);
    }
    
    if(frameCount % 180 === 0) {
        reload2.play();
        sprite7.velocityX = 3;
    }
}

function bulletDodged() {
    if(frameCount % 10 === 0 ) {
        var randomNumber = Math.round(random(1,2));
        var dodgedBullet = createSprite(random(batman.x+130,batman.x+180),random(batman.y+50,batman.y+100),10,10);
        dodgedBullet.scale = 0.1;
        dodgedBullet.lifetime = 200;
        if(randomNumber === 1) {
            dodgedBullet.addImage(bulletImg);
        }
        else if(randomNumber === 2) {
            dodgedBullet.addImage(bulletImg3);
        }

        bulletGroup.add(dodgedBullet);

        dodgedBullet.depth = batman.depth;
        batman.depth = batman.depth + 1;
    }
}

/*function offSound() {
    reload1.setVolume(0);
    reload2.setVolume(0);
    click.setVolume(0);
    whoosh.setVolume(0);
    Ah_sound.setVolume(0);
    hit.setVolume(0);
    batman_specialSound.setVolume(0);
    joker_specialSound.setVolume(0);
    laugh.setVolume(0);
    laugh2.setVolume(0);
    jokerGunSound.setVolume(0);
    batmanGunSound.setVolume(0);
    batmanGunSound2.setVolume(0);
    robinGunSound.setVolume(0);
    impact.setVolume(0);
    explosion.setVolume(0);
    land.setVolume(0);
}

function offMusic() {
    bgm1.setVolume(0);
    outro_song.setVolume(0);
    outro_song2.setVolume(0);
}

function onSound() {
    whoosh.setVolume(1.2);
    click.setVolume(0.3);
    batman_specialSound.setVolume(0.4);
    joker_specialSound.setVolume(0.3);
    jokerGunSound.setVolume(0.08);
    batmanGunSound.setVolume(0.15);
    batmanGunSound2.setVolume(0.2);
    Ah_sound.setVolume(0.5);
    hit.setVolume(0.55);
    laugh.setVolume(0.3);
    laugh2.setVolume(0.4);
    explosion.setVolume(0.4);
    land.setVolume(2);
    reload1.setVolume(1.7);
    reload2.setVolume(1);
    robinGunSound.setVolume(1);
    impact.setVolume(1);
    click.play();
}

function onMusic() {
    bgm1.setVolume(0.25);
    outro_song.setVolume(1);
    outro_song2.setVolume(1);
    click.play();
}*/
