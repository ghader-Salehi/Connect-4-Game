package com.mgh.FourInARowGame.ai;

import com.mgh.FourInARowGame.endpointModels.Status;

import java.util.ArrayList;

public class FourInARowAI {

    private static final int MIN = -1000;
    private static final int MAX = 1000;
    private static final int DIFFICULTY = 8;
    private String goodSide;
    private String badSide;
    private AxisNode node;


    public FourInARowAI(String goodSide, String badSide) {
        this.goodSide = goodSide;
        this.badSide = badSide;
    }

    public String getGoodSide() {
        return goodSide;
    }

    private ArrayList<ArrayList<ArrayList<String>>> getPossibilities(ArrayList<ArrayList<String>> preBoard, String value) {
        ArrayList<ArrayList<ArrayList<String>>> boardCopies = new ArrayList<>();
        ArrayList<Integer> trashItems = new ArrayList<>();
        copiesLoop:
        for (int copiesCounter = 0; copiesCounter < preBoard.get(0).size(); copiesCounter++) {
            boardCopies.add(new ArrayList<>());
            for (int i = 0; i < preBoard.size(); i++) { // used to copy preBoard
                boardCopies.get(boardCopies.size() - 1).add(new ArrayList<>());
                for (int j = 0; j < preBoard.get(i).size(); j++)
                    boardCopies.get(boardCopies.size() - 1).get(i).add(preBoard.get(i).get(j));
            }//end for

            for (int i = preBoard.size() - 1; i >= 0; i--) {
                if (preBoard.get(i).get(copiesCounter).equals("")) {
                    boardCopies.get(boardCopies.size() - 1).get(i).set(copiesCounter, value);
                    continue copiesLoop;
                }
                else if (i == 0)
                    boardCopies.remove(boardCopies.size() - 1);
            }//end for
        }//end for => copiesLoop
//        for (int trashItem : trashItems) {
//            System.out.println("** trash item **" + boardCopies.get(trashItem));
//            boardCopies.remove(trashItem);
//        }
        return boardCopies;
    }//end getPossibilities

    public int getScore(ArrayList<ArrayList<String>> board, String good, String bad) {
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board.get(i).size(); j++) {
                // in a row
                if ((i + 3) < board.size() && (board.get(i).get(j).equals(board.get(i + 1).get(j)) && board.get(i).get(j).equals(board.get(i + 2).get(j)) && board.get(i).get(j).equals(board.get(i + 3).get(j)))) {
                    if (board.get(i).get(j).equals(good))
                        return 1;
                    else if (board.get(i).get(j).equals(bad))
                        return -1;
                }
                // in a column
                else if ((j + 3) < board.get(i).size() && (board.get(i).get(j).equals(board.get(i).get(j + 1)) && board.get(i).get(j).equals(board.get(i).get(j + 2)) && board.get(i).get(j).equals(board.get(i).get(j + 3)))) {
                    if (board.get(i).get(j).equals(good))
                        return 1;
                    else if (board.get(i).get(j).equals(bad))
                        return -1;
                }
                // oblique
                else if ((i + 3) < board.size() && (j + 3) < board.get(i).size() && (board.get(i).get(j).equals(board.get(i + 1).get(j + 1)) && board.get(i).get(j).equals(board.get(i + 2).get(j + 2)) && board.get(i).get(j).equals(board.get(i + 3).get(j + 3)))) {
                    if (board.get(i).get(j).equals(good))
                        return 1;
                    else if (board.get(i).get(j).equals(bad))
                        return -1;
                }
            }//end for
        }//end for
        return 0;
    }//end getScore

    private int minimax(ArrayList<ArrayList<String>> board, int depth, boolean isMaximizerPlayer, int alpha, int beta) {
        int result;
        if (depth == DIFFICULTY || getScore(board, goodSide, badSide) != 0)
            return getScore(board, goodSide, badSide);

        if (isMaximizerPlayer) {
            int best = MIN;

            // Recur for all other children
            for (ArrayList<ArrayList<String>> nextBoard : getPossibilities(board, goodSide)) {
                int val = minimax(nextBoard, depth + 1, false, alpha, beta);
                if(best < val && depth == 0) {
                    node = compareBoardsAndReturnNode(board, nextBoard);
                }
                best = Math.max(best, val);
                alpha = Math.max(alpha, best);

                // Alpha Beta Pruning
                if (beta <= alpha)
                    break;
            }
            result = best;
        }
        else {
            int best = MAX;

            for (ArrayList<ArrayList<String>> nextBoard : getPossibilities(board, badSide)) {
                int val = minimax(nextBoard, depth + 1, true, alpha, beta);
                best = Math.min(best, val);
                beta = Math.min(beta, best);

                // Alpha Beta Pruning
                if (beta <= alpha)
                    break;
            }
            result = best;
        }
        return result;
    }//end minimax

    private AxisNode compareBoardsAndReturnNode(ArrayList<ArrayList<String>> first, ArrayList<ArrayList<String>> second) {
        for(int i=0;i<first.size();i++) {
            for(int j=0;j<first.get(i).size();j++) {
                if(!first.get(i).get(j).equals(second.get(i).get(j)))
                    return new AxisNode(i, j);
            }
        }
        return null;
    }//end compareBoardsAndReturnNode

    public AxisNode move(ArrayList<ArrayList<String>> board) {
        minimax(board, 0, true, -1000, 1000);
        return node;
    }//end move

    public String getStatus(ArrayList<ArrayList<String>> board) {
        int redWon = getScore(board, "red", "blue");
        if(redWon == 1)
            return "red";
        else if(redWon == -1)
            return "blue";
        else
            return "";
    }//end getStatus

    // useful methods
    private void printBoardPossibilities(ArrayList<ArrayList<ArrayList<String>>> items) {
        for (ArrayList<ArrayList<String>> boardItem : items) {
            for (ArrayList<String> boardRow : boardItem) {
                System.out.println(boardRow);
            }
            System.out.println("\n\n\n");
        }
    }

    public void printBoard(ArrayList<ArrayList<String>> board) {
        System.out.println("Printed Board");
        for(ArrayList<String> row : board) {
            for(String cell : row) {
                System.out.print((cell.equals("") ? "   " : cell) + ",");
            }
            System.out.println();
        }
    }

}//end class
