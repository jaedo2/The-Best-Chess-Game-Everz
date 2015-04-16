$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var Player = createObjectPic("Imagess/NimrodEdit.png")
	var Player2 = createObjectPic("Imagess/YesEdit.png")
	var Player3 = createObjectPic("Imagess/IdiotEdit.png")
	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var backPic = makePicture("Imagess/wallpaper5.jpg")
	var playButton = createButton(230, 380, 200, 100, null, "Play!!")
		playButton.job = function(){
			screen = 2
			mySong.play()
			}
	var Board = makePicture("Imagess/Board.png")		
	var Background2 = makePicture("Imagess/Background3.jpg")		
	var player1 = makePicture("Imagess/Nimrod.png")
	var player2 = makePicture("Imagess/Nimrod2.png")
	var pawn = createObjectPic ("Imagess/Pawn.png")
	var pawn2 = createObjectPic ("Imagess/Pawn.png")
	var pawn3 = createObjectPic ("Imagess/Pawn.png")
	var pawn4 = createObjectPic ("Imagess/Pawn.png")
	var pawn5 = createObjectPic ("Imagess/Pawn.png")
	var pawn6 = createObjectPic ("Imagess/Pawn.png")
	var pawn7 = createObjectPic ("Imagess/Pawn.png")
	var pawn8 = createObjectPic ("Imagess/Pawn.png")
	
	var pawnWhite = createObjectPic ("Images/Pawn2.png")
	var pawnWhite2 = createObjectPic ("Images/Pawn2.png")
	var pawnWhite3 = createObjectPic ("Images/Pawn2.png")
	var pawnWhite4 = createObjectPic ("Images/Pawn2.png")
	var pawnWhite5 = createObjectPic ("Images/Pawn2.png")
	var pawnWhite6 = createObjectPic ("Images/Pawn2.png")
	var pawnWhite7 = createObjectPic ("Images/Pawn2.png")
	var pawnWhite8 = createObjectPic ("Images/Pawn2.png")
	
	
	
	
	var mySong = addSound("Sounds/Dookie.mp3")
	var button = createButton(250, 35, 50, 50, null, "Pause")
	var moveButton = createButton(325, 35, 50, 50, null, "move")
	
	
	
	
	
	button.job = function(){
			mySong.pause()
			}
	button.colour = "grey"
	
	
	pawn.job = function(){
			pawn.x = pawn.x + pawn.speedx
			}
	moveButton.job = function(){
			cpu()
			}
	
	playButton.colour = "grey"
	
	var rook = createObjectPic("Imagess/Rook.png")
	var rook2 = createObjectPic("Imagess/Rook.png")
	var knight = createObjectPic("Imagess/Knight.png")
	var knight2 = createObjectPic("Imagess/Knight.png")
	var bishop = createObjectPic("Imagess/Bishop.png")
	var bishop2 = createObjectPic("Imagess/Bishop.png")
	var queen = createObjectPic("Imagess/Queen.png")
	var king = createObjectPic("Imagess/King.png")
	
	var rookWhite = createObjectPic("Images/Rook2.png")
	var rookWhite2 = createObjectPic("Images/Rook2.png")
	var knightWhite = createObjectPic("Images/Knight2.png")
	var knightWhite2 = createObjectPic("Images/Knight2.png")
	var bishopWhite = createObjectPic("Images/Bishop2.png")
	var bishopWhite2 = createObjectPic("Images/Bishop2.png")
	var queenWhite = createObjectPic("Images/Queen2.png")
	var kingWhite = createObjectPic("Images/King2.png")
	
	
	
	function cpu(){
	var numberHolder = Math.random()
	var result
	if (numberHolder >= 0 && numberHolder < 1/32){
		result = pawnWhite.x += -35
		checkCollideWhite(pawnWhite)
	}else if(numberHolder >= 1/32 && numberHolder < 2/32){
		result = pawnWhite2.x += -35
		checkCollideWhite(pawnWhite2)
	}else if(numberHolder >= 2/32 && numberHolder < 3/32){
		result = pawnWhite3.x += -35
		checkCollideWhite(pawnWhite3)
	}else if(numberHolder >= 3/32 && numberHolder < 4/32){
		result = pawnWhite4.x += -35
		checkCollideWhite(pawnWhite4)
	}else if(numberHolder >= 4/32 && numberHolder < 5/32){
		result = pawnWhite5.x += -35
		checkCollideWhite(pawnWhite5)
	}else if(numberHolder >= 5/32 && numberHolder < 6/32){
		result = pawnWhite6.x += -35
		checkCollideWhite(pawnWhite6)
	}else if(numberHolder >= 6/32 && numberHolder < 7/32){
		result = pawnWhite7.x += -35
		checkCollideWhite(pawnWhite7)
	}else if(numberHolder >= 7/32 && numberHolder < 8/32){
		result = pawnWhite8.x += -35
		checkCollideWhite(pawnWhite8)
	}else if(numberHolder >= 8/32 && numberHolder < 9/32){
		result = rookWhite.x += -35
		checkCollideWhite(rookWhite)
	}else if(numberHolder >= 9/32 && numberHolder < 10/32){
		result = rookWhite.x += -95
		checkCollideWhite(rookWhite)
	}else if(numberHolder >= 10/32 && numberHolder < 11/32){
		result = rookWhite.y += -65
		checkCollideWhite(rookWhite)
	}else if(numberHolder >= 11/32 && numberHolder < 12/32){
		result = rookWhite2.x += -95
		checkCollideWhite(rookWhite2)
	}else if(numberHolder >= 12/32 && numberHolder < 13/32){
		result = rookWhite2.x += -35
		checkCollideWhite(rookWhite2)
	}else if(numberHolder >= 13/32 && numberHolder < 14/32){
		result = rookWhite2.y += 65
		checkCollideWhite(rookWhite2)
	}else if(numberHolder >= 14/32 && numberHolder < 15/32){
		result = knightWhite.x += -95
		knightWhite.y += -35
		checkCollideWhite(knightWhite)
	}else if(numberHolder >= 15/32 && numberHolder < 16/32){
		result = knightWhite.x += -95
		knightWhite.y += 35
		checkCollideWhite(knightWhite)
	}else if(numberHolder >= 16/32 && numberHolder < 17/32){
		result = knightWhite2.x += -95
		knightWhite2.y += 35
		checkCollideWhite(knightWhite2)
	}else if(numberHolder >= 17/32 && numberHolder < 18/32){
		result = knightWhite2.x += -95
		knightWhite2.y += -35
		checkCollideWhite(knightWhite2)
	}else if(numberHolder >= 18/32 && numberHolder < 19/32){
		result = bishopWhite.x += -55
		bishopWhite.y += -35
		checkCollideWhite(bishopWhite)
	}else if(numberHolder >= 19/32 && numberHolder < 20/32){
		result = bishopWhite.x += -105
		bishopWhite.y += -65
		checkCollideWhite(bishopWhite)
	}else if(numberHolder >= 20/32 && numberHolder < 21/32){
		result = bishopWhite2.x += -55
		bishopWhite2.y += 35
		checkCollideWhite(bishopWhite2)
	}else if(numberHolder >= 21/32 && numberHolder < 22/32){
		result = bishopWhite2.x += -105
		bishopWhite2.y += 65
		checkCollideWhite(bishopWhite2)
	}else if(numberHolder >= 22/32 && numberHolder < 23/32){
		result = queenWhite.x += -55
		queenWhite.y += -35
		checkCollideWhite(queenWhite)
	}else if(numberHolder >= 23/32 && numberHolder < 24/32){
		result = queenWhite.x += -105
		queenWhite.y += -65
		checkCollideWhite(queenWhite)
	}else if(numberHolder >= 24/32 && numberHolder < 25/32){
		result = queenWhite.x += -65
		checkCollideWhite(queenWhite)
	}else if(numberHolder >= 25/32 && numberHolder < 26/32){
		result = queenWhite.y += -35
		checkCollideWhite(queenWhite)
	}else if(numberHolder >= 26/32 && numberHolder < 27/32){
		result = queenWhite.y += -95
		checkCollideWhite(queenWhite)
	}else if(numberHolder >= 27/32 && numberHolder < 28/32){
		result = kingWhite.y += -35
		checkCollideWhite(kingWhite)
	}else if(numberHolder >= 28/32 && numberHolder < 29/32){
		result = kingWhite.y += 35
		checkCollideWhite(kingWhite)
	}else if(numberHolder >= 29/32 && numberHolder < 30/32){
		result = queenWhite.x += -35
		checkCollideWhite(queenWhite)
	}else if(numberHolder >= 30/32 && numberHolder < 31/32){
		result = queenWhite.x += 35
		checkCollideWhite(queenWhite)
	}	
		return result
		}
	
	
	
		
		
	function checkCollide(obj){
		if(obj.collideObject(rookWhite)) rookWhite.y = -10000000000000000
		if(obj.collideObject(rookWhite2)) rookWhite2.y = -10000000000000000
		if(obj.collideObject(knightWhite)) knightWhite.y = -10000000000000000
		if(obj.collideObject(knightWhite2)) knightWhite2.y = -10000000000000000
		if(obj.collideObject(bishopWhite)) bishopWhite.y = -10000000000000000
		if(obj.collideObject(bishopWhite2)) bishopWhite2.y = -10000000000000000
		if(obj.collideObject(kingWhite)) kingWhite.y = -10000000000000000
		if(obj.collideObject(queenWhite)) queenWhite.y = -10000000000000000
		if(obj.collideObject(pawnWhite)) pawnWhite.y = -10000000000000000
		if(obj.collideObject(pawnWhite2)) pawnWhite2.y = -10000000000000000
		if(obj.collideObject(pawnWhite3)) pawnWhite3.y = -10000000000000000
		if(obj.collideObject(pawnWhite4)) pawnWhite4.y = -10000000000000000
		if(obj.collideObject(pawnWhite5)) pawnWhite5.y = -10000000000000000
		if(obj.collideObject(pawnWhite6)) pawnWhite6.y = -10000000000000000
		if(obj.collideObject(pawnWhite7)) pawnWhite7.y = -10000000000000000
		if(obj.collideObject(pawnWhite8)) pawnWhite8.y = -10000000000000000
		
		}
		
		function checkCollideWhite(obj){
		if(obj.collideObject(rook)) rook.y = -10000000000000000
		if(obj.collideObject(rook2)) rook2.y = -10000000000000000
		if(obj.collideObject(knight)) knight.y = -10000000000000000
		if(obj.collideObject(knight2)) knight2.y = -10000000000000000
		if(obj.collideObject(bishop)) bishop.y = -10000000000000000
		if(obj.collideObject(bishop2)) bishop2.y = -10000000000000000
		if(obj.collideObject(queen)) queen.y = -10000000000000000
		if(obj.collideObject(king)) king.y = -10000000000000000
		if(obj.collideObject(pawn)) pawn.y = -10000000000000000
		if(obj.collideObject(pawn2)) pawn2.y = -10000000000000000
		if(obj.collideObject(pawn3)) pawn3.y = -10000000000000000
		if(obj.collideObject(pawn4)) pawn4.y = -10000000000000000
		if(obj.collideObject(pawn5)) pawn5.y = -10000000000000000
		if(obj.collideObject(pawn6)) pawn6.y = -10000000000000000
		if(obj.collideObject(pawn7)) pawn7.y = -10000000000000000
		if(obj.collideObject(pawn8)) pawn8.y = -10000000000000000
		
		
	}
	

		
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	

	
	
	
	
	
	
	Player.x = 0;
	Player.y = 0;
	Player.speedx = 15;
	Player.speedy = 15;
	Player2.x = 200;
	Player2.y = 300;
	Player2.speedx = 10;
	Player2.speedy = 10;
	Player3.x = 200
	Player3.y = 200
	Player3.scale = 0.5
	Player3.speedx = 5;
	Player3.speedy = 5;
	Player2.scale = 0.7
	
	pawn.x = 210;
	pawn.y = 340;
	pawn.speedx = 15;
	pawn.speedy = 15;
	
	pawn2.x = 210;
	pawn2.y = 315;
	pawn2.speedx = 15;
	pawn2.speedy = 15;
	
	pawn3.x = 210;
	pawn3.y = 280;
	pawn3.speedx = 15;
	pawn3.speedy = 15;
	
	pawn4.x = 210;
	pawn4.y = 245;
	pawn4.speedx = 15;
	pawn4.speedy = 15;

	pawn5.x = 210;
	pawn5.y = 210;
	pawn5.speedx = 15;
	pawn5.speedy = 15;
	
	pawn6.x = 210;
	pawn6.y = 175;
	pawn6.speedx = 15;
	pawn6.speedy = 15;
	
	pawn7.x = 210;
	pawn7.y = 140;
	pawn7.speedx = 15;
	pawn7.speedy = 15;
	
	pawn8.x = 210;
	pawn8.y = 105;
	pawn8.speedx = 15;
	pawn8.speedy = 15;
	
	rook.x = 155;
	rook.y = 100;
	rook.speedx = 15;
	rook.speedy = 15;
	
	rook2.x = 155;
	rook2.y = 333;
	rook2.speedx = 15;
	rook2.speedy = 15;
	
	knight.x = 165;
	knight.y = 145;
	knight.speedx = 15;
	knight.speedy = 15;
	
	knight2.x = 165;
	knight2.y = 318;
	knight2.speedx = 15;
	knight2.speedy = 15;
	
	bishop.x = 165;
	bishop.y = 180;
	bishop.speedx = 15;
	bishop.speedy = 15;
	
	bishop2.x = 165;
	bishop2.y = 280;
	bishop2.speedx = 15;
	bishop2.speedy = 15;
	
	queen.x = 165;
	queen.y = 215;
	queen.speedx = 15;
	queen.speedy = 15;
	
	king.x = 165;
	king.y = 245;
	king.speedx = 15;
	king.speedy = 15;
	
	
	
	
	
	
	pawnWhite.x = 440;
	pawnWhite.y = 340;
	pawnWhite.speedx = 15;
	pawnWhite.speedy = 15;
	
	pawnWhite2.x = 440;
	pawnWhite2.y = 315;
	pawnWhite2.speedx = 15;
	pawnWhite2.speedy = 15;
	
	pawnWhite3.x = 440;
	pawnWhite3.y = 280;
	pawnWhite3.speedx = 15;
	pawnWhite3.speedy = 15;
	
	pawnWhite4.x = 435;
	pawnWhite4.y = 245;
	pawnWhite4.speedx = 15;
	pawnWhite4.speedy = 15;

	pawnWhite5.x = 435;
	pawnWhite5.y = 210;
	pawnWhite5.speedx = 15;
	pawnWhite5.speedy = 15;
	
	pawnWhite6.x = 435;
	pawnWhite6.y = 175;
	pawnWhite6.speedx = 15;
	pawnWhite6.speedy = 15;
	
	pawnWhite7.x = 435;
	pawnWhite7.y = 140;
	pawnWhite7.speedx = 15;
	pawnWhite7.speedy = 15;
	
	pawnWhite8.x = 435;
	pawnWhite8.y = 105;
	pawnWhite8.speedx = 15;
	pawnWhite8.speedy = 15;
	
	rookWhite.x = 465;
	rookWhite.y = 100;
	rookWhite.speedx = 15;
	rookWhite.speedy = 15;
	
	rookWhite2.x = 465;
	rookWhite2.y = 333;
	rookWhite2.speedx = 15;
	rookWhite2.speedy = 15;
	
	knightWhite.x = 465;
	knightWhite.y = 145;
	knightWhite.speedx = 15;
	knightWhite.speedy = 15;
	
	knightWhite2.x = 465;
	knightWhite2.y = 318;
	knightWhite2.speedx = 15;
	knightWhite2.speedy = 15;
	
	bishopWhite.x = 465;
	bishopWhite.y = 180;
	bishopWhite.speedx = 15;
	bishopWhite.speedy = 15;
	
	bishopWhite2.x = 465;
	bishopWhite2.y = 280;
	bishopWhite2.speedx = 15;
	bishopWhite2.speedy = 15;
	
	queenWhite.x = 465;
	queenWhite.y = 215;
	queenWhite.speedx = 15;
	queenWhite.speedy = 15;
	
	kingWhite.x = 465;
	kingWhite.y = 245;
	kingWhite.speedx = 15;
	kingWhite.speedy = 15;
	
	
	
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		
		
			ctx.fillStyle = 'blue'
			ctx.fillText("Loaded",100,100);
			
			
			ctx.drawImage(backPic, 0,0)
			
			playButton.draw()
			
			
		
		
		
		
		
		
		
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
	
			
			
			
			
			
			
			ctx.drawImage(Background2, 0, 0)
			ctx.drawImage(Board, 120, 100)
			ctx.drawImage(player1, 50, 50)
			ctx.drawImage(player2, 490, 50)
			pawn.draw()
			pawn2.draw()
			pawn3.draw()
			pawn4.draw()
			pawn5.draw()
			pawn6.draw()
			pawn7.draw()
			pawn8.draw()
			rook.draw()
			rook2.draw()
			knight.draw()
			knight2.draw()
			bishop.draw()
			bishop2.draw()
			queen.draw()
			king.draw()
			
			
			
			pawnWhite.draw()
			pawnWhite2.draw()
			pawnWhite3.draw()
			pawnWhite4.draw()
			pawnWhite5.draw()
			pawnWhite6.draw()
			pawnWhite7.draw()
			pawnWhite8.draw()
			rookWhite.draw()
			rookWhite2.draw()
			knightWhite.draw()
			knightWhite2.draw()
			bishopWhite.draw()
			bishopWhite2.draw()
			queenWhite.draw()
			kingWhite.draw()
			
			
			button.draw()
			moveButton.draw()
	
		if(rook.x > 450 && rook.x < 800){
		rook.x = 145 + 9
		}
		
		if(rook2.x > 450 && rook2.x < 800){
		rook2.x = 145 + 339
		}
		
		if(knight.x > 450 && knight.x < 800){
		knight.x = 145 + 339
		}
		
		if(knight2.x > 450 && knight2.x < 800){
		knight2.x = 145 + 339
		}
		
		if(bishop.x > 450 && bishop.x < 800){
		bishop.x = 145 + 339
		}
		
		if(bishop2.x > 450 && bishop2.x < 800){
		bishop2.x = 145 + 339
		}
		
		if(queen.x > 450 && queen.x < 800){
		queen.x = 145 + 339
		}
		
		if(king.x > 450 && king.x < 800){
		king.x = 145 + 339
		}
		
		if(pawn.x > 450 && pawn.x < 800){
		pawn.x = 145 + 339
		}
		
		if(pawn2.x > 450 && pawn2.x < 800){
		pawn2.x = 145 + 339
		}
		
		if(pawn3.x > 450 && pawn3.x < 800){
		pawn3.x = 145 + 339
		}
		
		if(pawn4.x > 450 && pawn4.x < 800){
		pawn4.x = 145 + 339
		}
		
		if(pawn5.x > 450 && pawn5.x < 800){
		pawn5.x = 145 + 339
		}
		
		if(pawn6.x > 450 && pawn6.x < 800){
		pawn6.x = 145 + 339
		}
		
		if(pawn7.x > 450 && pawn7.x < 800){
		pawn7.x = 145 + 339
		}
		
		if(pawn8.x > 450 && pawn8.x < 800){
		pawn8.x = 145 + 339
		}
		
		
		
		
		if(rook.y < 100 && rook.y > -800){
		rook.y = 101
		}
		
		if(rook2.y < 100 && rook2.y > -800){
		rook2.y = 101
		}
		
		if(knight.y < 100 && knight.y > -800){
		knight.y = 101
		}
		
		if(knight2.y < 100 && knight2.y > -800){
		knight2.y = 101
		}
		
		if(bishop.y < 100 && bishop.y > -800){
		bishop.y = 101
		}
		
		if(bishop2.y < 100 && bishop2.y > -800){
		bishop2.y = 101
		}
		
		if(queen.y < 100 && queen.y > -800){
		queen.y = 101
		}
		
		if(king.y < 100 && king.y > -800){
		king.y = 101
		}
		
		if(pawn.y < 100 && pawn.y > -800){
		pawn.y = 101
		}
		
		if(pawn2.y < 100 && pawn2.y > -800){
		pawn2.y = 101
		}
		
		if(pawn3.y < 100 && pawn3.y > -800){
		pawn3.y = 101
		}
		
		if(pawn4.y < 100 && pawn4.y > -800){
		pawnWhite4.y = 101
		}
		
		if(pawn5.y < 100 && pawn5.y > -800){
		pawn5.y = 101
		}
		
		if(pawn6.y < 100 && pawn6.y > -800){
		pawn6.y = 101
		}
		
		if(pawn7.y < 100 && pawn7.y > -800){
		pawn7.y = 101
		}
		
		if(pawn8.y < 100 && pawn8.y > -800){
		pawn8.y = 101
		}
		
		
		
		
		if(rook.y > 333 && rook.y < 800){
		rook.y = 332
		}
		
		if(rook2.y > 333 && rook2.y < 800){
		rook2.y = 332
		}
		
		if(knight.y > 333 && knight.y < 800){
		knight.y = 332
		}
		
		if(knight2.y > 333 && knight2.y < 800){
		knight2.y = 332
		}
		
		if(bishop.y > 333 && bishop.y < 800){
		bishop.y = 332
		}
		
		if(bishop2.y > 333 && bishop2.y < 800){
		bishop2.y = 332
		}
		
		if(queen.y > 333 && queen.y < 800){
		queen.y = 332
		}
		
		if(king.y > 333 && king.y < 800){
		king.y = 332
		}
		
		if(pawn.y > 333 && pawn.y < 800){
		pawn.y = 332
		}
		
		if(pawn2.y > 333 && pawn2.y < 800){
		pawn2.y = 332
		}
		
		if(pawn3.y > 333 && pawn3.y < 800){
		pawn3.y = 332
		}
		
		if(pawn4.y > 333 && pawn4.y < 800){
		pawn4.y = 332
		}
		
		if(pawn5.y > 333 && pawn5.y < 800){
		pawn5.y = 332
		}
		
		if(pawn6.y > 333 && pawn6.y < 800){
		pawn6.y = 332
		}
		
		if(pawn7.y > 333 && pawn7.y < 800){
		pawn7.y = 332
		}
		
		if(pawn8.y > 333 && pawn8.y < 800){
		pawn8.y = 332
		}
		
		
		
		
		
		
		
		
		
		
		
		if(rookWhite.x < 155){
		rookWhite.x = 146
		}
		
		if(rookWhite2.x < 145){
		rookWhite2.x = 146
		}
		
		if(knightWhite.x < 145){
		knightWhite.x = 146
		}
		
		if(knightWhite2.x < 145){
		knightWhite2.x = 146
		}
		
		if(bishopWhite.x < 145){
		bishopWhite.x = 146
		}
		
		if(bishopWhite2.x < 145){
		bishopWhite2.x = 146
		}
		
		if(queenWhite.x < 145 && queenWhite.x > -800){
		queenWhite.x = 146
		}
		
		if(kingWhite.x < 145){
		kingWhite.x = 146
		}
		
		if(pawnWhite.x < 145){
		pawnWhite.x = 146
		}
		
		if(pawnWhite2.x < 145){
		pawnWhite2.x = 146
		}
		
		if(pawnWhite3.x < 145){
		pawnWhite3.x = 146
		}
		
		if(pawnWhite4.x < 145){
		pawnWhite4.x = 146
		}
		
		if(pawnWhite5.x < 145){
		pawnWhite5.x = 146
		}
		
		if(pawnWhite6.x < 145){
		pawnWhite6.x = 146
		}
		
		if(pawnWhite7.x < 145){
		pawnWhite7.x = 146
		}
		
		if(pawnWhite8.x < 145){
		pawnWhite8.x = 146
		}
		
		
		
		
		
		
		if(rookWhite.y < 100 && rookWhite.y > -800){
		rookWhite.y = 101
		}
		
		if(rookWhite2.y < 100 && rookWhite2.y > -800){
		rookWhite2.y = 101
		}
		
		if(knightWhite.y < 100 && knightWhite.y > -800){
		knightWhite.y = 101
		}
		
		if(knightWhite2.y < 100 && knightWhite2.y > -800){
		knightWhite2.y = 101
		}
		
		if(bishopWhite.y < 100 && bishopWhite2.y > -800){
		bishopWhite.y = 101
		}
		
		if(bishopWhite2.y < 100 && bishopWhite2.y > -800){
		bishopWhite2.y = 101
		}
		
		if(queenWhite.y < 100 && queenWhite2.y > -800){
		queenWhite.y = 101
		}
		
		if(kingWhite.y < 100 && kingWhite.y > -800){
		kingWhite.y = 101
		}
		
		if(pawnWhite.y < 100 && pawnWhite.y > -800){
		pawnWhite.y = 101
		}
		
		if(pawnWhite2.y < 100 && pawnWhite2.y > -800){
		pawnWhite2.y = 101
		}
		
		if(pawnWhite3.y < 100 && pawnWhite3.y > -800){
		pawnWhite3.y = 101
		}
		
		if(pawnWhite4.y < 100 && pawnWhite4.y > -800){
		pawnWhite4.y = 101
		}
		
		if(pawnWhite5.y < 100 && pawnWhite5.y > -800){
		pawnWhite5.y = 101
		}
		
		if(pawnWhite6.y < 100 && pawnWhite6.y > -800){
		pawnWhite6.y = 101
		}
		
		if(pawnWhite7.y < 100 && pawnWhite7.y > -800){
		pawnWhite7.y = 101
		}
		
		if(pawnWhite8.y < 100 && pawnWhite8.y > -800){
		pawnWhite8.y = 101
		}
		
		
		
			
			
		if(rookWhite.y > 333 && rookWhite.y < 800){
		rookWhite.y = 332
		}
		
		if(rookWhite2.y > 333 && rookWhite2.y < 800){
		rookWhite2.y = 332
		}
		
		if(knightWhite.y > 333 && knightWhite.y < 800){
		knightWhite.y = 332
		}
		
		if(knightWhite2.y > 333 && knightWhite2.y < 800){
		knightWhite2.y = 332
		}
		
		if(bishopWhite.y > 333 && bishopWhite.y < 800){
		bishopWhite.y = 332
		}
		
		if(bishopWhite2.y > 333 && bishopWhite2.y < 800){
		bishopWhite.y = 332
		}
		
		if(queenWhite.y > 333 && queenWhite.y < 800){
		queenWhite.y = 332
		}
		
		if(kingWhite.y > 333 && kingWhite.y < 800){
		kingWhite.y = 332
		}
		
		if(pawnWhite.y > 333 && pawnWhite.y < 800){
		pawnWhite.y = 332
		}
		
		if(pawnWhite2.y > 333 && pawnWhite2.y < 800){
		pawnWhite2.y = 332
		}
		
		if(pawnWhite3.y > 333 && pawnWhite3.y < 800){
		pawnWhite3.y = 332
		}
		
		if(pawnWhite4.y > 333 && pawnWhite4.y < 800){
		pawnWhite4.y = 332
		}
		
		if(pawnWhite5.y > 333 && pawnWhite5.y < 800){
		pawnWhite5.y = 332
		}
		
		if(pawnWhite6.y > 333 && pawnWhite6.y < 800){
		pawnWhite6.y = 332
		}
		
		if(pawnWhite7.y > 333 && pawnWhite7.y < 800){
		pawnWhite7.y = 332
		}
		
		if(pawnWhite8.y > 333 && pawnWhite8.y < 800){
		pawnWhite8.y = 332
		}
		
		
		}else if(screen == 3){
		//another game screen
		
		}
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		

		
		if(screen == 0){
		
		
		}else if (screen == 1){
		if(playButton.isMouseOver()) playButton.job()
			
		
		
		
		
		
		
		}else if (screen == 2){
		if(button.isMouseOver()) button.job()
		if(moveButton.isMouseOver()) moveButton.job()
		
		
		if(pawn.collidePoint(mx,my)){
		pawn.x += 45
		checkCollide(pawn)
		}
		if(pawn2.collidePoint(mx,my)){
		pawn2.x += 45
		checkCollide(pawn2)
		}
		if(pawn3.collidePoint(mx,my)){
		pawn3.x += 45
		checkCollide(pawn3)
		}
		if(pawn4.collidePoint(mx,my)){
		pawn4.x += 45
		checkCollide(pawn4)
		}
		if(pawn5.collidePoint(mx,my)){
		pawn5.x += 45
		checkCollide(pawn5)
		}
		if(pawn6.collidePoint(mx,my)){
		pawn6.x += 45
		checkCollide(pawn6)
		}
		if(pawn7.collidePoint(mx,my)){
		pawn7.x += 45
		checkCollide(pawn7)
		}
		if(pawn8.collidePoint(mx,my)){
		pawn8.x += 45
		checkCollide(pawn8)
		}
		if(rook.collidePoint(mx,my)){
		rook.x += 35
		checkCollide(rook)
		}
		if(rook2.collidePoint(mx,my)){
		rook2.x += 35
		checkCollide(rook2)
		}	
		if(knight.collidePoint(mx,my)) {
			knight.x += 95 
			knight.y += 35
		checkCollide(knight)
		}
		if(knight2.collidePoint(mx,my)) {
			knight2.x += 95 
			knight2.y += -35
		checkCollide(knight2)
		}if(bishop.collidePoint(mx,my)) {
			bishop.x += 55
			bishop.y += 35
		checkCollide(bishop)
		}if(bishop2.collidePoint(mx,my)) {
			bishop2.x += 55
			bishop2.y += -35
		checkCollide(bishop2)
		}if(queen.collidePoint(mx,my)) {
			queen.x += 55
			queen.y += 35
		checkCollide(queen)
		}if(king.collidePoint(mx,my)){
		king.x += 35
		checkCollide(king)
		}
		} 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
	
		if(key==37){//left
			Player3.x -= Player3.speedx
			if(Player3.x < 0 - Player3.width) Player3.x = 640
		
		}else if (key == 38){//up
			Player3.y -= Player3.speedx
			if(Player3.y < 0 - Player3.height) Player3.y = 480
		
		}else if (key == 39){//right
			Player3.y -= Player3.speedx
			if(Player3.x < 0 - Player3.width) Player3.width
		
		}else if (key == 40){//down
			Player3.y += Player3.speedx
			if(Player3.y > 480) Player3.y = 0 - Player3.width
		}
	}, false); //End the event listener

	



})

