package com.mgh.FourInARowGame.endpointModels;

public class NewGame {
    String person;
    String computer;

    public NewGame() {
    }

    public NewGame(String person, String computer) {
        this.person = person;
        this.computer = computer;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public String getComputer() {
        return computer;
    }

    public void setComputer(String computer) {
        this.computer = computer;
    }
}
