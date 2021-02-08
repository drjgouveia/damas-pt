var quest = new Array();
quest[0] = new Array("Em que ano nasceu Alexandre O'Neill?", "1918", "1924", "459", "1924");
quest[1] = new Array("Qual foi nome do primeiro livro publicado por Alexandre O'Neill?", "\"No Reino da Dinamarca\"", "\"Tempo de Fantasmas\"", "\"Feira Cabisbaixa\"", "\"No Reino da Dinamarca\"");
quest[2] = new Array("Qual era o movimento literário de Alexandre O'Neill?", "Surrealismo", "Romantismo", "Realismo", "Surrealismo");
quest[3] = new Array("Quem era o pai de Alexandre O'Neill?", "Marcelo Rebelo de Sousa", "Pedro Moura Coutinho O'Neill", "José António Pereira de Eça O'Neill", "Francisco Costa", "José António Pereira de Eça O'Neill");
quest[4] = new Array("Qual foi a primeira mulher de Alexandre O'Neill?", "Ana Raposo", "Teresa Patrício Gouveia", "Cristina Ferreira", "Teresa Pedroso Gouveia", "Teresa Patrício Gouveia");
quest[5] = new Array("Qual foi era o principal género literário de Alexandre O'Neill?", "Lírico", "Dramático", "Épico-narrativo", "Lírico");
quest[6] = new Array("Quanta vezes foi Alexandre O'Neill foi preso pela PIDE?", "Nunca", "1", "2 ou mais", "2 ou mais");
quest[7] = new Array("Alexandre O'Neill era descendente de…", "Africanos", "Portugueses", "Irlandeses" , "Irlandeses");
quest[8] = new Array("Quando foi a data da sua morte?", "31 de fevereiro de 1800", "21 de agosto de 1986" , "24 dezembro de 2003", "21 de agosto de 1986");
quest[9] = new Array("Onde fica localizada a estátua em homenagem de Alexandre O'Neill?", "Lousã", "Lisboa" , "Aveiro", "Porto", "Lisboa");
quest[10] = new Array("Quantos prémios recebeu?", "1", "2", "3", "4", "1");
quest[11] = new Array("Em que prisão ficou Alexandre O'Neill?", "Estabelecimento Prisional de Caxias, Lisboa" , "Estabelecimento Prisional de Coimbra", "Estabelecimento Prisional De Leiria", "Estabelecimento Prisional de Caxias, Lisboa");
quest[12] = new Array("Em que ano recebeu o Prémio da Crítica da Associação Portuguesa de Críticos Literários?", "1988", "1976", "1981" , "1981");
quest[13] = new Array("Com que jornal colaborou Alexandre O'Neill?", "\"Diário de Notícias\"", "\"Correio da Manhã\"", "\"Diário de Lisboa\"", "\"Diário de Lisboa\"");
quest[14] = new Array("Quantas imagens tinha a obra \"Ampola Miraculosa\"?", "15 imagens" , "13 imagens" , "2 imagens", "17 imagens" , "15 imagens");
quest[15] = new Array("Quantos irmãos tinha O´Neill?", "2", "0", "1" , "1");
quest[16] = new Array("Qual o nome da irmã mais velha?", "Maria Amélia" , "Maria Antonieta", "Maria José", "Maria João", "Maria Amélia");
quest[17] = new Array("Onde é que se situa a biblioteca de seu nome?", "Coimbra", "Distrito de Algarve", "Constância", "Constância");
quest[18] = new Array("Qual destes poemas foi escrito por Alexandre?", "\"Os Lusíadas\"", "\"O Beijo\"", "\"A Mensagem\"", "\"Amiga\"", "\"O Beijo\"");
quest[19] = new Array("Qual o nome completo do autor em questão?", "Alexandre António Vasconcelos O’Neil", "Alexandre Manuel Vahia de Castro O'Neill de Bulhões", "Sílvio Alexandre Gomes Vahia Ribeiro O’Neil", "Alexandre Manuel Vahia de Castro O'Neill de Bulhões");
quest[20] = new Array("Qual destes poemas foram escritos por O´Neill?", "\"Amigo\"", "\"Romeu e Julieta\"", "\"A Fada Oriana\"", "\"Amigo\"");
quest[21] = new Array("Que canção escreveu Alexandre O’Neill?", "\"Coração não tem idade\"", "\"A Gaivota\"", "\"Anda Comigo\"", "\"A Gaivota\"");
quest[22] = new Array("Que tipo textual eram as obras de O’Neill?", "Poemas", "Narrações", "Documentários", "Poemas");
quest[23] = new Array("A poesia de Alexandre O'Neill coincide com o programa surrealista a que nível/eis?", "Libertação total da poesia", "Libertação total da musica e libertação total da poesia", "Libertação total do homem e libertação total da arte", "Libertação total do homem e libertação total da arte");
quest[24] = new Array("Alexandre era fundador de que grupo?", "Grupo Surrealista de Lisboa", "Grupo de Teatro Amador" , "Grupo dos Trabalhadores Explorados", "Grupo Sonae", "Grupo Surrealista de Lisboa");
quest[25] = new Array("Alexandre O'Neill exerceu a atividade profissional…", "…de jornalista", "…de técnico publicitário", "…aviador", "…de técnico publicitário");
quest[26] = new Array("É da sua autoria o lema publicitário…", "\"Há mar e mar, há ir e voltar\"", "\"Amor é fogo que arde sem se ver\"", "\"Somos todos filhos de Deus\"", "\"Há mar e mar, há ir e voltar\"");
quest[27] = new Array("Quem canta o seu famoso poema \"A Gaivota\"?", "Maria Jesus", "Amália Rodrigues", "Celeste Rodrigues", "Carlos do Carmo", "Amália Rodrigues");
quest[28] = new Array("Com que idade faleceu?", "30 anos", "61 anos", "54 anos", "61 anos");


