package com.mgh.FourInARowGame.endpointModels;

public class NextMove {
    int row;
    int column;
    String status;

    public NextMove() {
    }

    public NextMove(int row, int column, String status) {
        this.row = row;
        this.column = column;
        this.status = status;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getColumn() {
        return column;
    }

    public void setColumn(int column) {
        this.column = column;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
