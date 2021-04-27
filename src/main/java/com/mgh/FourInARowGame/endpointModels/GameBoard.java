package com.mgh.FourInARowGame.endpointModels;

import com.mgh.FourInARowGame.ai.FourInARowAI;

import java.util.ArrayList;

public class GameBoard {
    ArrayList<ArrayList<String>> board;

    public GameBoard(String jsonString) {
        board = new ArrayList<>();
        String innerArrays = jsonString.substring(jsonString.indexOf("[") + 1, jsonString.length());
        innerArrays = innerArrays.replaceAll("\\\\", "");
        while(innerArrays.contains("[")) {
            int startBracket = innerArrays.indexOf("[");
            int endBracket = innerArrays.indexOf("]");
            // ['Hello', 'Ali', 'red'], ['red', 'blu', 'blu'], ['blu', 'red', 'blu'] ]
            String[] currentArrayItems = innerArrays.substring(startBracket + 1, endBracket).split(",");
            board.add(new ArrayList<>());
            for(String item : currentArrayItems)
                board.get(board.size() - 1).add(item.replaceAll("[ \"']", ""));
            innerArrays = innerArrays.substring(endBracket + 1, innerArrays.length());
        }

        for(int i=0;i<board.size();i++)
            for(int j=0;j<board.get(i).size();j++)
                if(board.get(i).get(j).equals("null"))
                    board.get(i).set(j, "");
    }//end GameBoard

    public void setValue(int row, int column, String value) {
        board.get(row).set(column, value);
    }//end setValue

    public ArrayList<ArrayList<String>> getBoard() {
        return board;
    }//end getBoard

    public void setBoard(ArrayList<ArrayList<String>> board) {
        this.board = board;
    }//end setBoard
}//end class