np = 0
var errada = false; 

window.onload = function () {
  //The initial setup
  
  var gameBoard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
  ];
  //arrays to store the instances
  var pieces = [];
  var tiles = [];

  //distance formula
  var dist = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  }

  //Piece object - there are 24 instances of them in a checkers game
  function Piece(element, position) {
    // when jump exist, regular move is not allowed
    // since there is no jump at round 1, all pieces are allowed to move initially
    this.allowedtomove = true;
    //linked DOM element
    this.element = element;
    //positions on gameBoard array in format row, column
    this.position = position;
    //which player's piece i it
    this.player = '';
    //figure out player by piece id
    if (this.element.attr("id") < 12)
      this.player = 1;
    else
      this.player = 2;
    //makes object a king
    this.king = false;
    this.makeKing = function () {
      this.element.css("backgroundImage", "url('img/king" + this.player + ".png')");
      this.king = true;
    }
    //moves the piece
    this.move = function (tile) {
      this.element.removeClass('selected');
      if (!Board.isValidPlacetoMove(tile.position[0], tile.position[1])) return false;
      //make sure piece doesn't go backwards if it's not a king
      if (this.player == 1 && this.king == false) {
        if (tile.position[0] < this.position[0]) return false;
      } else if (this.player == 2 && this.king == false) {
        if (tile.position[0] > this.position[0]) return false;
      }
      //remove the mark from Board.board and put it in the new spot
      Board.board[this.position[0]][this.position[1]] = 0;
      Board.board[tile.position[0]][tile.position[1]] = this.player;
      this.position = [tile.position[0], tile.position[1]];
      //change the css using board's dictionary
      this.element.css('top', Board.dictionary[this.position[0]]);
      this.element.css('left', Board.dictionary[this.position[1]]);
      //if piece reaches the end of the row on opposite side crown it a king (can move all directions)
      if (!this.king && (this.position[0] == 0 || this.position[0] == 7))
        this.makeKing();
      return true;
    };

    //tests if piece can jump anywhere
    this.canJumpAny = function () {
      return (this.canOpponentJump([this.position[0] + 2, this.position[1] + 2]) ||
        this.canOpponentJump([this.position[0] + 2, this.position[1] - 2]) ||
        this.canOpponentJump([this.position[0] - 2, this.position[1] + 2]) ||
        this.canOpponentJump([this.position[0] - 2, this.position[1] - 2]))
    };

    //tests if an opponent jump can be made to a specific place
    this.canOpponentJump = function (newPosition) {
      //find what the displacement is
      var dx = newPosition[1] - this.position[1];
      var dy = newPosition[0] - this.position[0];
      //make sure object doesn't go backwards if not a king
      if (this.player == 1 && this.king == false) {
        if (newPosition[0] < this.position[0]) return false;
      } else if (this.player == 2 && this.king == false) {
        if (newPosition[0] > this.position[0]) return false;
      }
      //must be in bounds
      if (newPosition[0] > 7 || newPosition[1] > 7 || newPosition[0] < 0 || newPosition[1] < 0) return false;
      //middle tile where the piece to be conquered sits
      var tileToCheckx = this.position[1] + dx / 2;
      var tileToChecky = this.position[0] + dy / 2;
      if (tileToCheckx > 7 || tileToChecky > 7 || tileToCheckx < 0 || tileToChecky < 0) return false;
      //if there is a piece there and there is no piece in the space after that
      if (!Board.isValidPlacetoMove(tileToChecky, tileToCheckx) && Board.isValidPlacetoMove(newPosition[0], newPosition[1])) {
        //find which object instance is sitting there
        for (let pieceIndex in pieces) {
          if (pieces[pieceIndex].position[0] == tileToChecky && pieces[pieceIndex].position[1] == tileToCheckx) {
            if (this.player != pieces[pieceIndex].player) {
              //return the piece sitting there
              return pieces[pieceIndex];
            }
          }
        }
      }
      return false;
    };

    this.opponentJump = function (tile) {
      var pieceToRemove = this.canOpponentJump(tile.position);
      //if there is a piece to be removed, remove it
      if (pieceToRemove) {
        pieceToRemove.remove();
        return true;
      }
      return false;
    };

    this.remove = function () {
      //remove it and delete it from the gameboard
      this.element.css("display", "none");
      if (this.player == 1) {
        $('#player2').append("<div class='capturedPiece'></div>");
        Board.score.player2 += 1;
      }
      if (this.player == 2) {
        $('#player1').append("<div class='capturedPiece'></div>");
        Board.score.player1 += 1;
      }
      Board.board[this.position[0]][this.position[1]] = 0;
      //reset position so it doesn't get picked up by the for loop in the canOpponentJump method
      this.position = [];
      var playerWon = Board.checkifAnybodyWon();
      if (playerWon) {
        $('#winner').html("<h2>Player " + playerWon + " has won!</h2>");
      }
    }
  }

  function Tile(element, position) {
    //linked DOM element
    this.element = element;
    //position in gameboard
    this.position = position;
    //if tile is in range from the piece
    this.inRange = function (piece) {
      for (let k of pieces)
        if (k.position[0] == this.position[0] && k.position[1] == this.position[1]) return 'wrong';
      if (!piece.king && piece.player == 1 && this.position[0] < piece.position[0]) return 'wrong';
      if (!piece.king && piece.player == 2 && this.position[0] > piece.position[0]) return 'wrong';
      if (dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == Math.sqrt(2)) {
        //regular move
        return 'regular';
      } else if (dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == 2 * Math.sqrt(2)) {
        //jump move
        return 'jump';
      }
    };
  }

  //Board object - controls logistics of game
  var Board = {
    board: gameBoard,
    score: {
      player1: 0,
      player2: 0
    },
    errada: false,
    playerTurn: 1,
    jumpexist: false,
    continuousjump: false,
    tilesElement: $('div.tiles'),
    //dictionary to convert position in Board.board to the viewport units
    dictionary: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    //initialize the 8x8 board
    initalize: function () {
      var countPieces = 0;
      var countTiles = 0;
      for (let row in this.board) { //row is the index
        for (let column in this.board[row]) { //column is the index
          //whole set of if statements control where the tiles and pieces should be placed on the board
          if (row % 2 == 1) {
            if (column % 2 == 0) {
              countTiles = this.tileRender(row, column, countTiles)
            }
          } else {
            if (column % 2 == 1) {
              countTiles = this.tileRender(row, column, countTiles)
            }
          }
          if (this.board[row][column] == 1) {
            countPieces = this.playerPiecesRender(1, row, column, countPieces)
          } else if (this.board[row][column] == 2) {
            countPieces = this.playerPiecesRender(2, row, column, countPieces)
          }
        }
      }
    },
    tileRender: function (row, column, countTiles) {
      this.tilesElement.append("<div class='tile' id='tile" + countTiles + "' style='top:" + this.dictionary[row] + ";left:" + this.dictionary[column] + ";'></div>");
      tiles[countTiles] = new Tile($("#tile" + countTiles), [parseInt(row), parseInt(column)]);
      return countTiles + 1
    },

    playerPiecesRender: function (playerNumber, row, column, countPieces) {
      $(`.player${playerNumber}pieces`).append("<div class='piece' id='" + countPieces + "' style='top:" + this.dictionary[row] + ";left:" + this.dictionary[column] + ";'></div>");
      pieces[countPieces] = new Piece($("#" + countPieces), [parseInt(row), parseInt(column)]);
      return countPieces + 1;
    },
    //check if the location has an object
    isValidPlacetoMove: function (row, column) {
      // console.log(row); console.log(column); console.log(this.board);
      if (row < 0 || row > 7 || column < 0 || column > 7) return false;
      if (this.board[row][column] == 0) {
        return true;
      }
      return false;
    },

    perguntas: function() {
      if (this.errada == false) {
        Board.changePlayerTurn();
      }

      this.errada = false;
      np = Math.floor(Math.random() * quest.length);
      $('#board').css("visibility", "hidden");
      respostas = quest[np].length - 2
      $("#player").html("Jogador " + this.playerTurn);
      $('#correta').html("");
      $('#errada').html("");
      $('#pergunta').html(quest[np][0]);
      $(".perg").html("");
      for(var i = 0; i < respostas; i++) {
        $(".perg").append("<div><button class=\"btns\" id=\"" + i + "\">" + quest[np][i+1] + "</button></div>")
        $("#" + i).on("click", function(e) { Board.verificarPergunta(e.target.id);});
      }
    },
    
    verificarPergunta: function (elem) {
      x = quest[np];
      ans = x[x.length-1];
      console.log(ans);
      text = document.getElementById(elem).textContent;
      console.log(text);
      if (text == ans) {
        $('#correta').html("CORRETA.");
        $('#pergunta').html("");
        $(".perg").html("");
        $('*').bind("click");
        $('#board').css("visibility", "visible");
        this.errada = false;
        return true;
      } else {
        $('#pergunta').html("");
        $('#errada').html("ERRADA.");
        $(".perg").html("");
        if (this.playerTurn == 1) {
          this.playerTurn = 2;
          $('.turn').css("background", "linear-gradient(to right, transparent 50%, #232621 50%)");
        } else {
          this.playerTurn = 1;
          $('.turn').css("background", "linear-gradient(to right, #232621 50%, transparent 50%)");
        }
        this.check_if_jump_exist();
        this.errada = true;

        $(".perg").append("<div><button class=\"btns\" id=\"1\">Próxima pergunta</button></div>")
        $("#1").on("click", function() { Board.perguntas();});
      }
    },
    //change the active player - also changes div.turn's CSS
    changePlayerTurn: function () {
      if (this.playerTurn == 1) {
        this.playerTurn = 2;
        $('.turn').css("background", "linear-gradient(to right, transparent 50%, #232621 50%)");
      } else {
        this.playerTurn = 1;
        $('.turn').css("background", "linear-gradient(to right, #232621 50%, transparent 50%)");
      }
      this.check_if_jump_exist();
      return;
    },
    checkifAnybodyWon: function () {
      if (this.score.player1 == 12) {
        return 1;
      } else if (this.score.player2 == 12) {
        return 2;
      }
      return false;
    },
    //reset the game
    clear: function () {
      location.reload();
    },
    check_if_jump_exist: function () {
      this.jumpexist = false
      this.continuousjump = false;
      for (let k of pieces) {
        k.allowedtomove = false;
        // if jump exist, only set those "jump" pieces "allowed to move"
        if (k.position.length != 0 && k.player == this.playerTurn && k.canJumpAny()) {
          this.jumpexist = true
          k.allowedtomove = true;
        }
      }
      // if jump doesn't exist, all pieces are allowed to move
      if (!this.jumpexist) {
        for (let k of pieces) k.allowedtomove = true;
      }
    },
    // Possibly helpful for communication with back-end.
    str_board: function () {
      ret = ""
      for (let i in this.board) {
        for (let j in this.board[i]) {
          var found = false
          for (let k of pieces) {
            if (k.position[0] == i && k.position[1] == j) {
              if (k.king) ret += (this.board[i][j] + 2)
              else ret += this.board[i][j]
              found = true
              break
            }
          }
          if (!found) ret += '0'
        }
      }
      return ret
    }
  }

  //initialize the board
  Board.initalize();

  /***
  Events
  ***/

  //select the piece on click if it is the player's turn
  $('.piece').on("click", function () {
    var selected;
    var isPlayersTurn = ($(this).parent().attr("class").split(' ')[0] == "player" + Board.playerTurn + "pieces");
    if (isPlayersTurn) {
      if (!Board.continuousjump && pieces[$(this).attr("id")].allowedtomove) {
        if ($(this).hasClass('selected')) selected = true;
        $('.piece').each(function (index) {
          $('.piece').eq(index).removeClass('selected')
        });
        if (!selected) {
          $(this).addClass('selected');
        }
      } else {
        let exist = "jump exist for other pieces, that piece is not allowed to move"
        let continuous = "continuous jump exist, you have to jump the same piece"
        let message = !Board.continuousjump ? exist : continuous
        console.log(message)
      }
    }
  });

  //reset game when clear button is pressed
  $('#cleargame').on("click", function () {
    Board.clear();
  });

  //move piece when tile is clicked
  $('.tile').on("click", function () {
    //make sure a piece is selected
    if ($('.selected').length != 0) {
      //find the tile object being clicked
      var tileID = $(this).attr("id").replace(/tile/, '');
      var tile = tiles[tileID];
      //find the piece being selected
      var piece = pieces[$('.selected').attr("id")];
      //check if the tile is in range from the object
      var inRange = tile.inRange(piece);
      if (inRange != 'wrong') {
        //if the move needed is jump, then move it but also check if another move can be made (double and triple jumps)
        if (inRange == 'jump') {
          if (piece.opponentJump(tile)) {
            piece.move(tile);
            if (piece.canJumpAny()) {
              // Board.changePlayerTurn(); //change back to original since another turn can be made
              piece.element.addClass('selected');
              // exist continuous jump, you are not allowed to de-select this piece or select other pieces
              Board.continuousjump = true;
            } else {
              Board.perguntas()
            }
          }
          //if it's regular then move it if no jumping is available
        } else if (inRange == 'regular' && !Board.jumpexist) {
          if (!piece.canJumpAny()) {
            piece.move(tile);
            Board.perguntas()
          } else {
            alert("You must jump when possible!");
          }
        }
      }
    }
  });
}
