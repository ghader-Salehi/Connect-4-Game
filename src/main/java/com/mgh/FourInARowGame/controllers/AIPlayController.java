package com.mgh.FourInARowGame.controllers;

import com.mgh.FourInARowGame.ai.AxisNode;
import com.mgh.FourInARowGame.ai.FourInARowAI;
import com.mgh.FourInARowGame.endpointModels.GameBoard;
import com.mgh.FourInARowGame.endpointModels.NewGame;
import com.mgh.FourInARowGame.endpointModels.NextMove;
import com.mgh.FourInARowGame.endpointModels.Status;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class AIPlayController {
    FourInARowAI fourInARowAI;

    @PostMapping("/new-game")
    private boolean createNewGame(@RequestBody NewGame newGame) {
        fourInARowAI = new FourInARowAI(newGame.getComputer(), newGame.getPerson());
        return true;
    }

    @PostMapping("/test")
    private NextMove playNextMove(@RequestBody String boardStringify) {
        if(fourInARowAI == null) return null;
        GameBoard gameBoard = new GameBoard(boardStringify);
        AxisNode nextNode = fourInARowAI.move(gameBoard.getBoard());
        gameBoard.setValue(nextNode.getX(), nextNode.getY(), fourInARowAI.getGoodSide());
        String status = fourInARowAI.getStatus(gameBoard.getBoard());
        return new NextMove(nextNode.getX(), nextNode.getY(), status);
    }//end playNextMove

    @PostMapping("/status")
    private Status boardStatus(@RequestBody String boardStringify) {
        if(fourInARowAI == null) return null;
        GameBoard gameBoard = new GameBoard(boardStringify);
        return new Status(fourInARowAI.getStatus(gameBoard.getBoard()));
    }//end boardStatus
}//end class
